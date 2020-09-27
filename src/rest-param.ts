export {};

const reducer = (acc: number, current: number) => {
  return acc + current;
}

// rest パラメーター
const sum = (...values: number[]): number => {
  return values.reduce(reducer);
};

console.log(sum(2,2));

// [1,2,3,4].reduce(reducer);