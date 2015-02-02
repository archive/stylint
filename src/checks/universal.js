'use strict';

/**
* check for * selector.
* technically this is used as part of resets often, for good reason, despite its slowness
* which is why i'm setting it up as a warning as it won't break code but maybe you prefer to not use it
*/
module.exports = function checkForUniversal( line, arr ) {
	if ( typeof line !== 'string' || typeof arr === 'undefined' ) { return; }

	// *= for regex selectors are valid use cases
	if ( line.indexOf('*') !== -1  && line.indexOf('*=') === -1 ) {

		arr = arr.filter(function( str ) {
			return str.length > 0;
		});

		// check for various places where the * is valid (just comment checks atm)
		if ( arr[0].indexOf('*') !== -1 ) {
				return true;
		}
		else {
			return false;
		}
	}
	else {
		return false;
	}
 }