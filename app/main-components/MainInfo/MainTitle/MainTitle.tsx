import { useRef, useState } from "react";
import { Htag, Sort, Tag } from "@/components";
import { ProductModel } from "@/interfaces/product.interface";
import { CourseModel } from "@/interfaces/course.interface";
import { SortEnum } from "@/components/Sort/Sort.props";
import cn from "classnames";
import style from "./MainTitle.module.css";

interface MainTitleProps {
    products: ProductModel[];
    course: CourseModel;
    setSort: (sort: SortEnum) => void;
    sort: SortEnum;
}

export const MainTitle = ({ course, products, setSort, sort }: MainTitleProps) => {
    const [isSkipLinkDisplayed, setIsSkipLinkDisplayed] = useState(false);

    const mainRef = useRef<HTMLDivElement>(null);

    const skipContentAction = (e: React.KeyboardEvent): void => {
        if (e.code === "Enter" || e.code === "Space") {
            e.preventDefault();
            mainRef.current?.focus();
        }
        setIsSkipLinkDisplayed(false);
    };

    return (
        <>
            {/* part of accessibility*/}
            <a
                className={cn(style.skipLink, {
                    [style.displayed]: isSkipLinkDisplayed,
                })}
                tabIndex={1}
                onFocus={() => setIsSkipLinkDisplayed(true)}
                onKeyDown={skipContentAction}
            >
                Перейти до змісту
            </a>
            <section className={style.mainTitle} ref={mainRef} tabIndex={0}>
                <Htag tag="h1">{course.title}</Htag>
                <Tag size="l" color="gray">
                    {products.length}
                </Tag>
                <Sort sort={sort} setSort={setSort} />
            </section>
        </>
    );
};
