export const showCalendar = async (
  month: number | null,
  year: number | null,
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
  });
  const { stdout } = await command.output(); // Usar output() para obtener la salida
  const calendarOutput = new TextDecoder().decode(stdout); // Decodificar la salida a texto
  console.log(calendarOutput);
};
