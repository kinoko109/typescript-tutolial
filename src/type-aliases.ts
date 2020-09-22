export {};

type Hoge = string;

const str: string = "Hello";
const str2: Hoge = "Hello";

const test = {
  name: "てすと",
  age: 25
}

type Fuga = {
  name: string;
  age: number;
}

const test2: Fuga = {
  name: "てすと",
  age: 20
}

type Foo = typeof test;