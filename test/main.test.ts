import {
  findCurrencyByCode,
  findCurrencyByName,
  findCurrencyBySymbolNative,
  findAll,
} from "../src/main.ts";
import { assert, assertEquals } from "../deps.ts";

Deno.test("findCurrencyByCode", async () => {
  const result = await findCurrencyByCode("HKD");
  assert(result);
  assertEquals(1, result.length);
});

Deno.test("findCurrencyByName", async () => {
  const result = await findCurrencyByName("hong kong");
  assert(result);
  assertEquals(1, result.length);
});

Deno.test("findCurrencyBySymbolNative", async () => {
  const result = await findCurrencyBySymbolNative("$");
  assert(result);
  assertEquals(15, result.length);
});

Deno.test("findAll", async () => {
  const result = await findAll();
  assert(result);
  assertEquals(119, result.length);
});
