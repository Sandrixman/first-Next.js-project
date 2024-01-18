"use client";
import { Htag } from "@/components";

export default function Search(aliases: string[]): JSX.Element {
    return (
        <>
            <Htag tag="h1">Результати пошуку:</Htag>
            <ul>
                {aliases.map((result) => (
                    <li>{result}</li>
                ))}
            </ul>
        </>
    );
}
