function hitungTotalDiAtas(daftarHarga, minimum) {
  let total = 0
  for (let indeks = 0; indeks < daftarHarga.length; indeks++) {
    if (daftarHarga[indeks] > minimum) {
      total += daftarHarga[indeks]
    }
  }
  return total
}

console.log(hitungTotalDiAtas([5000, 10000, 15000], 5000)) // 25000
console.log(hitungTotalDiAtas([2000, 3000], 5000)) // 0
