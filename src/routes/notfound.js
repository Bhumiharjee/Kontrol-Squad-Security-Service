const express = require("express");
const notfound = require("../controllers/notfound.js")

const router = express.Router()

router.get('/', notfound)

module.exports = router;