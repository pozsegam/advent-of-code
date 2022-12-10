import { readFile } from '../readFile';
import { alphabet } from './alphabet';

const data = readFile("input.txt").trim().split("\n");

// let duplicates: Set<string> = new Set();
const sample = "vJrwpWtwJgWrhcsFMMfFFhFp";

const findItem = (array: string) => {
  const halfIndex = array.length / 2;
  const [firstHalf, secondHalf] = [
    array.slice(0, halfIndex),
    array.slice(halfIndex),
  ];

  //converting firsthalf to set, to use has func
  const firstHalfSet = new Set(firstHalf);

  const intersection = [...secondHalf].find((item) => firstHalfSet.has(item));
  return intersection;
};

const sumReducer = (a: number, b: number) => a + b;

const getItemValue = (item: any) =>
  item.charCodeAt(0) - (/[a-z]/.test(item) ? 96 : 38);

const commonItems = data.map(findItem);
const values = commonItems.map(getItemValue);
let sum = values.reduce(sumReducer, 0);
console.log(sum);
