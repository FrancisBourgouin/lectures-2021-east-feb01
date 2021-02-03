const cow = {
  breed: "Belgian Blue",
  age: 10,
  sound: "Moo",
  farm: { location: "Montreal" }
  // ..
}

const newCow = {}
newCow.age = 1
newCow.breed = cow.breed

const newNewCow = {}
// Iterate over cow to get all the properties
// Assign individually those properties the newnewcow
//  Shallow copying
for (const key of Object.keys(cow)) {
  newNewCow[key] = cow[key]
}

newNewCow.sound = "Meuh"
newNewCow.farm.location = "Halifax"

const someRandomCow = { ...cow }

console.log(newNewCow)
// console.log(newCow)
console.log(cow)