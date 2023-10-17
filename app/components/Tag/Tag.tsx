import React from "react";
import { TagProps } from "./Tag.props";
import style from "./Tag.module.css";
import cn from "classnames";

export const Tag = ({
    size = "s",
    color = "ghost",
    href,
    children,
    className,
    ...props
}: TagProps): JSX.Element => {
    return (
        <div
            className={cn(
                style.tag,
                className,
                { [style.s]: size === "s" },
                { [style.l]: size === "l" },
                { [style.ghost]: color === "ghost" },
                { [style.primary]: color === "primary" },
                { [style.red]: color === "red" },
                { [style.green]: color === "green" },
                { [style.grey]: color === "grey" }
            )}
            {...props}
        >
            {href ? (
                <a href={href} target="_blank">
                    {children}
                </a>
            ) : (
                <>{children}</>
            )}
        </div>
    );
};
