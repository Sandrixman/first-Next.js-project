// /pages/search/[alias].js
"use client";
import { Htag } from "@/components";

export default function Search({ params }: { params: { alias: string } }): JSX.Element {
    const { alias } = params;

    return (
        <>
            <Htag tag="h1">Результати пошуку для {alias}:</Htag>
            <ul>
                <li>result</li>
            </ul>
        </>
    );
}

export async function generateStaticParams() {
    return [{ params: { alias: "value1" } }, { params: { alias: "value2" } }];
}
