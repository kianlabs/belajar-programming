const harga = [2000, 6000, 9000, 4000]
let jumlah = 0
const hasil = []

for (const nilai of harga) {
  if (nilai > 5000) {
    jumlah++
    hasil.push(nilai)
  }
}

console.log(jumlah)
console.log(hasil)
