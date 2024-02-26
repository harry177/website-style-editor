import { useDispatch, useSelector } from "react-redux";
import { selectElement } from "../../lib/slices/elementSlice";
import { setMarker } from "../../lib/slices/markerSlice";
import { toggleClick } from "../../lib/slices/clickSlice";
import { initialFormValues } from "../../shared/constants/formValue";

export const PageImage = ({ dispatchEvent, computing }) => {
  const dispatch = useDispatch();
  const marker = useSelector((state) => state.marker.marker);
  const newFormResult = useSelector((state) => state.newform.newFormData);
  const condition = useSelector((state) => state.element.result);
  const elementName = "page-image";
  const elementState =
    condition === elementName
      ? condition
      : marker &&
        newFormResult.filter((elem) => elem.name === elementName).length !== 0
      ? newFormResult.filter((elem) => elem.name === elementName)[0].name
      : initialFormValues;

  const wrapperStyle = {
    top: computing(elementState).Y + 73,
    left: computing(elementState).X + 504,
    transform: `scale(${
      computing(elementState).Scale !== 0 ? computing(elementState).Scale : 1
    })`,
    transitionDuration: `${computing(elementState).Speed}s`,
    transitionDelay: `${computing(elementState).Delay}s`,
    transitionTimingFunction: computing(elementState).Easing,
  };

  const imageStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: computing(elementState).Opacity,
    filter: `blur(${computing(elementState).Blur}px)`,
    position: "relative",
    cursor: "pointer",
    transitionDuration: `${computing(elementState).Speed}s`,
    transitionDelay: `${computing(elementState).Delay}s`,
    transitionTimingFunction: computing(elementState).Easing,
  };

  const handleClick = (event) => {
    dispatch(toggleClick((prev) => !prev));
    dispatch(setMarker(""));
    event.stopPropagation();
    dispatch(selectElement(event.target.getAttribute("data-name")));
  };

  const handleTransitionEnd = (event) => {
    event && dispatchEvent(event);
  };

  return (
    <div
      className={
        condition === "page-image" ? "selected-element element" : "element"
      }
      style={wrapperStyle}
      onClick={(event) => handleClick(event)}
      onTransitionEnd={(event) => handleTransitionEnd(event)}
    >
      <img
        src="./image.jpg"
        alt="page image"
        data-name="page-image"
        style={imageStyle}
      ></img>
    </div>
  );
};
