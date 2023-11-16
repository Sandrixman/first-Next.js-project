import React from "react";
import { Htag } from "@/components";
import { CoursesSectionProps } from "./CoursesSection.props";
import style from "./CoursesSection.module.css";

export const CoursesSection = (props: CoursesSectionProps) => {
    const { products } = props;

    return (
        <section className={style.coursesSection}>
            {products.map((course) => (
                <Htag key={course._id} tag="h3">
                    {course.title}
                </Htag>
            ))}
        </section>
    );
};
