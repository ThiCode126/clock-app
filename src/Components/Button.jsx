import React from "react";

const Button = ({ isMore, onToggleMore }) => {
  const moreOrLess = isMore ? "less" : "more";

  return (
    <div className="btn-more" onClick={onToggleMore}>
      <span className="text">{moreOrLess}</span>
      <svg  className={`icon ${moreOrLess}`} xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
          <circle fill="#303030" cx="20" cy="20" r="20" />
          <path stroke="#FFF" strokeWidth="2" d="M14 23l6-6 6 6" />
        </g>
      </svg>
    </div>
  );
};

export default Button;
