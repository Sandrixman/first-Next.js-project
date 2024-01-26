import React from "react";
import { Htag, Tag } from "@/src/components";
import { CourseModel } from "@/src/interfaces/course.interface";

import style from "./Skills.module.css";

export const Skills = ({ tags }: CourseModel) => {
    return (
        <section className={style.skillsSection}>
            <Htag tag="h2">Одержувані навички</Htag>
            <div>
                {tags.map((skill) => (
                    <Tag color="primary">{skill}</Tag>
                ))}
            </div>
        </section>
    );
};
