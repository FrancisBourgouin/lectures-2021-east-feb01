import { convertKelvinToCelsius, emojifyTheTemperature } from '../helpers'

describe('convertKelvinToCelsius basic tests', () => {
  it('returns null if the input is invalid', () => {
    const result = convertKelvinToCelsius(null)
    const otherResult = convertKelvinToCelsius(-10)

    expect(result).toBeNull()
    expect(otherResult).toBeNull()
  })
  it('returns 0 when given 273.15', () => {
    const result = convertKelvinToCelsius(273.15)

    expect(result).toBe(0)
  })

  it('returns 19.5 when given 292.65', () => {
    const result = convertKelvinToCelsius(292.65)

    expect(result).toBe(19.5)
  })

})

describe('emojifyTheTemperature basic tests', () => {
  it('returns null when the temperature is invalid', () => {
    const result = emojifyTheTemperature(null)
    const otherResult = emojifyTheTemperature(-10)

    expect(result).toBeNull()
    expect(otherResult).toBeNull()
  })
  it('returns 🔥 when the temperature is over 0 C', () => {
    const result = emojifyTheTemperature(300)

    expect(result).toBe('🔥')
  })
  it('returns ❄🔥❄ when temperature is exactly 0 C', () => {
    const result = emojifyTheTemperature(273.15)

    expect(result).toBe('❄🔥❄')
  })
  it('returns ❄ when the temperature is under 0 C', () => {
    const result = emojifyTheTemperature(260)

    expect(result).toBe('❄')
  })
})