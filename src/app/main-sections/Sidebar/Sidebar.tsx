"use client";
import { useScrollY } from "@/src/hooks/useScrollY";
import { MainInfo } from "@/src/interfaces/menu.interface";
import { BuildMenu } from "@/src/app/main-components";
import { Search } from "@/src/components";
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
