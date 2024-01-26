import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    onModal: () => void;
    openModal: boolean
    children: ReactNode;
}
