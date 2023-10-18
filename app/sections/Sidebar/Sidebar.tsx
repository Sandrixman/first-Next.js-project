import Link from "next/link";
import style from "./Sidebar.module.css";

export const Sidebar = () => {
    return (
        <nav className={style.sidebar}>
            <Link href="/">Home page</Link>
            <Link href="/about">About</Link>
        </nav>
    );
};
