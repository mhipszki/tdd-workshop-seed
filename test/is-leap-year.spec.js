'use strict';

function isLeapYear(input) {
	if (input % 100 === 0) {
		return input % 400 === 0;
	}
	return input % 4 === 0;
}

describe.only('isLeapYear', function () {

	it('should return true when input is a leap year', function () {
		expect(isLeapYear(1996)).to.be.true;
	});

	it('should return false when input is not a leap year', function () {
		expect(isLeapYear(2001)).to.be.false;
	});

	it('should return false when input is divisible by 100', function () {
		expect(isLeapYear(1900)).to.be.false;
	});

	it('should return true when input is divisible by 100 and also by 400', function () {
		expect(isLeapYear(2000)).to.be.true;
	});

});
