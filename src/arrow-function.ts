export {};

// アロー関数にアノテーション
let bmi: (h: number, w: number) => number = (h: number, w: number): number => w / (h * h);

console.log(bmi(1.7, 70));