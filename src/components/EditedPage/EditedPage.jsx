import { PageButton } from "../PageButton/PageButton";
import { PageImage } from "../PageImage.jsx/PageImage";
import { PageText } from "../PageText/PageText";
import { PageTitle } from "../PageTitle/PageTitle";
import "./edited-page.css";

export const EditedPage = () => {
    return <div className="edited-page">
        <PageTitle top={90} left={80} opacity={1} />
        <PageText top={170} left={80} opacity={1} />
        <PageButton top={350} left={80} opacity={1} />
        <PageImage top="73px" left="504px" opacity={1} />
    </div>
}