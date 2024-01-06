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
    id,
    route,
    firstCategory,
    pages,
    buildThirdLevelMenu,
}) => {
    const [openThirdLevel, setOpenThirdLevel] = useState<string | null>(null);

    const onToggleThirdLevelMenu = (category: string): void => {
        setOpenThirdLevel(openThirdLevel === category ? null : category);
    };

    return (
        <li key={id} className={style.secondLevel}>
            <div onClick={() => onToggleThirdLevelMenu(firstCategory)}>{firstCategory}</div>
            {openThirdLevel === firstCategory && buildThirdLevelMenu(pages, route)}
        </li>
    );
};
