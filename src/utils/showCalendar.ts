const highlightEvents = (
  cal: string,
  events: number[][],
) => {
  const RED = "\x1b[4;31m";
  const RESET = "\x1b[0m";

  // TODO: Implement month highlighting when show all year
  events?.forEach(([, day]) => {
    const regex = new RegExp(`\\b${day}\\b`, "g");
    cal = cal.replace(
      regex,
      `${RED}${day}${RESET}`,
    );
  });

  return cal;
};

export const showCalendar = async (
  month: number | null,
  year: number | null,
  events?: number[][],
) => {
  const args = [];

  if (month && year) {
    args.push(String(month), String(year));
  } else if (month) {
    args.push("-m", String(month));
  } else if (year) {
    args.push("-y", String(year));
  }

  const command = new Deno.Command("cal", {
    args,
    stdout: "piped",
  });
  const { stdout } = await command.output();
  const commandOutput = new TextDecoder().decode(stdout);
  const cal = args.includes("-y")
    ? commandOutput
    : highlightEvents(commandOutput, events || []);

  console.log(cal);
};
