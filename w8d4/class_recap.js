// What's a class ?

// Blueprints -> objects

class Depends {
  constructor(answer) {
    this.defaultAnswer = answer ? answer : '"Well... it depends"'
  }

  answer = function () {
    console.log(this.defaultAnswer)
  }
}

class AngryDepends extends Depends {
  constructor(answer) {
    super(answer)
  }
  angryAnswer = function () {
    this.answer()
    console.log('AND THIS IS THE LAST TIME I ANSWER THAT QUESTION')
  }
}

const answersAboutBackend = new Depends('Well you know, it\'s not that simple, depends on the case')
const answersAboutFrontend = new Depends()

answersAboutBackend.answer()
answersAboutFrontend.answer()
// console.log(answersAboutBackend)

// answersAboutBackend.answer()


// const angryPerson = new AngryDepends()

// angryPerson.angryAnswer()