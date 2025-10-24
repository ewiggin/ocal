export const help = () => {
  console.log(`
Usage: ocal [option]

Options:
  init                            Initialize the calendar in current directory.
  add                             Add an event to the calendar.
  edit   <int:id>                 Edit an event in the calendar.
  delete <int:id>                 Delete an event from the calendar.
  list   <int:month> <int:year>   List events in the calendar for current month, a specific month or for a full year.
  help                            Display this help message and exit.
`);
};
