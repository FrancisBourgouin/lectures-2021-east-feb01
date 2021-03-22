import { emojifyTheTemperature, convertKelvinToCelsius } from '../helpers/helpers'

export default function Weather(props) {
  const { weatherData } = props
  return (
    <section>
      <h1 data-testid="Title">{weatherData.name}</h1>
      <h2>{convertKelvinToCelsius(weatherData.main.temp)}</h2>
      <h2>{emojifyTheTemperature(weatherData.main.temp)}</h2>
    </section>
  )
}