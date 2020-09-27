export {};

type Profile = {
  name: string;
  age: number;
}

type PartialType = Partial<Profile>;
type PropertyType = keyof Profile; // "name" | "age"

// ある型を新しく別の型に拡張する→mapped typesという