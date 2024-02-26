import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addElement, updateElement } from "../../lib/slices/newFormSlice";
import { setMarker } from "../../lib/slices/markerSlice";
import { toggleClick } from "../../lib/slices/clickSlice";
import { MenuItemRange } from "../MenuItemRange/MenuItemRange";
import { MenuItemSelect } from "../MenuItemSelect/MenuItemSelect";
import { MenuItemSwitcher } from "../MenuItemSwitcher/MenuItemSwitcher";
import { initialFormValues } from "../../shared/constants/formValue";
import "./main-menu.css";


const settings = ["X", "Y", "Opacity", "Scale", "Blur", "Speed", "Delay"];

export const MainMenu = () => {
  const { register, handleSubmit, watch, reset } = useForm({
    defaultValues: initialFormValues
  });
  const dispatch = useDispatch();

  const condition = useSelector((state) => state.element.result);
  const newFormResult = useSelector((state) => state.newform.newFormData);

  const choosenElement = newFormResult.find((elem) => elem.name === condition);


  const onSubmit = (data) => {
    dispatch(toggleClick((prev) => !prev));

  if (condition && newFormResult.length !== 0) {
    if (!choosenElement) {
      dispatch(setMarker(""))
      dispatch(addElement({ name: condition, data: data }));
    } else {
      dispatch(setMarker(""))
      dispatch(updateElement({ name: condition, data: data }));
    }
  } else if (!condition && newFormResult.length !== 0) {
    dispatch(setMarker("marker"))
  } else {
    dispatch(setMarker("marker"))
    dispatch(addElement({ name: condition, data: data }));
  }
  
};

useEffect(() => {
  choosenElement ? reset(choosenElement.data) : reset(initialFormValues);
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
