"use client";
import { useReducer } from "react";
import { SortReducer } from "@/src/components/Sort/SortReducer";
import { ProductModel } from "@/src/interfaces/product.interface";
import { CourseModel } from "@/src/interfaces/course.interface";
import { SortEnum } from "@/src/components/Sort/Sort.props";
import { CoursesSection } from "./CoursesSection/CoursesSection";
import { MainTitle } from "./MainTitle/MainTitle";

interface MainInfoProps {
    products: ProductModel[];
    course: CourseModel;
}

export const MainInfo = ({ course, products }: MainInfoProps) => {
    const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(SortReducer, {
        products,
        sort: SortEnum.rating,
    });

    const setSort = (sort: SortEnum) => {
        dispatchSort({ type: sort });
    };

    return (
        <>
            <MainTitle course={course} products={products} setSort={setSort} sort={sort} />
            <CoursesSection products={sortedProducts} />
        </>
    );
};
