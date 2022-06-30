const express = require("express");
const contact = require("../controllers/contact.js")
const submitForm = require("../controllers/submit.js")

const router = express.Router()

router.get('/', contact);

router.post("/submit", submitForm);

module.exports = router;