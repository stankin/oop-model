var assert = require('assert');

/* START - COCOMO II METHOD */

describe("getSF", function() {
	it("получает SF", function() {
		assert.equals(getSF([1, 2, 3, 4, 5]), 15);
	});
});

describe("getE", function() {
	it("получает E", function() {
		assert.equals(getE(15), 0.1365);
	});
});
	
describe("getEM", function() {
	it("получает EM", function() {
		assert.equals(getEM([1, 2, 3, 4]), 24);
	});
});
	
describe("getPM", function() {
	it("получает TDEV", function() {
		assert.equals(getPM(14252, 0.1365, 24), 101);
	});
});
		
describe("getTDEV", function() {
	it("получает TDEV", function() {
		assert.equals(getTDEV(101, 15), 14);
	});
});
	
/* END - COCOMO II METHOD */
