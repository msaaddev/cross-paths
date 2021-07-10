const { win32ToUnix, unixToWin32 } = require('./index');
const cwd = process.cwd();

const win32Path = unixToWin32(cwd);

console.log(win32Path);

const unixPath = win32ToUnix(`C:\\User\\Saad Irfan\\Downloads`);

console.log(unixPath);
