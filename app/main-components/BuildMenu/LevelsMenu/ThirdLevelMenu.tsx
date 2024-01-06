import { usePathname } from "next/navigation";
import Link from "next/link";
import cn from "classnames";
import style from "../BuildMenu.module.css";

interface ThirdLevelMenuProps {
    id: string;
    alias: string;
    route: string;
    category: string;
}

export const ThirdLevelMenu: React.FC<ThirdLevelMenuProps> = ({ id, alias, route, category }) => {
    const pathname = usePathname();
    // needs to compare with the current menu item
    const lastSegment = pathname.substring(pathname.lastIndexOf("/") + 1);

    return (
        <li
            key={id}
            className={cn(style.thirdLevel, {
                [style.activeMenu]: alias === lastSegment,
            })}
        >
            <Link href={`/${route}/${alias}`}>{category}</Link>
        </li>
    );
};
