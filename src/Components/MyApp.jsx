import React from "react";
import Clock from "./Clock";
import Footer from "./Footer";
import Header from "./Header";

const MyApp = ({
  infoTime,
  infoZone,
  infoHour,
  quote,
  onChangeQuote,
  isNight,
  isMore,
  onToggleMore,
}) => {
  return (
    <>
      {!isMore && <Header quote={quote} onChangeQuote={onChangeQuote} />}
      <Clock
        infoZone={infoZone}
        infoHour={infoHour}
        isNight={isNight}
        isMore={isMore}
        onToggleMore={onToggleMore}
      />
      {isMore && <Footer infoTime={infoTime} />}
    </>
  );
};

export default MyApp;
