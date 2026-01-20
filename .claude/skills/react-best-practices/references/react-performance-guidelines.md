# React Performance Guidelines - Complete Reference

## 1. Eliminating Waterfalls (CRITICAL)

### 1.1 Defer await until needed

**Bad:**
```jsx
async function Component() {
  const data = await fetchData(); // Blocks everything
  if (!shouldRender) return null;
  return <div>{data}</div>;
}
```

**Good:**
```jsx
async function Component() {
  const dataPromise = fetchData(); // Start early
  if (!shouldRender) return null;
  const data = await dataPromise; // Await only when needed
  return <div>{data}</div>;
}
```

### 1.2 Use Promise.all for independent operations

**Bad:**
```jsx
const user = await fetchUser(id);
const posts = await fetchPosts(id);
const comments = await fetchComments(id);
// Total time: user + posts + comments
```

**Good:**
```jsx
const [user, posts, comments] = await Promise.all([
  fetchUser(id),
  fetchPosts(id),
  fetchComments(id),
]);
// Total time: max(user, posts, comments)
```

### 1.3 Use Suspense boundaries for streaming

```jsx
function Page() {
  return (
    <div>
      <Header /> {/* Renders immediately */}
      <Suspense fallback={<Skeleton />}>
        <SlowComponent /> {/* Streams when ready */}
      </Suspense>
    </div>
  );
}
```

## 2. Bundle Size Optimization (CRITICAL)

### 2.1 Avoid barrel file imports

**Bad:**
```jsx
import { Button } from '@/components'; // Loads ALL components
```

**Good:**
```jsx
import { Button } from '@/components/Button'; // Loads only Button
```

### 2.2 Use dynamic imports for heavy components

**Bad:**
```jsx
import HeavyChart from './HeavyChart'; // Always in bundle
```

**Good:**
```jsx
import dynamic from 'next/dynamic';

const HeavyChart = dynamic(() => import('./HeavyChart'), {
  loading: () => <ChartSkeleton />,
  ssr: false, // If client-only
});
```

### 2.3 Defer third-party libraries

```jsx
// Load analytics only after hydration
useEffect(() => {
  import('analytics').then((analytics) => {
    analytics.init();
  });
}, []);
```

## 3. Server-Side Performance (HIGH)

### 3.1 Use React.cache() for request deduplication

```jsx
import { cache } from 'react';

const getUser = cache(async (id) => {
  return await db.user.findUnique({ where: { id } });
});

// Multiple calls in same request = single DB query
async function Header() {
  const user = await getUser(userId);
  // ...
}

async function Sidebar() {
  const user = await getUser(userId); // Deduplicated!
  // ...
}
```

### 3.2 Minimize serialization at RSC boundaries

**Bad:**
```jsx
// Server Component
async function Page() {
  const allData = await fetchLargeDataset();
  return <ClientComponent data={allData} />; // Serializes everything
}
```

**Good:**
```jsx
async function Page() {
  const allData = await fetchLargeDataset();
  const summary = computeSummary(allData); // Reduce on server
  return <ClientComponent summary={summary} />;
}
```

## 4. Client-Side Data Fetching (MEDIUM-HIGH)

### 4.1 Use SWR for automatic deduplication

```jsx
import useSWR from 'swr';

function Profile() {
  const { data, error, isLoading } = useSWR('/api/user', fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 2000,
  });
  // ...
}
```

### 4.2 Lazy state initialization

**Bad:**
```jsx
const [state, setState] = useState(expensiveComputation()); // Runs every render
```

**Good:**
```jsx
const [state, setState] = useState(() => expensiveComputation()); // Runs once
```

### 4.3 Use startTransition for non-urgent updates

```jsx
import { startTransition } from 'react';

function SearchBox() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value); // Urgent: update input
    startTransition(() => {
      setResults(search(e.target.value)); // Non-urgent: can be interrupted
    });
  };
}
```

## 5. Re-render Optimization (MEDIUM)

### 5.1 Defer state reads to usage point

**Bad:**
```jsx
function Parent({ items }) {
  const [selected, setSelected] = useState(null);
  return items.map((item) => (
    <Child key={item.id} item={item} isSelected={selected === item.id} />
  ));
}
```

**Good:**
```jsx
function Parent({ items }) {
  const [selected, setSelected] = useState(null);
  return (
    <SelectedContext.Provider value={selected}>
      {items.map((item) => (
        <Child key={item.id} item={item} />
      ))}
    </SelectedContext.Provider>
  );
}

function Child({ item }) {
  const selected = useContext(SelectedContext);
  const isSelected = selected === item.id; // Read at usage point
  // ...
}
```

### 5.2 Use useMemo for expensive derivations

```jsx
const sortedItems = useMemo(
  () => items.toSorted((a, b) => a.name.localeCompare(b.name)),
  [items]
);
```

## 6. Rendering Performance (MEDIUM)

### 6.1 Use content-visibility for long lists

```css
.list-item {
  content-visibility: auto;
  contain-intrinsic-size: 0 50px; /* Estimated height */
}
```

### 6.2 Explicit conditional rendering

**Bad:**
```jsx
{condition && <Component />} // Can render "0" or "false"
```

**Good:**
```jsx
{condition ? <Component /> : null}
```

### 6.3 Animate wrappers, not SVG elements

**Bad:**
```jsx
<motion.svg animate={{ rotate: 360 }}>...</motion.svg>
```

**Good:**
```jsx
<motion.div animate={{ rotate: 360 }}>
  <svg>...</svg>
</motion.div>
```

## 7. JavaScript Performance (LOW-MEDIUM)

### 7.1 Build index maps for repeated lookups

**Bad:**
```jsx
items.forEach((item) => {
  const related = otherItems.find((o) => o.id === item.relatedId); // O(n) each time
});
```

**Good:**
```jsx
const otherItemsMap = new Map(otherItems.map((o) => [o.id, o]));
items.forEach((item) => {
  const related = otherItemsMap.get(item.relatedId); // O(1)
});
```

### 7.2 Use toSorted() for immutability

```jsx
// Mutates original
const sorted = arr.sort((a, b) => a - b);

// Returns new array (React-friendly)
const sorted = arr.toSorted((a, b) => a - b);
```

### 7.3 Early length check for array comparisons

```jsx
function arraysEqual(a, b) {
  if (a.length !== b.length) return false; // Fast path
  return a.every((item, i) => item === b[i]);
}
```

## 8. Advanced Patterns (LOW)

### 8.1 Compound Components for flexibility

```jsx
function Tabs({ children }) {
  const [active, setActive] = useState(0);
  return (
    <TabsContext.Provider value={{ active, setActive }}>
      {children}
    </TabsContext.Provider>
  );
}

Tabs.List = TabList;
Tabs.Tab = Tab;
Tabs.Panel = TabPanel;

// Usage
<Tabs>
  <Tabs.List>
    <Tabs.Tab>One</Tabs.Tab>
    <Tabs.Tab>Two</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panel>Content 1</Tabs.Panel>
  <Tabs.Panel>Content 2</Tabs.Panel>
</Tabs>
```

### 8.2 Optimistic updates with SWR

```jsx
const { data, mutate } = useSWR('/api/todos', fetcher);

async function addTodo(newTodo) {
  // Optimistically update UI
  mutate([...data, newTodo], false);

  // Send request
  await fetch('/api/todos', {
    method: 'POST',
    body: JSON.stringify(newTodo),
  });

  // Revalidate
  mutate();
}
```
