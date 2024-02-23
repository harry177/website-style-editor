import { useDispatch, useSelector } from "react-redux";
import { selectElement } from "../../lib/slices/elementSlice";

export const PageText = ({ top, left, opacity, scale, blur, speed, delay, dispatchEvent }) => {
  const dispatch = useDispatch();
  const elementState = useSelector((state) => state.element.result);
  const textStyle = {
    display: "inline-block",
    top,
    left,
    opacity,
    transform: `scale(${scale})`,
    filter: `blur(${blur})`,
    color: "#000000",
    width: 374,
    height: 176,
    margin: 0,
    lineHeight: 1.3,
    position: "absolute",
    cursor: "pointer",
    transition: `top ${speed}s, left ${speed}s, opacity ${speed}s, transform ${speed}s, filter ${speed}s`,
    transitionDelay: `${delay}s`
  };

  const handleClick = (event) => {
    event.stopPropagation();
    dispatch(selectElement(event.target.getAttribute("data-name")));
  };

  const handleTransitionEnd = (event) => {
    event && dispatchEvent("text")
  };

  return (
    <div
      style={textStyle}
      data-name="page-text"
      onClick={(event) => handleClick(event)}
      onTransitionEnd={(event) => handleTransitionEnd(event)}
      className={elementState === "page-text" ? "selected-element element" : "element"}
    >
      The user should have the option to select any element on the page and set
      up its animation using the controls in the right panel. A dotted line will
      show the element&apos;s position and state before the animation begins,
      giving the user a clear idea of how the animation will appear. The preview
      button on the top panel will open the result in a new tab.
    </div>
  );
};
