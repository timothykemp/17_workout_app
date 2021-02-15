const path = require("path");
const router = require("express").Router();

// Index route loads index.html
// router.get("/", (_req, res) => {
//     res.sendFile(path.join(__dirname, "../public/index.html"));
// });

// Stats route loads stats.html
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

// Complete or add exercise route loads exercise.html
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

module.exports = router;