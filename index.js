const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const siswaController = require("./controllers/siswa");
const adminController = require("./controllers/admin");
const clientControlller = require("./controllers/client");

const app = express();

app.use("/assets", express.static(path.join(__dirname, "src")));
app.use("/assets", express.static(path.join(__dirname, "node_modules")));

app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;

db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected"));

app.use(cors({
    origin: ["http://127.0.0.1:5501", "http://127.0.0.1:5500"]
}));
app.use(express.json());

app.use(clientControlller);
app.use("/admin", adminController, siswaController);

app.listen(process.env.PORT || 4429, () => {
    console.log("Server started...");
})
