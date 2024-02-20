import "./menu-item-select.css";

export const MenuItemSelect = () => {
    return (
        <>
        <div className="menu-item__select-name">Easing</div>
        <select>
            <option>Ease-in</option>
            <option>Ease-out</option>
        </select>
        </>
    )
}