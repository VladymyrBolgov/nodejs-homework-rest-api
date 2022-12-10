const app = require('./app');

const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

const {DB_HOST} = require("./config.js")

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running. Use our API on port: 3000")
    });
    console.log("Database connection successful")
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
