const express = require('express');
const router = express.Router();
const Workout = require("../models/workout");
const mongoose = require('mongoose');

router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then(workoutData => {
            res.json(workoutData);
        })
        .catch(err => {
            res.json(err);
        })
});

// *Create workout Post
router.post("/api/workouts", (req, res) => {

    Workout.create({})
        .then(workoutData => {
            res.json(workoutData)
        })
        .catch(err => {
            res.json(err)
        })
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    console.log('body :>> ', body);

    Workout.findByIdAndUpdate(
        params.id,
        { push: { exercises: body } },
        { new: true, runValidators: true }
    )
        .then(workoutData => res.json(workoutData))
        .catch(err => {
            res.json(err)
        })
});

module.exports = router;