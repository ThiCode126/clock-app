import { useEffect, useState } from "react";
import MyApp from "./Components/MyApp";
import axios from 'axios';

function App() {

    const [infoTime, setInfoTime] = useState(null);
    const [infoZone, setInfoZone] = useState(null);
    const [infoHour, setInfoHour] = useState(null);
    const [quote, setQuote] = useState(null);
    const [isNight, setIsNight] = useState(null);

    useEffect(() => {
        
        const getInfoUser = async () => {   
            await axios.get("http://worldtimeapi.org/api/ip")
            .then(res => {
                console.log(res.data)
                setInfoTime(res.data)
            })
            //.then(res => setInfoTime(res.data));
            
            await axios.get("https://freegeoip.app/json/")
            .then(res => {
                console.log(res.data)
                setInfoZone(res.data)
            })
            //.then(res => setInfoZone(res.data));
        }
        getInfoUser();

        const getQuote = async () => {
            await axios.get("https://staging.quotable.io/random?minLength=100&maxLength=140&tags=technology")
            .then(res => setQuote(res.data));
        }
        getQuote();

        const getHourTheme = () => {
            let infos = {}
            let d = new Date();
            infos.hour = d.getHours();
            infos.hours = d.getHours() + ':' + d.getMinutes();
            if (infos.hour <= 5 || infos.hour >= 18) {
                document.body.classList = 'dark';
                setIsNight(true);
            } else {
                document.body.classList = 'light';
                setIsNight(false);
            }
            setInfoHour(infos);
        }
        getHourTheme();
      }, []);

    const Loading = () => {
        return <h1>Loading</h1>
    }

    if (infoTime) {
        return <MyApp infoTime={infoTime} infoZone={infoZone} infoHour={infoHour} quote={quote} isNight={isNight} />;
      }
      return <Loading />;
}

export default App;
