const superCow = {
  breed: "Belgian Blue",
  age: 10,
  sound: "MooMoo",
  farm: { location: "Montreal" },
  makeSound: function () {
    console.log(this.sound)
  }
}

const koreanCow = { ...superCow }
koreanCow.sound = "Mamamoo"

superCow.makeSound()
koreanCow.makeSound()

const singASong = function () {
  console.log(this)
}

singASong()