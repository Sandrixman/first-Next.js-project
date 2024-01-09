"use client";
import { MenuItem, PageData, MenuMap } from "@/interfaces/menu.interface";
import { mainMenu } from "@/api/firstLevelMenu";
import { FirstLevelMenu } from "./LevelsMenu/FirstLevelMenu";
import { SecondLevelMenu } from "./LevelsMenu/SecondLevelMenu";
import { ThirdLevelMenu } from "./LevelsMenu/ThirdLevelMenu";
import style from "./BuildMenu.module.css";
interface BuildMenuProps {
    courses: MenuItem[];
    services: MenuItem[];
}

export const BuildMenu: React.FC<BuildMenuProps> = ({ courses, services }) => {
    // to display menu items that depend on the selected route
    const menuMap: MenuMap = {
        courses,
        services,
    };

    const buildFirstLevelMenu = () => {
        return (
            <>
                <ul>
                    {mainMenu.map(({ route, name, icon, id }) => (
                        <FirstLevelMenu
                            key={route}
                            route={route}
                            name={name}
                            icon={icon}
                            id={id}
                            buildSecondLevelMenu={buildSecondLevelMenu}
                        />
                    ))}
                </ul>
            </>
        );
    };

    const buildSecondLevelMenu = (route: string) => {
        const currentMenu = menuMap[route];

        return (
            <ul className={style.secondLevelBlock}>
                {currentMenu.map((item) => (
                    <SecondLevelMenu
                        key={item._id}
                        route={route}
                        id={item._id}
                        firstCategory={item.firstCategory}
                        pages={item.pages}
                        buildThirdLevelMenu={buildThirdLevelMenu}
                    />
                ))}
            </ul>
        );
    };

    const buildThirdLevelMenu = (pages: PageData[], route: string) => {
        return (
            <ul>
                {pages.map(({ _id, alias, category }) => (
                    <ThirdLevelMenu
                        key={_id}
                        id={_id}
                        alias={alias}
                        route={route}
                        category={category}
                    />
                ))}
            </ul>
        );
    };

    return <>{buildFirstLevelMenu()}</>;
};
