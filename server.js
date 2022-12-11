const app = require('./app');

const mongoose = require("mongoose");

// const {DB_HOST} = require("./config.js")

const dotenv = require("dotenv");
dotenv.config();

const { DB_HOST, PORT = 3000 } = process.env;

mongoose.connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
    console.log("Database connection successful")
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1)
  })

// mongoose.connect(DB_HOST)
//   .then(() => {
//     app.listen(3000, () => {
//       console.log("Server running. Use our API on port: 3000")
//     });
//       console.log("Database connection successful")
//   })
//   .catch((error) => {
//     console.log(error.message);
//     process.exit(1);
//   });

