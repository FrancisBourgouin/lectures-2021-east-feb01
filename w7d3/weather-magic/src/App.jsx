import { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css';
import CityForm from './components/CityForm';
import WeatherWidget from './components/WeatherWidget';
function App() {
  const [currentCity, setCurrentCity] = useState("")
  const [currentWeatherData, setCurrentWeatherData] = useState(null)

  const updateCityAndWeather = cityName => {
    setCurrentCity(cityName)
    // call

  }
  useEffect(() => {
    if (currentCity) {
      const appId = '09fd719b4b698ec0260e424f83378e3d'
      axios
        .get(`http://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${appId}`)
        .then(res => setCurrentWeatherData(res.data))
        .catch(e => {
          console.log(e)
          setCurrentWeatherData(null)
        })
    }
  }, [currentCity])




  return (
    <div className="App">
      <CityForm onSubmit={setCurrentCity} />
      {currentWeatherData && <WeatherWidget currentWeatherData={currentWeatherData} />}
    </div>
  );
}

export default App;
