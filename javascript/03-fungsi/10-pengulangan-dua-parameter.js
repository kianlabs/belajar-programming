function hitungJumlahDiAtas(batas, minimum) {
  let jumlah = 0
  for (let angka = 1; angka <= batas; angka++) {
    if (angka > minimum) {
      jumlah++
    }
  }
  return jumlah
}

console.log(hitungJumlahDiAtas(8, 5))
console.log(hitungJumlahDiAtas(10, 7))
console.log(hitungJumlahDiAtas(5, 5))
