import React from "react";
import classes from "./Header.module.scss";
import Logo from "../../assets/images/logo.svg";
import MobileNavbar from "./MobileNavbar"; 

const Header = props => {
  return (
    <header>
      <nav>
        <div>
          <span>
            <a href={classes}>
              <img src={Logo} alt="Logo" />
            </a>
          </span>
          <span>
            <a href={"foo"}>Features</a>
            <a href={"foo"}>Pricing</a>
            <a href={"foo"}>Resources</a>
          </span>
        </div>
        <div>
          <a href={"foo"}>Login</a>
          <button>Sign Up</button>
        </div>
      </nav>
      <MobileNavbar clicked={props.clicked} visible={props.visible} />
    </header>
  );
};

export default Header;
