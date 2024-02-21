import { useDispatch, useSelector } from "react-redux";
import { selectElement } from "../../lib/slices/elementSlice";

export const PageTitle = ({ top, left, opacity }) => {
  const dispatch = useDispatch();
  const elementState = useSelector((state) => state.element.result);
  const titleStyle = {
    display: "inline-block",
    top: top,
    left: left,
    opacity: opacity,
    margin: 0,
    fontSize: 43,
    letterSpacing: -2,
    position: "absolute",
    cursor: "pointer",
  };

  const handleClick = (event) => {
    event.stopPropagation();
    dispatch(selectElement(event.target.getAttribute("data-name")));
  };

  return (
    <>
    <h1
      style={titleStyle}
      data-name="page-title"
      onClick={(event) => handleClick(event)}
      className={elementState === "page-title" ? "selected-element top-left" : ""}
    >
      Animation Settings
    </h1>
    </>
    
  );
};
