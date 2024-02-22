export const scaleValue = (value, item) => {
    if (item === "Scale") {
      if (value > 0 && value < 10) {
        return "0.".concat(value.toString());
      } else if (value < 0 && value > -10) {
        return "-0.".concat(value.toString().split("-").join(""));
      } else if (value <= -10) {
        return value && value.toString().slice(0, 2) + "." + value.toString().slice(2);
      } else {
        return value && value.toString().split("").join(".");
      }
    }
    return value;
  };