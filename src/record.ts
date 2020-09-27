export {};

// Record<K, T>
type Prefectures = "Tokyo" | "Chiba" | "Shizuoka" | "Shiga";
type Korona = {
  name: string;
  count: number;
};

const korona: Record<Prefectures, Korona> = {
  Tokyo: {name: "ふー", count: 76},
  Chiba: {name: "ふが", count: 120},
  Shizuoka: {name: "ほげ", count: 33},
  Shiga: {name: "ｌｄｊがお", count: 54},
}