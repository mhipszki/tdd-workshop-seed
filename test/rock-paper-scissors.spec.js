'use strict';

function game(p1, p2) {
	if (p1 === 'rock' && p2 === 'rock'){
		return 'tie';
	}
	if (p1 === 'paper' && p2 === 'rock'){
		return 'P1';
	}
}

describe('rock paper scissors game', function () {

	it('should be a function', function () {
		expect(game).to.be.instanceof(Function);
	});

	it('should return tie if input 1 is rock and input 2 is rock', function () {
		expect(game('rock', 'rock')).to.equal('tie');
	});

	it('should result in P1 win when p1 plays paper and p2 plays rock', function () {
		expect(game('paper', 'rock')).to.equal('P1');
	});

});
