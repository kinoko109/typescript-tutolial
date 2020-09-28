export {};

type DebugType = () => void;
type SomeType = string | number | DebugType;

// exclude（除外）
type FunctionType = Exclude<SomeType, string | number>

// functionを除外
type NunFunctionType = Exclude<SomeType, DebugType>
type TypeExcludeFunction = Exclude<SomeType, Function> // Functionを指定すればfunction除外となる

// extract（抽出）
type FunctionTypeByExtract = Extract<SomeType, DebugType> // 
type NonFunctionTypeByExtract = Extract<SomeType, string | number>
type FunctionTypeExtractingFunction = Extract<SomeType, Function>

// nonnullable（nullやundefinedを除外）
type NullableType = string | number | null | undefined
type NonnullableType = NonNullable<NullableType>