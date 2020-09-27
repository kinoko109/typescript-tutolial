export {};

// 型アサーション
// より制約を強くできる
let name: any = "hoge";

// let length = name.length as number;
let length = (name as string).length;
// let length = (<string>name).length; // この書き方のアサーションは非推奨（jsxの記法と似ているため）

console.log(length);

// エラー
// length = "foo";
length = 123;