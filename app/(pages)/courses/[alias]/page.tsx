// import { useReducer } from "react";
import { getCourseByAlias, getCourses, getProducts } from "@/api/api";
import { Htag, Sort, Tag } from "@/components";
import { notFound } from "next/navigation";
import {
    Vacancies,
    Adventages,
    Skills,
    CoursesSection,
} from "@/app/components";
import style from "../../layout.module.css";
import { SortEnum } from "@/components/Sort/Sort.props";
// import { SortReducer } from "@/components/Sort/sort.reducer";

export async function generateStaticParams() {
    const courses = await getCourses();
    return courses.flatMap((item) => {
        item.pages.map((el) => ({ alias: el.alias }));
    });
}

export default async function Course({
    params,
}: {
    params: { alias: string };
}) {
    // const [{ products: sortedProducts }, dispatchSort] = useReducer(
    //     SortReducer,
    //     { products, sort: SortEnum.rating }
    // );
    try {
        const page = await getCourseByAlias(params.alias);

        const products = await getProducts(page.category);

        // const setSort = (sort: SortEnum) => {
        //     dispatchSort({ type: sort });
        // };

        return (
            <>
                <section className={style.mainTitle}>
                    <Htag tag="h1">{page.title}</Htag>
                    <Tag size="l" color="gray">
                        {products.length}
                    </Tag>
                    <Sort sort={SortEnum.rating} />
                </section>
                <CoursesSection products={products} />
                <Vacancies {...page} />
                <Adventages {...page} />
                <Skills {...page} />
            </>
        );
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        if (error.response) {
            console.log(error.response.data.error);
            notFound();
        }
        return <p>Something went wrong...</p>;
    }
}
