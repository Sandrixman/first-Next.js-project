import { getMenu } from "@/api/menu";
import { Htag } from "@/components";

export default async function About() {
    const menu = await getMenu(0);

    return (
        <>
            <Htag tag="h1">ABOUT</Htag>
            <ul>
                {menu.map((item) => (
                    <li key={item._id.secondCategory}>
                        {item._id.secondCategory}
                    </li>
                ))}
            </ul>
        </>
    );
}
