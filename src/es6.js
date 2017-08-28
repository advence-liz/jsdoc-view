
/**
 * A namespace.
 * @namespace es6
 */


var li = new Array();

/** Class representing a point. 
 * @class
 * @description 
 * # [point](https://www.baidu.com)
 * point 虽然使用了markdown 但是生成了导航
 * ## init
 * init-------------------
 * ## exit
 * exit ----------------
 * @example 
 * var liz=fun("eee");
 *   this.insert = function (arg, index) {
 *           data_store.splice(index, 0, arg);
 *           this.length++;
 *           return this;
 *       };
 * @memberof  es6
 * 
*/
class PointES6 {
  /**
   * Create a point.
   * @param {number} x - The x value.
   * @param {number} y - The y value.
   */

  constructor(x, y) {
    // ...
  }

  /**
   * Get the x value.
   * @return {number} The x value.
   */
  getX() {
    // ...
  }

  /**
   * Get the y value.
   * @return {number} The y value.
   */
  getY() {
    // ...
  }

  /**
   * Convert a string containing two comma-separated numbers into a point.
   * @param {string} str - The string containing two comma-separated numbers.
   * @return {Point} A Point object.
   */
  static fromString(str) {
    // ...
  }
}