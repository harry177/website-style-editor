import "./menu-item.css";
import { useState } from "react";

export const MenuItem = ({ item }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    const newValue = parseInt(event.target.value);
    setValue(newValue);
  };

  const getBackgroundStyle = () => {
    const positiveValue = value > 0 ? value + 150 : -value + 150;
    const percentage = (positiveValue / 300) * 100;
    const color = value !== 0 ? "#afafaf" : "#e0e0e0";

    if (value > 0) {
      return `linear-gradient(to right, #e0e0e0 50%, ${color} 50%, ${color} ${percentage}%, #e0e0e0 ${percentage}%, #e0e0e0 100%)`;
    } else if (value < 0) {
      return `linear-gradient(to left, #e0e0e0 50%, ${color} 50%, ${color} ${percentage}%, #e0e0e0 ${percentage}%, #e0e0e0 100%)`;
    }
  };

  return (
    <>
      <div className="menu-item__name">{item}</div>
      <input
        type="range"
        min="-150"
        max="150"
        value={value}
        onChange={handleChange}
        className="menu-item__range"
        style={{ background: getBackgroundStyle() }}
      ></input>
      <div>{value}</div>
    </>
  );
};
