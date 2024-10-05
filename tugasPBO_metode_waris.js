class Kapal {
    constructor(nama, jenis, panjang, lebar) {
        this.nama = nama;
        this.jenis = jenis;
        this.panjang = panjang;
        this.lebar = lebar;
    }

    infoKapal() {
        return `Kapal ${this.nama} merupakan ${this.jenis} yang berukuran ${this.panjang} x ${this.lebar} meter.`;
    }
}

const kapal1 = new Kapal("Budiono Siregar", "kapal pesiar", 269, 28);
console.log(kapal1.infoKapal());

class KapalPenumpang extends Kapal {
    constructor(nama, jenis, panjang, lebar, kapasitasPenumpang) {
        super(nama, jenis, panjang, lebar);
        this.kapasitasPenumpang = kapasitasPenumpang;
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini memiliki kapasitas ${this.kapasitasPenumpang} orang.`;
    }
}

const kapalPenumpang1 = new KapalPenumpang("Budiono Siregar", "kapal penumpang", 305, 36, 370);
console.log(kapalPenumpang1.infoKapal());

// subclass tiket penumpang
class Tiket {
    constructor(harga, jumlahTiket) {
        this.harga = harga;
        this.jumlahTiket = jumlahTiket;
    }

    infoTiket() {
        return `Harga tiket  kapal adalah ${this.harga} dengan jumlah tiket yang tersedia adalah ${this.jumlahTiket}.`;
    }

    sisaTiket() {
        return this.jumlahTiket;
    }

    kurangiTiket(jumlah) {
        if (jumlah > this.jumlahTiket) {
            console.log("Jumlah tiket yang diminta melebihi tiket yang tersedia.");
        } else {
            this.jumlahTiket -= jumlah;
            console.log(`${jumlah} tiket telah dibeli. Sisa tiket adalah: ${this.jumlahTiket}`);
        }
    }
}

// subclass pembelian tiket
class PembelianTiket extends Tiket {
    constructor(harga, jumlahTiket) {
        super(harga, jumlahTiket);
    }

    beliTiket(jumlah) {
        if (this.sisaTiket() >= jumlah) {
            this.kurangiTiket(jumlah);
        } else {
            console.log("Kuota tiket tidak cukup untuk pembelian.");
        }
    }
}

// instance tiket kapal
const tiketKapal1 = new PembelianTiket(350000, 370);

// informasi tiket sebelum pembelian
console.log(tiketKapal1.infoTiket());

// tiket
tiketKapal1.beliTiket(10);

// informaasi tiket setelah pembelian
console.log(tiketKapal1.infoTiket());

// ketika membeli tiket melebihi kuotanya
tiketKapal1.beliTiket(560);
