# Requirements

- The function should return the game's outcome as string
- The function should have 2 string inputs (shapes)

Examples:
+ rock:rock = tie
+ scissors:scissors = tie
+ paper:rock = p1
+ rock:scissors = p1
+ scissors:paper = p1
+ rock:paper = p2
+ scissors:rock = p2
- paper:scissors = p2

Refactor ideas:
- group the tests based on outcome

- 2 players
- 3 shapes : rock, paper, scissors
- outcomes : P1, P2, Tie
+ rules :
	- rock beats scissors
	- scissors beats paper
	- paper beats rock
	- same chosen shapes is a tie
