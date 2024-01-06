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
    const [openSecondLevel, setOpenSecondLevel] = useState(0);

    const onToggleSecondLevelMenu = (id: number): void => {
        // makes possible to open and close the menu
        setOpenSecondLevel((prevId) => (prevId === id ? 0 : id));
    };

    // opens menu only if clicking on Htag or icon
    const isClickOnHtagOrIcon = (target: HTMLElement, id: number): void => {
        const isClickableElement = ["DIV", "path", "svg"].includes(target.tagName);
        if (isClickableElement) {
            onToggleSecondLevelMenu(id);
        }
    };

    return (
        <li key={route}>
            <span
                onClick={(e) => {
                    const target = e.target as HTMLElement;
                    isClickOnHtagOrIcon(target, id);
                }}
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
