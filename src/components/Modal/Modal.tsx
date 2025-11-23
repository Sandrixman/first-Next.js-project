"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ModalProps } from "./Modal.props";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import style from "./Modal.module.css";

export const Modal = ({ onModal, openModal, children }: ModalProps): JSX.Element | null => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code === "Escape") {
                onModal();
            }
        };
        if (openModal) {
            window.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [onModal, openModal]);

    const onBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onModal();
        }
    };

    if (!mounted) {
        return null;
    }

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    return createPortal(
        <AnimatePresence>
            {openModal && (
                <motion.div
                    className={style.backdrop}
                    onClick={onBackdropClick}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={variants}
                    transition={{ duration: 0.2 }}
                >
                    <div className={style.modalContentWrapper}>
                        {children}
                        <ButtonIcon
                            className={style.closeButton}
                            icon="close"
                            appearance="white"
                            onClick={onModal}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
};
