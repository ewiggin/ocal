import { Store } from "@/interfaces/store.d.ts";

export const persistStore = (store: Store) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(JSON.stringify(store));
  Deno.writeFileSync("calendar.json", data);
};
