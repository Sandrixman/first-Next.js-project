import style from "./Footer.module.css";
import cn from "classnames";
import { format } from "date-fns";

export const Footer = () => {
    return (
        <footer className={cn(style.footer, style["footer-container"])}>
            <p>OwlTop © {format(new Date(), "yyyy")} All rights reserved</p>
            <a href="#" target="_blank">
                <p>Terms of use</p>
            </a>
            <a href="#" target="_blank">
                <p>Privacy Policy</p>
            </a>
        </footer>
    );
};
