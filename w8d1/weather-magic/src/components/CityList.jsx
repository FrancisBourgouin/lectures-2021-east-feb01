export default function CityList(props) {
  const { cityList } = props
  const validatedArray = Array.isArray(cityList) ? cityList : []

  const parsedArray = validatedArray.map(city => (
    <li key={city}>
      <button
        data-testid="cityButton"
        onClick={props.handleWeatherData}
      >{city}</button>
    </li>
  ))

  return (
    <section>
      {validatedArray.length > 0 && <h1>Click on a city</h1>}
      <ul>
        {parsedArray}
      </ul>
    </section>
  )
}