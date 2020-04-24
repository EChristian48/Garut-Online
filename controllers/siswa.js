const express = require("express");
const router = express.Router();
const Siswa = require("../models/siswa")

// Get all students data
router.get("/siswa", async (req, res) => {
    try {
        const siswas = await Siswa.find();
        res.render("admin/siswa/index", {
            siswas: siswas
        });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Get single student data by id
router.get("/siswa/:id", async (req, res) => {
    try {
        const siswa = await Siswa.findById(req.params.id);
        res.render("admin/siswa/edit", {
            siswa: siswa
        })
    } catch (error) {
        res.json({ message: error.message });
    }
})

// Create new student
router.post("/siswa", async (req, res) => {
    console.log("POST");
    try {
        const siswa = await Siswa.create(req.body);
        const newSiswa = await siswa.save();
        res.send(newSiswa);
    } catch (error) {
        res.json({ message: error.message });
    }
})

// Update a student data
router.patch("/siswa/:id", (req, res) => {

})

// Delete a student
router.delete("/siswa/:id", (req, res) => {

})

// Find a student by ID
const getStudent = (req, res, next) => {

}

module.exports = router;