// Events

const EventEmitter = require('events');

const client = new EventEmitter()

// On the event of a client saying 'waitercall', do the callback that says a message in the console
client.on('waitercall', () => console.log("Anything I can help with ?"))
client.on('iwantthecheck', () => console.log("Here's the check"))


client.emit('waitercall')
client.emit('iwantthecheck')


// Waiter

const fileRead = new EventEmitter()

fileRead.on('readComplete', () => console.log('File reading is done'))

const readAFile = () => {
  console.log('Starting to read the file')
  setTimeout(() => fileRead.emit('readComplete'), 2000)
}

readAFile()