import React from "react";
import { PProps } from "./P.props";
import style from "./P.module.css";
import cn from "classnames";

export const P = ({
    size = "m",
    children,
    className,
    ...props
}: PProps): JSX.Element => {
    return (
        <p
            className={cn(
                className,
                { [style.s]: size === "s" },
                { [style.m]: size === "m" },
                { [style.l]: size === "l" }
            )}
            {...props}
        >
            {children}
        </p>
    );
};
