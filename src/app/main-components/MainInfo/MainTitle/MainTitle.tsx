import { Htag, Sort, Tag } from "@/src/components";
import { ProductModel } from "@/src/interfaces/product.interface";
import { CourseModel } from "@/src/interfaces/course.interface";
import { SortEnum } from "@/src/components/Sort/Sort.props";
import style from "./MainTitle.module.css";

interface MainTitleProps {
    products: ProductModel[];
    course: CourseModel;
    setSort: (sort: SortEnum) => void;
    sort: SortEnum;
}

export const MainTitle = ({ course, products, setSort, sort }: MainTitleProps) => {
    return (
        <>
            <section className={style.mainTitle} tabIndex={0}>
                <Htag tag="h1">{course.title}</Htag>
                <Tag size="l" color="gray" aria-label={products.length + "курсів"}>
                    {products.length}
                </Tag>
                <Sort sort={sort} setSort={setSort} />
            </section>
        </>
    );
};
