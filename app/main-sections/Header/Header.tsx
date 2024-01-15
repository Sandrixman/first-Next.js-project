"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { HamburgerMenu } from "./HamburgerMenu/HamburgerMenu";
import { MainInfo } from "@/interfaces/menu.interface";
import { Sidebar } from "..";
import Logo from "@/public/logo.svg";
import style from "./Header.module.css";

export const Header = (mainInfo: MainInfo) => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setToggleMenu(false);
        document.documentElement.style.overflowY = "auto";
    }, [pathname]);

    const variants = {
        opened: {
            opacity: 1,
            x: 0,
            transition: {
                stiffness: 20,
            },
        },
        closed: { opacity: 0, x: "100%" },
    };

    return (
        <>
            <header className={style.header}>
                <Link href="/" className={style.logo}>
                    <Logo />
                    <div>
                        OWL<span>top</span>
                    </div>
                </Link>
                <HamburgerMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
                {toggleMenu && <div className={style.backdrop}></div>}
                <motion.div
                    className={style.mobileMenu}
                    variants={variants}
                    initial={"closed"}
                    animate={toggleMenu ? "opened" : "closed"}
                >
                    <Sidebar {...mainInfo} />
                </motion.div>
            </header>
        </>
    );
};
