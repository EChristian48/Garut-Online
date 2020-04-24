import {Data} from "../data.js";
import {Bootstrap} from "./base/bootstrap-base.js";

class TabelSiswa extends HTMLElement {
    constructor() {
        super();
        
        // Bikin jadi shadow master paddle pop
        this._shadow = this.attachShadow({mode: "open"});

        // Ambil styling bootstrap yang dijadiin string
        this._style = Bootstrap.getStyle();

        this.beginningHTML = `
        <table class="table table-dark table-striped">
        <thead>
            <tr>
                <th>Nama</th>
                <th>Email</th>
                <th>Ayah</th>
                <th>Ibu</th>
            </tr>
        </thead>
        <tbody>
        `

        // Ending buat tablenya
        this.endingHTML = `
        </tbody>
        </table>
        `

        this.render();
    }

    render() {
        for (let siswa of Data.getSiswa()) {
            console.log(siswa)
        }
    }
}

export {TabelSiswa};