import React from 'react'
import classes from './MobileIcon.module.scss'

const MobileIcon = (props) => {

    let attachedClasses = [classes.icon];
    if (props.open) {
      attachedClasses = [classes.icon, classes.open]
    }
    return (
      <div className={classes.MobileIcon} onClick={props.clicked}>
        <div className={attachedClasses.join(" ")}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
}

export default MobileIcon
