"use client";
import { ButtonProps } from "./Button.props";
import style from "./Button.module.css";
import cn from "classnames";
import ArrowIcon from "./arrow.svg";
import { useState } from "react";

export const Button = ({
    appearance = "primary",
    arrow = "none",
    children,
    className,
    ...props
}: ButtonProps): JSX.Element => {
    const [open, setOpen] = useState(false);

    const onOpen = () => {
        setOpen(!open);
    };

    return (
        <button
            onClick={onOpen}
            className={cn(style.button, className, {
                [style.primary]: appearance === "primary",
                [style.ghost]: appearance === "ghost",
            })}
            {...props}
        >
            {children}
            {arrow !== "none" && (
                <span
                    className={cn(style.arrow, {
                        [style.down]: !open,
                        [style.right]: open,
                    })}
                >
                    <ArrowIcon />
                </span>
            )}
        </button>
    );
};
