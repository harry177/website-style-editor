export const PageImage = ({ top, left, opacity }) => {
  const imageStyle = {
    top: top,
    left: left,
    opacity: opacity,
    position: "absolute"
  };
  return <img src="./image.jpg" alt="page image" style={imageStyle}></img>;
};
