export const PageText = ({ top, left, opacity }) => {
  const textStyle = {
    display: "inline-block",
    top: top,
    left: left,
    width: 374,
    height: 176,
    opacity: opacity,
    margin: 0,
    lineHeight: 1.3,
    position: "absolute",
  };
  return (
    <div style={textStyle}>
      The user should have the option to select any element on the page and set
      up its animation using the controls in the right panel. A dotted line will
      show the element&apos;s position and state before the animation begins, giving
      the user a clear idea of how the animation will appear. The preview button
      on the top panel will open the result in a new tab.
    </div>
  );
};
