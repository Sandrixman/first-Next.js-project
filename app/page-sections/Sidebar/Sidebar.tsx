import style from "./Sidebar.module.css";
import { BuildMenu } from "@/app/components";
import { getCourses } from "@/api/api";

export async function Sidebar() {
    const courses = await getCourses();

    return (
        <nav className={style.sidebar}>
            <input type="text" placeholder="Поиск..." />
            <BuildMenu courses={courses} />
        </nav>
    );
}
