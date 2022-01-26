const express = require("express");
//const bodyParser = require("bodyparser");// no need anymore with Express

const mongoose = require("mongoose"); // helps us to connect to mongodb database

require("dotenv").config(); //configurar as variáveis do environment

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json()); // parse json

const uri = process.env.MONGODB_URI; // variable

//const connection = mongoose.connection;//
mongoose
  .connect(uri)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
const carRouter = require("./routes/car.route");

app.use("/", carRouter);

app.listen(port, () => {
  console.log(`server is running on port: ${port}`); // where server starts
});
