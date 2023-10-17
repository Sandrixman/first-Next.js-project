import { Htag } from "../components";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
};

export default function About(): JSX.Element {
    return (
        <>
            <Htag tag="h1">ABOUT</Htag>
        </>
    );
}
