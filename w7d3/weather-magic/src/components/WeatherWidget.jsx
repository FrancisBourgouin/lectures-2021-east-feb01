import { useEffect } from 'react'
import { weatherResponse } from '../weather'

export default function WeatherWidget(props) {
  const { currentWeatherData } = props
  const temp = Math.round((currentWeatherData.main.temp - 272.15) * 10) / 10

  useEffect(() => {
    const report = () => console.log("MWAHAHA I KNOW YOU CLICKED")
    document.addEventListener('click', report)

    return () => document.removeEventListener('click', report)

  }, [])

  return (
    <section>
      <h1>Current weather for {currentWeatherData.name}</h1>
      <h2>{temp}°C</h2>
    </section>
  )
}

// useEffect(() => {
//   // content to be executed when the useEffect is in effect

//   // return a way to stop the running code
// }, ["Variables that you want to look at and reexceute when changed"])