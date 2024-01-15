"use client";
import { Suspense } from "react";
import { MainInfo } from "@/interfaces/menu.interface";
import { BuildMenu } from "@/app/main-components";
import { Search } from "@/components";
import style from "./Sidebar.module.css";

export function Sidebar(mainInfo: MainInfo) {
    return (
        <div className={style.sidebarItems}>
            <Search />

            <Suspense fallback={<div>Loading...</div>}>
                <BuildMenu {...mainInfo} />
            </Suspense>
        </div>
    );
}
