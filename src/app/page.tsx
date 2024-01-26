"use client";
import { useState } from "react";
import { Button, Htag, Input, P } from "@/src/components";
import { Modal } from "../components/Modal/Modal";
import { motion } from "framer-motion";
import style from "./layout.module.css";

export default function Home(): JSX.Element {
    const [openModal, setOpenModal] = useState(false);

    const onModal = () => {
        setOpenModal(!openModal);
    };

    const variants = {
        visible: { opacity: 1, height: "auto", overflow: "visible" },
        hidden: { opacity: 0, height: 0, overflow: "hidden" },
    };

    return (
        <div className={style.banner}>
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
                    <Htag tag="h2">Запит на консультацію</Htag>
                    <div>
                        <P size="s">Бажаєте отримати детальну консультацію по курсам?</P>
                        <P size="s">
                            Заповніть форму і ми зв&apos;яжемося з Вами найближчим часом:
                        </P>
                    </div>
                    <Input placeholder="Ім'я" />
                    <Input placeholder="Пошта" />
                    <Input placeholder="Телефон" />
                    <Button>Відправити запит</Button>
                </Modal>
            </motion.div>
        </div>
    );
}
