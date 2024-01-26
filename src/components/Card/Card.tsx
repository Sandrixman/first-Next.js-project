import { ForwardedRef, forwardRef } from "react";
import { CardProps } from "./Card.props";
import style from "./Card.module.css";
import cn from "classnames";

export const Card = forwardRef(
    (
        { color = "white", children, className, ...props }: CardProps,
        ref: ForwardedRef<HTMLDivElement>
    ): JSX.Element => {
        return (
            <div
                className={cn(style.card, className, {
                    [style.bgGray]: color === "gray",
                })}
                ref={ref}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Card.displayName = "Card";
