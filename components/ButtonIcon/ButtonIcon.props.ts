import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import up from '@/public/up.svg';
import close from '@/public/primary-close.svg';
import menu from '@/public/hamburger.svg';

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
