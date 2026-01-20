# rerender-lazy-initialization

## Rule: Use lazy state initialization for expensive values

**Priority:** MEDIUM
**Category:** Re-render Optimization

## Problem

Expensive initial values are computed on every render.

```jsx
function Component() {
  // computeExpensiveValue() runs on EVERY render, even though
  // useState only uses it on the first render
  const [state, setState] = useState(computeExpensiveValue());
}
```

## Solution

Pass a function to useState for lazy initialization.

```jsx
function Component() {
  // computeExpensiveValue() only runs on the FIRST render
  const [state, setState] = useState(() => computeExpensiveValue());
}
```

## Common Use Cases

### Parsing from localStorage

```jsx
// Bad - parses on every render
const [settings, setSettings] = useState(
  JSON.parse(localStorage.getItem('settings') || '{}')
);

// Good - parses only once
const [settings, setSettings] = useState(() =>
  JSON.parse(localStorage.getItem('settings') || '{}')
);
```

### Complex data transformations

```jsx
// Bad
const [items, setItems] = useState(
  rawData.map(transform).filter(validate).sort(compare)
);

// Good
const [items, setItems] = useState(() =>
  rawData.map(transform).filter(validate).sort(compare)
);
```

### Creating objects/arrays

```jsx
// Bad - creates new array every render (though only first is used)
const [list, setList] = useState([]);

// Better for simple cases, but function form works too
const [list, setList] = useState(() => []);
```

## When NOT Needed

Simple primitive values don't need lazy initialization:

```jsx
const [count, setCount] = useState(0);           // Fine
const [name, setName] = useState('');            // Fine
const [isOpen, setIsOpen] = useState(false);     // Fine
```
