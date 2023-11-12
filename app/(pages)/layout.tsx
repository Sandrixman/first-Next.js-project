import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Courses",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    return <>{children}</>;
}
