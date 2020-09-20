export {};
// タプル型
// 順序を考慮したいときなどに使う

type hoge = [string, number];

let test: hoge = ["test", 123];

// エラー
// let test2: hoge = [123, "test"];

console.log(test);