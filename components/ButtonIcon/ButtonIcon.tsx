import { ButtonIconProps, icons } from "./ButtonIcon.props";
import style from "./ButtonIcon.module.css";
import cn from "classnames";

export const ButtonIcon = ({
    appearance = "primary",
    icon,
    onClick,
    className,
    ...props
}: ButtonIconProps): JSX.Element => {
    const IconComponent = icons[icon];

    return (
        <button
            onClick={onClick}
            className={cn(style.button, className, {
                [style.primary]: appearance === "primary",
                [style.white]: appearance === "white",
            })}
            {...props}
        >
            <IconComponent />
        </button>
    );
};
