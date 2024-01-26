"use client";
import { useState } from "react";
import { SearchProps } from "./Search.props";
import { Button, Input } from "@/src/components";
import SearchIcon from "@/src/public/search.svg";
import cn from "classnames";
import style from "./Search.module.css";
import { useRouter } from "next/navigation";

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
    const [search, setSearch] = useState("");
    const router = useRouter();

    const OnSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (search) {
            router.push(`/search?search=${search}`);
        }
        setSearch("");
    };

    return (
        <form className={cn(style.search, className)} {...props} role="Search" onSubmit={OnSearch}>
            <Input
                className={style.searchInput}
                placeholder="Пошук курсів"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <Button className={style.searchButton} type="submit" aria-label="Пошук курсів">
                <SearchIcon className={style.searchIcon} />
            </Button>
        </form>
    );
};
