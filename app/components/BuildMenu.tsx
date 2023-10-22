import { firstLevelMenu, getMenu } from "@/api/menu";
import cn from "classnames";
import style from "./BuildMenu.module.css";
// import Link from "next/link";

async function BuildMenu() {
    const firstCategory = 0;
    const menu = await getMenu(firstCategory);

    const buildSecondLevel = () => {
        return (
            <>
                {menu.map((item) => (
                    <li key={item._id.secondCategory} className={style.second}>
                        {item._id.secondCategory}
                    </li>
                ))}
            </>
        );
    };

    const buildThirdLevel = () => {
        return (
            <>
                {menu.map((item) =>
                    item.pages.map((thirdCategory) => {
                        thirdCategory.alias && (
                            <li
                                key={thirdCategory._id}
                                className={cn(style.third, {
                                    // [style.active]: thirdCategory.alias === firstCategory,
                                })}
                            >
                                {thirdCategory.category}
                            </li>
                        );
                    })
                )}
            </>
        );
    };

    return (
        <ul>
            {firstLevelMenu.map((item) => (
                <li
                    key={item.route}
                    className={cn(style.menu, {
                        [style.active]: item.id === firstCategory,
                    })}
                >
                    {item.icon}
                    {item.name}
                    {item.id === firstCategory && buildSecondLevel()}
                    {item.id === firstCategory && buildThirdLevel()}
                </li>
            ))}
        </ul>
    );
}

export default BuildMenu;
