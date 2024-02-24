import "./menu-item-select.css";

export const MenuItemSelect = ({ register }) => {
    return (
        <>
        <div className="menu-item__select-name">Easing</div>
        <select {...register("Easing")}>
            <option>Ease-in</option>
            <option>Ease-out</option>
            <option>Ease-in-out</option>
        </select>
        </>
    )
}