"use client";
import { useState } from "react";
import { Button, Htag, P, Rating, Tag } from "@/components";
import style from "./layout.module.css";

export default function Home(): JSX.Element {
    const [rating, setRating] = useState(0);

    return (
        <main className={style.main}>
            <Htag tag="h1">Курси по Photoshop</Htag>
            <P>
                Студенты освоят не только hard skills, необходимые для работы
                веб-дизайнером, но и soft skills — навыки, которые позволят
                эффективно взаимодействовать в команде с менеджерами,
                разработчиками и маркетологами. Выпускники факультета могут
                успешно конкурировать с веб-дизайнерами уровня middle.
            </P>
            <Tag>Photoshop</Tag>
            <Tag size="l" color="red" href="https://site.ua">
                site.ua
            </Tag>
            <Tag size="l" color="gray">
                10
            </Tag>
            <Tag size="s" color="primary">
                Работа в Photoshop
            </Tag>
            <Tag size="s" color="green">
                -10 000 ₽
            </Tag>
            <Button>Узнать подробнее</Button>
            <Button appearance="ghost" arrow="add">
                Читать отзывы
            </Button>
            <Rating rating={rating} setRating={setRating} isEditable />
        </main>
    );
}
