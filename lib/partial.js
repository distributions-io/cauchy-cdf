'use strict';

// FUNCTIONS //

var abs = Math.abs,
	arctan = Math.atan;


// VARIABLES //

var ONE_OVER_PI = 1 / Math.PI;


// PARTIAL //

/**
* FUNCTION: partial( gamma, x0 )
*	Partially applies scale parameter `gamma` and location parameter `x0` and returns a function for evaluating the cumulative distribution function (CDF) for a Cauchy distribution.
*
* @param {Number} gamma - scale parameter
* @param {Number} x0 - location parameter
* @returns {Function} CDF
*/
function partial( gamma, x0 ) {

	/**
	* FUNCTION: cdf( x )
	*	Evaluates the cumulative distribution function (CDF) for a Cauchy distribution.
	*
	* @private
	* @param {Number} x - input value
	* @returns {Number} evaluated CDF
	*/
	return function cdf( x ) {
		var z = ( x - x0 ) / gamma;
		z = -abs( z );
		if ( x < x0 ) {
			return -arctan( 1/z ) * ONE_OVER_PI;
		} else {
			return 1 + arctan( 1/z ) * ONE_OVER_PI; 
		}
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
