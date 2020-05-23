# currencyFinder

[![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/currency_finder/mod.ts)

find currency information in deno

```ts
import * as currencyFinder from "https://deno.land/x/curreny_finder/mod.ts";

or

import * as currencyFinder from "https://denopkg.com/yeukfei02/currencyFinder/mod.ts";
```

## findCurrencyByCode

```ts
const currency = await currencyFinder.findCurrencyByCode("HKD");
```

## findCurrencyByName

```ts
const currency = await currencyFinder.findCurrencyByName("hong kong");
```

## findCurrencyBySymbolNative

```ts
const currency = await currencyFinder.findCurrencyBySymbolNative("$");
```

## findAll

```ts
const currencyList = await currencyFinder.findAll();

// currencyList
[
  {
      symbol: "$",
      name: "US Dollar",
      symbol_native: "$",
      decimal_digits: 2,
      rounding: 0,
      code: "USD",
      name_plural: "US dollars"
    },
    {
      symbol: "CA$",
      name: "Canadian Dollar",
      symbol_native: "$",
      decimal_digits: 2,
      rounding: 0,
      code: "CAD",
      name_plural: "Canadian dollars"
    },
    ...
]
```