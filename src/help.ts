import { showLogo } from "./utils/showLogo.ts";

export const help = () => {
  showLogo();
  console.log(`
Usage: ocal [option]

Options:
  init                            Initialize the calendar in current directory.
  add                             Add a track to the calendar.
  edit   <int:id>                 Edit a track in the calendar.
  delete <int:id>                 Delete a track from the calendar.
  list   <int:month> <int:year>   Show tracking list for month and year, arguments are optional.
  help                            Display this help message.
`);
};
