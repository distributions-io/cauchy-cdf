'use strict';

// FUNCTIONS //

var abs = Math.abs,
	arctan = Math.atan;


// VARIABLES //

var ONE_OVER_PI = 1 / Math.PI;


// CDF //

/**
* FUNCTION: cdf( x, gamma, x0 )
*	Evaluates the cumulative distribution function (CDF) for a Cauchy distribution with scale parameter `gamma` and location parameter `x0` at a value `x`.
*
* @param {Number} x - input value
* @param {Number} gamma - scale parameter
* @param {Number} x0 - location parameter
* @returns {Number} evaluated CDF
*/
function cdf( x, gamma, x0 ) {
	var z = ( x - x0 ) / gamma;
	z = -abs( z );
	if ( x < x0 ) {
		return -arctan( 1/z ) * ONE_OVER_PI;
	} else {
		return 1 + arctan( 1/z ) * ONE_OVER_PI;
	}
} // end FUNCTION cdf()


// EXPORTS //

module.exports = cdf;
