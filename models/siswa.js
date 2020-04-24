const mongoose = require("mongoose");

const siswaSchema = new mongoose.Schema({
    jalur: {
        type: Boolean,
        required: true,
    },

    data_siswa: {
        nama_lengkap: {
            type: String,
            maxLength: 100,
            required: true,
        },
        nama_panggilan: {
            type: String,
            maxLength: 30,
            required: true,
        },
        jk: {
            type: Boolean,
            required: true,
        },
        ttl: {
            tempat_lahir: {
                type: String,
                maxLength: 30,
                required: true,
            },
            tanggal_lahir: {
                type: Date,
                required: true,
            }
        },
        agama: {
            type: String,
            maxLength: 15,
            required: true,
        },
        cita_cita: {
            type: String,
            maxLength: 50,
            required: true,
        },
        hobi: {
            type: String,
            maxLength: 50,
            required: true,
        },
        anak_ke: {
            type: Number,
            min: 1,
            required: true,
        },
        jumlah_saudara: {
            kandung: {
                type: Number,
                min: 0,
                required: true,
            },
            tiri: {
                type: Number,
                min: 0,
                required: true,
            },
            angkat: {
                type: Number,
                min: 0,
                required: true,
            },
        },
        berat_badan: {
            type: Number,
            min: 10,
            required: true,
        },
        tinggi_badan: {
            type: Number,
            min: 90,
            required: true,
        },
        gol_darah: {
            type: String,
            enum: [
                "A",
                "B",
                "AB",
                "O",
            ],
            required: true,
        },
    },

    tempat_tinggal: {
        alamat: {
            type: String,
            maxLength: 255,
            required: true,
        },
        kelurahan: {
            type: String,
            maxLength: 50,
            required: true,
        },
        kecamatan: {
            type: String,
            maxLength: 50,
            required: true,
        },
        kota: {
            type: String,
            maxLength: 50,
            required: true,
        },
        provinsi: {
            type: String,
            maxLength: 50,
            required: true,
        },
        kode_pos: {
            type: String,
            maxLength: 10,
            required: true,
        },
        no_telp_rumah: {
            type: String,
            maxLength: 50,
        },
        email: {
            type: String,
            maxLength: 70,
            required: true,
        },
        tinggal_dengan: {
            type: String,
            enum: [
                "Orang Tua",
                "Asrama",
                "Saudara",
            ],
            required: true,
        },
    },

    kesehatan: {
        tbc: {
            type: Boolean,
            required: true,
        },
        malaria: {
            type: Boolean,
            required: true,
        },
        chotipa: {
            type: Boolean,
            required: true,
        },
        cacar: {
            type: Boolean,
            required: true,
        },
        lainnya: {
            type: String,
            maxLength: 100,
        }
    },

    orang_tua: [{
        tipe: {
            type: String,
            enum: [
                "Ayah",
                "Ibu",
                "Wali",
            ],
            required: true,
        },
        hidup: {
            type: Boolean,
            required: true,
        },
        nama: {
            type: String,
            maxLength: 100,
            required: true,
        },
        ttl: {
            tempat_lahir: {
                type: String,
                maxLength: 30,
                required: true,
            },
            tanggal_lahir: {
                type: Date,
                required: true,
            }
        },
        pekerjaan: {
            type: String,
            maxLength: 100,
            required: true,
        },
        pendidikan: {
            type: String,
            maxLength: 50,
            required: true,
        },
        kewarganegaraan: {
            type: String,
            maxLength: 50,
            required: true,
        },
        agama: {
            type: String,
            maxLength: 15,
            required: true,
        },
        no: {
            no_hp: {
                type: String,
                maxLength: 15,
                required: true,
            },
            no_wa: {
                type: String,
                maxLength: 15,
                required: true,
            },
        },
        email: {
            type: String,
            maxLength: 70,
        },
        hubungan: {
            type: String,
            maxLength: 70,
        }
    }],

    nilai_rapor: [{
        kelas: {
            type: Number,
            min: 7,
            max: 9,
            required: true,
        },
        semester: {
            type: Number,
            min: 1,
            max: 2,
            required: true,
        },
        pai: {
            type: Number,
            min: 0,
            max: 100,
            required: true,
        },
        b_indonesia: {
            type: Number,
            min: 0,
            max: 100,
            required: true,
        },
        b_inggris: {
            type: Number,
            min: 0,
            max: 100,
            required: true,
        },
        matematika: {
            type: Number,
            min: 0,
            max: 100,
            required: true,
        },
        ipa: {
            type: Number,
            min: 0,
            max: 100,
            required: true,
        },
        ips: {
            type: Number,
            min: 0,
            max: 100,
            required: true,
        },
    }],

    prestasi: [{
        deskripsi: {
            type: String,
            maxLength: 200,
        }
    }],

})

module.exports = mongoose.model("Siswa", siswaSchema);