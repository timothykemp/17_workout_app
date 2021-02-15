const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const options = { toJSON: { virtuals: true } };
const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Please enter exercise type."
        },
        name: {
          type: String,
          trim: true,
          required: "Please enter exercise name."
        },
        duration: {
          type: Number,
          required: "Please enter time duration."
        },
        weight: {
          type: Number
        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        },
        distance: {
          type: Number
        },
      },
    ],
  },
  options
);

workoutSchema.virtual("totalDuration").get(() => {
  return this.exercises.reduce(reducer, 0);
});

const reducer = (accumulator, exercise) => accumulator + exercise.duration;

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
