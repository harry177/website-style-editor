import "./menu-item-range.css";

export const MenuItemRange = ({ item, register, watch }) => {

  const value = watch(item);


  const splittedRangeStyle = (item) => {
    let selectedValue;
    let percentage;
    let color;
    if (item === "X" || item === "Y") {
      selectedValue = value > 0 ? value + 150 : -value + 150;
      percentage = (selectedValue / 300) * 100;
      color = value !== 0 ? "#afafaf" : "#e0e0e0";
    } else {
      selectedValue = value > 0 ? value + 20 : -value + 20;
      percentage = (selectedValue / 40) * 100;
      color = value !== 0 ? "#afafaf" : "#e0e0e0";
    }

    if (value > 0) {
      return `linear-gradient(to right, #e0e0e0 50%, ${color} 50%, ${color} ${percentage}%, #e0e0e0 ${percentage}%, #e0e0e0 100%)`;
    } else if (value < 0) {
      return `linear-gradient(to left, #e0e0e0 50%, ${color} 50%, ${color} ${percentage}%, #e0e0e0 ${percentage}%, #e0e0e0 100%)`;
    }
  };
  
  const entireRangeStyle = (item) => {
    const color = value !== 0 ? "#afafaf" : "#e0e0e0";
    const gradientValue = item !== "Opacity" ? (value / 20) * 100 : value;
    return `linear-gradient(to right, #e0e0e0 0%, ${color} 0%, ${color} ${gradientValue}%, #e0e0e0 ${gradientValue}%, #e0e0e0 100%)`;
  };
  

  const calculateValue = (value, item) => {
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

  return (
    <>
      <div className="menu-item__name">{item}</div>
      <input
        type="range"
        min={
          item === "X" || item === "Y"
            ? -150
            : item === "Scale" || item === "Blur"
            ? -20
            : 0
        }
        max={item === "X" || item === "Y" ? 150 : item === "Opacity" ? 100 : 20}
        step={1}
       name={item}
        {...register(item)}
       
        className="menu-item__range"
        style={
          item === "Opacity" || item === "Speed" || item === "Delay"
            ? { background: entireRangeStyle(item) }
            : { background: splittedRangeStyle(item) }
        }
      ></input>
      <div className="menu-item__value">
        {item === "Speed" && "."}
        {calculateValue(value, item)}
        {item === "Opacity" && "%"}
        {(item === "Speed" || item === "Delay") && "s"}
      </div>
    </>
  );
};
