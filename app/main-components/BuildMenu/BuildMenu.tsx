"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { firstLevelMenu } from "@/api/firstLevelMenu";
import { MenuItem, PageData, MenuMap } from "@/interfaces/menu.interface";
import Link from "next/link";
import cn from "classnames";
import style from "./BuildMenu.module.css";

interface BuildMenuProps {
    courses: MenuItem[];
    services: MenuItem[];
}

export const BuildMenu: React.FC<BuildMenuProps> = ({ courses, services }) => {
    const [firstCategory, setFirstCategory] = useState(0);
    const pathname = usePathname();
    // needs to compare with the current menu item
    const lastSegment = pathname.substring(pathname.lastIndexOf("/") + 1);

    // to display menu items that depend on the selected route
    const menuMap: MenuMap = {
        courses,
        services,
    };

    const onOpenMenu = (id: number) => {
        if (id === firstCategory) {
            setFirstCategory(0);
        } else {
            setFirstCategory(id);
        }
    };

    // prevents activation onOpenMenu inside the menu
    const onInsideMenuItem = (event: React.MouseEvent) => {
        event.stopPropagation();
    };

    const buildMenu = () => {
        return (
            <ul>
                {firstLevelMenu.map(({ route, name, icon, id }) => (
                    <li
                        key={route}
                        onClick={() => onOpenMenu(id)}
                        className={cn(style.firstLevel, {
                            [style.firstLevelActive]: id === firstCategory,
                        })}
                    >
                        {icon}
                        {name}
                        {id === firstCategory && buildSecondLevel(route)}
                    </li>
                ))}
            </ul>
        );
    };

    const buildSecondLevel = (route: string) => {
        const currentMenu = menuMap[route] || [];

        return (
            <ul className={style.secondBlock}>
                {currentMenu.map((item) => (
                    <li
                        key={item._id}
                        onClick={(e) => onInsideMenuItem(e)}
                        className={style.secondLevel}
                    >
                        {item.firstCategory}
                        <div
                            className={cn({
                                [style.opened]: item.isOpened,
                            })}
                        >
                            {true && buildThirdLevel(item.pages, route)}
                        </div>
                    </li>
                ))}
            </ul>
        );
    };

    const buildThirdLevel = (pages: PageData[], route: string) => {
        return (
            <ul>
                {pages.map((thirdCategory) => (
                    <li
                        key={thirdCategory._id}
                        className={cn(style.thirdLevel, {
                            [style.thirdLevelActive]:
                                thirdCategory.alias === lastSegment,
                        })}
                    >
                        <Link href={`/${route}/${thirdCategory.alias}`}>
                            {thirdCategory.category}
                        </Link>
                    </li>
                ))}
            </ul>
        );
    };

    return <>{buildMenu()}</>;
};
