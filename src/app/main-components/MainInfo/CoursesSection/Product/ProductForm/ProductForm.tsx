import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Input, P, Rating, Textarea } from "@/src/components";
import CloseIcon from "@/src/public/green-close.svg";
import style from "./ProductForm.module.css";

export const ProductForm = () => {
    const [sentForm, setSentForm] = useState(false);
    const [updatedRating, setUpdatedRating] = useState(0);

    const closeNotification = () => {
        setSentForm(false);
    };

    interface ProductFormValues {
        name: string;
        title: string;
        rating: number | null;
        text: string;
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Вкажіть ім'я"),
        title: Yup.string().required("Вкажіть заголовок для відгуку"),
        rating: Yup.number(),
        text: Yup.string().required("Вкажіть тект відгуку"),
    });

    const initialValues: ProductFormValues = {
        name: "",
        title: "",
        rating: updatedRating,
        text: "",
    };

    const handleRatingChange = (newRating: number) => {
        setUpdatedRating(newRating);
    };

    const handleSubmit = (
        values: ProductFormValues,
        { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
    ) => {
        values.rating = updatedRating;
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
        setSentForm(true);
    };

    const FormError = ({ name }: { name: string }) => {
        return (
            <ErrorMessage
                name={name}
                render={(message) => {
                    const dynamicClass = style[name];

                    return <div className={`${dynamicClass} ${style.errorField}`}>{message}</div>;
                }}
            />
        );
    };

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                validateOnChange={false}
                validateOnBlur={false}
            >
                {({ isSubmitting }) => (
                    <Form className={style.productForm}>
                        <Field
                            as={Input}
                            className={style.nameFild}
                            placeholder="Ім'я"
                            name="name"
                            id="name"
                            type="text"
                        />
                        <FormError name="name" />

                        <Field
                            as={Input}
                            className={style.titleFild}
                            placeholder="Заголовок відгуку"
                            id="title"
                            name="title"
                            type="text"
                        />
                        <FormError name="title" />

                        <P className={style.ratingText}>Оцінка:</P>
                        <Field
                            as={Rating}
                            className={style.ratingFild}
                            isEditable
                            id="rating"
                            name="rating"
                            onRatingChange={handleRatingChange}
                        />
                        <FormError name="rating" />

                        <Field
                            as={Textarea}
                            className={style.textFild}
                            placeholder="Текст відгуку"
                            id="text"
                            name="text"
                        />
                        <FormError name="text" />

                        <Button className={style.formButton} type="submit" disabled={isSubmitting}>
                            Надіслати
                        </Button>
                        <P size="s" className={style.formInfo}>
                            * Перед публікацією відгук пройде попередню модерацію та перевірку
                        </P>
                    </Form>
                )}
            </Formik>
            {sentForm && (
                <div className={style.successSubmit}>
                    <P weight="bold">Відгук успішно надіслано</P>
                    <P>Дякуємо, Ваш відгук буде додано після модерації</P>
                    <button className={style.closeIcon} onClick={closeNotification} type="submit">
                        <CloseIcon />
                    </button>
                </div>
            )}
        </>
    );
};
