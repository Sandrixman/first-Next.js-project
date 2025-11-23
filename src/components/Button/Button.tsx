import { ButtonProps } from "./Button.props";
import ArrowIcon from "@/src/public/arrow.svg";
import cn from "classnames";
import style from "./Button.module.css";

export const Button = ({
    appearance = "primary",
    arrow = "none",
    size = "normal",
    onOpen,
    children,
    className,
    loading = false,
    ...props
}: ButtonProps): JSX.Element => {
    return (
        <button
            onClick={onOpen}
            className={cn(style.button, className, {
                [style.primary]: appearance === "primary",
                [style.ghost]: appearance === "ghost",
                [style.bigButton]: size === "big",
            })}
            disabled={loading}
            {...props}
        >
            {loading && <span className={style.spinner}></span>}
            {children}
            {arrow !== "none" && !loading && (
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
