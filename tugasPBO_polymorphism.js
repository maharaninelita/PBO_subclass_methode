// Class Kapal (Base class)
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

// Polymorphism dengan method infoKapal pada subclass KapalPenumpang
class KapalPenumpang extends Kapal {
    constructor(nama, jenis, panjang, lebar, kapasitasPenumpang) {
        super(nama, jenis, panjang, lebar);
        this.kapasitasPenumpang = kapasitasPenumpang;
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini memiliki kapasitas ${this.kapasitasPenumpang} orang.`;
    }
}

// Polymorphism dengan method infoKapal pada subclass KapalBarang
class KapalBarang extends Kapal {
    constructor(nama, jenis, panjang, lebar, kapasitasBarang) {
        super(nama, jenis, panjang, lebar);
        this.kapasitasBarang = kapasitasBarang;
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini dapat mengangkut ${this.kapasitasBarang} ton barang.`;
    }
}

// Polymorphism dengan method infoKapal pada subclass KapalCepat
class KapalCepat extends Kapal {
    constructor(nama, jenis, panjang, lebar, kecepatanMaksimum) {
        super(nama, jenis, panjang, lebar);
        this.kecepatanMaksimum = kecepatanMaksimum;
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini memiliki kecepatan maksimum ${this.kecepatanMaksimum} knot.`;
    }
}

// Class Tiket sebagai superclass
class Tiket {
    constructor(harga, jumlahTiket) {
        this.harga = harga;
        this.jumlahTiket = jumlahTiket;
    }

    infoTiket() {
        return `Harga tiket kapal adalah Rp. ${this.harga} dengan jumlah tiket yang tersedia adalah ${this.jumlahTiket}.`;
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

// Polymorphism pada subclass TiketVIP
class TiketVIP extends Tiket {
    constructor(harga, jumlahTiket, fasilitasVIP) {
        super(harga, jumlahTiket);
        this.fasilitasVIP = fasilitasVIP;
    }

    infoTiket() {
        return `${super.infoTiket()} Fasilitas VIP termasuk: ${this.fasilitasVIP.join(", ")}.`;
    }
}

// Polymorphism pada class Penumpang
class Penumpang {
    constructor(nama, umur, noTelp, kabin) {
        this.nama = nama;
        this.umur = umur;
        this.noTelp = noTelp;
        this.kabin = kabin;
    }

    infoPenumpang() {
        return `Penumpang: ${this.nama}, Usia: ${this.umur}, No. Telepon: ${this.noTelp}, Kabin No: ${this.kabin}.`;
    }
}

// Polymorphism pada subclass PenumpangVIP
class PenumpangVIP extends Penumpang {
    constructor(nama, umur, noTelp, kabin, fasilitasVIP) {
        super(nama, umur, noTelp, kabin);
        this.fasilitasVIP = fasilitasVIP;
    }

    infoPenumpang() {
        return `${super.infoPenumpang()} Penumpang VIP dengan fasilitas: ${this.fasilitasVIP.join(", ")}.`;
    }
}

// Subclass PembelianTiket dari Tiket (untuk membeli tiket dan menggunakan fungsionalitas Tiket)
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

// Implementasi objek-objek kapal
const kapalPenumpang1 = new KapalPenumpang("Budiono Siregar", "kapal penumpang", 305, 36, 370);
const kapalBarang1 = new KapalBarang("CargoFizz", "kapal kargo", 250, 45, 400);
const kapalCepat1 = new KapalCepat("Speedino", "kapal cepat", 150, 20, 40);

// Implementasi objek TiketVIP dan PenumpangVIP
const tiketVIP1 = new TiketVIP(450000, 100, ["Luxury Ship", "Makanan Gratis", "dan Pelayanan Pribadi"]);
const penumpangVIP1 = new PenumpangVIP("Nelita", 30, "08123456789", 12, ["Luxury Ship", "Pelayanan Pribadi"]);

// Test polymorphism
console.log(kapalPenumpang1.infoKapal());  // Polymorphism on KapalPenumpang
console.log(kapalBarang1.infoKapal());     // Polymorphism on KapalBarang
console.log(kapalCepat1.infoKapal());      // Polymorphism on KapalCepat
console.log(tiketVIP1.infoTiket());        // Polymorphism on TiketVIP
console.log(penumpangVIP1.infoPenumpang()); // Polymorphism on PenumpangVIP

// Instance pembelian tiket
const tiketKapal1 = new PembelianTiket(350000, 370);
console.log(tiketKapal1.infoTiket());
tiketKapal1.beliTiket(10);
console.log(tiketKapal1.infoTiket());
