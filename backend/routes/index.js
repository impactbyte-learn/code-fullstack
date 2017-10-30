const express = require("express")
const router = express.Router()

const DATA = require("./data.json")

router.get("/", (req, res, next) => {
  res.send(DATA)
})

module.exports = router
