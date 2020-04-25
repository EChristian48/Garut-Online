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
router.post("/siswa", onToBool,async (req, res) => {
    console.log(req.body);
    try {
        let siswa = new Siswa({
            jalur: req.body.jalur,
            data_siswa: {
                nama_lengkap: req.body.nama_lengkap,
                nama_panggilan: req.body.nama_panggilan,
                jk: req.body.jk,
                agama: req.body.agama,
                cita_cita: req.body.cita_cita,
                hobi: req.body.hobi,
                anak_ke: req.body.anak_ke,
                berat_badan: req.body.berat_badan,
                tinggi_badan: req.body.tinggi_badan,
                gol_darah: req.body.gol_darah,
                jumlah_saudara: {
                    kandung: req.body.kandung,
                    tiri: req.body.tiri,
                    angkat: req.body.angkat,
                },
                ttl: {
                    tempat_lahir: req.body.tempat_lahir,
                    tanggal_lahir: req.body.tanggal_lahir,
                },
            },
            tempat_tinggal: {
                alamat: req.body.alamat,
                kelurahan: req.body.kelurahan,
                kecamatan: req.body.kecamatan,
                kota: req.body.kota,
                provinsi: req.body.provinsi,
                kode_pos: req.body.kode_pos,
                no_telp_rumah: req.body.no_telp_rumah,
                email: req.body.email,
                tinggal_dengan: req.body.tinggal_dengan,
            },
            kesehatan: {
                tbc: req.body.tbc,
                malaria: req.body.malaria,
                chotipa: req.body.chotipa,
                cacar: req.body.cacar,
                lainnya: req.body.lainnya,
            },
        });

        const newSiswa = await siswa.save();
        res.redirect("../")
    } catch (error) {
        res.json({ message: error.message });
    }
})

// Update a student data
router.post("/siswa/:id/update", onToBool, async (req, res) => {
    try {
        await Siswa.findByIdAndUpdate(req.params.id, {
            jalur: req.body.jalur,
            data_siswa: {
                nama_lengkap: req.body.nama_lengkap,
                nama_panggilan: req.body.nama_panggilan,
                jk: req.body.jk,
                agama: req.body.agama,
                cita_cita: req.body.cita_cita,
                hobi: req.body.hobi,
                anak_ke: req.body.anak_ke,
                berat_badan: req.body.berat_badan,
                tinggi_badan: req.body.tinggi_badan,
                gol_darah: req.body.gol_darah,
                jumlah_saudara: {
                    kandung: req.body.kandung,
                    tiri: req.body.tiri,
                    angkat: req.body.angkat,
                },
                ttl: {
                    tempat_lahir: req.body.tempat_lahir,
                    tanggal_lahir: req.body.tanggal_lahir,
                },
            },
            tempat_tinggal: {
                alamat: req.body.alamat,
                kelurahan: req.body.kelurahan,
                kecamatan: req.body.kecamatan,
                kota: req.body.kota,
                provinsi: req.body.provinsi,
                kode_pos: req.body.kode_pos,
                no_telp_rumah: req.body.no_telp_rumah,
                email: req.body.email,
                tinggal_dengan: req.body.tinggal_dengan,
            },
            kesehatan: {
                tbc: req.body.tbc,
                malaria: req.body.malaria,
                chotipa: req.body.chotipa,
                cacar: req.body.cacar,
                lainnya: req.body.lainnya,
            },
        });   
        res.redirect(`../${req.params.id}`)
    } catch (error) {
        res.send({message: error.message})
    }
})

// Delete a student
router.post("/siswa/:id/delete", onToBool, async (req, res) => {
    try {
        await Siswa.findByIdAndDelete(req.params.id, {
            jalur: req.body.jalur,
            data_siswa: {
                nama_lengkap: req.body.nama_lengkap,
                nama_panggilan: req.body.nama_panggilan,
                jk: req.body.jk,
                agama: req.body.agama,
                cita_cita: req.body.cita_cita,
                hobi: req.body.hobi,
                anak_ke: req.body.anak_ke,
                berat_badan: req.body.berat_badan,
                tinggi_badan: req.body.tinggi_badan,
                gol_darah: req.body.gol_darah,
                jumlah_saudara: {
                    kandung: req.body.kandung,
                    tiri: req.body.tiri,
                    angkat: req.body.angkat,
                },
                ttl: {
                    tempat_lahir: req.body.tempat_lahir,
                    tanggal_lahir: req.body.tanggal_lahir,
                },
            },
            tempat_tinggal: {
                alamat: req.body.alamat,
                kelurahan: req.body.kelurahan,
                kecamatan: req.body.kecamatan,
                kota: req.body.kota,
                provinsi: req.body.provinsi,
                kode_pos: req.body.kode_pos,
                no_telp_rumah: req.body.no_telp_rumah,
                email: req.body.email,
                tinggal_dengan: req.body.tinggal_dengan,
            },
            kesehatan: {
                tbc: req.body.tbc,
                malaria: req.body.malaria,
                chotipa: req.body.chotipa,
                cacar: req.body.cacar,
                lainnya: req.body.lainnya,
            },
        });   
        res.redirect(`../`)
    } catch (error) {
        res.send({message: error.message})
    }
})

// Find a student by ID
const getStudent = async (req, res, next) => {
    try {
        const id = await req.params.id;
        const siswa = await Siswa.findById(id);
    } catch (error) {
        console.log(error)
    }

    res.siswa = siswa;
    next();
}

function onToBool(req, res, next) {
    for (const key in req.body) {
        console.log(req.body[key])
        if (req.body[key] == "on") {
            req.body[key] = true;
        }// } else {
        //     req.body[key] = false;
        // }
    }
    next();
}

module.exports = router;