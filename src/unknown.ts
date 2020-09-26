export {};

const doSome = (): number => 43;

let numberAny: any = doSome();
let numberUnknown: unknown = doSome();

let sumAny = numberAny + 10;

// typeofを使用することによりnumber型だとなる
// console.log(typeof numberUnknown);

// 以下はunknown型だから+10できないよ、というエラー
// let sumUnkown = numberUnknown + 10;

// typeof で判定することにより特定の型だと確認できたら上記のエラーは出ない
// ↓型ガード
if (typeof numberUnknown === "number") {
  let sumUnkown = numberUnknown + 10;
  console.log(sumUnkown);
}