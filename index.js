/**
 *
 * Author: Saad Irfan
 * GitHub: msaaddev
 * Twitter: https://twitter.com/msaaddev
 */

const nodePath = require('path');
const { toUnix } = require('upath');

/**
 *
 *
 * @param {path} - darwin path
 * @returns {path} - win32 path
 */
const unixToWin32 = path => nodePath.win32.normalize(path);

/**
 *
 *
 * @param {path} - win32 path
 * @returns {path} - darwin path
 */
const win32ToUnix = path => toUnix(path);

module.exports = {
	unixToWin32,
	win32ToUnix
};
