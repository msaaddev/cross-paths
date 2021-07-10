const { win32ToDarwin, darwinToWin32 } = require('./index');
const cwd = process.cwd();

const win32Path = darwinToWin32(cwd);

console.log(win32Path);

const unixPath = win32ToDarwin(`C:\\User\\Saad Irfan\\Downloads`);

console.log(unixPath);
