import React, {useState, useEffect} from 'react'
import classes from './MobileNavbar.module.scss'
import MobileIcon from "../../UI/MobileIcon/";
import Logo from "../../../assets/images/logo.svg";

const MobileNavbar = (props) => {

    const [isVisible, setIsVisible] = useState(false)
    
    useEffect(() => {
      setIsVisible(props.visible);
    }, [props.visible]);

    let attachedClasses = [classes.Nav]
    if(props.visible) {
        attachedClasses = [classes.Nav, classes.open]
    }
    return (
      <div className={classes.MobileNav}>
        <div className={classes.HeaderContainer}>
          <div className={classes.Logo}>
            <a href="#">
              <img src={Logo} alt="Logo" />
            </a>
          </div>
          <MobileIcon 
            clicked={props.clicked}
            open={isVisible}
          />
        </div>
        <div className={attachedClasses.join(' ')}>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
          <a href="#">Login</a>
          <button>Sign Up</button>
        </div>
      </div>
    );
}

export default MobileNavbar
