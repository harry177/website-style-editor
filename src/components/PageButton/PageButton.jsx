import { useDispatch, useSelector } from "react-redux";
import { selectElement } from "../../lib/slices/elementSlice";

export const PageButton = ({ top, left, opacity, scale, blur, speed, delay, dispatchEvent }) => {
  const dispatch = useDispatch();
  const elementState = useSelector((state) => state.element.result);
  const buttonStyle = {
    display: "inline-block",
    top,
    left,
    opacity,
    transform: `scale(${scale})`,
    filter: `blur(${blur})`,
    width: 146,
    color: "#ffffff",
    backgroundColor: "#3e87f8",
    border: "none",
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
    event && dispatchEvent("button")
  };

  return (
    <button
      style={buttonStyle}
      data-name="page-button"
      onClick={(event) => handleClick(event)}
      onTransitionEnd={(event) => handleTransitionEnd(event)}
      className={elementState === "page-button" ? "selected-element element" : "element"}
    >
      Button
    </button>
  );
};
