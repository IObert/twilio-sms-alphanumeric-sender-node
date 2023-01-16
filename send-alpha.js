const dotenv = require("dotenv");
const twilio = require("twilio");

dotenv.config();
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

//require("dotenv").config();
//const client = require("twilio")();

client.messages.create({
    body: "This message comes from an alphanumeric sender ID!",
    to: "+49111111111",
    from: "MG000000000000"
}).then((message) => console.log(message.sid))
