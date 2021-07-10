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
const darwinToWin32 = path => nodePath.win32.normalize(path);

/**
 *
 *
 * @param {path} - win32 path
 * @returns {path} - darwin path
 */
const win32ToDarwin = path => toUnix(path);

module.exports = {
	darwinToWin32,
	win32ToDarwin
};
