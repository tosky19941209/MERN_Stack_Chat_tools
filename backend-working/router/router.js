const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()
const userInfo = require("../model/mongomodel")

router.get("/signin", (req, res) => {
    const {name} = req.query
    userInfo.find({ name : name }) 
    .then((data) => {
        if(data.length == 0)
            res.send("no found")
        else res.send(data)
    }).catch((err) => {
        res.send(err)
    })
});

router.post('/signup', (req, res) => {
    const {name, password, email, phonenumber} = req.body
    const newuser = new userInfo(req.body)
    newuser.save()
    .then((data) => {
        res.send("sign up is success!!!!!!!!")
    }).catch((err) => {
        res.send(err)
    })
});



module.exports = router;