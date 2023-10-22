import { API } from "@/api/api";
import { FirstLevelMenuItem, MenuItem } from "@/interfaces/menu.interface";
import { TopLevelCategory } from "@/interfaces/page.interface";
import CoursesIcon from "@/public/graduation-hat.svg";
import ServicesIcon from "@/public/cloud.svg";
import BooksIcon from "@/public/book.svg";
import ProductsIcon from "@/public/box.svg";

export async function getMenu(firstCategory: number): Promise<MenuItem[]> {
    const res = await fetch(API.topPage.find, {
        method: "POST",
        body: JSON.stringify({
            firstCategory,
        }),
        headers: new Headers({ "content-type": "application/json" }),
        next: { revalidate: 1000 },
    });
    return res.json();
}

export const firstLevelMenu: FirstLevelMenuItem[] = [
    {
        route: "courses",
        name: "Курсы",
        icon: <CoursesIcon />,
        id: TopLevelCategory.Courses,
    },
    {
        route: "services",
        name: "Сервисы",
        icon: <ServicesIcon />,
        id: TopLevelCategory.Services,
    },
    {
        route: "books",
        name: "Книги",
        icon: <BooksIcon />,
        id: TopLevelCategory.Books,
    },
    {
        route: "products",
        name: "Товары",
        icon: <ProductsIcon />,
        id: TopLevelCategory.Products,
    },
];
