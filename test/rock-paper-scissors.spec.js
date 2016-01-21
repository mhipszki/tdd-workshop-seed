'use strict';

function game(p1, p2) {
	if (p1 === p2){
		return 'tie';
	}
	if (p1 === 'paper' && p2 === 'rock'){
		return 'P1';
	}
	if (p1 === 'scissors' && p2 === 'rock'){
		return 'P2';
	}
}

describe('rock paper scissors game', function () {

	it('should be a function', function () {
		expect(game).to.be.instanceof(Function);
	});

	it('should return tie if input 1 is rock and input 2 is rock', function () {
		expect(game('rock', 'rock')).to.equal('tie');
	});

	it('should return tie if input 1 is scissors and input 2 is scissors', function () {
		expect(game('scissors', 'scissors')).to.equal('tie');
	});

	it('should result in P1 win when p1 plays paper and p2 plays rock', function () {
		expect(game('paper', 'rock')).to.equal('P1');
	});

	it('should result in P2 winning if p1 plays scissors and p2 plays rock', function () {
		expect(game('scissors', 'rock')).to.equal('P2');
	});

});
