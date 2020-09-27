export {};

// readonly
type Profile = {
  name: string;
  age: number;
}

const me: Profile = {
  name: "hoge",
  age: 12,
}

me.age++;

console.log(me);

type Personal = Readonly<Profile>;

const friend: Personal = {
  name: "fga",
  age: 46
}

// 以下はエラー（readonlyなので変えられない）
// friend.age++;