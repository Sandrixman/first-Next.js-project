import moment from "moment";
import "moment/locale/uk";
import { P } from "@/components";
import style from "./Footer.module.css";

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <P size="s">OwlTop © {moment(new Date()).format("yyyy")} All rights reserved</P>
            <a href="#" target="_blank">
                <P size="s">Умови використання</P>
            </a>
            <a href="#" target="_blank">
                <P size="s">Політика конфіденційності</P>
            </a>
        </footer>
    );
};
