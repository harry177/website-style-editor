import { MenuItem } from "../MenuItem/MenuItem";
import "./main-menu.css";

const settings = [
  "X",
  "Y",
  "Opacity",
  "Scale",
  "Blur",
  "Speed",
  "Delay",
  "Easing",
  "Delay",
];

export const MainMenu = () => {
  return (
    <aside className="main-menu">
      <div className="settings">
        {settings.map((item, key) => {
          return (
            <div key={key} className="menu-item">
              <MenuItem item={item} />
            </div>
          );
        })}
      </div>
    </aside>
  );
};
