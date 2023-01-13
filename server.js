const app = require('./app')
const mongoose = require('mongoose')
const dotenv = require("dotenv");
dotenv.config();

const { DB_HOST, PORT } = process.env;

mongoose.connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server running! Use our API on port: 3000")
    })
      .on("error", function (err) {
        process.once("SIGUSR2", function () {
          process.kill(process.pid, "SIGUSR2");
        });
        process.on("SIGINT", function () {
          // this is only called on ctrl+c, not restart
          process.kill(process.pid, "SIGINT");
        });
      });
  })
  .catch(error => {
    console.log(error.message)
    process.exit(1);
  }
  );
