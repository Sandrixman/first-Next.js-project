"use client";
import { PageData, MainInfo } from "@/interfaces/menu.interface";
import { mainMenu } from "@/api/mainMenu";
import { FirstLevelMenu } from "./LevelsMenu/FirstLevelMenu";
import { SecondLevelMenu } from "./LevelsMenu/SecondLevelMenu";
import { ThirdLevelMenu } from "./LevelsMenu/ThirdLevelMenu";
import style from "./BuildMenu.module.css";

export const BuildMenu: React.FC<MainInfo> = ({ courses, services, books, products }) => {
    // to display menu items that depend on the selected route
    const menuMap: MainInfo = {
        courses,
        services,
        books,
        products,
    };

    const buildFirstLevelMenu = () => {
        return (
            <>
                <ul>
                    {mainMenu.map(({ route, name, icon }) => (
                        <FirstLevelMenu
                            key={route}
                            route={route}
                            name={name}
                            icon={icon}
                            buildSecondLevelMenu={buildSecondLevelMenu}
                        />
                    ))}
                </ul>
            </>
        );
    };

    const buildSecondLevelMenu = (route: string) => {
        const currentMenu = menuMap[route];

        if (currentMenu) {
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
        } else {
            return <div>Error</div>;
        }
    };

    const buildThirdLevelMenu = (pages: PageData[], route: string) => {
        return (
            <ul>
                {pages.map(({ _id, alias, category, isOpened = false }) => (
                    <ThirdLevelMenu
                        key={_id}
                        id={_id}
                        alias={alias}
                        route={route}
                        category={category}
                        isOpened={isOpened}
                    />
                ))}
            </ul>
        );
    };

    return <>{buildFirstLevelMenu()}</>;
};
