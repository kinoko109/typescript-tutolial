export {};

// 型の互換性セクション

// 互換性あり
let foo: any;
let bar: string = "typescript";

console.log(typeof foo); // undefined

// fooにbarを代入できる→型の互換性がある
foo = bar;

console.log(typeof foo); // string

// -------------------------------------------------

// 互換性なし
let hoge: string;
let fuga: number = 1;

// エラー
// hoge = fuga;

// リテラルの場合は互換性あり
let fooStringLiteral: "fooStringLiteral" = "fooStringLiteral";
hoge = fooStringLiteral;


// 型の互換性あり
interface Animal {
  // age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal;

me = new Person(24, "ほげ");