import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>{
    isEditable?: boolean;
    rating?: number;
    name?: string;
    onRatingChange?: (newRating: number) => void;

}
