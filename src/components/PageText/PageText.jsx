import { useDispatch, useSelector } from "react-redux";
import { selectElement } from "../../lib/slices/elementSlice";
import { setMarker } from "../../lib/slices/markerSlice";
import { toggleClick } from "../../lib/slices/clickSlice";
import { initialFormValues } from "../../shared/constants/formValue";

export const PageText = ({ dispatchEvent, computing }) => {
  const dispatch = useDispatch();
  const marker = useSelector((state) => state.marker.marker);
  const newFormResult = useSelector((state) => state.newform.newFormData);
  const condition = useSelector((state) => state.element.result);
  const elementName = "page-text";
  const elementState =
    condition === elementName
      ? condition
      : marker &&
        newFormResult.filter((elem) => elem.name === elementName).length !== 0
      ? newFormResult.filter((elem) => elem.name === elementName)[0].name
      : initialFormValues;

  const wrapperStyle = {
    top: computing(elementState).Y + 170,
    left: computing(elementState).X + 80,
    transform: `scale(${
      computing(elementState).Scale !== 0 ? computing(elementState).Scale : 1
    })`,
    transitionDuration: `${computing(elementState).Speed}s`,
    transitionDelay: `${computing(elementState).Delay}s`,
    transitionTimingFunction: computing(elementState).Easing,
  };

  const textStyle = {
    display: "inline-block",
    opacity: computing(elementState).Opacity,
    filter: `blur(${computing(elementState).Blur}px)`,
    color: "#000000",
    width: 374,
    height: 176,
    margin: 0,
    lineHeight: 1.3,
    position: "relative",
    cursor: "pointer",
    transitionDuration: `${computing(elementState).Speed}s`,
    transitionDelay: `${computing(elementState).Delay}s`,
    transitionTimingFunction: computing(elementState).Easing,
  };

  const handleClick = (event) => {
    dispatch(toggleClick());
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
        condition === "page-text" ? "selected-element element" : "element"
      }
      style={wrapperStyle}
      onClick={(event) => handleClick(event)}
      onTransitionEnd={(event) => handleTransitionEnd(event)}
    >
      <div style={textStyle} data-name="page-text">
        The user should have the option to select any element on the page and
        set up its animation using the controls in the right panel. A frame
        color around element can show current selection (blue) or wrong position
        relative to page (red). The preview button on the top panel allow to
        update element&apos;s state and launch animation of all elements.
      </div>
    </div>
  );
};
