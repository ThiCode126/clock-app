import React from "react";

const Button = ({ isMore, onToggleMore }) => {
  const moreOrLess = isMore ? "less" : "more";

  return (
    <div className="btn-more" onClick={onToggleMore}>
      <span className="text">{moreOrLess}</span>
      <svg  className={`icon ${moreOrLess}`} xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
          <circle fill="#303030" cx="16" cy="16" r="16" />
          <path stroke="#FFF" strokeWidth="2" d="M11.2 13.6001L16 18.4001L20.8 13.6001" />
        </g>
      </svg>
    </div>
  );
};

export default Button;
