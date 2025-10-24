import { Store } from "@/interfaces/store.d.ts";

export const getStore = (): Store => {
  const decoder = new TextDecoder("utf-8");
  const data = Deno.readFileSync("./calendar.json");

  return JSON.parse(decoder.decode(data));
};
