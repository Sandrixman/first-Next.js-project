import { ReactNode, useState } from "react";
import { Htag } from "@/components";
import cn from "classnames";
import style from "../BuildMenu.module.css";

interface FirstLevelMenuProps {
    route: string;
    name: string;
    icon: ReactNode;
    id: number;
    buildSecondLevelMenu: (route: string) => ReactNode;
}

export const FirstLevelMenu: React.FC<FirstLevelMenuProps> = ({
    route,
    name,
    icon,
    id,
    buildSecondLevelMenu,
}) => {
    const [openSecondLevel, setOpenSecondLevel] = useState<number | null>(null);

    const onToggleSecondLevelMenu = (): void => {
        // makes possible to open and close the menu
        setOpenSecondLevel((prevId) => (prevId === id ? null : id));
    };

    // opens menu only if clicking on Htag or icon
    const isClickOnHtagOrIcon = (e: React.MouseEvent): void => {
        const target = e.target as HTMLElement;

        if (["DIV", "path", "svg"].includes(target.tagName)) {
            onToggleSecondLevelMenu();
        }
    };

    return (
        <li className={style.firstLevelWrapper}>
            <span
                onClick={(e) => isClickOnHtagOrIcon(e)}
                className={cn(style.firstLevel, {
                    [style.activeMenu]: id === openSecondLevel,
                })}
            >
                {icon}
                <Htag tag="h2">{name}</Htag>
            </span>
            {id === openSecondLevel && buildSecondLevelMenu(route)}
        </li>
    );
};
