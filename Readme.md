# use-shit

![NPM License](https://img.shields.io/npm/l/use-shit)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/use-shit)

> The best use-hook ever made.

## Installation:

```bash
npm i use-shit
```
## Usage
```ts
import { useShit } from 'use-shit';

const REAL_SHIT = [1, 2, 3, 4];

const [shit] = useShit(REAL_SHIT); // shit === REAL_SHIT
```
## Example
```tsx
import React from 'react';
import { useShit } from 'use-shit';

const REAL_SHIT = [1, 2, 3, 4];

export function App() {
  const [shit] = useShit(REAL_SHIT);

  return (
    <>
      <p>Thanks god, My code is beautiful!</p>
      <ul>
        { shit.map((slice) => (
          <li key={slice}>{slice}</li>
        )) }
      </ul>
    </>
  );
}
```

If you are thinking why not just use the `REAL_SHIT`, you are not a true hook based developer. Althorugh `REAL_SHIT` is equal to `shit`, but it's always nice to have some unnessesury `useShit` in body of components.


## License

[MIT](./LICENSE)

---

![Static Badge](https://img.shields.io/badge/don't-use_shit-green)
