import { ForwardedRef, forwardRef, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button, Card, Htag, P, Rating, Tag } from "@/components";
import { ProductModel } from "@/interfaces/product.interface";
import { priceUA } from "@/helpers/priceUA";
import { numberDeclension } from "@/helpers/numberDeclension";
import { ProductReview } from "./ProductReview/ProductReview";
import { ProductForm } from "./ProductForm/ProductForm";
import TitleIcon from "@/public/cup.svg";
import style from "./Product.module.css";

const MotionProduct = forwardRef(
    ({ ...props }: ProductModel, ref: ForwardedRef<HTMLDivElement>) => {
        const {
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
        } = props;

        const [isReviewOpened, setReviewOpened] = useState(false);

        const reviewRef = useRef<HTMLDivElement>(null);

        const onOpen = () => {
            setReviewOpened(!isReviewOpened);
        };

        const scrollToReview = () => {
            setReviewOpened(true);
            reviewRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        };

        const variants = {
            visible: { opacity: 1, height: "auto" },
            hidden: { opacity: 0, height: 0 },
        };

        return (
            <div ref={ref}>
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
                            <a href="#ref" onClick={scrollToReview}>
                                {reviewCount}{" "}
                                {numberDeclension(reviewCount, ["відгук", "відгуки", "відгуків"])}
                            </a>
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
                <motion.div
                    variants={variants}
                    initial={"hidden"}
                    animate={isReviewOpened ? "visible" : "hidden"}
                    style={{ marginBottom: 40 }}
                >
                    <Card className={style.review} ref={reviewRef}>
                        {reviews.map(({ ...props }) => (
                            <ProductReview key={props._id} {...props}></ProductReview>
                        ))}
                        <ProductForm />
                    </Card>
                </motion.div>
            </div>
        );
    }
);

MotionProduct.displayName = "Product";

export const Product = motion(MotionProduct);
