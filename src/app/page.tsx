"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Formik, Form, FormikHelpers, Field } from "formik";
import { LoadingButton } from "@mui/lab";
import SendIcon from "@mui/icons-material/Send";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Htag, Input, P } from "@/src/components";
import { Modal } from "../components/Modal/Modal";
import style from "./layout.module.css";

export default function Home(): JSX.Element {
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
            }, 2000);
        };
        delayLoading();

        resetForm();
    };

    interface ProductFormValues {
        name: string;
        email: string;
        phone: string;
    }

    return (
        <div className={style.banner}>
            <ToastContainer />

            <Htag className={style.bannerTitle} tag="h1">
                Розкрий свій потенціал з нашими навчальними курсами
            </Htag>
            <Button className={style.bannerButton} appearance="ghost" size="big" onClick={onModal}>
                Отримати консультацію
            </Button>
            <motion.div
                className={style.modalWrapper}
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
                            <Field
                                as={Input}
                                placeholder="Ім'я"
                                id="name"
                                name="name"
                                type="text"
                                required
                            />
                            <Field
                                as={Input}
                                placeholder="Пошта"
                                id="email"
                                name="email"
                                type="text"
                                required
                            />
                            <Field
                                as={Input}
                                placeholder="Телефон"
                                id="phone"
                                name="phone"
                                type="text"
                                required
                            />
                            <LoadingButton
                                className={style.submitButton}
                                type="submit"
                                endIcon={<SendIcon />}
                                loading={isLoading}
                                loadingPosition="end"
                                variant="contained"
                            >
                                Відправити запит
                            </LoadingButton>
                        </Form>
                    </Formik>
                </Modal>
            </motion.div>
        </div>
    );
}
