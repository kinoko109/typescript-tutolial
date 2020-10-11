export {};

const debugProfile = (name: string, age: number) => {
    console.log({name, age});
}

debugProfile("Hoge", 20);

// Parameters
type ProFile = Parameters<typeof debugProfile> // [name, number] タプルとして型を取得できる。

const profile: ProFile = ["Fuga", 23];

debugProfile(...profile);
