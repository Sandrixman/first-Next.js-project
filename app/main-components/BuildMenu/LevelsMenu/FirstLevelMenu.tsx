import { ReactNode, useState } from "react";
import { Htag } from "@/components";
import cn from "classnames";
import style from "../BuildMenu.module.css";

interface FirstLevelMenuProps {
    route: string;
    name: string;
    icon: ReactNode;
    buildSecondLevelMenu: (route: string) => ReactNode;
}

export const FirstLevelMenu: React.FC<FirstLevelMenuProps> = ({
    route,
    name,
    icon,
    buildSecondLevelMenu,
}) => {
    const [openSecondLevel, setOpenSecondLevel] = useState(false);

    const onToggleSecondLevelMenu = (): void => {
        // makes possible to open and close the menu
        setOpenSecondLevel(!openSecondLevel);
    };

    // opens menu only if clicking on Htag or icon
    const isClickOnHtagOrIcon = (e: React.MouseEvent): void => {
        const target = e.target as HTMLElement;

        if (["DIV", "path", "svg"].includes(target.tagName)) {
            onToggleSecondLevelMenu();
        }
    };

    const handleKeyPress = (event: React.KeyboardEvent): void => {
        if (event.code === "Enter" || event.code === "Space") {
            event.preventDefault();
            onToggleSecondLevelMenu();
        }
    };

    return (
        <li className={style.firstLevelWrapper}>
            <span
                className={cn(style.firstLevel, {
                    [style.activeMenu]: openSecondLevel,
                })}
                onClick={isClickOnHtagOrIcon}
                onKeyDown={handleKeyPress}
                tabIndex={0}
            >
                {icon}
                <Htag tag="h2">{name}</Htag>
            </span>
            {openSecondLevel && buildSecondLevelMenu(route)}
        </li>
    );
};
