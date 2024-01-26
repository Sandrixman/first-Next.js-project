import { MainMenu } from "@/src/interfaces/menu.interface";
import CoursesIcon from "@/src/public/graduation-hat.svg";
import ServicesIcon from "@/src/public/cloud.svg";
import BooksIcon from "@/src/public/book.svg";
import ProductsIcon from "@/src/public/box.svg";

export const mainMenu: MainMenu[] = [
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
