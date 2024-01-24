"use client";
import { Htag } from "@/components";
import { useSearchParams } from "next/navigation";

export default function SearchPage(): JSX.Element {
    const searchParams = useSearchParams();
    const search = searchParams.get("search");

    return (
        <>
            <Htag tag="h1">Результати пошуку для {search}:</Htag>
            <ul>
                <li>result</li>
            </ul>
        </>
    );
}
