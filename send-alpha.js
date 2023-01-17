require("dotenv").config();
const client = require("twilio")();

client.messages
    .create({
        body: "This message comes from an Alphanumeric Sender ID!",
        to: "<YOUR PHONE NUMBER>", //TODO enter your phone number here
        from: "<Messaging Service SID>" // TODO enter the SID of the Messaging service you saved earlier
    })
    .then(console.log)
    .catch(console.error)
