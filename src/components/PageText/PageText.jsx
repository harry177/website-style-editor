import { useDispatch, useSelector } from "react-redux";
import { selectElement } from "../../lib/slices/elementSlice";

export const PageText = ({ top, left, opacity, scale, blur }) => {
  const dispatch = useDispatch();
  const elementState = useSelector((state) => state.element.result);
  const textStyle = {
    display: "inline-block",
    top: top,
    left: left,
    opacity: opacity,
    transform: `scale(${scale})`,
    filter: `blur(${blur})`,
    width: 374,
    height: 176,
    margin: 0,
    lineHeight: 1.3,
    position: "absolute",
    cursor: "pointer",
  };

  const handleClick = (event) => {
    event.stopPropagation();
    dispatch(selectElement(event.target.getAttribute("data-name")));
  };

  return (
    <div
      style={textStyle}
      data-name="page-text"
      onClick={(event) => handleClick(event)}
      className={elementState === "page-text" ? "selected-element" : ""}
    >
      The user should have the option to select any element on the page and set
      up its animation using the controls in the right panel. A dotted line will
      show the element&apos;s position and state before the animation begins,
      giving the user a clear idea of how the animation will appear. The preview
      button on the top panel will open the result in a new tab.
    </div>
  );
};
