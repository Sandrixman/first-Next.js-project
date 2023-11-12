import style from "./Sidebar.module.css";
import BuildMenu from "@/app/components/BuildMenu";

export async function Sidebar() {
    return (
        <nav className={style.sidebar}>
            <input type="text" placeholder="Поиск..." />
            <BuildMenu />
        </nav>
    );
}
