import logo from "../assets/logo.jpg";
import Button from "./UI/Button";

export default function Header({ onSelect }) {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="food app logo" />
        <h1>My Food Order App</h1>
      </div>
      <nav>
        <Button textOnly onClick={onSelect}>
          Cart(0)
        </Button>
      </nav>
    </header>
  );
}

Header.propTypes = {
  onSelect: () => {},
};
