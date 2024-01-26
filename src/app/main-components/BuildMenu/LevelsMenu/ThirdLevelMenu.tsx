import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import cn from "classnames";
import style from "../BuildMenu.module.css";

interface ThirdLevelMenuProps {
    id: string;
    alias: string;
    route: string;
    category: string;
    isOpened: boolean;
}

const variantsChildren = {
    visible: {
        opacity: 1,
        height: 19,
        marginBottom: 10,
    },
    hidden: {
        opacity: 0,
        height: 0,
        marginBottom: 0,
    },
};

export const ThirdLevelMenu: React.FC<ThirdLevelMenuProps> = ({
    alias,
    route,
    category,
    isOpened,
}) => {
    const pathname = usePathname();
    // needs to compare with the current menu item
    const lastSegment = pathname.substring(pathname.lastIndexOf("/") + 1);

    return (
        <motion.li
            variants={variantsChildren}
            className={cn({
                [style.activeMenu]: alias === lastSegment,
            })}
        >
            <Link
                tabIndex={isOpened ? 0 : -1}
                className={style.thirdLevel}
                href={`/${route}/${alias}`}
            >
                {category}
            </Link>
        </motion.li>
    );
};
