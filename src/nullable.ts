export {};

// nullable

// nullableなデータのコンパイルエラーをなくしたい場合はtsconfig.jsonの「strictNullChecks」をfalseにするとエラーにならない

// 以下はエラー
// let profile: {
//   name: string,
//   age: number,
// } = {
//   name: "hoge",
//   age: null,
// }

// nullを許容したい時はunionで型をつける
let profile: {
  name: string,
  age: number | null,
} = {
  name: "hoge",
  age: null,
}