import React from "react";
import { Htag } from "@/components";
import { ProductModel } from "@/interfaces/product.interface";
import style from "./MainInfo.module.css";

interface MainInfoProps {
    products: ProductModel[];
}

export const MainInfo = (props: MainInfoProps) => {
    const { products } = props;

    return (
        <section className={style.mainInfo}>
            {products.map((product) => (
                <Htag key={product._id} tag="h3">
                    {product.title}
                </Htag>
            ))}
        </section>
    );
};
