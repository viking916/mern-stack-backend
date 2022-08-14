const express = require("express");
const {
  createWorkout,
  getWorkouts,
  updateWorkout,
  deleteWorkout,
  getWorkout,
} = require("../controllers/WorkoutController");
const Workout = require("../models/WorkoutModel");

const router = express.Router();

//Get all workouts
router.get("/", getWorkouts);

//Get a single workout
router.get("/:id", getWorkout);

//Create new workout
router.post("/", createWorkout);

//Delete a workout
router.delete("/:id", deleteWorkout);

//Update a workout
router.patch("/:id", updateWorkout);

module.exports = router;
