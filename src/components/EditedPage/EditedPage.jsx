import { useEffect, useState } from "react";
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
  const [event, setEvent] = useState("");

  const condition = useSelector((state) => state.element.result);
  const newFormResult = useSelector((state) => state.newform.newFormData);

  useEffect(() => {
  const editedPage = document.querySelector(".edited-page");
  const elements = editedPage.querySelectorAll(".element");
  

  const editedPageRect = editedPage.getBoundingClientRect();
  const editedPageLeft = editedPageRect.left;
  const editedPageRight = editedPageRect.left + editedPage.clientWidth;
  const editedPageTop = editedPageRect.top;
  const editedPageBottom = editedPageRect.top + editedPage.clientHeight;

  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();

    if (
      rect.left < editedPageLeft ||
      rect.right > editedPageRight ||
      rect.top < editedPageTop ||
      rect.bottom > editedPageBottom
    ) {
      element.classList.add("error-element");
      
    } else {
      element.classList.remove("error-element");
    }
  });
}, [event, condition]);

const handleEvent = (event) => {
  setEvent(event);
}

const choosenElement = () => {
  if (newFormResult.length !== 0 && newFormResult.filter((elem) => elem.name === condition).length !== 0) {
   return newFormResult.filter((elem) => elem.name === condition)[0].data
  }
return {
  X: 0,
  Y: 0,
  Opacity: 100,
  Scale: 0,
  Blur: 0,
  Speed: 0,
  Delay: 0,
}
}


  return (
    <div className="edited-page" onClick={() => dispatch(selectElement(""))}>
      <PageTitle
        top={condition === "page-title" ? +choosenElement().Y + 90 : 90}
        left={condition === "page-title" ? +choosenElement().X + 80 : 80}
        opacity={
          condition === "page-title" ? (+choosenElement().Opacity / 100) * 1 : 1
        }
        scale={
          condition === "page-title" && +choosenElement().Scale !== 0
            ? scaleValue(+choosenElement().Scale, "Scale")
            : 1
        }
        blur={condition === "page-title" && choosenElement().Blur > 0 ? choosenElement().Blur + "px" : 0}
        speed={condition === "page-title" && choosenElement().Speed > 0 ? choosenElement().Speed : 0}
        delay={condition === "page-title" && choosenElement().Delay > 0 ? choosenElement().Delay : 0}
        easing={condition === "page-title" && choosenElement().easing === "Ease-in" ? "ease-in" : choosenElement().easing === "Ease-out" ? "ease-out" : "ease-in-out"}
        dispatchEvent={handleEvent}
      />
      <PageText
        top={condition === "page-text" ? +choosenElement().Y + 170 : 170}
        left={condition === "page-text" ? +choosenElement().X + 80 : 80}
        opacity={
          condition === "page-text" ? (+choosenElement().Opacity / 100) * 1 : 1
        }
        scale={
          condition === "page-text" && +choosenElement().Scale !== 0
            ? scaleValue(+choosenElement().Scale, "Scale")
            : 1
        }
        blur={condition === "page-text" && choosenElement().Blur > 0 ? choosenElement().Blur + "px" : 0}
        speed={condition === "page-text" && choosenElement().Speed > 0 ? choosenElement().Speed : 0}
        delay={condition === "page-text" && choosenElement().Delay > 0 ? choosenElement().Delay : 0}
        easing={condition === "page-text" && choosenElement().easing === "Ease-in" ? "ease-in" : choosenElement().easing === "Ease-out" ? "ease-out" : "ease-in-out"}
        dispatchEvent={handleEvent}
      />
      <PageButton
        top={condition === "page-button" ? +choosenElement().Y + 350 : 350}
        left={condition === "page-button" ? +choosenElement().X + 80 : 80}
        opacity={
          condition === "page-button" ? (+choosenElement().Opacity / 100) * 1 : 1
        }
        scale={
          condition === "page-button" && +choosenElement().Scale !== 0
            ? scaleValue(+choosenElement().Scale, "Scale")
            : 1
        }
        blur={condition === "page-button" && choosenElement().Blur > 0 ? choosenElement().Blur + "px" : 0}
        speed={condition === "page-button" && choosenElement().Speed > 0 ? choosenElement().Speed : 0}
        delay={condition === "page-button" && choosenElement().Delay > 0 ? choosenElement().Delay : 0}
        easing={condition === "page-button" && choosenElement().easing === "Ease-in" ? "ease-in" : choosenElement().easing === "Ease-out" ? "ease-out" : "ease-in-out"}
        dispatchEvent={handleEvent}
      />
      <PageImage
        top={condition === "page-image" ? +choosenElement().Y + 73 : 73}
        left={condition === "page-image" ? +choosenElement().X + 504 : 504}
        opacity={
          condition === "page-image" ? (+choosenElement().Opacity / 100) * 1 : 1
        }
        scale={
          condition === "page-image" && +choosenElement().Scale !== 0
            ? scaleValue(+choosenElement().Scale, "Scale")
            : 1
        }
        blur={condition === "page-image" && choosenElement().Blur > 0 ? choosenElement().Blur + "px" : 0}
        speed={condition === "page-image" && choosenElement().Speed > 0 ? choosenElement().Speed : 0}
        delay={condition === "page-image" && choosenElement().Delay > 0 ? choosenElement().Delay : 0}
        easing={condition === "page-image" && choosenElement().easing === "Ease-in" ? "ease-in" : choosenElement().easing === "Ease-out" ? "ease-out" : "ease-in-out"}
        dispatchEvent={handleEvent}
      />
    </div>
  );
};
