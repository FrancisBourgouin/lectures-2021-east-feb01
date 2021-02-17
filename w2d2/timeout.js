// Playing with timeouts
const waitLog = (someMsTimeOfDestiny) => console.log("Wait for it....", someMsTimeOfDestiny)
// console.log("Wait for it....")
// console.log("Wait for it....")
// console.log("Legendary!")

// setTimeout(() => console.log("Wait for it...."), 2000)
// console.log("1")
// setTimeout(() => console.log("Wait for it...."), 3000)
// console.log("2")
// setTimeout(() => console.log("Legendary!"), 8000)
// console.log("3")

// for (let i = 0; i < 10; i++) {
//   const someMsTimeOfDestiny = i * 1000 * Math.random()
//   setTimeout(() => waitLog(someMsTimeOfDestiny), someMsTimeOfDestiny)
// }


// Start a timer of 2000ms, and when you're done, do what is given as a callback
setTimeout(() => console.log("Wait for it...."), 2000)


const listToSort = [20, 60, 10, 1000, 20, 80]

for (const number of listToSort) {
  setTimeout(() => console.log(number), number)
}