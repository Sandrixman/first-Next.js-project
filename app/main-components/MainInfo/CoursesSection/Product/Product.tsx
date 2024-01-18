import { ForwardedRef, forwardRef, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components";
import { ProductModel } from "@/interfaces/product.interface";
import { ProductInfo } from "./ProductInfo/ProductInfo";
import { ProductReview } from "./ProductReview/ProductReview";
import { ProductForm } from "./ProductForm/ProductForm";
import style from "./Product.module.css";

const MotionProduct = forwardRef(
    ({ ...product }: ProductModel, ref: ForwardedRef<HTMLDivElement>) => {
        const [isReviewOpened, setReviewOpened] = useState(false);

        const reviewRef = useRef<HTMLDivElement>(null);

        const variants = {
            visible: { opacity: 1, height: "auto" },
            hidden: { opacity: 0, height: 0 },
        };

        return (
            <div ref={ref}>
                <ProductInfo
                    isReviewOpened={isReviewOpened}
                    setReviewOpened={setReviewOpened}
                    reviewRef={reviewRef}
                    {...product}
                />
                <motion.div
                    className={style.reviewWrapper}
                    variants={variants}
                    initial={"hidden"}
                    animate={isReviewOpened ? "visible" : "hidden"}
                >
                    <Card
                        className={style.review}
                        ref={reviewRef}
                        tabIndex={!isReviewOpened ? 0 : -1}
                    >
                        {product.reviews.map(({ ...review }) => (
                            <ProductReview key={review._id} {...review}></ProductReview>
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
