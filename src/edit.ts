import type { Timestamp } from "@/interfaces/timestamp.d.ts";
import { getStore, Logger, persistStore, prompty } from "@/utils";

const editTimestamp = (timestamp: Timestamp) => {
  timestamp.hours = prompty("hours:", timestamp.hours) || "0";

  const date = new Date(timestamp.when);

  const day = prompty(`day:`, date.getDate());
  const month = prompty("month:", date.getMonth() + 1);
  const year = prompty(`year:`, date.getFullYear());
  timestamp.message = prompty("message:", timestamp.message || "");
  timestamp.when = new Date(Number(year), Number(month) - 1, Number(day))
    .toISOString();
};

export const edit = (id: string) => {
  const store = getStore();
  if (!store.timestamps) {
    store.timestamps = [];
  }

  const { timestamps } = store;

  const index = timestamps.findIndex((t: Timestamp) => t.id === Number(id));
  if (index === -1) throw new Error(`Item with <id:${id}> not found.`);

  editTimestamp(timestamps[index]);
  persistStore(store);
  Logger.done();
};
