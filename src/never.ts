export {};

function error(message: string): never {
  throw new Error(message);
}

try {
  error("test");
} catch {
  console.log({ error });
}

// nevar型を返す場合のみ代入可能
let bar: never = error("エラー");

// これはエラー
// let fuga: never = undefined;