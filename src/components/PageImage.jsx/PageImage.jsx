import { useDispatch, useSelector } from "react-redux";
import { selectElement } from "../../lib/slices/elementSlice";

export const PageImage = ({ top, left, opacity, scale, blur, speed, delay, easing, dispatchEvent }) => {
  const dispatch = useDispatch();
  const elementState = useSelector((state) => state.element.result);
  const imageStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top,
    left,
    opacity,
    transform: `scale(${scale})`,
    filter: `blur(${blur})`,
    position: "absolute",
    cursor: "pointer",
    transition: `top ${speed}s, left ${speed}s, opacity ${speed}s, transform ${speed}s, filter ${speed}s`,
    transitionDelay: `${delay}s`,
    transitionTimingFunction: easing
  };

  const handleClick = (event) => {
    event.stopPropagation();
    dispatch(selectElement(event.target.getAttribute("data-name")));
  };

  const handleTransitionEnd = (event) => {
    event && dispatchEvent("image")
  };

  return (
    <div
      style={imageStyle}
      onTransitionEnd={(event) => handleTransitionEnd(event)}
      className={elementState === "page-image" ? "selected-element element" : "element"}
    >
      <img
        src="./image.jpg"
        alt="page image"
        data-name="page-image"
        onClick={(event) => handleClick(event)}
      ></img>
    </div>
  );
};
