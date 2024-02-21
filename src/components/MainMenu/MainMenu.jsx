import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { submitForm } from "../../lib/slices/formSlice";
import { MenuItemRange } from "../MenuItemRange/MenuItemRange";
import { MenuItemSelect } from "../MenuItemSelect/MenuItemSelect";
import { MenuItemSwitcher } from "../MenuItemSwitcher/MenuItemSwitcher";
import "./main-menu.css";

const settings = ["X", "Y", "Opacity", "Scale", "Blur", "Speed", "Delay"];

export const MainMenu = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(submitForm(data));
  };
  return (
    <aside className="main-menu">
      <form className="settings" onSubmit={handleSubmit(onSubmit)}>
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
        <button type="submit" className="form-button">
          Preview
        </button>
      </form>
    </aside>
  );
};
