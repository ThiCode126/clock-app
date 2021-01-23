import { useEffect, useState } from "react";

function App() {

    const [infoUser, setInfoUser] = useState(null);

    useEffect(() => {
        const getGeoLoc = () => {
            fetch("https://geolocation-db.com/json/85249190-4601-11eb-9067-21b51bc8dee3")
            .then(response => response.json())
            .then(data => setInfoUser(data));
        }
        getGeoLoc()
      });

    const Loading = () => {
        return <h1>Loading</h1>
    }

    const MyApp = () => {
        return infoUser.city;
    }

  return (
    <>
        { infoUser ? <MyApp /> : <Loading /> }
    </>
  );
}

export default App;
