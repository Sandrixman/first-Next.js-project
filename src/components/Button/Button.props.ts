import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,HTMLButtonElement>{
    children: ReactNode;
    appearance?: "primary" | "ghost";
    size?: 'normal' | 'big';
    arrow?: 'right' | 'down' | 'none';
    onOpen?: () => void;
    open?: boolean;
    loading?: boolean;
}
