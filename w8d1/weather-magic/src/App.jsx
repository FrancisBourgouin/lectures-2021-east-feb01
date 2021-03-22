import { useState } from 'react';
import './App.css';
import CityList from './components/CityList'
import Weather from './components/Weather';


import response from './exampleResponse.json'

const listOfCities = ["Mountain View"]

function App() {
  const [weatherData, setWeatherData] = useState(null)

  const handleWeatherData = () => {
    setWeatherData(response)
  }
  return (
    <div className="App">
      <h1>Weather Magic</h1>
      <CityList cityList={listOfCities} handleWeatherData={handleWeatherData} />
      {weatherData && <Weather weatherData={weatherData} />}
    </div>
  );
}

export default App;
