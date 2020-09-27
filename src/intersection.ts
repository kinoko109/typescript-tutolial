export {};

// 交差型 intersection

type speed1 = {
  slow: number;
}

type speed2 = {
  normal: number;
}

const hoge: speed1 = {
  slow: 1000
}

const huga: speed2 = {
  normal: 2000
}

// type speed3 = {
//   slow: number;
//   normal: number;
// }

// &でつなげることにより、交差型(intersection)を実現
type speed3 = speed1 & speed2;

const foo: speed3 = {
  slow: 1500,
  normal: 2000,
}