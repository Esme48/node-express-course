const os = require('os')
//os.
//info about the current user
const user = os.userInfo()
console.log(user)

//methos returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()}seconds`)

/////
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)
