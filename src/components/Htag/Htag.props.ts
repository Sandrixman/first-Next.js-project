import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface HtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLTitleElement>, HTMLTitleElement> {
    tag: "h1" | "h2"| 'h3' | 'h4';
    children: ReactNode;
}
