const mongoose = require("mongoose");

//connected mongodb
const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(
        `Database is connected successfully with server: ${data.connection.host}`
      );
    });
};

module.exports = connectDatabase;
