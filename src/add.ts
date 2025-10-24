import { getStore, Logger, persistStore, prompty } from "@/utils";

const createTimestamp = (id: number) => {
  const now = new Date();
  const hours = prompty("hours:");
  if (!hours || isNaN(Number(hours))) {
    throw new Error(
      "Validation: hours is required and has to be an integer or decimal.",
    );
  }
  const day = prompty(`day:`, now.getDate());
  if (!day) throw new Error("Validation: day is required");
  const month = prompty("month:", now.getMonth() + 1);
  if (!month) throw new Error("Validation: month is required");
  const year = prompty(`year:`, now.getFullYear());
  if (!year) throw new Error("Validation: year is required");
  const message = prompty("message:");

  const date = new Date(Number(year), Number(month) - 1, Number(day))
    .toISOString();

  return {
    id,
    hours,
    when: date,
    message,
  };
};

export const add = () => {
  try {
    const store = getStore();
    if (!store.timestamps) {
      store.timestamps = [];
    }

    const { timestamps } = store;
    timestamps.push(createTimestamp(timestamps.length + 1));
    persistStore(store);
    Logger.done();
  } catch (error) {
    Logger.error(String(error));
  }
};
