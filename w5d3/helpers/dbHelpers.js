const initializeDbHelpers = pool => {
  const getSpecificJoke = (jokeId) => {
    return pool
      .query('SELECT * FROM jokes WHERE id = $1 ', [jokeId])
      .then(dbRes => {
        const joke = dbRes.rows[0]

        return joke
      })
  }

  const getRandomJoke = () => {
    return pool
      .query('SELECT * FROM jokes')
      .then(dbRes => {
        const amountOfJokes = dbRes.rowCount
        const randomIndex = Math.floor(Math.random() * amountOfJokes)
        const joke = dbRes.rows[randomIndex]

        return joke
      })
  }

  return { getSpecificJoke, getRandomJoke }
}

module.exports = initializeDbHelpers