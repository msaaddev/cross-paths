
<div align="center">
	<h1>‼️ cross-paths</h1>
	<img src="https://img.shields.io/npm/v/cross-paths?color=2FD566" alt="version">
	<img src="https://img.shields.io/npm/l/cross-paths?color=2FD566" alt="license">
	<img src="https://img.shields.io/npm/dt/cross-paths?color=2FD566" alt="downloads">
</div>

<p align="center">
	<b>A simple path conversion package to convert your paths across different platform</b>
</p>

![separator](assets/separate.jpg)

- **Simple**: extremely simple to use
- **Darwin to Win32**: Convert your darwin based operating system paths to Windows operating system
- **Win32 to Darwin**: Convert your Windows paths to darwin based operating system
- **MIT Licensed**: Free to use for personal and commercial projects

<br>

<img src="./assets/suitcase.png" width="10%" />

## Installation

```sh
# install the package
npm install cross-paths
```

<br>

<img src="./assets/api.png" width="10%" />

## API

- darwinToWin32()
- win32ToDarwin()
- path (required)

<br>

<img src="./assets/rocket.png" width="10%" />

## Usage

- Convert darwin paths to win32

```js
const { darwinToWin32 } = require('cross-paths');

const path = `/Users/saadirfan/GitHub`

const win32Path = darwinToWin32(path); // new windows path
```

- Convert win32 to darwin paths

```js
const { win32ToDarwin } = require('cross-paths');

const path = `C:\\Users\\Saad\\GitHub`;

const darwinPath = win32ToDarwin(path); // new darwin path

```

## 🔑 License & Conduct

- MIT © [Saad Irfan](https://github.com/msaaddev)
- [Code of Conduct](https://github.com/msaaddev/cross-paths/blob/master/code-of-conduct.md)
