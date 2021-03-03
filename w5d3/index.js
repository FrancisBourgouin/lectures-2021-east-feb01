const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')
const initializeDbHelpers = require('./helpers/dbHelpers')
const app = express();
const port = 3000;
const { Pool } = require('pg')

const pool = new Pool({
  user: 'labber',
  host: 'localhost',
  database: 'cooljokes',
  password: 'labber',
  port: 5432,
})

const { getSpecificJoke, getRandomJoke } = initializeDbHelpers(pool)

app.use(cookieParser())
app.use(express.static("public")); // Static files (css / images)
app.use(bodyParser.urlencoded({ extended: false }));// Parses the body of a form request string in an object

app.set("view engine", "ejs"); //


app.get("/", (req, res) => {
  getRandomJoke()
    .then(joke => {
      const templateVars = {
        question: joke.question,
        answer: joke.answer
      }
      res.render("index", templateVars);
    })
});

app.get("/:joke_id", (req, res) => {
  const jokeId = req.params.joke_id
  if (Number(jokeId)) {
    getSpecificJoke(jokeId)
      .then(joke => {
        const templateVars = {
          question: joke.question,
          answer: joke.answer
        }
        res.render("index", templateVars);
      })
  } else {
    res.send('BAD JOKE ID YOU BAD PERSON')
  }
})

app.listen(port, () => console.log(`Express server running on port ${port}`));
