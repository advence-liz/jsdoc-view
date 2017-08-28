/**
* A namespace.
* @namespace es5
*/



/** Class representing a point. 
 * @class  
 * @param {number} x - The x value.
 * @param {number} y - The y value.
 * @memberof  es5
 * 
*/
function PointES5() {
    /**
     * Create a point.
     * @param {number} x - The x value.
     * @param {number} y - The y value.
     */
    this.constructor = function (x, y) {
        // ...
    }

    /**
     * Get the x value.
     * @return {number} The x value.
     */
    this.getX = function () {
        // ...
    }

    /**
     * Get the y value.
     * @return {number} The y value.
     */
    this.getY = function () {
        // ...
    }

}

/**
 * a static function
 * @param {string} str - The string containing two comma-separated numbers.
 * @return {Point} A Point object.
 */

PointES5.fromString = function (str) {

}

/** Class representing a point. 
 * @class
 * @memberof  es5
 * 
*/

var PointOBJ = {
    /**
     * Create a point.
     * @param {number} x - The x value.
     * @param {number} y - The y value.
     * @memberof es
     */
    constructor: function (x, y) {
        // ...
    },

    /**
     * Get the x value.
     * @public
     * @return {number} The x value.
     */
    getX: function () {
        // ...
    },

    /**
     * Get the y value.
     * @return {number} The y value.
     */
    getY: function () {
        // ...
    }

}
