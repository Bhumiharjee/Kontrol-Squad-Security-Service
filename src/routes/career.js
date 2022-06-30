const express = require("express");
const career = require("../controllers/career.js")
const submitForm = require("../controllers/submit.js")

const router = express.Router()

router.get('/', career)

router.post("/submit", submitForm);

module.exports = router;