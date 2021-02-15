const router = require("express").Router();
const db = require("../models");

router.get("/workouts", (_req, res) => {
    db.Workout.find({})
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
});

// Create new workout
router.post("/workouts", (_req, res) => {
    db.Workout.create({})
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.json(err)
        });
});


router.put("/workouts/:id", ({ body, params }, res) => {
    db.Workout.findByIdAndUpdate(
        params.id,
        {
            $push: {
                exercises: body
            }
        },
        { new: true }
    )
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.json(err)
        })
});

router.get("/workouts/range", (_req, res) => {
    db.Workout.find({})
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.json(err);
        })
});

module.exports = router;

