export {};

// ジェネリクス
// const echo = (arg: number): number => {
//   return arg;
// }

// const echo = (arg: string): string => {
//   return arg;
// }

// ジェネリクスの書き方 <T> Tは他にも、
const echo = <T>(arg: T): T => {
  return arg;
}

console.log(echo<number>(100));
console.log(echo<string>("Hello"));
console.log(echo<boolean>(true));

// classのジェネリクス
// class Mirror {
//   constructor(public value: number) {}

//   echo(): number {
//     return this.value;
//   }
// }

// console.log(new Mirror(123).echo());

// ↓ ジェネリクス化

class Mirror<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
}

console.log(new Mirror<number>(1000).echo());
console.log(new Mirror<string>("class").echo());
console.log(new Mirror<boolean>(true).echo());