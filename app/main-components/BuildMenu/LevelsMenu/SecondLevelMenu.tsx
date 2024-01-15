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
            {/* div prevents onToggleThirdLevelMenu from running on child elements */}
            <div
                className={style.secondLevelTitle}
                onClick={onToggleThirdLevelMenu}
                onKeyDown={handleKeyPress}
                role="button"
                tabIndex={0}
            >
                {firstCategory}
            </div>
            {buildThirdLevelMenu(pages, route)}
        </motion.li>
    );
};
