import type { Store } from "@/interfaces/store.d.ts";
import type { Timestamp } from "@/interfaces/timestamp.d.ts";
import { getStore, Logger, showCalendar } from "@/utils";

let isYearArgument = false;

const getPad = () => {
  return isYearArgument ? 65 : 20;
};

const calcAndPrintTotals = (
  totalHours: number,
  rate: number,
  currency: string,
) => {
  const total = totalHours * rate;

  console.log(`Rate: ${currency}${rate}`);
  console.log(`Total hours: ${totalHours}h`);
  Logger.line(getPad());
  console.log(
    `${currency}${rate} * ${totalHours}h = %c${currency}${total}`,
    Logger.COLORS.DONE,
  );
};

const printTimestampLine = (
  timestamp: Timestamp,
  rate: number,
  currency: string,
) => {
  const formattedDate = new Date(timestamp.when).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const id = String(timestamp.id).padEnd(5, "");
  const hours = String(timestamp.hours).padStart(5, " ");
  const when = formattedDate.padStart(15, " ");
  const message = timestamp.message;
  const totalLine = `${rate * Number(timestamp.hours)}`.padStart(3, " ").padEnd(
    7,
    " ",
  );

  console.log(
    `● ${id} ${hours}h %c${currency}${totalLine} %c${when} %c${message}`,
    Logger.COLORS.DONE,
    "color: inherit;",
    Logger.COLORS.ERROR,
  );
};

const calcTotalAndShowList = async (
  store: Store,
  month: number | null,
  year: number | null,
) => {
  isYearArgument = month === null && year !== null;

  const { company, rate, timestamps, currency } = store;

  const thisMonthTimestamps = (timestamps || [])
    .filter((timestamp: { when: string }) => {
      const date = new Date(timestamp.when);
      if (month === null && year) {
        return date.getFullYear() === year;
      }

      if (year === null && month) {
        return date.getMonth() + 1 === month;
      }

      // by default actual month
      return date.getMonth() + 1 === month &&
        date.getFullYear() === year;
    });

  const totalHours = thisMonthTimestamps.reduce(
    (acc: number, timestamp: Timestamp) => acc + Number(timestamp.hours),
    0,
  );

  console.log("");
  console.log(`%c● ${company}`, Logger.COLORS.ERROR);
  Logger.line(getPad());
  console.log("");

  const events = thisMonthTimestamps.map((item) => {
    const eventDate = new Date(item.when);
    return [eventDate.getMonth(), eventDate.getDate()];
  });
  await showCalendar(month, year, events);
  Logger.line(getPad());
  calcAndPrintTotals(totalHours, rate, currency);
  console.log("");

  thisMonthTimestamps.forEach((timestamp: Timestamp) => {
    printTimestampLine(timestamp, rate, currency);
  });

  console.log("");
};

export const list = async (month: number | null, year: number | null) => {
  try {
    const store = getStore();
    await calcTotalAndShowList(store, month, year);
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
      Logger.error(
        `calendar not found. Please use [ocal init] command or change directory.`,
      );
    } else {
      Logger.error(`${error}`);
    }
  }
};
