export {};

// 無名関数にアノテーション
let bmi: (h: number, w: number) => number = function(h: number, w: number): number {
  return w / (h * h);
}

console.log(bmi(1.7, 70));