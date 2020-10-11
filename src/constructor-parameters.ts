export {};

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

let taro = new Person("Hoge", 22);

console.log(taro);

type PersonType = typeof Person;

// ConstructorParameters
type Profile = ConstructorParameters<PersonType>;

const profile: Profile = ["Fuga", 24];
const fuga = new Person(...profile);

console.log(fuga);
