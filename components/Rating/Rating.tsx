"use client";
import { useEffect, useState } from "react";
import { RatingProps } from "./Rating.props";
import { v1 as uuid } from "uuid";
import style from "./Rating.module.css";
import cn from "classnames";
import StarIcon from "@/public/star.svg";

export const Rating = ({
    isEditable = false,
    rating,
    setRating,
    ...props
}: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rating]);

    const constructRating = (currentRating: number) => {
        const updatedRating = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <StarIcon
                    className={cn({
                        [style.filled]: currentRating > i,
                        [style.editable]: isEditable,
                    })}
                    onMouseEnter={() => changeRatingDisplay(i + 1)}
                    onMouseLeave={() => changeRatingDisplay(rating)}
                    onClick={() => onRating(i + 1)}
                    tabIndex={isEditable ? 0 : -1}
                    onKeyDown={(e: React.KeyboardEvent<SVGElement>) =>
                        isEditable && handleSpace(i + 1, e)
                    }
                />
            );
        });

        setRatingArray(updatedRating);
    };

    const changeRatingDisplay = (i: number) => {
        if (!isEditable) {
            return;
        }
        constructRating(i);
    };

    const onRating = (i: number) => {
        if (!isEditable || !setRating) {
            return;
        }
        setRating(i);
    };

    const handleSpace = (i: number, e: React.KeyboardEvent<SVGElement>) => {
        if (e.code !== "Space" || !setRating) {
            return;
        }
        setRating(i);
    };

    return (
        <ul className={style.rating} {...props}>
            {ratingArray.map((r) => (
                <li key={uuid()}>{r}</li>
            ))}
        </ul>
    );
};
