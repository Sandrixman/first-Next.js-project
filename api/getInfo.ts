import { getCourses, getServices } from "./api";

export const getInfo = async () => {
    const courses = await getCourses();
    const services = await getServices();
    const books = [
        {
            _id: "1321safasfsa321",
            firstCategory: "books",
            pages: [
                {
                    _id: "asf4as65f4a654f",
                    alias: "alias",
                    title: "title",
                    category: "category",
                },
            ],
        },
    ];
    const products = [
        {
            _id: "1321safasfsa321",
            firstCategory: "products",
            pages: [
                {
                    _id: "asf4as65f4a654f",
                    alias: "alias",
                    title: "title",
                    category: "category",
                },
            ],
        },
    ];
    return {
        courses,
        services,
        books,
        products
  };
};
