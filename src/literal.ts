export {};

// Literal型
// literalとunionでアノテーション
let dayOfWeek: "日" | "月" | "火" | "水" | "木" | "金" | "土" = "日";
dayOfWeek = "月";

// 以下はエラー
// dayOfWeek = "31";