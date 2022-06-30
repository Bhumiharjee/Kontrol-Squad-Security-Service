const express = require("express");
const policies = require("../controllers/policies.js")

const router = express.Router()

router.get('/', policies)

module.exports = router;