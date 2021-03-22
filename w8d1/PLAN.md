# Weather app!

- Have button with city names
- Click on a city, get a weather
- Display weather (convert values)
- 🔥❄ (Hot / cold (+-0))


# Horribly crude skeleton

body
  h1 title
  form
    input (city name)
  section
    buttons (city names)
  section
    h1 city name
    h2 temp
    h2 icons

  
# Components

- App
- CityForm
- CityList
- CityListItem (City)
- Weather

# Helpers

- Convert temperature
- FetchWeather hook?
- EmojiChooser
  
# Tests ?

## Unit

Convert temp K to C
  - Return a valid temp
  - Return null if invalid temp

EmojiChooser
  - Return the appropriate emoji
  - Return null if invalid

CityList
  - Show a list of button when given an array of cities
  - Shows nothing if no cities are given as an array

## Feature / Integration

Adds a button if the city name wasn't already in the buttons

When clicking on a city button, show the weather