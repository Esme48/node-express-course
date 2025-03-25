const EventEmitter = require('events');

const customEmitter = new EventEmitter()

customEmitter.on('My Information', ()=>{
    console.log(`Your Information Was Recieved, Thank You :)`)
})
customEmitter.on('My Information', ()=>{
    console.log(`We Will Reach Out To You With A Response Shortly`)
})
///Once we go through the event, then we want it to do what we want it to do then we emit

customEmitter.emit('My Information')

/////Listen for the event, and then we emit it

// ////Sample used for testing from geeksforgeeks
// // Importing events
// const EventEmitter = require('events');
//  
// // Initializing event emitter instances 
// const eventEmitter = new EventEmitter();
// 
// // Registering to myEvent 
// eventEmitter.on('myEvent', (msg) => {
//    console.log(msg);
// });
// 
// // Triggering myEvent
// eventEmitter.emit('myEvent', "First event");
