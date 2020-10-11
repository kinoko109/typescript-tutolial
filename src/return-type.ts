export {};

function add(a: number, b: number) {
    return a + b;
}

console.log(add(1, 2));

type ReturnTypeFromAdd = ReturnType<typeof add>;

// ==================================================

function callName(name: string) {
    return name;
}

type ReturnTypeCallName = ReturnType<typeof callName>
