import React, { useState } from "react";
import axios from "axios";

import Header from "./component/Header/";
import Hero from "./component/Hero/";
import Input from "./component/Input/";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [link, setLink] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = e => {
    setInputValue(e.target.value);
    setIsEmpty(false);
  };

  const handleSubmit = e => {
    setIsError(false)
    setIsEmpty(false)

    if (inputValue.trim() === "") {
      setIsEmpty(true);
    } else {
      setIsLoading(true)
      axios
        .post("https://rel.ink/api/links/", { url: inputValue })
        .then(({ data }) => {
          setIsLoading(false)
          const newLink = {
            url: inputValue,
            shortURL: `https://rel.ink/${data.hashid}`
          };
          setLink(newLink);
          setInputValue("");
        })
        .catch(err => {
          setIsError(true)
          setIsLoading(false)
        });
    }
  };

  const handleNavbar = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="Wrapper">
      <Header visible={isVisible} clicked={handleNavbar} />
      <Hero />
      <Input 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        empty={isEmpty}
        error={isError}
        loading={isloading}
        value={inputValue}
        link={link}
      />
    </div>
  );
};

export default App;
