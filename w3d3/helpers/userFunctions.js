const validateUser = (email, password, userDB) => {
  // for (const userObj of userDB) {
  //   if (userObj.email === email) {

  //   }
  // }

  // userDB.filter(userObj => userObj.email === email)
  const currentUser = userDB.find(userObj => userObj.email === email)


  // const currentUser = userDB[email]
  if (currentUser) {
    if (currentUser.password === password) {
      // successful login
      return { user: currentUser, error: null }
    } else {
      // failed at password
      return { user: null, error: "password" }
    }
  } else {
    // failed at email
    return { user: null, error: "email" }
  }
}

const createUser = (userInfo, userDB) => {
  const { name, email, icon, password } = userInfo
  const { user, error } = validateUser(email, password, userDB)
  if (error === "email") {
    // const newUser = {
    //   email,
    //   name,
    //   password,
    //   icon
    // }
    userDB.push(userInfo)
    return email
  } else {
    return null
  }
}

const findUser = (email, userDB) => {
  const currentUser = userDB.find(userObj => userObj.email === email)

  return currentUser
}
module.exports = { validateUser, createUser, findUser }