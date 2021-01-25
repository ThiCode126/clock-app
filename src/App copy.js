import { useEffect, useState } from "react";
import MyApp from "./Components/MyApp";

function App() {

    const [infoUser, setInfoUser] = useState(null);
    const [thisTime, setThisTime] = useState(null);
    const [isNight, setIsNight] = useState(null);

    useEffect(() => {
        const getGeoLoc = () => {
            fetch("https://geolocation-db.com/json/85249190-4601-11eb-9067-21b51bc8dee3")
            .then(response => response.json())
            .then(data => setInfoUser(data));
        }
        getGeoLoc()

        const getTime = () => {
            let thisState = {}

            const d = new Date();
            thisState.large = d;
            // hour
            thisState.hour = d.getHours() + ':' + d.getMinutes();
            // dayYear
            const start = new Date(d.getFullYear(), 0, 0);
            const diff = (d - start) + ((start.getTimezoneOffset() - d.getTimezoneOffset()) * 60 * 1000);
            const oneDay = 1000 * 60 * 60 * 24;
            const day = Math.floor(diff / oneDay);
            thisState.dayYear = day;
            // dayWeek
            thisState.dayWeek = d.getDay();
            // week
            const week = Math.floor(day / 7);
            thisState.week = week;
            
            setThisTime(thisState);

            if (d.getHours() >= 9 && d.getHours() <= 18) {
                document.body.classList = 'light';
                setIsNight(false);
            } else {
                document.body.classList = 'dark';
                setIsNight(true);
            }
        }
        getTime()
      }, []);

    const Loading = () => {
        return <h1>Loading</h1>
    }

    if (infoUser  && thisTime && isNight !== null) {
    if (infoUser  && thisTime && isNight !== null) {
        return <MyApp infoUser={infoUser} thisTime={thisTime} />;
      }
      return <Loading />;
}

export default App;
