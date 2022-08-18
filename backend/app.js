const express = require("express");
const errorMiddleware = require("./middleware/error")

const app = express();

//route import
const product = require("./routes/productRoute");

const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1",product);

//middleware
app.use(errorMiddleware);

module.exports=app;