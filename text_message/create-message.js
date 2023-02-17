const { Client } = require('@twilio/conversations');

// // Before you use the client, subscribe to the `'initialized'` event.
// client.on('initialized', () => {
//     // Use the client.
// });

// // To catch client initialization errors, subscribe to the `'initFailed'` event.
// client.on('initFailed', ({ error }) => {
//     // Handle the error.
// });
// client.messages
//     .create({
//         to: 'your_mobile_number',
//         Body: 'Sheeesh :>',
//         From: '+14344742979'
//     })
//     .then(message => console.log(message.sid))


// const usersMessage = document.getElementById('message').value
// const toMessage = document.getElementById('to').value
// const fromMessage = document.getElementById('from').value

// const sendMessage = () => {
//     fetch('https://api.twilio.com/2010-04-01/Accounts/ACa0bc6015da9508d3c01241e3d206c0c1/Messages.json', { method: 'POST', To: '+639215932071', Body: 'Sheeesh :>', From: '+14344742979' })
//         .then(result => result.json())
//         .then(console.log)
//         .catch((error) => {
//             console.error('Error:', error);
//         })

//     console.log('sending data')
// }

// const validateMessage = () => {
//     if (usersMessage === '' || toMessage === '' || fromMessage === '') {
//         console.log("Invalid message")
//     } else {
//         sendMessage()
//     }
// }

// const accountSid = 'ACa0bc6015da9508d3c01241e3d206c0c1';
// const authToken = 'e708309f34bdb035f78424db2130176e';
// const client = require('twilio')(accountSid, authToken);

// client.messages
//     .create({
//         to: 'your_mobile_number',
//         Body: 'Sheeesh :>',
//         From: '+14344742979'
//     })
//     .then(message => console.log(message.sid))