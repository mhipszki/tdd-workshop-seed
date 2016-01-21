'use strict';

function isDivisibleBy4(input) {
	return input % 4 === 0;
}

function isDivisibleBy100(input) {
	return input % 100 === 0;
}

function isDivisibleBy400(input) {
	return input % 400 === 0;
}

function isLeapYear(input) {
	if (isDivisibleBy100(input)) {
		return isDivisibleBy400(input);
	}
	return isDivisibleBy4(input);
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
