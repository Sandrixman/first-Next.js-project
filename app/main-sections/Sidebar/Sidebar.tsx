"use client";
import { MainInfo } from "@/interfaces/menu.interface";
import { BuildMenu } from "@/app/main-components";
import { Search } from "@/components";
import style from "./Sidebar.module.css";

export function Sidebar(mainInfo: MainInfo) {
    return (
        <div className={style.sidebar}>
            <Search />

            <BuildMenu {...mainInfo} />
        </div>
    );
}
