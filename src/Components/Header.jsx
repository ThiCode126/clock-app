import React from "react";

import RefreshLogo from "../assets/icon-refresh.svg";

const Header = ({ quote, onChangeQuote }) => {
  return (
    <header id="header-quote">
      <div>
        <p id="quote-content">"{quote.content}"</p>
        <h2 id="quote-author">{quote.author}</h2>
      </div>
      <img
        id="refresh-icon"
        src={RefreshLogo}
        alt="refresh-icon"
        onClick={onChangeQuote}
      />
    </header>
  );
};

export default Header;
