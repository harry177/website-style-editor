import { useDispatch, useSelector } from "react-redux";
import { selectElement } from "../../lib/slices/elementSlice";

export const PageTitle = ({
  top,
  left,
  opacity,
  scale,
  blur,
  speed,
  delay,
  dispatchEvent,
}) => {
  const dispatch = useDispatch();
  const elementState = useSelector((state) => state.element.result);
  const titleStyle = {
    display: "inline-block",
    top,
    left,
    opacity,
    transform: `scale(${scale})`,
    filter: `blur(${blur})`,
    color: "#000000",
    margin: 0,
    fontSize: 43,
    letterSpacing: -2,
    position: "absolute",
    cursor: "pointer",
    transition: `top ${speed}s, left ${speed}s, opacity ${speed}s, transform ${speed}s, filter ${speed}s`,
    transitionDelay: `${delay}s`,
  };

  const handleClick = (event) => {
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
        className={elementState === "page-title" ? "selected-element element" : "element"}
      >
        Animation Settings
      </h1>
    </>
  );
};
