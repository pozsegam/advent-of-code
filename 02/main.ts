import { readFile } from '../readFile';

const OPPONENT_CHOICE = {
  ROCK: "A",
  PAPER: "B",
  SCISSORS: "C",
};

const PLAYER_CHOICE = {
  ROCK: "X",
  PAPER: "Y",
  SCISSORS: "Z",
};

const POINT = {
  WIN: 6,
  DRAW: 3,
  LOSS: 0,
  ROCK: 1,
  PAPER: 2,
  SCISSORS: 3,
};
const OUTCOME = {
  WIN: "Z",
  LOSS: "X",
  DRAW: "Y",
};

let data: string[][];

const trimData = () => {
  let readData = readFile("input.txt");
  let splitData = readData.split("\n");
  data = splitData.map((item) => item.split(" "));
};

const first = () => {
  let score = 0;
  data.map((item) => {
    const opponentChoice = item[0];
    const playerChoice = item[1];
    if (playerChoice === PLAYER_CHOICE.PAPER) {
      if (opponentChoice === OPPONENT_CHOICE.PAPER) {
        score += POINT.DRAW + POINT.PAPER;
      } else if (opponentChoice === OPPONENT_CHOICE.ROCK) {
        score += POINT.PAPER + POINT.WIN;
      } else {
        score += POINT.PAPER + POINT.LOSS;
      }
    } else if (playerChoice === PLAYER_CHOICE.ROCK) {
      if (opponentChoice === OPPONENT_CHOICE.PAPER) {
        score += POINT.ROCK + POINT.LOSS;
      } else if (opponentChoice === OPPONENT_CHOICE.ROCK) {
        score += POINT.DRAW + POINT.ROCK;
      } else if (opponentChoice === OPPONENT_CHOICE.SCISSORS) {
        score += POINT.WIN + POINT.ROCK;
      }
    } else {
      if (opponentChoice === OPPONENT_CHOICE.PAPER) {
        score += POINT.WIN + POINT.SCISSORS;
      } else if (opponentChoice === OPPONENT_CHOICE.ROCK) {
        score += POINT.LOSS + POINT.SCISSORS;
      } else {
        score += POINT.DRAW + POINT.SCISSORS;
      }
    }
  });
  console.log(score);
};

const second = () => {
  let score = 0;
  data.map((item) => {
    const opponentChoice = item[0];
    const outcome = item[1];
    if (outcome === OUTCOME.LOSS) {
      if (opponentChoice === OPPONENT_CHOICE.PAPER) {
        score += POINT.LOSS + POINT.ROCK;
      } else if (opponentChoice === OPPONENT_CHOICE.ROCK) {
        score += POINT.LOSS + POINT.SCISSORS;
      } else {
        score += POINT.LOSS + POINT.PAPER;
      }
    } else if (outcome === OUTCOME.WIN) {
      if (opponentChoice === OPPONENT_CHOICE.PAPER) {
        score += POINT.WIN + POINT.SCISSORS;
      } else if (opponentChoice === OPPONENT_CHOICE.ROCK) {
        score += POINT.WIN + POINT.PAPER;
      } else {
        score += POINT.WIN + POINT.ROCK;
      }
    } else {
      if (opponentChoice === OPPONENT_CHOICE.ROCK) {
        score += POINT.DRAW + POINT.ROCK;
      } else if (opponentChoice === OPPONENT_CHOICE.PAPER) {
        score += POINT.DRAW + POINT.PAPER;
      } else {
        score += POINT.DRAW + POINT.SCISSORS;
      }
    }
  });
  console.log(score);
};

trimData();
first();
second();
