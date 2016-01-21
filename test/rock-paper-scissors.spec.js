'use strict';

function lizardWinsOver(p2) {
	return (p2 === 'spock' || p2 === 'paper');
}

function game(p1, p2) {
	if (p1 === p2){
		return 'tie';
	}

	if (p1 === 'lizard' && lizardWinsOver(p2))  {
		return 'P1';
	}
	if ((p1 === 'paper' && p2 === 'rock')
		|| (p1 === 'rock' && p2 === 'scissors')
		|| (p1 === 'scissors' && p2 === 'paper')
	) {
		return 'P1';
	}
	return 'P2';
}

describe('rock paper scissors game', function () {

	it('should return tie when the two shapes are the same', function () {
		expect(game('rock', 'rock')).to.equal('tie');
		expect(game('scissors', 'scissors')).to.equal('tie');
	});

	it('should result in P1 win when p1 plays paper and p2 plays rock', function () {
		expect(game('paper', 'rock')).to.equal('P1');
	});

	it('should result in P1 winning if p1 plays rock and p2 plays scissors', function () {
		expect(game('rock', 'scissors')).to.equal('P1');
	});

	it('should result in P1 winning if p1 plays scissors and p2 plays paper', function () {
		expect(game('scissors', 'paper')).to.equal('P1');
	});

	it('should result in P1 winning if p1 plays lizard and p2 plays spock', function () {
		expect(game('lizard', 'spock')).to.equal('P1');
	});

	it('should result in P1 winning if p1 plays lizard and p2 plays paper', function () {
		expect(game('lizard', 'paper')).to.equal('P1');
	});

	it('should result in P2 winning if p1 plays scissors and p2 plays rock', function () {
		expect(game('scissors', 'rock')).to.equal('P2');
	});

	it('should result in P2 winning if p1 plays rock and p2 plays paper', function () {
		expect(game('rock', 'paper')).to.equal('P2');
	});

	it('should result in P2 winning if p1 plays paper and p2 plays scissors', function () {
		expect(game('paper', 'scissors')).to.equal('P2');
	});

});
