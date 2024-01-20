const express = require("express")
const router = express.Router()

router.get("/signin" , (req, res) => {
    console.log(req.query)
    res.send(req.query)
})

router.post('/signup', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})



module.exports = router