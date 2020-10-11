export {};

type MyExclued = DebugType;
type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type MyFunctionType = MyExclued
