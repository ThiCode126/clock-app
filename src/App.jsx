import { useEffect, useState } from "react";
import MyApp from "./Components/MyApp";
import axios from "axios";

function App() {
  const [infoTime, setInfoTime] = useState(null);
  const [infoZone, setInfoZone] = useState(null);
  const [infoHour, setInfoHour] = useState(null);
  const [quote, setQuote] = useState(null);
  const [isNight, setIsNight] = useState(null);
  const [isMore, setIsMore] = useState(false);

  const getQuote = async () => {
    try {
      await axios
        .get(
          "https://api.quotable.io/random?minLength=100&maxLength=140&tags=technology"
        )
        .then((res) => setQuote(res.data));
    } catch (error) {
      console.log(error);
      setQuote({
        author: "Ada LoveLace",
        content:
          "The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.",
      });
    }
  };

  useEffect(() => {
    const getInfoUser = async () => {
      await axios
        .get("https://worldtimeapi.org/api/ip")
        .then((res) => setInfoTime(res.data));

      await axios
        .get("https://freegeoip.app/json/")
        .then((res) => setInfoZone(res.data));
    };
    getInfoUser();
    getQuote();

    const getHourTheme = () => {
      let infos = {};
      let d = new Date();
      infos.hour = d.getHours();
      infos.hours = d.getHours() + ":" + d.getMinutes();
      if (infos.hour <= 5 || infos.hour >= 18) {
        document.body.classList = "dark";
        setIsNight(true);
      } else {
        document.body.classList = "light";
        setIsNight(false);
      }
      setInfoHour(infos);
    };
    getHourTheme();
  }, []);

  useEffect(() => {
    let divRoot = document.getElementById("root");
    if (isMore) {
      divRoot.className = "less";
    } else {
      divRoot.className = "more";
    }
  }, [isMore]);

  const onChangeQuote = () => {
    getQuote();
  };

  const onToggleMore = () => {
    setIsMore(!isMore);
  };

  const Loading = () => {
    return <h1>Loading</h1>;
  };

  if (infoTime && infoZone && infoHour && quote && isNight !== null) {
    return (
      <MyApp
        infoTime={infoTime}
        infoZone={infoZone}
        infoHour={infoHour}
        quote={quote}
        onChangeQuote={onChangeQuote}
        isNight={isNight}
        isMore={isMore}
        onToggleMore={onToggleMore}
      />
    );
  }
  return <Loading />;
}

export default App;
