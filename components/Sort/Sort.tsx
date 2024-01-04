import React from "react";
import { SortEnum, SortProps } from "./Sort.props";
import SortIcon from "@/public/sort.svg";
import cn from "classnames";
import style from "./Sort.module.css";

export const Sort = ({ sort, className }: SortProps): JSX.Element => {
    return (
        <div className={cn(style.sort, className)}>
            <span
                // onClick={() => setSort(SortEnum.rating)}
                className={cn({ [style.active]: sort === SortEnum.rating })}
            >
                <SortIcon className={style.icon} /> По рейтингу
            </span>
            <span
                // onClick={() => setSort(SortEnum.price)}
                className={cn({ [style.active]: sort === SortEnum.price })}
            >
                <SortIcon className={style.icon} /> По ціні
            </span>
        </div>
    );
};
