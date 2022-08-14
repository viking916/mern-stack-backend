require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

//Initializing express app
const app = express();

//Middleware

//Looks at the request for request body
app.use(express.json());

app.use((request, response, next) => {
  console.log(request.path, request.method);
  next();
});

// app.get("/", (request, response) => {
//   response.json({ message: "Welcome to the MERN stack" });
// });

app.use("/api/workouts", workoutRoutes);

//Connecting to MongoDB
mongoose
  .connect(process.env.MONG_DB)
  .then(() => {
    //Listening for requests
    app.listen(process.env.PORT, () => {
      console.log("Express: Listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
