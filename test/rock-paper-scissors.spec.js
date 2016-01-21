'use strict';

function game() {
	return 'tie';
}

describe('rock paper scissors game', function () {

	it('should be a function', function () {
		expect(game).to.be.instanceof(Function);
	});

	it('should return tie if input 1 is rock and input 2 is rock', function () {
		expect(game('rock', 'rock')).to.equal('tie');
	});

});
