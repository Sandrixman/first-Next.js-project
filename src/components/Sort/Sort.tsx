"use client";
import React from "react";
import { SortEnum, SortProps } from "./Sort.props";
import SortIcon from "@/src/public/sort.svg";
import cn from "classnames";
import style from "./Sort.module.css";

export const Sort = ({ sort, setSort, className }: SortProps): JSX.Element => {
    return (
        <div className={cn(style.sort, className)}>
            <button
                onClick={() => setSort(SortEnum.rating)}
                className={cn({ [style.active]: sort === SortEnum.rating })}
            >
                <SortIcon className={style.icon} /> По рейтингу
            </button>
            <button
                onClick={() => setSort(SortEnum.price)}
                className={cn({ [style.active]: sort === SortEnum.price })}
            >
                <SortIcon className={style.icon} /> По ціні
            </button>
        </div>
    );
};
