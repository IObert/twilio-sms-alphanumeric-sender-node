require("dotenv").config();
const client = require("twilio")();

client.messages
    .create({
        body: "This message comes from an alphanumeric sender ID!",
        to: "+123456789", //TODO enter your phone number here
        from: "MG00000000" //TODO enter the SID of the Messaging service you saved earlier
    })
    .then(console.log)
    .catch(console.error)
