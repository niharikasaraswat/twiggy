import { useContext, useState } from "react";
import "./Navbar.css";
import assets from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

interface Navbarprops {
  setShowLogin: (show: boolean) => void;
}

const navbar: React.FC<Navbarprops> = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const context = useContext(StoreContext);

  // Ensure context is not null
  if (!context) {
    return null; // or some loading state
  }

  const { getTotalCartAmount } = context;

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo_no_back} alt={assets.logo} className="logo"></img>
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("Mobile-App")}
          className={menu === "Mobile-App" ? "active" : ""}
        >
          Mobile-App
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("Contact-Us")}
          className={menu === "Contact-Us" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign-In</button>
      </div>
    </div>
  );
};

export default navbar;
