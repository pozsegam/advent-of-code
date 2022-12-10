const fs = require("fs");
let data: [string];
let trimmedData: number[];
try {
  data = fs.readFileSync("input.txt", "utf8").split("\n\n");
} catch (e: any) {
  console.log("Error:", e.stack);
}

const prepData = (): void => {
  const strGroups = data.map((item: string) => item.split("\n"));
  const intGropus = strGroups.map((array) => array.map((item) => Number(item)));
  const sumOfCalories = intGropus.map((array) => array.reduce(sumReducer, 0));
  trimmedData = sumOfCalories;
};

const sumReducer = (a: number, b: number) => a + b;

const first = () => {
  const max = Math.max(...trimmedData);
  return max;
};

const second = () => {
  const topThree = trimmedData.sort((a, b) => b - a).slice(0, 3);
  const sumOfTopThree = topThree.reduce(sumReducer, 0);
  return sumOfTopThree;
};

prepData();
first();
second();
