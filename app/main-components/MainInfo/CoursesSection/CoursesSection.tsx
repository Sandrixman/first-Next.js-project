import React from "react";
import { Htag } from "@/components";
import { ProductModel } from "@/interfaces/product.interface";
import style from "./CoursesSection.module.css";

interface CoursesProps {
    products: ProductModel[];
}

export const CoursesSection = ({ products }: CoursesProps) => {
    return (
        <section className={style.coursesSection}>
            {products.map(({ _id, title }) => (
                <Htag key={_id} tag="h3">
                    {title}
                </Htag>
            ))}
        </section>
    );
};
