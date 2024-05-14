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
## Example 1
```tsx
import { useShit } from 'use-shit';

const REAL_SHIT = [1, 2, 3, 4];

function Component() {
  - const shit = REAL_SHIT; // ❌ It's ugly
  + const [shit] = useShit(REAL_SHIT); // ✅ Nice and smooth

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

## Example 2
```tsx
import { useShit } from 'use-shit';

function Component() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  - const sum = num1 + num2; // ❌ It doesn't look good
  - const sum = useMemo(() => num1 + num2, [num1, num2]); // ❌ Unnessesury use of cache
  + const [sum] = useShit(num1 + num2); // ✅ Nice and feels right

  return (
    <>
      <input type="number" onChange={(e) => setNum1(e.target.valueAsNumber)} />
      <input type="number" onChange={(e) => setNum2(e.target.valueAsNumber)} />
      <b>{sum}</b>
    </>
  );
}
```

## License

[MIT](./LICENSE)

---

![Static Badge](https://img.shields.io/badge/don't-use_shit-green)
