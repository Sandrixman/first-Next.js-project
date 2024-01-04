import { getMenu } from "@/api/firstLevelMenu";
import { getPage } from "@/api/page";
import { getProduct } from "@/api/product";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    const menu = await getMenu(1);
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
        <ul>
            Product:
            {product.map((course) => (
                <li key={course._id}>{course.title}</li>
            ))}
        </ul>
    );
}
