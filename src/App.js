import React, {useState}from 'react';
import './App.css';

const api ={
  api : "a200ea93f7d60cf66f748f5c3fd8be01" ,
  base :"http://api.openweathermap.org/data/2.5/"
}

function App() {

  const [query,setQuery] = useState('');
  const [weather,setWeather] = useState({});

  const search = (evt) =>{
    if(evt.key === "Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res=>res.json())
      .then(result=>{
        setQuery('');
        setWeather(result);
        console.log(result);
      });
    }
  }
  const dateBuilder = (d) =>{
    let months =["Januvary","February","March","April","May","june","july",
    "August","September","October","November","December"];
    let days =["Sunday","Monday","Tuesday","Wednesday",
    "Thurday","Friday","Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;


  }
  return (
    <div className="app">
    <main>
      <div className="search">
        <input type="text"
        className="search-bar"
        placeholder="Search...."
        onChange={e=>setQuery(e.target.value)}
        value={query}
        onKeyPress={search}/>
      </div>
      <div className="location-box">
        <div className="location">Kochi , kerala</div>
        <div className="date">{dateBuilder(new Date())}</div>
      </div>
      <div className="weather-box">
        <div className="temp">
        15°C
        </div>
        </div>
        <div className="weather1-box">
          Sunny
        </div>
      
      </main>
      
       
    </div>
  );
}

export default App;
