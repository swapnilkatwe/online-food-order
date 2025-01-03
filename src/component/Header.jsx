import logo from "../assets/logo.jpg"

export default function Header() {
    return (
        <div id="main-header">
            <div id="title">
                <img src={logo} alt="food app logo" />
                <h1>My Food Order App</h1>
            </div>
            <button className="button">Cart</button>
        </div>
    );
}