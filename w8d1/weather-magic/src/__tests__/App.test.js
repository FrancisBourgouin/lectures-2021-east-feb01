import App from '../App'
import { render, fireEvent, prettyDOM } from '@testing-library/react'

describe('When clicking on a city button, show the weather', () => {
  it('loads the App component properly', () => {
    render(<App />)
  })

  it('shows the weather for Mountain View when clicking on the button', () => {
    const expectedIcon = "🔥"
    const expectedTemperature = 9.4
    const expectedCityName = "Mountain View"

    const result = render(<App />)
    const { queryByText, queryByTestId, debug } = result

    fireEvent.click(queryByText("Mountain View"))

    // debug()
    expect(queryByText(expectedIcon)).toBeInTheDocument()
    expect(queryByText(expectedTemperature)).toBeInTheDocument()
    expect(queryByTestId("Title")).toHaveTextContent("Mountain View")
  })
})