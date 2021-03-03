// Closures!

const countdown = (time) => {
  for (let i = time; i >= 0; i--) {
    console.log(`${i}...`)
  }
  console.log('Liftoff!')
}

const countdownFromFive = () => countdown(5)

countdownFromFive()

const countdownBuilder = time => {
  const countdown = () => {
    for (let i = time; i >= 0; i--) {
      console.log(`${i}...`)
    }
    console.log('Liftoff!')
  }

  return countdown
}

const countdownFromTen = countdownBuilder(10)
countdownFromTen()