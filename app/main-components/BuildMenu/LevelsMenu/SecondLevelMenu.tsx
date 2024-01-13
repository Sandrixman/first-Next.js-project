import { ReactNode, useState } from "react";
import { PageData } from "@/interfaces/menu.interface";
import { motion } from "framer-motion";
import style from "../BuildMenu.module.css";

interface SecondLevelMenuProps {
    id: string;
    route: string;
    firstCategory: string;
    pages: PageData[];
    buildThirdLevelMenu: (pages: PageData[], route: string) => ReactNode;
}

const variants = {
    visible: {
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
    },
    hidden: {},
};

export const SecondLevelMenu: React.FC<SecondLevelMenuProps> = ({
    route,
    firstCategory,
    pages,
    buildThirdLevelMenu,
}) => {
    const [openThirdLevel, setOpenThirdLevel] = useState<string | null>(null);

    const onToggleThirdLevelMenu = (): void => {
        setOpenThirdLevel((prevCategory) =>
            prevCategory === firstCategory ? null : firstCategory
        );
    };

    return (
        <motion.li
            variants={variants}
            initial={"hidden"}
            animate={openThirdLevel === firstCategory ? "visible" : "hidden"}
            className={style.secondLevel}
        >
            {/* div prevents onToggleThirdLevelMenu from running on child elements */}
            <div onClick={onToggleThirdLevelMenu}>{firstCategory}</div>
            {buildThirdLevelMenu(pages, route)}
        </motion.li>
    );
};
