export const convertKelvinToCelsius = (temp) => {

  if ((typeof temp !== 'number') || temp < 0) {
    return null
  }
  const roundedTemp = Math.round((temp - 273.15) * 10) / 10
  return roundedTemp
}

export const emojifyTheTemperature = (temp) => {
  const tempInC = convertKelvinToCelsius(temp)
  if (tempInC === null) {
    return null
  }

  if (tempInC === 0) {
    return "❄🔥❄"
  }

  if (tempInC > 0) {
    return "🔥"
  }

  if (tempInC < 0) {
    return "❄"
  }
}

