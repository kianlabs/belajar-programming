function hitungJumlahDiAtasLima(batas) {
  let jumlah = 0
  for (let angka = 1; angka <= batas; angka++) {
    if (angka > 5) {
      jumlah++
    }
  }
  return jumlah
}

console.log(hitungJumlahDiAtasLima(8))
console.log(hitungJumlahDiAtasLima(10))
