import "./globals.css";
import style from "./layout.module.css";
import type { Metadata } from "next";
import { Footer, Header, Sidebar } from "./sections";

export const metadata: Metadata = {
    title: "Next.js App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className={style["grid-container"]}>
                <Header />
                <Sidebar />
                <Footer />
                <main className={style.main}>{children}</main>
            </body>
        </html>
    );
}
