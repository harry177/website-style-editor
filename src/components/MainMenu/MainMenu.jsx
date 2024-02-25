import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addElement, updateElement } from "../../lib/slices/newFormSlice";
import { MenuItemRange } from "../MenuItemRange/MenuItemRange";
import { MenuItemSelect } from "../MenuItemSelect/MenuItemSelect";
import { MenuItemSwitcher } from "../MenuItemSwitcher/MenuItemSwitcher";
import "./main-menu.css";
import { useEffect } from "react";

const settings = ["X", "Y", "Opacity", "Scale", "Blur", "Speed", "Delay"];

export const MainMenu = () => {
  const { register, handleSubmit, watch, reset } = useForm({
    defaultValues: {
      X: 0,
      Y: 0,
      Opacity: 100,
      Scale: 0,
      Blur: 0,
      Speed: 0,
      Delay: 0,
    },
  });
  const dispatch = useDispatch();

  const condition = useSelector((state) => state.element.result);
  const newFormResult = useSelector((state) => state.newform.newFormData);

  const choosenElement = newFormResult.find((elem) => elem.name === condition);


  const onSubmit = (data) => {

  if (condition && newFormResult.length !== 0) {
    if (!choosenElement) {
      dispatch(addElement({ name: condition, data: data }));
    } else {
      dispatch(updateElement({ name: condition, data: data }));
    }
  } else {
    dispatch(addElement({ name: condition, data: data }));
  }
};

useEffect(() => {
  choosenElement ? reset(choosenElement.data) : reset({X: 0,
    Y: 0,
    Opacity: 100,
    Scale: 0,
    Blur: 0,
    Speed: 0,
    Delay: 0});
}, [condition])


  return (
    <aside className="main-menu">
      <form className="settings" onSubmit={handleSubmit(onSubmit)}>
        {settings.map((item, key) => {
          return (
            <div key={key} className="menu-item">
              <MenuItemRange item={item} register={register} watch={watch} />
            </div>
          );
        })}
        <div className="menu-item__lower">
          <MenuItemSelect register={register} />
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
