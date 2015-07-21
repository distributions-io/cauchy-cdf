'use strict';

// MODULES //

var partial = require( './partial.js' );


// CDF //

/**
* FUNCTION: cdf( out, matrix, gamma, x0 )
*	Evaluates the cumulative distribution function (CDF) for a Cauchy distribution with scale parameter `gamma` and location parameter `x0` for each matrix element.
*
* @param {Matrix} out - output matrix
* @param {Matrix} arr - input matrix
* @param {Number} gamma - scale parameter
* @param {Number} x0 - location parameter
* @returns {Matrix} output matrix
*/
function cdf( y, x, gamma, x0 ) {
	var len = x.length,
		fcn,
		i;
	if ( y.length !== len ) {
		throw new Error( 'cdf()::invalid input arguments. Input and output matrices must be the same length.' );
	}
	fcn = partial( gamma, x0 );
	for ( i = 0; i < len; i++ ) {
		y.data[ i ] = fcn( x.data[ i ] );
	}
	return y;
} // end FUNCTION cdf()


// EXPORTS //

module.exports = cdf;
