"use client";
import { useEffect } from "react";
import { ModalProps } from "./Modal.props";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import style from "./Modal.module.css";

export const Modal = ({ onModal, openModal, children }: ModalProps): JSX.Element => {
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

    return (
        <div className={style.backdrop} onClick={onBackdropClick}>
            <div className={style.modalContentWrapper}>
                {children}
                <ButtonIcon
                    className={style.closeButton}
                    icon="close"
                    appearance="white"
                    onClick={onModal}
                />
            </div>
        </div>
    );
};
