"use client";
import { useScrollY } from "@/hooks/useScrollY";
import { MainInfo } from "@/interfaces/menu.interface";
import { BuildMenu } from "@/app/main-components";
import { Search } from "@/components";
import cn from "classnames";
import style from "./Sidebar.module.css";

export function Sidebar(mainInfo: MainInfo) {
    const y = useScrollY();

    return (
        <div
            className={cn(
                {
                    [style.fixed]: y >= 100,
                },
                style.sidebar
            )}
        >
            <Search />

            <BuildMenu {...mainInfo} />
        </div>
    );
}
