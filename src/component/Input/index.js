import React, { useState, useEffect } from "react";
import classes from "./Input.module.scss";
import Loading from "../UI/Loading/";

const Input = props => {
  const [isVisible, setIsVisible] = useState(false);
//   const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (props.empty) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [props.empty]);
  return (
    <div className={classes.Input}>
      <div className={classes.inputContainer}>
        <input type="text" 
          value={props.value}
          onChange={props.handleChange}
          placeholder='Shorten a Link here'
          className={props.empty ? classes.empty : ''}
        />
        <button onClick={props.handleSubmit}> {props.loading ? <Loading /> : 'Shorten It' } </button>
        {isVisible ? <p> Please add a Link </p> : null}
      </div>
    </div>
  );
};

export default Input;
