"use client";
import { useState } from "react";
import { SearchProps } from "./Search.props";
import { Button, Input } from "@/components";
import SearchIcon from "@/public/search.svg";
import cn from "classnames";
import style from "./Search.module.css";
import { useRouter } from "next/navigation";

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
    const [search, setSearch] = useState("");
    const router = useRouter();

    const OnSearch = () => {
        router.push(`/search/${search}`);
        setSearch("");
    };

    return (
        <form className={cn(style.search, className)} {...props} role="Search">
            <Input
                className={style.searchInput}
                placeholder="Пошук по сайту"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <Button className={style.searchButton} onClick={OnSearch} aria-label="Пошук по сайту">
                <SearchIcon className={style.searchIcon} />
            </Button>
        </form>
    );
};
