function hitungTotalHarga(daftarHarga) {
  let total = 0
  for (let indeks = 0; indeks < daftarHarga.length; indeks++) {
    total += daftarHarga[indeks]
  }
  return total
}

console.log(hitungTotalHarga([5000, 10000, 15000])) // 30000
console.log(hitungTotalHarga([2000, 3000])) // 5000
