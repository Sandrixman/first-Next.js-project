import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SortProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    sort: SortEnum;
    setSort: (arg: SortEnum) => void;
}

export enum SortEnum {
    rating = "rating",
    price = "price",
}
