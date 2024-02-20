export const PageButton = ({ top, left, opacity }) => {
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
  };
  return <button style={buttonStyle}>Button</button>;
};
