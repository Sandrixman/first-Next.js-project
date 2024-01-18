"use client";
import { useEffect, useState, useRef } from "react";
import { RatingProps } from "./Rating.props";
import { v1 as uuid } from "uuid";
import style from "./Rating.module.css";
import cn from "classnames";
import StarIcon from "@/public/star.svg";

export const Rating = ({ isEditable = false, rating = 0, ...props }: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
    const [currentRating, setCurrentRating] = useState(rating);
    const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);

    useEffect(() => {
        constructRating(currentRating);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentRating]);

    const computeFocus = (r: number, i: number): number => {
        if (!isEditable) {
            return -1;
        }
        if (r === i + 1) {
            return 0;
        } else {
            return -1;
        }
    };

    const constructRating = (currentRating: number) => {
        const updatedRating = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <span
                    key={uuid()}
                    className={cn({
                        [style.filled]: currentRating > i,
                        [style.editable]: isEditable,
                    })}
                    onMouseEnter={() => changeRatingDisplay(i + 1)}
                    tabIndex={computeFocus(currentRating, i)}
                    onKeyDown={handleKeyDown}
                    ref={(r) => ratingArrayRef.current?.push(r)}
                >
                    <StarIcon />
                </span>
            );
        });

        setRatingArray(updatedRating);
    };

    const changeRatingDisplay = (i: number) => {
        if (!isEditable) {
            return;
        }
        setCurrentRating(i);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (!isEditable) {
            return;
        }

        if (e.code === "ArrowUp" || e.code === "ArrowRight") {
            e.preventDefault();
            setCurrentRating(currentRating + 1);
            ratingArrayRef.current[currentRating]?.focus();
        }
        if (e.code === "ArrowDown" || e.code === "ArrowLeft") {
            e.preventDefault();
            setCurrentRating(currentRating - 1);
            ratingArrayRef.current[currentRating - 2]?.focus();
        }
    };

    return (
        <ul className={style.rating} {...props}>
            {ratingArray.map((r, index) => (
                <li key={index} tabIndex={isEditable ? 0 : -1}>
                    {r}
                </li>
            ))}
        </ul>
    );
};
