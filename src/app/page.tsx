import { Htag } from "@/src/components";
import { ConsultationSection } from "@/src/app/main-components/ConsultationSection/ConsultationSection";
import style from "./layout.module.css";

export default function Home(): JSX.Element {
    return (
        <div className={style.banner}>
            <Htag className={style.bannerTitle} tag="h1">
                Розкрий свій потенціал з нашими навчальними курсами
            </Htag>
            <ConsultationSection />
        </div>
    );
}
