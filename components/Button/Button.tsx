import { ButtonProps } from "./Button.props";
import style from "./Button.module.css";
import cn from "classnames";
import ArrowIcon from "@/public/arrow.svg";

export const Button = ({
    appearance = "primary",
    arrow = "none",
    onOpen,
    children,
    className,
    ...props
}: ButtonProps): JSX.Element => {
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
                        [style.down]: arrow === "down",
                        [style.right]: arrow === "right",
                    })}
                >
                    <ArrowIcon />
                </span>
            )}
        </button>
    );
};
