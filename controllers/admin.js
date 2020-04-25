const express = require("express");
const router = express.Router();
const User = require("../models/user.js")

router.get("/", (req, res) => {
    res.render("admin/index")
})

router.get("/login", (req, res) => {
    res.render("admin/login")
})

router.post("/login", async (req, res) => {
    try {
        await User.findOne({
            username: req.body.username,
            password: req.body.password
        })
        res.send
    } catch (error) {
        res.send({message: error.message})
    }  
})

module.exports = router;