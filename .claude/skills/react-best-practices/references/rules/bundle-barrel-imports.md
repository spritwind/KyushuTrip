# bundle-barrel-imports

## Rule: Avoid barrel file imports

**Priority:** CRITICAL
**Category:** Bundle Size Optimization

## Problem

Barrel files (`index.js` that re-exports) can include entire directories in your bundle.

```jsx
// components/index.js (barrel file)
export { Button } from './Button';
export { Modal } from './Modal';
export { Chart } from './Chart'; // 50KB library

// Your code
import { Button } from '@/components'; // Accidentally imports Chart too!
```

## Solution

Import directly from the source file.

```jsx
import { Button } from '@/components/Button';
```

## Detection

Look for imports from directories without a specific file:
- `import { X } from '@/components'`
- `import { X } from './utils'`
- `import { X } from '../lib'`

## Fix Pattern

```jsx
// Before
import { formatDate, parseDate } from '@/utils';

// After
import { formatDate } from '@/utils/formatDate';
import { parseDate } from '@/utils/parseDate';
```

## Tree-Shaking Note

Even with tree-shaking, barrel files can cause issues:
- Side effects in imported modules still run
- TypeScript type-checking slows down
- Development builds are larger
