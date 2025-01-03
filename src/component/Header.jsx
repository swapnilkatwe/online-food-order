import logo from "../assets/logo.jpg";

export default function Header({ onSelect }) {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="food app logo" />
        <h1>My Food Order App</h1>
      </div>
      <nav>
        <button className="button" onClick={onSelect}>
          Cart(0)
        </button>
      </nav>
    </header>
  );
}

Header.propTypes = {
  onSelect: () => {},
};
