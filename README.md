```
                          .-----------------------------------------------.
                          |                                               |
                          |        ::::::::   ::::::::      :::     :::   |
                          |      :+:    :+: :+:    :+:   :+: :+:   :+:    |
                          |     +:+    +:+ +:+         +:+   +:+  +:+     |
                          |    +#+    +:+ +#+        +#++:++#++: +#+      |
                          |   +#+    +#+ +#+        +#+     +#+ +#+       |
                          |  #+#    #+# #+#    #+# #+#     #+# #+#        |
                          |  ########   ########  ###     ### ##########  |
                          |                                               |
                          '-----------------------------------------------'
```

# ocal

Time tracker for hackers (inspired by wcal)

<p align="center">
  <a href="https://github.com/ewiggin/ocal">
    <img alt="ocal gif demostration" src="https://github.com/ewiggin/ocal/raw/main/ocal.gif" width="750">
  </a>
</p>

## Requisites

```
$ curl -fsSL https://deno.land/install.sh | sh
```

## Installation

```
$ git clone https://github.com/ewiggin/ocal.git
$ cd ocal
$ deno compile --allow-read --allow-write --allow-run=cal --output ocal ./main.ts
$ mv ocal /usr/local/bin # In MacOS, move your executable to your system binaries directory.
$ ocal
```

## Usage

```
$ ocal help

Usage: ocal [option]

Options:
  init                            Initialize the calendar in current directory.
  add                             Add a track to the calendar.
  edit   <int:id>                 Edit a track in the calendar.
  delete <int:id>                 Delete a track from the calendar.
  list   <int:month> <int:year>   Show tracking list for month and year, arguments are optional.
  help                            Display this help message.
```
