import React from "react";
import RateIcon from "@/public/rate.svg";
import { CourseModel } from "@/interfaces/course.interface";
import { Htag, Tag, Card } from "@/components";
import style from "./Vacancies.module.css";

export const Vacancies = ({ category, salary }: CourseModel) => {
    // price transformer
    const priceUA = (number: number) => {
        const numberUah = Math.floor(number / 5);
        return numberUah
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
            .concat(" ₴");
    };

    return (
        salary && (
            <section className={style.vacanciesSection}>
                <div className={style.vacanciesTitle}>
                    <Htag tag="h2">Вакансії - {category}</Htag>
                    <Tag color="red">mySite.ua</Tag>
                </div>
                <div className={style.vacanciesData}>
                    <Card className={style.vacanciesCount}>
                        <Htag tag="h4">Всього вакансій</Htag>
                        <div className={style.vacanciesCountValue}>{salary?.count}</div>
                    </Card>
                    <Card className={style.vacanciesSalary}>
                        <div className={style.vacanciesSalaryItem}>
                            <Htag tag="h4">Початковий</Htag>
                            <div className={style.vacanciesSalaryValue}>
                                {priceUA(salary.juniorSalary)}
                            </div>
                            <RateIcon className={style.filled} />
                            <RateIcon />
                            <RateIcon />
                        </div>
                        <div className={style.vacanciesSalaryItem}>
                            <Htag tag="h4">Средній</Htag>
                            <div className={style.vacanciesSalaryValue}>
                                {priceUA(salary.middleSalary)}
                            </div>
                            <RateIcon className={style.filled} />
                            <RateIcon className={style.filled} />
                            <RateIcon />
                        </div>
                        <div className={style.vacanciesSalaryItem}>
                            <Htag tag="h4">Професіонал</Htag>
                            <div className={style.vacanciesSalaryValue}>
                                {priceUA(salary.seniorSalary)}
                            </div>
                            <RateIcon className={style.filled} />
                            <RateIcon className={style.filled} />
                            <RateIcon className={style.filled} />
                        </div>
                    </Card>
                </div>
            </section>
        )
    );
};
