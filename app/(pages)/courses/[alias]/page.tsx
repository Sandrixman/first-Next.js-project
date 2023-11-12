import { getMenu } from "@/api/menu";
import { getPage } from "@/api/page";
import { getProduct } from "@/api/product";
import { Htag, Tag } from "@/components";
import { notFound } from "next/navigation";
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
    const product = await getProduct(page.category);

    return (
        <div className={style.mainTitle}>
            <Htag tag="h1">{page.title}</Htag>
            <Tag size="l" color="gray">
                {product.length}
            </Tag>
            <span>Сортировка</span>
        </div>
    );
}
