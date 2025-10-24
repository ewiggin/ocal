import type { Store } from "@/interfaces/store.d.ts";
import { fileExists, Logger, persistStore, prompty } from "@/utils";
import { showLogo } from "./utils/showLogo.ts";

const createStore = (): Store => {
  console.log("To init a company calendar please add the next info:");
  const company = prompty("company:");
  if (!company) throw new Error("company is required");

  const description = prompty("description:", "");
  const rate = prompty("rate:", 10);
  if (!rate || isNaN(Number(rate))) {
    throw new Error("rate is required and has to be an integer or decimal.");
  }

  const currency = prompty("currency:", "€");
  if (!currency) throw new Error("currency is required");

  return {
    company,
    description,
    rate: Number(rate),
    currency,
    timestamps: [],
  };
};

export const init = async () => {
  try {
    const exists = await fileExists("./calendar.json");
    if (exists) {
      throw new Error("Calendar file already exists");
    }

    showLogo();
    const store = createStore();
    persistStore(store);
    Logger.done();
  } catch (error) {
    Logger.error(`${error}`);
  }
};
