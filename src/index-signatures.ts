export {};

interface Profile {
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

// インデックスシグネチャ
let profile: Profile = {
  name: "ほげ",
  underTwenty: false,
};

// How to write index signatures
// { [index: typeForIndex]: typeForValue }
profile.name = "hoge"
profile.age = 20
profile.nationality = "Japan"