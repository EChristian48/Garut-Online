import {Data} from "./data.js";
import {TabelSiswa} from "./components/table-siswa.js";

customElements.define("tabel-siswa", TabelSiswa)



Data.getSiswa();