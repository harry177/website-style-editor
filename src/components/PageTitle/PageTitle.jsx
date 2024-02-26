import { useDispatch, useSelector } from "react-redux";
import { selectElement } from "../../lib/slices/elementSlice";
import { setMarker } from "../../lib/slices/markerSlice";
import { initialFormValues } from "../../shared/constants/formValue";

export const PageTitle = ({ dispatchEvent, computing }) => {
  const dispatch = useDispatch();
  const marker = useSelector((state) => state.marker.marker);
  const newFormResult = useSelector((state) => state.newform.newFormData);
  const condition = useSelector((state) => state.element.result);
  const elementName = "page-title";
  const elementState =
    condition === elementName
      ? condition
      : marker &&
        newFormResult.filter((elem) => elem.name === elementName).length !== 0
      ? newFormResult.filter((elem) => elem.name === elementName)[0].name
      : initialFormValues;

  const titleStyle = {
    display: "inline-block",
    top: computing(elementState).Y + 90,
    left: computing(elementState).X + 80,
    opacity: computing(elementState).Opacity,
    transform: `scale(${
      computing(elementState).Scale !== 0 ? computing(elementState).Scale : 1
    })`,
    filter: `blur(${computing(elementState).Blur}px)`,
    color: "#000000",
    margin: 0,
    fontSize: 43,
    letterSpacing: -2,
    position: "absolute",
    cursor: "pointer",
    transitionDuration: `${computing(elementState).Speed}s`,
    transitionDelay: `${computing(elementState).Delay}s`,
    transitionTimingFunction: computing(elementState).Easing,
  };

  const handleClick = (event) => {
    dispatch(setMarker(""));
    event.stopPropagation();
    dispatch(selectElement(event.target.getAttribute("data-name")));
  };

  const handleTransitionEnd = (event) => {
    event && dispatchEvent("title");
  };

  return (
    <>
      <h1
        style={titleStyle}
        data-name="page-title"
        onClick={(event) => handleClick(event)}
        onTransitionEnd={(event) => handleTransitionEnd(event)}
        className={
          condition === "page-title" ? "selected-element element" : "element"
        }
      >
        Animation Settings
      </h1>
    </>
  );
};
