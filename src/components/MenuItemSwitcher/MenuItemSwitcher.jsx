import "./menu-item-switcher.css";

export const MenuItemSwitcher = () => {
  return (
    <>
      <div className="menu-item__switcher-name">Replay</div>
      <div className="card-body">
        <label className="switch" htmlFor="checkbox">
          <input type="checkbox" id="checkbox" />
          <div className="slider round"></div>
        </label>
      </div>
    </>
  );
};
