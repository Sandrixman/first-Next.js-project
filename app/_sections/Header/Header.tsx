import style from "./Header.module.css";
import Logo from "../../../public/logo.svg";

export const Header = () => {
    return (
        <header className={style.header}>
            <a className={style.logo} href="./">
                <Logo />
                <div>
                    OWL<span>top</span>
                </div>
            </a>
        </header>
    );
};
