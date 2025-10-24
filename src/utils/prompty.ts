export const prompty = (
  message: string,
  defaultValue: string | number = "",
  icon: string = "●",
) => {
  return prompt(
    icon + message.padStart(15, " "),
    String(defaultValue),
  );
};
