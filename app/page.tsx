import { Button, Htag } from "./components";
import Icon from "../public/next.svg";

export default function Home(): JSX.Element {
    return (
        <>
            <Htag tag="h1">dfgsdfghsdfgsd</Htag>
            <Icon />
            <Button appearance="primary" className="sdfsdfs">
                Button
            </Button>
            <Button appearance="ghost">Button</Button>
        </>
    );
}
