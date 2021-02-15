const express = require("express");
const router = express.Router();
const path = require("path");

// Index route loads index.html
router.get("/", (_req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Complete or add exercise route loads exercise.html
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// Stats route loads stats.html
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;