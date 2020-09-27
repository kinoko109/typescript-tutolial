export {};

// constアサーション
let name = "あつし"

name = "atsushi"

// as constで厳密なアノテーションを付与できる
// nicknnameの型はhoge
let nickname = "hoge" as const

// 以下はエラー
// nickname = "ほげ"

let profile = {
  name: "atsushi",
  height: 176,
} as const

// 以下はエラー
// profile.name = "ほげ"
// profile.height = 188

// 以下もエラー
// profile.name = "atsushi"
// profile.height = 176

// as constを付与することにより、readonlyになる