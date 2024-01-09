import { Suspense } from "react";
import { BuildMenu } from "@/app/main-components";
import { getCourses, getServices } from "@/api/api";
import { Search } from "@/components";
import style from "./HamburgerMenu.module.css";

export async function HamburgerMenu() {
    const courses = await getCourses();
    const services = await getServices();

    return (
        <nav className={style.hamburger}>
            <div>X</div>
        </nav>
    );
}
