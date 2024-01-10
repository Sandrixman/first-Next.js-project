import moment from "moment";
import "moment/locale/uk";
import { P, Rating } from "@/components";
import { ReviewData } from "@/interfaces/product.interface";
import UserIcon from "@/public/user.svg";
import style from "./ProductReview.module.css";

export const ProductReview = ({ ...review }: ReviewData) => {
    return (
        <div className={style.productReview}>
            <UserIcon />
            <div className={style.title}>
                <P className={style.name} size="s" weight="bold">
                    {review.name}:
                </P>
                <P className={style.subTitle} size="s">
                    {review.title}
                </P>
            </div>
            <P className={style.date}>{moment(review.createdAt).format("DD MMMM YYYY")}</P>
            <Rating rating={review.rating}>{review.rating}</Rating>
            <P size="s" className={style.description}>
                {review.description}
            </P>
            <hr className={style.hr} />
        </div>
    );
};
