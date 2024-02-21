import { useDispatch, useSelector } from "react-redux";
import { selectElement } from "../../lib/slices/elementSlice";

export const PageButton = ({ top, left, opacity }) => {
  const dispatch = useDispatch();
  const elementState = useSelector((state) => state.element.result);
  const buttonStyle = {
    display: "inline-block",
    top: top,
    left: left,
    opacity: opacity,
    width: 146,
    heugh: 51,
    color: "#ffffff",
    backgroundColor: "#3e87f8",
    position: "absolute",
    cursor: "pointer",
  };

  const handleClick = (event) => {
    event.stopPropagation();
    dispatch(selectElement(event.target.getAttribute("data-name")));
  };

  return (
    <button
      style={buttonStyle}
      data-name="page-button"
      onClick={(event) => handleClick(event)}
      className={elementState === "page-button" ? "selected-element" : ""}
    >
      Button
    </button>
  );
};
