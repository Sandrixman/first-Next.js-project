import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import { Suspense } from "react";
import { Footer, Header, Sidebar } from "./main-sections";
import { Up } from "@/components";
import { getCourses, getServices } from "@/api/api";
import { MainInfo } from "@/interfaces/menu.interface";
import "./globals.css";
import style from "./layout.module.css";

export const metadata: Metadata = {
    title: "Next.js App",
    description: "Generated by create next app",
};

const notoSans = Noto_Sans({ weight: ["400"], subsets: ["latin"] });

export default async function RootLayout({ children }: { children: React.ReactNode }) {
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

    const mainInfo: MainInfo = {
        courses,
        services,
        books,
        products,
    };

    return (
        <html lang="en">
            <head></head>
            <body className={notoSans.className}>
                <div className={style.gridContainer}>
                    <Header {...mainInfo} />
                    <Suspense fallback={<div>Loading...</div>}>
                        <aside className={style.sidebarContainer}>
                            <Sidebar {...mainInfo} />
                        </aside>
                        <main className={style.main} role="main">
                            {children}
                        </main>
                    </Suspense>
                    <Footer />
                    <Up />
                </div>
            </body>
        </html>
    );
}
