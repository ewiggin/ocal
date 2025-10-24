export const showLogo = () => {
  const asciiLogo = [
    "                   Weclome to                   ",
    ".-----------------------------------------------.",
    "|                                               |",
    "|        ::::::::   ::::::::      :::     :::   |",
    "|      :+:    :+: :+:    :+:   :+: :+:   :+:    |",
    "|     +:+    +:+ +:+         +:+   +:+  +:+     |",
    "|    +#+    +:+ +#+        +#++:++#++: +#+      |",
    "|   +#+    +#+ +#+        +#+     +#+ +#+       |",
    "|  #+#    #+# #+#    #+# #+#     #+# #+#        |",
    "|  ########   ########  ###     ### ##########  |",
    "|                                               |",
    "'-----------------------------------------------'",
  ];

  const startColor = [255, 165, 0]; // orange RGB
  const endColor = [255, 255, 0]; // yellow RGB

  const totalLines = asciiLogo.length;

  asciiLogo.forEach((line, i) => {
    // interpolate RGB color by line
    const r = Math.round(
      startColor[0] + ((endColor[0] - startColor[0]) * i) / (totalLines - 1),
    );
    const g = Math.round(
      startColor[1] + ((endColor[1] - startColor[1]) * i) / (totalLines - 1),
    );
    const b = Math.round(
      startColor[2] + ((endColor[2] - startColor[2]) * i) / (totalLines - 1),
    );

    // ANSI sequence for color RGB
    const color = `\x1b[38;2;${r};${g};${b}m`;
    const reset = "\x1b[0m";

    console.log(`${color}${line}${reset}`);
  });
};
