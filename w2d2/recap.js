// Function & Callback recap

// Functions

// function showSongInConsole(songTitle) { // Fct definition

// }

// const showSongInConsole = function (title) { // Fct declaration

// }

// const showSongInConsole = title => { // Arrow function

// }

// // Arrow functions

// // implicit returns vs explicit returns

// const makeSomeMagic = () => "Magic!!!"
// const makeSomeMagic = () => { return "Magic!!!" }


// Callbacks

// Convenient, Cool programmer, reusability, recursion, iterator
// Convenience & reusability => DRY code

// HoF

// - A function that takes a function as a parameter (callbacks)
// - A function that returns a function (closures)

const iterateOverList = (list, action) => {
  for (const item of list) {
    action(item)
  }
}

const listOfSongs = ["Country Roads", "Mastermind", "Feel Good Inc", "Downers", "Never Give you Up"]
// List a list of songs, first I want to show all of them not fancy, and then in a fancy way, maybe.

// Iterate over the list
// For every item of the list, console.log the list item

// If the randomizer says so
// Iterate over the list
// For every item of the list, console.log the list item in a fancy way


// Define a way to show a song in a non fancy way
const nonFancyConsoleLog = (title) => console.log(`The title of the song is: ${title}`)
// Define a way to show a song in a fancy way
const superFancyConsoleLog = (title) => console.log(`📢📢🔥🔥🔥${title}🎵🎶🎵🎶`)
// Iterate over the list
iterateOverList(listOfSongs, nonFancyConsoleLog)
// For every item of the list, call the non fancy function

// If the randomizer says so
if (Math.random() > 0.5) {
  // Iterate over the list
  // For every item of the list, call the fancy function
  iterateOverList(listOfSongs, superFancyConsoleLog)
  listOfSongs.forEach((item) => superFancyConsoleLog(item))
}

const result = superFancyConsoleLog()