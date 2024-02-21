import { useDispatch, useSelector } from "react-redux";
import { selectElement } from "../../lib/slices/elementSlice";

export const PageImage = ({ top, left, opacity }) => {
  const dispatch = useDispatch();
  const elementState = useSelector((state) => state.element.result);
  const imageStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: top,
    left: left,
    opacity: opacity,
    position: "absolute",
    cursor: "pointer",
  };

  const handleClick = (event) => {
    event.stopPropagation();
    dispatch(selectElement(event.target.getAttribute("data-name")));
  };

  return (
    <div style={imageStyle} className={elementState === "page-image" ? "selected-element" : ""}>
      <img
        src="./image.jpg"
        alt="page image"
        
        data-name="page-image"
        onClick={(event) => handleClick(event)}
      ></img>
    </div>
  );
};
