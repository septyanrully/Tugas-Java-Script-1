// Contoh program penggunaan if-else
let nilai = 60;
if (nilai >= 80) {
    console.log("Nilai Anda A");
} else if (nilai >= 70) {
    console.log("Nilai Anda B");
} else {
    console.log("Nilai Anda C");
}

// Contoh program nested if
let umur = 21;
if (umur >= 18) {
    if (umur <= 25) {
        console.log("Anda berada di usia 18-25 tahun");
    } else {
        console.log("Anda berusia di atas 25 tahun");
    }
} else {
    console.log("Anda di bawah usia 18 tahun");
}

// Contoh program penggunaan switch case
let hari = "Rabu";
switch (hari) {
    case "Senin":
        console.log("Hari ini adalah hari Senin");
        break;
    case "Selasa":
        console.log("Hari ini adalah hari Selasa");
        break;
    default:
        console.log("Hari ini adalah hari lainnya");
}

// Contoh penggunaan program for statement
for (let i = 1; i <= 5; i++) {
    console.log("Iterasi ke-" + i);
}

// Contoh program penggunaan while
let count = 0;
while (count < 5) {
    console.log("Perulangan ke-" + count);
    count++;
}

// Contoh program penggunaan do while
let x = 4;
do {
    console.log("Nilai x: " + x);
    x++;
} while (x <= 5);

// Contoh program penggunaan function
function tambah(a, b) {
    return a + b;
}

let hasilPenambahan = tambah(3, 4);
console.log("Hasil penambahan: " + hasilPenambahan);