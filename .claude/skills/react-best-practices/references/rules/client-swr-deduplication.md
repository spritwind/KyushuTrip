# client-swr-deduplication

## Rule: Use SWR for automatic request deduplication

**Priority:** MEDIUM-HIGH
**Category:** Client-Side Data Fetching

## Problem

Multiple components fetching the same data create redundant requests.

```jsx
function Header() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch('/api/user').then(r => r.json()).then(setUser);
  }, []);
}

function Sidebar() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch('/api/user').then(r => r.json()).then(setUser); // Duplicate request!
  }, []);
}
```

## Solution

Use SWR for automatic deduplication and caching.

```jsx
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then(r => r.json());

function Header() {
  const { data: user } = useSWR('/api/user', fetcher);
}

function Sidebar() {
  const { data: user } = useSWR('/api/user', fetcher); // Same key = shared!
}
```

## SWR Configuration

```jsx
const { data, error, isLoading, mutate } = useSWR('/api/user', fetcher, {
  revalidateOnFocus: false,      // Don't refetch on window focus
  revalidateOnReconnect: true,   // Refetch on network reconnect
  dedupingInterval: 2000,        // Dedupe requests within 2s
  refreshInterval: 0,            // No polling (set ms for polling)
});
```

## Global Configuration

```jsx
// _app.jsx or layout.jsx
import { SWRConfig } from 'swr';

function App({ children }) {
  return (
    <SWRConfig
      value={{
        fetcher,
        revalidateOnFocus: false,
        dedupingInterval: 2000,
      }}
    >
      {children}
    </SWRConfig>
  );
}
```

## Benefits

- Automatic request deduplication
- Built-in caching
- Automatic revalidation
- Optimistic updates support
- Error retry
