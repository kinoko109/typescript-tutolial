export {};

// オプショナルパラメーター
// あってもなくてもいいよ、というもの
let bmi: (h: number, w: number, flg?: boolean) => number = (h: number, w: number, flg?: boolean): number => {
  const bmi = w / (h * h);
  if (flg) {
    console.log({bmi});
  }
  return bmi;
}

console.log(bmi(1.76, 69, true));
console.log(bmi(1.76, 69));

// bmi(身長, 体重, consoleで出力するかどうか)
// bmi(1.78, 60, true);
// bmi(1.78, 60, false);
// bmi(1.78, 60);