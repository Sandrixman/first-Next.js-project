import Link from "next/link";
import style from "./Header.module.css";
import Logo from "@/public/logo.svg";

export const Header = () => {
    return (
        <header className={style.header}>
            <Link href="/" className={style.logo}>
                <Logo />
                <div>
                    OWL<span>top</span>
                </div>
            </Link>
        </header>
    );
};
