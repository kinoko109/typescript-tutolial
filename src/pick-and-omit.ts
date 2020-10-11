export {};

type DetailedProfile = {
    name: string;
    height: number;
    weight: number;
};

// Pick 抜き取る
type SimpleProfile = Pick<DetailedProfile, "name" | "weight">; // name | weightになる

// Omit 除外する
type SmallProfile = Omit<DetailedProfile, "height">;
type MyOmit<T> = Pick<T, Exclude<keyof T, "height">>
type MySampleProfile = MyOmit<DetailedProfile>
