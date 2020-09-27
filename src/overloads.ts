export {};

function double(value: number): number;
function double(value: string): string;

// オーバーロード
function double(value: any): any {
  if(typeof value === "number") return value * 2;
  if(typeof value === "string") return value + value;
  // 以下は、シグネチャでガードしてるからいらない
  // throw "numberでもstringでもない";
}

// function double(value: string): string {
//   return value + value;
// }

console.log(double(100));
console.log(double("Hello "));

// 以下はシグネチャのおかげでエラーになる
// console.log(double(true));