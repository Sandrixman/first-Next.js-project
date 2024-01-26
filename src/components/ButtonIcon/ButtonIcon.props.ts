import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import up from '@/src/public/up.svg';
import close from '@/src/public/primary-close.svg';
import menu from '@/src/public/hamburger.svg';

export const icons = {
    up,
    close,
    menu
};

type IconName = keyof typeof icons;

export interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,HTMLButtonElement>{
    appearance?: "primary" | "white";
    icon: IconName,
    onClick: () => void
}
