"use client";
import { useState } from "react";
import { SearchProps } from "./Search.props";
import { Button, Input } from "@/components";
import SearchIcon from "@/public/search.svg";
import cn from "classnames";
import style from "./Search.module.css";

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
    const [search, setSearch] = useState("");

    const OnSearch = () => {
        setSearch("");
    };

    return (
        <div className={cn(style.search, className)} {...props}>
            <Input
                className={style.searchInput}
                placeholder="Пошук..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <Button className={style.searchButton} onClick={OnSearch}>
                <SearchIcon className={style.searchIcon} />
            </Button>
        </div>
    );
};
