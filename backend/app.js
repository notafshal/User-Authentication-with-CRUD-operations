const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
const mongoose = require("mongoose");
const userRouter = require("./modules/users/users.routes");
const errorHandler = require("./handlers/errorHandler");
const requestLogger = require("./middleware/requestLogger");
mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => {
    console.log("Database Connected");
  })
  .catch(() => {
    console.log("Database connection failed!!!");
  });

app.use(express.json());
app.use(cors());
app.use(requestLogger);
//Model Initilization

require("./models/userModel");

//Routes....
app.use("/api/auth", userRouter);

//End of routes
app.use(errorHandler);

app.listen(8000, () => {
  console.log("server started successfully");
});
