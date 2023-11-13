import { getMenu } from "@/api/menu";
import { getPage } from "@/api/page";
import { getProduct } from "@/api/product";
import { Htag, Tag } from "@/components";
import { notFound } from "next/navigation";
import Vacancies from "@/app/components/Vacancies/Vacancies";
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
    console.log(params.alias);

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
            <section className={style.coursesSection}>
                {products.map((course) => (
                    <Htag tag="h3">{course.title}</Htag>
                ))}
            </section>
            <Vacancies {...page} />
            <section className={style.adventagesSection}>
                <Htag tag="h3">Преимущества</Htag>
            </section>
            <section className={style.skillsSection}>
                <Htag tag="h3">Получаемые навыки</Htag>
            </section>
        </>
    );
}
