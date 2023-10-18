import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>{
    isEditable?: boolean;
    rating: number;
    setRating?: (rating: number) => void;
}
