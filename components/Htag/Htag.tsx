import { HtagProps } from "./Htag.props";
import style from "./Htag.module.css";
import cn from "classnames";

export const Htag = ({ tag, children }: HtagProps): JSX.Element => {
    return (
        <div
            className={cn({
                [style.h1]: tag === "h1",
                [style.h2]: tag === "h2",
                [style.h3]: tag === "h3",
                [style.h4]: tag === "h4",
            })}
        >
            {children}
        </div>
    );
};
