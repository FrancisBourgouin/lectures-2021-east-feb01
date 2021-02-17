const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')
const { validateUser, createUser, findUser } = require('./helpers/userFunctions')
const app = express();
const port = 3000;

app.use(cookieParser())
app.use(express.static("public")); // Static files (css / images)
app.use(bodyParser.urlencoded({ extended: false }));// Parses the body of a form request string in an object

app.set("view engine", "ejs"); //

const userDatabaseIsh = {
  "akaoko1": {
    id: "akaoko1",
    name: "Dimitri Ivanovich Mendeleiv",
    email: "periodic@table.com",
    password: "molecule"
  },
  "ala0pla1": {
    id: "ala0pla1",
    name: "Pequeño Pollo de la Pampa",
    email: "pockpock@chicken.com",
    password: "egg"
  }
}

const userArrayOfDestiny = [
  {
    name: "Dimitri Ivanovich Mendeleiv",
    email: "periodic@table.com",
    password: "molecule",
    icon: "🥼"
  },
  {
    name: "Pequeño Pollo de la Pampa",
    email: "pockpock@chicken.com",
    password: "egg",
    icon: "🐔"
  }
]

// question ? right : wrong
app.get("/", (req, res) => {
  console.log(req.cookies)
  const currentDate = new Date()
  const user = findUser(req.cookies.email, userArrayOfDestiny)
  const templateVars = {
    date: currentDate.toLocaleString(),
    email: req.cookies.email,
    icon: user ? user.icon : "🎈"
  }
  res.render("index", templateVars);
});


app.post('/login', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  // or
  // const {email, password} = req.body
  const { user, error } = validateUser(email, password, userArrayOfDestiny)

  if (user) {
    res.cookie('email', email)
    res.redirect('/')
  } else {
    res.send(`There was an error of type : ${error}`)
  }
})

app.get('/register', (req, res) => {
  const user = findUser(req.cookies.email, userArrayOfDestiny)
  const currentDate = new Date()
  const templateVars = {
    date: currentDate.toLocaleString(),
    icon: user ? user.icon : "🎈"
  }
  res.render('register', templateVars)
})



app.post('/register', (req, res) => {
  const email = req.body.email
  const name = req.body.name
  const password = req.body.password
  const icon = req.body.icon

  const userObj = {
    email,
    name,
    password,
    icon
  }
  console.log(req.body, userObj)
  const userEmail = createUser(userObj, userArrayOfDestiny)
  if (userEmail) {
    res.cookie('email', email)
    res.redirect('/')
  } else {
    res.send('error ! user exists')
  }

})

app.post('/register', (req, res) => {
  // extract values from req.body
  const { name, email, icon, password } = req.body
  // check if the email is already in the db
  findUser
  // if not create a user object
  // add the user obj to the db
  // create a cookie with the email
  // redirect to the homepage
  // else
  // send an error message
})
app.post('/logout', (req, res) => {
  res.clearCookie('email')
  res.redirect('/')

})
app.listen(port, () => console.log(`Express server running on port ${port}`));
