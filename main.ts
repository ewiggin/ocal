import { help } from "./src/help.ts";
import { init } from "./src/init.ts";
import { add } from "./src/add.ts";
import { list } from "./src/list.ts";
import { remove } from "./src/remove.ts";
import { edit } from "./src/edit.ts";
import { Logger } from "./src/utils/logger.ts";

const [option] = Deno.args;

try {
  switch (option) {
    case "init":
      await init();
      break;
    case "add":
      add();
      break;
    case "delete": {
      const [, id] = Deno.args;
      remove(id);
      break;
    }
    case "edit": {
      const [, id] = Deno.args;
      edit(id);
      break;
    }
    case "list": {
      // [option, month | year, year]
      const [, first, second] = Deno.args;

      const firstIsYear = first && first.length === 4;
      let month = first && !firstIsYear ? Number(first) : null; // is Month argument!
      let year = firstIsYear ? Number(first) : second ? Number(second) : null;

      if (!month && !year) {
        month = new Date().getMonth() + 1;
        year = new Date().getFullYear();
      }

      list(month, year);
      break;
    }
    case "help":
      help();
      break;
    default: {
      help();
      break;
    }
  }
} catch (error) {
  Logger.error(String(error));
}
