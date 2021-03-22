import { render } from '@testing-library/react'
import CityList from '../CityList'

describe('CityList basic functionality', () => {
  it('Shows nothing if given an invalid input', () => {
    const result = render(<CityList />)
    const element = result.queryByText("Click on a city")

    expect(element).not.toBeInTheDocument()
  })
  it('Shows a list of buttons when given an array of cities', () => {
    const listOfCities = ["Montréal", "Toronto", "Fredericton", "Fort Erie", "Kitchener"]

    const { queryByText, queryAllByTestId } = render(<CityList cityList={listOfCities} />)

    const title = queryByText("Click on a city")
    expect(title).toBeInTheDocument()

    const cityButtons = queryAllByTestId('cityButton')

    expect(cityButtons.length).toBe(5)

    for (const city of listOfCities) {
      const cityButton = queryByText(city)
      expect(cityButton).toBeInTheDocument()
    }
  })
})