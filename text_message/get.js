const twilio = require('twilio')

// secure the keys
const myAccount = twilio('ACa0bc6015da9508d3c01241e3d206c0c1', 'e708309f34bdb035f78424db2130176e')

// promise to return a data
myAccount.messages.list()
    // fetch data when promise is resolved
    .then((messages) => {
        // console.log(messages)
        console.log(`The most recent message is ${messages}`)
    })
    // call back when promise is rejected or error
    .catch((error) =>{
        console.error(error)
    })

console.log('gathering your message log')

// myAccount.messages
//     .create({
//         body: usersMessage,
//         to: toMessage, // Text this number
//         from: fromMessage, // Twilio number
//     })
//     .then((message) => {
//         // console.log(message)
//     })
//     .catch((error) => {
//         console.error(error)
//     })