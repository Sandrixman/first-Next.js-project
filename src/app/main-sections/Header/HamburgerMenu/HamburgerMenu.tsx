"use client";
import { ButtonIcon } from "@/src/components/ButtonIcon/ButtonIcon";
import style from "./HamburgerMenu.module.css";

interface HamburgerMenuProps {
    toggleMenu: boolean;
    setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ toggleMenu, setToggleMenu }) => {
    const onToggleMenu = () => {
        setToggleMenu(!toggleMenu);
        if (!toggleMenu) {
            document.documentElement.style.overflowY = "hidden";
        } else {
            document.documentElement.style.overflowY = "auto";
        }
    };

    return (
        <div className={style.hamburger}>
            <ButtonIcon
                appearance="white"
                icon={toggleMenu ? "close" : "menu"}
                onClick={onToggleMenu}
            />
        </div>
    );
};
