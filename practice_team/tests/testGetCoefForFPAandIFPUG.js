var assert = require('assert');

/* START FPA IFPUG METHOD */

describe("getVAF", function() {
	it("получает VAF", function() {
		assert.equals(getVAF([1, 2, 3, 4, 5]), 0.8);
		assert.equals(getVAF([0.6, 4, 12, 0.4, 2], 0.84); 
	});
});
	
describe("getAFP", function() {
	it("получает AFP", function() {
		assert.equals(getAFP(4, 0.9), 4.9);
	});
});
	
describe("getDFP", function() {
	it("получает DFP", function() {
		assert.equals(getAFP(4, 0, 0.8), 3.2);
	});
});

/*	
describe("getSLOC", function() {
	it("получает SLOC", function() {
		assert.equals(getSLOC("JavaScript", 7), А тут что???);
	});
});
*/
	
/* END - FPA IFPUG METHOD */
