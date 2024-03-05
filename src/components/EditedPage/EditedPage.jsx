import { useEffect, useState } from "react";
import { PageButton } from "../PageButton/PageButton";
import { PageImage } from "../PageImage.jsx/PageImage";
import { PageText } from "../PageText/PageText";
import { PageTitle } from "../PageTitle/PageTitle";
import { useDispatch, useSelector } from "react-redux";
import { selectElement } from "../../lib/slices/elementSlice";
import { setMarker } from "../../lib/slices/markerSlice";
import { toggleClick } from "../../lib/slices/clickSlice";
import { scaleValue } from "../../shared/utils/scaleValue";
import { initialFormValues } from "../../shared/constants/formValue";
import "./edited-page.css";

export const EditedPage = () => {
  const dispatch = useDispatch();
  const [event, setEvent] = useState("");

  const condition = useSelector((state) => state.element.result);
  const newFormResult = useSelector((state) => state.newform.newFormData);
  const marker = useSelector((state) => state.marker.marker);
  const click = useSelector((state) => state.click.click);

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
  }, [event, condition, marker, click]);

  const handleEvent = (event) => {
    setEvent(event);
  };

  const generalComputing = (condition) => {
    if (
      newFormResult.length !== 0 &&
      newFormResult.filter((elem) => elem.name === condition).length !== 0
    ) {
      const result = newFormResult.filter((elem) => elem.name === condition)[0]
        .data;
      return {
        X: +result.X,
        Y: +result.Y,
        Opacity: +result.Opacity / 100,
        Scale: scaleValue(+result.Scale, "Scale"),
        Blur: result.Blur > 0 ? result.Blur : 0,
        Speed: result.Speed,
        Delay: result.Delay,
        Easing:
          result.easing === "Ease-in"
            ? "ease-in"
            : result.easing === "Ease-out"
            ? "ease-out"
            : "ease-in-out",
      };
    }
    return initialFormValues;
  };

  const resetPage = () => {
    dispatch(selectElement(""));
    dispatch(setMarker(""));
    dispatch(toggleClick());
    setEvent("");
  };

  return (
    <div className="edited-page" onClick={resetPage}>
      <PageTitle computing={generalComputing} dispatchEvent={handleEvent} />
      <PageText computing={generalComputing} dispatchEvent={handleEvent} />
      <PageButton dispatchEvent={handleEvent} computing={generalComputing} />
      <PageImage dispatchEvent={handleEvent} computing={generalComputing} />
    </div>
  );
};
