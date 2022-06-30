const express = require("express");
const home = require("../controllers/web.js")

const router = express.Router()

router.get('/', home)

module.exports = router;