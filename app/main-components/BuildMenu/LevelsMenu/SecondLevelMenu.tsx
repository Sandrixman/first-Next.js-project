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
    const [openThirdLevel, setOpenThirdLevel] = useState(false);

    const changedPages = (): PageData[] => {
        return pages.map((page) => ({ ...page, isOpened: openThirdLevel }));
    };

    const onToggleThirdLevelMenu = (): void => {
        setOpenThirdLevel(!openThirdLevel);
    };

    const handleKeyPress = (event: React.KeyboardEvent): void => {
        if (event.code === "Enter" || event.code === "Space") {
            event.preventDefault();
            onToggleThirdLevelMenu();
        }
    };

    return (
        <motion.li
            variants={variants}
            initial={"hidden"}
            animate={openThirdLevel ? "visible" : "hidden"}
            className={style.secondLevel}
        >
            {/* button prevents onToggleThirdLevelMenu from running on child elements */}
            <button
                className={style.secondLevelItem}
                onClick={onToggleThirdLevelMenu}
                onKeyDown={handleKeyPress}
            >
                {firstCategory}
            </button>
            {buildThirdLevelMenu(changedPages(), route)}
        </motion.li>
    );
};
