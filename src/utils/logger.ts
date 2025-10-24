export class Logger {
  static COLORS = {
    ERROR: "color: red;",
    DONE: "color: #7BEDA2;",
    WARN: "color: orange;",
    LOG: "color: inherit;",
  };

  static error(message: string) {
    console.error(
      `%c✘ ${message}`,
      `${Logger.COLORS.ERROR} font-weight: bold`,
    );
  }

  static done(message: string = "ocal done!") {
    console.log(
      `%c✔ ${message}`,
      `${Logger.COLORS.DONE} font-weight: bold`,
    );
    console.log("");
  }

  static line(pad: number = 20, char: string = "=") {
    console.log(char.repeat(pad));
  }
}
