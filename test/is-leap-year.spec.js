'use strict';

function isLeapYear(input) {
	return input % 4 === 0;
}

describe.only('isLeapYear', function () {

	it('should be a function', function () {
		expect(isLeapYear).to.be.instanceof(Function);
	});

	it('should return true when input is a leap year', function () {
		expect(isLeapYear(1996)).to.be.true;
	});

	it('should return false when input is not a leap year', function () {
		expect(isLeapYear(2001)).to.be.false;
	});

});
