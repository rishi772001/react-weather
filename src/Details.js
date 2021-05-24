import React, { useEffect, useState } from "react";

function Details(props) {
  const [weather, setWeather] = useState();
  var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  useEffect(() => {
    var API = "4ef75cb221634374370e94a5c2bc9f02";
    var url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.long}&appid=${API}`;

    fetch(url).then((res) =>
      res.json().then((resp) => {
        setWeather({ ...resp });
      })
    );
  }, []);

  const calc = (n) => {
    var out = parseInt(n - 273.15);
    var ans = "";
    if(out < 0) ans += "-";
    else ans += "+";

    ans += out;
    return ans;
  }
  const addDays = (date, days) => {
    date.setDate(date.getDate() + days);
    return date;
    }
  return (
    <div>
      <div className="row">
        {weather !== undefined &&
          weather.daily.map((day, i) => (
            <div key={day.dt} className="col-md card">
                <img src={"http://openweathermap.org/img/wn/" + day.weather[0].icon+"@2x.png"} />

              <p>{calc(day.temp.min)} / {calc(day.temp.max)} </p>
              <p style={{color:'grey'}}>{addDays(new Date(), i).getDate()} {week[addDays(new Date(), i).getDay()]}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Details;
