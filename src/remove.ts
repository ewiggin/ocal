import { Timestamp } from "@/interfaces/timestamp.d.ts";
import { getStore, Logger, persistStore } from "@/utils";

export const remove = (id: string) => {
  try {
    if (!id) {
      throw new Error("ID is required");
    }

    const store = getStore();
    const { timestamps } = store;

    const findIndex = timestamps.findIndex((timestamp: Timestamp) =>
      timestamp.id === Number(id)
    );

    if (findIndex === -1) {
      throw new Error(`Item with <id:${id}> not found`);
    }

    timestamps.splice(findIndex, 1);
    store.timestamps = timestamps;

    persistStore(store);
    Logger.done();
  } catch (error) {
    Logger.error(String(error));
  }
};
