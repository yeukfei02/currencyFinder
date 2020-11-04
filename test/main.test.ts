import {
  findAll,
  findCurrencyByCode,
  findCurrencyByName,
  findCurrencyBySymbolNative,
} from "../src/main.ts";
import { assert, assertEquals } from "../deps.ts";

Deno.test("findCurrencyByCode", async () => {
  const result = await findCurrencyByCode("HKD");
  assert(result);
});

Deno.test("findCurrencyByName", async () => {
  const result = await findCurrencyByName("us");
  assert(result);
  assertEquals(4, result.length);
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
