const express = require("express");
const router = express.Router();

router.get("/", (req, res)=> {
    res.render("index")
})

router.get("/daftar", (req, res)=> {
    res.render("daftar")
})

module.exports = router;