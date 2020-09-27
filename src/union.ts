export {};

// Union型
// | でつなげることにより、Union型を実現
let value: number | string = 1;
value = "foo";
value = 100;