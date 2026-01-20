# async-promise-all

## Rule: Use Promise.all for independent async operations

**Priority:** CRITICAL
**Category:** Eliminating Waterfalls

## Problem

Sequential awaits create request waterfalls, multiplying total load time.

```jsx
// Total time: A + B + C (e.g., 300ms + 200ms + 100ms = 600ms)
const a = await fetchA();
const b = await fetchB();
const c = await fetchC();
```

## Solution

Use `Promise.all()` to parallelize independent operations.

```jsx
// Total time: max(A, B, C) (e.g., max(300, 200, 100) = 300ms)
const [a, b, c] = await Promise.all([
  fetchA(),
  fetchB(),
  fetchC(),
]);
```

## When to Apply

- Multiple fetches that don't depend on each other
- Loading user data + preferences + notifications
- Fetching list items with their related data

## When NOT to Apply

- Operations that depend on previous results
- Rate-limited APIs that require sequential calls
- Operations that share resources and may conflict
