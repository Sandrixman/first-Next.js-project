import { getCourses } from "@/src/api/api";
import { Htag, P } from "@/src/components";
import { MenuItem } from "@/src/interfaces/menu.interface";
import Link from "next/link";

export default async function SearchPage({
    searchParams,
}: {
    searchParams: { search: string };
}): Promise<JSX.Element> {
    const { search } = searchParams;
    const courses: MenuItem[] = await getCourses();

    if (!search) {
        return <Htag tag="h1">Введіть запит для пошуку</Htag>;
    }

    const searchResult = courses.flatMap((c) => c.pages).filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <Htag tag="h1">Результати пошуку для &quot;{search}&quot;:</Htag>
            {searchResult.length === 0 ? (
                <P size="m">Нічого не знайдено</P>
            ) : (
                <ul>
                    {searchResult.map((page) => (
                        <li key={page._id} style={{ marginBottom: "10px" }}>
                            <Link href={`/courses/${page.alias}`}>
                                <P size="m" style={{ color: "var(--primary)", textDecoration: "underline" }}>
                                    {page.title}
                                </P>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}
