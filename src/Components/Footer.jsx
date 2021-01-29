import React from "react";

const Footer = ({ infoTime }) => {
  return (
    <footer className="more">
      <div className="in-footer">
        <span className="title">current timezone</span>
        <span className="info">{infoTime.timezone}</span>
      </div>
      <div className="in-footer">
        <span className="title">day of the year</span>
        <span className="info">{infoTime.day_of_year}</span>
      </div>
      <div className="in-footer">
        <span className="title">day of the week</span>
        <span className="info">{infoTime.day_of_week}</span>
      </div>
      <div className="in-footer">
        <span className="title">week number</span>
        <span className="info">{infoTime.week_number}</span>
      </div>
    </footer>
  );
};

export default Footer;
