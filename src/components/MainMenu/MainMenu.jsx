import { MenuItemRange } from "../MenuItemRange/MenuItemRange";
import { MenuItemSelect } from "../MenuItemSelect/MenuItemSelect";
import { MenuItemSwitcher } from "../MenuItemSwitcher/MenuItemSwitcher";
import "./main-menu.css";

const settings = ["X", "Y", "Opacity", "Scale", "Blur", "Speed", "Delay"];

export const MainMenu = () => {
  return (
    <aside className="main-menu">
      <div className="settings">
        {settings.map((item, key) => {
          return (
            <div key={key} className="menu-item">
              <MenuItemRange item={item} />
            </div>
          );
        })}
        <div className="menu-item__lower">
          <MenuItemSelect />
        </div>
        <div className="menu-item__lower">
          <MenuItemSwitcher />
        </div>
      </div>
    </aside>
  );
};
