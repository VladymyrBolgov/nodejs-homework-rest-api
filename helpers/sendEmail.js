// const sgMail = require("@sendgrid/mail");
// require("dotenv");

// const { SENDGRID_API_KEY } = process.env;

// sgMail.setApiKey(SENDGRID_API_KEY);

// // создаем лист

// const email = {
//     to: 'lukichv@ukr.net', // Change to your recipient
//     from: 'vladymyr.bolgov@gmail.com', // Change to your verified sender
//     subject: 'Sending with SendGrid is Fun',
//     html: '<strong>and easy to do anywhere, even with Node.js</strong>',
//   }
//   sgMail
//     .send(email)
//     .then(() => {
//       console.log('Email sent')
//     })
//     .catch((error) => {
//       console.error(error)
//     })