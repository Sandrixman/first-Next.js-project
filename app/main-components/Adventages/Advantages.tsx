import React from "react";
import { Htag, P } from "@/components";
import { CourseModel } from "@/interfaces/course.interface";
import CheckIcon from "@/public/check-green.svg";
import parse from "html-react-parser";
import style from "./Advantages.module.css";

export const Adventages = ({ advantages, seoText }: CourseModel) => {
    return (
        <section className={style.adventagesSection}>
            <Htag tag="h2" className={style.adventages}>
                Переваги
            </Htag>
            {advantages && (
                <ul>
                    {advantages.map((advantage) => {
                        return (
                            <li
                                key={advantage._id}
                                className={style.advantageItem}
                            >
                                <div className={style.advantageIcon}>
                                    <CheckIcon />
                                </div>
                                <Htag
                                    tag="h3"
                                    className={style.adventagesTitle}
                                >
                                    {advantage.title}
                                </Htag>
                                <div className={style.line}></div>
                                <P size="l">{advantage.description}</P>
                            </li>
                        );
                    })}
                </ul>
            )}
            {seoText && <div className={style.seoText}>{parse(seoText)}</div>}
        </section>
    );
};
