import type { Metadata } from "next";
import style from "../layout.module.css";

export const metadata: Metadata = {
    title: "About",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    return (
        <main className={style.main}>
            About layout
            {children}
        </main>
    );
}
