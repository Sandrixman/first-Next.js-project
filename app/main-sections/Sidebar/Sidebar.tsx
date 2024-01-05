import style from "./Sidebar.module.css";
import { BuildMenu } from "@/app/main-components";
import { getCourses, getServices } from "@/api/api";
import { Suspense } from "react";

export async function Sidebar() {
    const courses = await getCourses();
    const services = await getServices();

    return (
        <nav className={style.sidebar}>
            <input type="text" placeholder="Поиск..." />
            <Suspense fallback={<div>Loading...</div>}>
                <BuildMenu courses={courses} services={services} />
            </Suspense>
        </nav>
    );
}
