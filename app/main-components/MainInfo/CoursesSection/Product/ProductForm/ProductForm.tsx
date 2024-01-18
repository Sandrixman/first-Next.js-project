import { Button, Input, P, Rating, Textarea } from "@/components";
import CloseIcon from "@/public/green-close.svg";
import style from "./ProductForm.module.css";

export const ProductForm = () => {
    return (
        <>
            <div className={style.productForm}>
                <Input placeholder="Ім'я" />
                <Input placeholder="Заголовок відгуку" />
                <P className={style.ratingText}>Оцінка:</P>
                <Rating isEditable />
                <Textarea className={style.review} placeholder="Текст відгуку" />
                <Button>Надіслати</Button>
                <P size="s" className={style.info}>
                    * Перед публікацією відгук пройде попередню модерацію та перевірку
                </P>
            </div>
            <div className={style.successSubmit}>
                <P weight="bold">Відгук успішно надіслано</P>
                <P>Дякуємо, Ваш відгук буде додано після модерації</P>
                <button>
                    <CloseIcon className={style.closeIcon} />
                </button>
            </div>
        </>
    );
};
