"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Formik, Form, FormikHelpers, Field } from "formik";
import { Button, Htag, Input, P, Modal } from "@/src/components";
import style from "./ConsultationSection.module.css";

export const ConsultationSection = (): JSX.Element => {
    const [openModal, setOpenModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const onModal = () => {
        setOpenModal(!openModal);
    };

    const variants = {
        visible: { opacity: 1, height: "auto", overflow: "visible" },
        hidden: { opacity: 0, height: 0, overflow: "hidden" },
    };

    const initialValues = {
        name: "",
        email: "",
        phone: "",
    };

    interface ProductFormValues {
        name: string;
        email: string;
        phone: string;
    }

    const handleSubmit = (
        values: ProductFormValues,
        { resetForm }: FormikHelpers<ProductFormValues>
    ) => {
        setIsLoading(true);
        const delayLoading = () => {
            setTimeout(() => {
                setIsLoading(false);
                toast.success(`${values.name} Ваша завка зареєстрована`, {
                    position: "top-center",
                });
                resetForm();
            }, 1000);
        };
        delayLoading();
    };

    return (
        <>
            <ToastContainer />
            <Button className={style.bannerButton} appearance="ghost" size="big" onClick={onModal}>
                Отримати консультацію
            </Button>
            <motion.div
                variants={variants}
                initial={"hidden"}
                animate={openModal ? "visible" : "hidden"}
                transition={{ duration: 0.4 }}
            >
                <Modal onModal={onModal} openModal={openModal}>
                    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                        <Form className={style.consultationForm}>
                            <Htag tag="h2">Запит на консультацію</Htag>
                            <div>
                                <P size="s">Бажаєте отримати детальну консультацію по курсам?</P>
                                <P size="s">
                                    Заповніть форму і ми зв&apos;яжемося з Вами найближчим часом:
                                </P>
                            </div>
                            <Field as={Input} placeholder="Ім'я" name="name" type="text" required />
                            <Field
                                as={Input}
                                placeholder="Пошта"
                                name="email"
                                type="text"
                                required
                            />
                            <Field
                                as={Input}
                                placeholder="Телефон"
                                name="phone"
                                type="text"
                                required
                            />
                            <Button
                                className={style.submitButton}
                                type="submit"
                                arrow="right"
                                loading={isLoading}
                                appearance="primary"
                            >
                                Відправити запит
                            </Button>
                        </Form>
                    </Formik>
                </Modal>
            </motion.div>
        </>
    );
};
