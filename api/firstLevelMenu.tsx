import { FirstLevelMenuItem } from "@/interfaces/menu.interface";
import CoursesIcon from "@/public/graduation-hat.svg";
import ServicesIcon from "@/public/cloud.svg";
import BooksIcon from "@/public/book.svg";
import ProductsIcon from "@/public/box.svg";

export const mainMenu: FirstLevelMenuItem[] = [
    {
        route: "courses",
        name: "Курси",
        icon: <CoursesIcon />,
        id: 1,
    },
    {
        route: "services",
        name: "Сервіси",
        icon: <ServicesIcon />,
        id: 2,
    },
    {
        route: "books",
        name: "Книги",
        icon: <BooksIcon />,
        id: 3,
    },
    {
        route: "products",
        name: "Товари",
        icon: <ProductsIcon />,
        id: 4,
    },
];
