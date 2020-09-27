export {};

// partial
// すべてをオプショナルの型にしたいときに使用
type Profile = {
  name: string;
  age: number;
  zipCode: number;
}

type PartialType = Partial<Profile>;

// required
// すべてを必須にしたいときに使用
type Profile2 = {
  name: string;
  age?: number;
  zipCode: number;
}

type PartialType2 = Required<Profile2>;