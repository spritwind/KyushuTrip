# bundle-dynamic-import

## Rule: Use next/dynamic for heavy components

**Priority:** CRITICAL
**Category:** Bundle Size Optimization

## Problem

Large components included in the main bundle slow initial page load.

```jsx
import HeavyEditor from './HeavyEditor'; // 200KB added to main bundle

function Page() {
  const [showEditor, setShowEditor] = useState(false);
  return showEditor ? <HeavyEditor /> : <Button onClick={() => setShowEditor(true)} />;
}
```

## Solution

Use `next/dynamic` to code-split heavy components.

```jsx
import dynamic from 'next/dynamic';

const HeavyEditor = dynamic(() => import('./HeavyEditor'), {
  loading: () => <EditorSkeleton />,
});

function Page() {
  const [showEditor, setShowEditor] = useState(false);
  return showEditor ? <HeavyEditor /> : <Button onClick={() => setShowEditor(true)} />;
}
```

## Options

```jsx
const Component = dynamic(() => import('./Component'), {
  loading: () => <Skeleton />,  // Loading state
  ssr: false,                    // Disable SSR (client-only)
});
```

## When to Apply

- Components with large dependencies (charts, editors, maps)
- Components only shown after user interaction
- Admin-only features in user-facing apps
- Heavy modals or dialogs

## Preloading

For better UX, preload on hover/focus:

```jsx
const HeavyEditor = dynamic(() => import('./HeavyEditor'));

function Button() {
  const preload = () => {
    import('./HeavyEditor'); // Start loading
  };

  return <button onMouseEnter={preload} onFocus={preload}>Open Editor</button>;
}
```
