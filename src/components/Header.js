import React from "react";
import "./Header.css";

const Header = ({ input, setInput }) => {
  const handleChange = (value) => {
    setInput(value);
  };

  return (
    <header className='card header'>
      <h1>Je recherche...</h1>
      <input
        className='header__input'
        type='text'
        placeholder='...une ville, un code postal'
        value={input}
        onChange={(e) => handleChange(e.currentTarget.value)}
      />
    </header>
  );
};

export default Header;
