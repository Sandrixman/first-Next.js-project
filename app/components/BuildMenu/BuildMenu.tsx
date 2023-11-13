import { firstLevelMenu, getMenu } from "@/api/menu";
import { PageItem } from "@/interfaces/menu.interface";
import Link from "next/link";
import cn from "classnames";
import style from "./BuildMenu.module.css";

async function BuildMenu() {
    const firstCategory = 0;
    const menu = await getMenu(firstCategory);

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
                {menu.map((item) => (
                    <li
                        key={item._id.secondCategory}
                        className={style.secondLevel}
                    >
                        {item._id.secondCategory}
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

    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            <ul>
                {pages.map((thirdCategory) => (
                    <li
                        key={thirdCategory._id}
                        className={cn(style.thirdLevel, {
                            [style.thirdLevelActive]:
                                thirdCategory.alias === route,
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
}

export default BuildMenu;
