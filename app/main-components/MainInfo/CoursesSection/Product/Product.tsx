import { useState } from "react";
import Image from "next/image";
import { Button, Card, Htag, P, Rating, Tag } from "@/components";
import { ProductModel } from "@/interfaces/product.interface";
import { priceUA } from "@/helpers/priceUA";
import { numberDeclension } from "@/helpers/numberDeclension";
import { ProductReview } from "./ProductReview/ProductReview";
import { ProductForm } from "./ProductForm/ProductForm";
import TitleIcon from "@/public/cup.svg";
import style from "./Product.module.css";
import cn from "classnames";

export const Product = ({
    title,
    image,
    price,
    credit,
    reviewAvg,
    initialRating,
    reviewCount,
    categories,
    advantages,
    description,
    oldPrice,
    characteristics,
    reviews,
}: ProductModel) => {
    const [isReviewOpened, setReviewOpened] = useState(false);

    const onOpen = () => {
        setReviewOpened(!isReviewOpened);
    };

    return (
        <>
            <Card className={style.product}>
                <Image
                    className={style.logo}
                    src={process.env.NEXT_PUBLIC_BASE_URL + image}
                    width={70}
                    height={70}
                    alt="course icon"
                />
                <div className={style.titleContainer}>
                    <div className={style.title}>
                        <Htag tag="h3">{title}</Htag>
                        <div className={style.titleIcon}>
                            <TitleIcon />
                        </div>
                    </div>
                    {categories.map((category, i) => (
                        <Tag key={i} className={style.tags}>
                            {category}
                        </Tag>
                    ))}
                </div>
                <div className={style.priceConteiner}>
                    <div className={style.price}>
                        <Htag tag="h4">{priceUA(price)}</Htag>
                        {oldPrice && <Tag color="green">{priceUA(price - oldPrice)}</Tag>}
                    </div>
                    <P size="s">Ціна</P>
                </div>
                <div className={style.credit}>
                    <Htag tag="h4">{priceUA(credit)}/міс</Htag>
                    <P size="s">В кредит</P>
                </div>
                <div className={style.rating}>
                    <Rating rating={reviewAvg ?? initialRating} />
                    <P className={style.ratingTitle} size="s">
                        {reviewCount}{" "}
                        {numberDeclension(reviewCount, ["відгук", "відгуки", "відгуків"])}
                    </P>
                </div>

                <hr className={style.hr2} />
                <P className={style.description}>{description}</P>
                <div className={style.features}>
                    {characteristics.map((characteristic, i) => (
                        <div key={i} className={style.characteristics}>
                            <P weight="bold">{characteristic.name}</P>
                            <span className={style.characteristicDots}></span>
                            <P>{characteristic.value}</P>
                        </div>
                    ))}
                </div>
                <div className={style.adventages}>
                    <P weight="bold">Переваги</P>
                    <P>{advantages}</P>
                </div>
                <hr className={style.hr} />
                <div className={style.actions}>
                    <Button onOpen={onOpen}>Детальніше</Button>
                    <Button
                        appearance="ghost"
                        arrow={isReviewOpened ? "down" : "right"}
                        onOpen={onOpen}
                    >
                        Відгуки
                    </Button>
                </div>
            </Card>
            <Card
                color="gray"
                className={cn({
                    [style.closed]: !isReviewOpened,
                    [style.opened]: isReviewOpened,
                })}
            >
                {reviews.map(({ ...props }) => (
                    <ProductReview key={props._id} {...props}></ProductReview>
                ))}
                <ProductForm />
            </Card>
        </>
    );
};
