import React from "react";
import RateIcon from "@/public/rate.svg";
import { TopPageModel } from "@/interfaces/page.interface";
import { Htag, Tag, Card } from "@/components";
import style from "./Vacancies.module.css";

export const Vacancies = ({ category, hh }: TopPageModel) => {
    const price = (number: number) =>
        number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    return (
        hh && (
            <section className={style.vacanciesSection}>
                <div className={style.vacanciesTitle}>
                    <Htag tag="h3">Вакансии - {category}</Htag>
                    <Tag color="red">mySite.ua</Tag>
                </div>
                <div className={style.vacanciesData}>
                    <Card className={style.vacanciesCount}>
                        <Htag tag="h4">Всего вакансий</Htag>
                        <div className={style.vacanciesCountValue}>
                            {hh?.count}
                        </div>
                    </Card>
                    <Card className={style.vacanciesSalary}>
                        <div className={style.vacanciesSalaryItem}>
                            <Htag tag="h4">Начальный</Htag>
                            <div className={style.vacanciesSalaryValue}>
                                {price(hh.juniorSalary)}
                            </div>
                            <RateIcon className={style.filled} />
                            <RateIcon />
                            <RateIcon />
                        </div>
                        <div className={style.vacanciesSalaryItem}>
                            <Htag tag="h4">Средний</Htag>
                            <div className={style.vacanciesSalaryValue}>
                                {price(hh.middleSalary)}
                            </div>
                            <RateIcon className={style.filled} />
                            <RateIcon className={style.filled} />
                            <RateIcon />
                        </div>
                        <div className={style.vacanciesSalaryItem}>
                            <Htag tag="h4">Профессионал</Htag>
                            <div className={style.vacanciesSalaryValue}>
                                {price(hh.seniorSalary)}
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
