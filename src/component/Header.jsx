import logo from "../assets/logo.jpg";

export default function Header({ onSelect }) {
  return (
    <div id="main-header">
      <div id="title">
        <img src={logo} alt="food app logo" />
        <h1>My Food Order App</h1>
      </div>
      <button className="button" onClick={onSelect}>
        Cart
      </button>
    </div>
  );
}

Header.propTypes = {
  onSelect: () => {},
};
