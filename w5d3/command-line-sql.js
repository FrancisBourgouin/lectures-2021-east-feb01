const { Pool } = require('pg')

const pool = new Pool({
  user: 'labber',
  host: 'localhost',
  database: 'cooljokes',
  password: 'labber',
  port: 5432
})

const commandLineValue = Number(process.argv[2])

// if (commandLineValue) {
//   const queryValues = [commandLineValue]
const query = 'SELECT jokes.*, authors.name FROM jokes JOIN authors ON author_id = authors.id'
const oldQuery = 'SELECT * FROM jokes WHERE id = $1'

pool.query(query, (err, res) => {
  const joke = res.rows[4]
  console.log(joke)
  console.log(`Question: ${joke.question}`)
  console.log('------')
  console.log(`Answer: ${joke.answer}`)
  pool.end()
})

// }

