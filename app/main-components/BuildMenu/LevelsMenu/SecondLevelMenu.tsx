import { ReactNode, useState } from "react";
import { PageData } from "@/interfaces/menu.interface";
import style from "../BuildMenu.module.css";

interface SecondLevelMenuProps {
    id: string;
    route: string;
    firstCategory: string;
    pages: PageData[];
    buildThirdLevelMenu: (pages: PageData[], route: string) => ReactNode;
}

export const SecondLevelMenu: React.FC<SecondLevelMenuProps> = ({
    route,
    firstCategory,
    pages,
    buildThirdLevelMenu,
}) => {
    const [openThirdLevel, setOpenThirdLevel] = useState<string | null>(null);

    const onToggleThirdLevelMenu = (): void => {
        setOpenThirdLevel((prevCategory) =>
            prevCategory === firstCategory ? null : firstCategory
        );
    };

    return (
        <li className={style.secondLevel}>
            <div onClick={onToggleThirdLevelMenu}>{firstCategory}</div>
            {openThirdLevel === firstCategory && buildThirdLevelMenu(pages, route)}
        </li>
    );
};
