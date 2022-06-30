const express = require("express");
const services = require("../controllers/services.js")

const router = express.Router()

router.get('/', services)

module.exports = router;