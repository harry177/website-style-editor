import "./header.css";

export const Header = () => {
  return <header className="header">
    <img src="./logo.png" alt="logo" className="header-logo"></img>
    <button className="preview-button">Preview</button>
  </header>;
};
