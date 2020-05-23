import { currencies } from "./data/currencies.ts";

export async function findCurrencyByCode(code: string) {
  let result = null;

  if (code) {
    code = code.toUpperCase();
    result = currencies.find((item: any, i: number) => {
      return item.code === code;
    });
  }

  return result;
}

export async function findCurrencyByName(name: string) {
  let result = null;

  if (name) {
    result = currencies.filter((item: any, i: number) => {
      return item.name.toUpperCase().includes(name.toUpperCase());
    });
  }

  return result;
}

export async function findCurrencyBySymbolNative(symbol: string) {
  let result = null;

  if (symbol) {
    result = currencies.filter((item: any, i: number) => {
      return item.symbol_native === symbol;
    });
  }

  return result;
}

export async function findAll() {
  const result = currencies;
  return result;
}
