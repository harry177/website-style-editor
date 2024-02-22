import { PageButton } from "../PageButton/PageButton";
import { PageImage } from "../PageImage.jsx/PageImage";
import { PageText } from "../PageText/PageText";
import { PageTitle } from "../PageTitle/PageTitle";
import { useDispatch, useSelector } from "react-redux";
import { selectElement } from "../../lib/slices/elementSlice";
import { scaleValue } from "../../shared/utils/scaleValue";
import "./edited-page.css";

export const EditedPage = () => {
  const dispatch = useDispatch();

  const condition = useSelector((state) => state.element.result);
  const formResult = useSelector((state) => state.form.formData);

  console.log(formResult.Y);
  console.log(typeof formResult.Y);

  return (
    <div className="edited-page" onClick={() => dispatch(selectElement(""))}>
      <PageTitle
        top={condition === "page-title" ? +formResult.Y + 90 : 90}
        left={condition === "page-title" ? +formResult.X + 80 : 80}
        opacity={
          condition === "page-title" ? (+formResult.Opacity / 100) * 1 : 1
        }
        scale={
          condition === "page-title" && +formResult.Scale !== 0
            ? scaleValue(+formResult.Scale, "Scale")
            : 1
        }
        blur={condition === "page-title" && formResult.Blur > 0 ? formResult.Blur + "px" : 0}
      />
      <PageText
        top={condition === "page-text" ? +formResult.Y + 170 : 170}
        left={condition === "page-text" ? +formResult.X + 80 : 80}
        opacity={
          condition === "page-text" ? (+formResult.Opacity / 100) * 1 : 1
        }
        scale={
          condition === "page-text" && +formResult.Scale !== 0
            ? scaleValue(+formResult.Scale, "Scale")
            : 1
        }
        blur={condition === "page-text" && formResult.Blur > 0 ? formResult.Blur + "px" : 0}
      />
      <PageButton
        top={condition === "page-button" ? +formResult.Y + 350 : 350}
        left={condition === "page-button" ? +formResult.X + 80 : 80}
        opacity={
          condition === "page-button" ? (+formResult.Opacity / 100) * 1 : 1
        }
        scale={
          condition === "page-button" && +formResult.Scale !== 0
            ? scaleValue(+formResult.Scale, "Scale")
            : 1
        }
        blur={condition === "page-button" && formResult.Blur > 0 ? formResult.Blur + "px" : 0}
      />
      <PageImage
        top={condition === "page-image" ? formResult.Y + 73 : 73}
        left={condition === "page-image" ? formResult.X + 504 : 504}
        opacity={
          condition === "page-image" ? (+formResult.Opacity / 100) * 1 : 1
        }
        scale={
          condition === "page-image" && +formResult.Scale !== 0
            ? scaleValue(+formResult.Scale, "Scale")
            : 1
        }
        blur={condition === "page-image" && formResult.Blur > 0 ? formResult.Blur + "px" : 0}
      />
    </div>
  );
};
