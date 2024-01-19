import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCourseByAlias, getCourses, getProducts } from "@/api/api";
import { Vacancies, Adventages, Skills, MainInfo } from "@/app/main-components";

export const generateMetadata = async ({
    params,
}: {
    params: { alias: string };
}): Promise<Metadata> => {
    const course = await getCourseByAlias(params.alias);

    return {
        title: course.metaTitle,
        description: course.metaDescription,
    };
};

export async function generateStaticParams() {
    try {
        const courses = await getCourses();
        return courses.flatMap((item) => {
            item.pages.map((el) => ({ alias: el.alias }));
        });
    } catch {
        notFound();
    }
}

export default async function Course({ params }: { params: { alias: string } }) {
    try {
        const course = await getCourseByAlias(params.alias);

        const products = await getProducts(course.category);

        return (
            <>
                <MainInfo course={course} products={products} />
                <Vacancies {...course} />
                <Adventages {...course} />
                <Skills {...course} />
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
