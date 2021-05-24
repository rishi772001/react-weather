import { useEffect, useState } from "react";
import Cities from "./Cities";
import "./css/App.css";
import Details from "./Details";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";
import User from "./User";

function App() {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState("chennai");

  const set = () => {
    var API = "4ef75cb221634374370e94a5c2bc9f02";
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API}`;

    fetch(url).then((res) =>
      res.json().then((resp) => {
        setWeather({ resp });
      })
    );
  };

  useEffect(() => {
    set();
  }, [city]);

  return (
    <div>
      
      {weather !== undefined && 
        <>
          <SideBar val={weather.resp} />
          <div style={{ margin: "30px", marginLeft: "240px" }}>
            <div className="row">
              <div className="col-md-3">
                <SearchBar val={setCity} />
              </div>
              <div className="col-md-3"></div>
              <div className="col-md-3"></div>
              <div className="col-md-3">
                <User />
              </div>
            </div>
            <h4 className="head">Weather Forecast</h4>
            <Cities val={setCity} />
            <br />
            <h4>{weather.resp.name}</h4>
            {weather.resp.coord !== undefined && (
              <Details
                lat={weather.resp.coord.lat}
                long={weather.resp.coord.lon}
              />
            )}
          </div>
        </>
      }
    </div>
  );
}

export default App;
