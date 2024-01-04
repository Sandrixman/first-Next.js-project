"use client";
import { firstLevelMenu } from "@/api/firstLevelMenu";
import { MenuItem, PageData } from "@/interfaces/menu.interface";
import Link from "next/link";
import cn from "classnames";
import style from "./BuildMenu.module.css";
import { usePathname } from "next/navigation";

interface BuildMenuProps {
    courses: MenuItem[];
}

export const BuildMenu: React.FC<BuildMenuProps> = ({ courses }) => {
    const pathname = usePathname();
    // needs to compare with the current menu item
    const lastSegment = pathname.substring(pathname.lastIndexOf("/") + 1);

    const firstCategory = 1;
    if (!courses) {
        console.log("No courses");
    }

    const buildMenu = () => {
        return (
            <ul>
                {firstLevelMenu.map(({ route, name, icon, id }) => (
                    <li
                        key={route}
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
        return (
            <ul className={style.secondBlock}>
                {courses.map((item) => (
                    <li key={item._id} className={style.secondLevel}>
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
