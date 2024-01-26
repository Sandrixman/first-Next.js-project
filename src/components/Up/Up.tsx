"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useScrollY } from "@/src/hooks/useScrollY";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import style from "./Up.module.css";

export const Up = () => {
    const y = useScrollY();

    const controls = useAnimation();

    useEffect(() => {
        controls.start({ opacity: y / (document.body.scrollHeight * 0.5) });
    }, [y, controls]);

    const scrollToTop = (): void => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <motion.div className={style.up} animate={controls} initial={{ opacity: 0 }}>
            <ButtonIcon icon="up" onClick={scrollToTop} aria-label="Вгору" />
        </motion.div>
    );
};
