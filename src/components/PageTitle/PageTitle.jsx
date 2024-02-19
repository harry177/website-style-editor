export const PageTitle = ({ top, left, opacity }) => {
    const titleStyle = {
      display: "inline-block",
      top: top,
      left: left,
      opacity: opacity,
      margin: 0,
      fontSize: 43,
      letterSpacing: -2,
      position: "absolute"
    };
    return <h1 style={titleStyle}>Animation Settings</h1>;
  };