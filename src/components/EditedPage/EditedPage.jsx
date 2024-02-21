import { PageButton } from "../PageButton/PageButton";
import { PageImage } from "../PageImage.jsx/PageImage";
import { PageText } from "../PageText/PageText";
import { PageTitle } from "../PageTitle/PageTitle";
import { useDispatch } from "react-redux";
import { selectElement } from "../../lib/slices/elementSlice";
import "./edited-page.css";

export const EditedPage = () => {
  const dispatch = useDispatch();
  return (
    <div className="edited-page" onClick={() => dispatch(selectElement(""))}>
      <PageTitle top={90} left={80} opacity={1} />
      <PageText top={170} left={80} opacity={1} />
      <PageButton top={350} left={80} opacity={1} />
      <PageImage top="73px" left="504px" opacity={1} />
    </div>
  );
};
