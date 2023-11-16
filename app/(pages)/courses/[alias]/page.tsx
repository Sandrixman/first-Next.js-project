import { getMenu } from "@/api/menu";
import { getPage } from "@/api/page";
import { getProduct } from "@/api/product";
import { Htag, Tag } from "@/components";
import { notFound } from "next/navigation";
import {
    Vacancies,
    Adventages,
    Skills,
    CoursesSection,
} from "@/app/components";
import style from "../../layout.module.css";

export async function generateStaticParams() {
    const menu = await getMenu(0);
    return menu.flatMap((item) =>
        item.pages.map((el) => ({ alias: el.alias }))
    );
}

export default async function Course({
    params,
}: {
    params: { alias: string };
}) {
    const page = await getPage(params.alias);

    if (!page) {
        notFound();
    }
    const products = await getProduct(page.category);

    return (
        <>
            <section className={style.mainTitle}>
                <Htag tag="h1">{page.title}</Htag>
                <Tag size="l" color="gray">
                    {products.length}
                </Tag>
                <span>Сортировка</span>
            </section>
            <CoursesSection products={products} />
            <Vacancies {...page} />
            <Adventages />
            <Skills />
        </>
    );
}
