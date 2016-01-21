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
	if (p1 === 'rock' && p2 === 'scissors'){
		return 'P1';
	}
}

describe('rock paper scissors game', function () {

	it('should return tie when the two shapes are the same', function () {
		expect(game('rock', 'rock')).to.equal('tie');
		expect(game('scissors', 'scissors')).to.equal('tie');
	});

	it('should result in P1 win when p1 plays paper and p2 plays rock', function () {
		expect(game('paper', 'rock')).to.equal('P1');
	});

	it('should result in P2 winning if p1 plays scissors and p2 plays rock', function () {
		expect(game('scissors', 'rock')).to.equal('P2');
	});

	it('should result in P1 winning if p1 plays rock and p2 plays scissors', function () {
		expect(game('rock', 'scissors')).to.equal('P1');
	});
});
