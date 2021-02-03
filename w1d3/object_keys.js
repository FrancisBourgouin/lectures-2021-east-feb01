const donut = {
  dough: "chocolate",
  glazing: "raspberry",
  sprinkles: false,
  price: 199
}

const keyToFetch = "dough"
// Bracket or dot notation

// Dot notation - Drax
console.log(donut.dough)
console.log(donut.keyToFetch)

// Bracket
console.log(donut["dough"])
console.log(donut[keyToFetch])

// commits[0].commit.author.main.principal.name.first_name
// commits[0]["commit"]["author"]["main"]
const donutPricePlusTaxes = Math.round(donut.price * 1.14975) / 100

console.log(`My best donut as a ${donut.dough} dough and it's ${donutPricePlusTaxes}`)

// For..of, for..in, Object.keys()


// Define a donut object
const peopleDonut = {
  dough: "Plain",
  glazing: "Rose Pistachio",
  sprinkles: true,
  price: 9999
}

const keysOfDonut = Object.keys(peopleDonut)

for (const key of keysOfDonut) {
  const value = peopleDonut[key]
  console.log(value)
}

// List all the keys of the donut
// Iterate over the keys of the donut
// Extract value of our donut object at the position of the key
// Output to the console the value

for (let i = 0; i < keysOfDonut.length; i++) {
  const key = keysOfDonut[i]
}

peopleDonut["price"] = 1
console.log(peopleDonut)

