import React from "react";
import { Htag, Sort, Tag } from "@/components";
import { ProductModel } from "@/interfaces/product.interface";
import { CourseModel } from "@/interfaces/course.interface";
import { SortEnum } from "@/components/Sort/Sort.props";
import style from "./MainTitle.module.css";

interface MainTitleProps {
    products: ProductModel[];
    course: CourseModel;
    setSort: (sort: SortEnum) => void;
    sort: SortEnum;
}

export const MainTitle = ({ course, products, setSort, sort }: MainTitleProps) => {
    return (
        <section className={style.mainTitle}>
            <Htag tag="h1">{course.title}</Htag>
            <Tag size="l" color="gray">
                {products.length}
            </Tag>
            <Sort sort={sort} setSort={setSort} />
        </section>
    );
};
