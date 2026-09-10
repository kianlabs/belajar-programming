function hitungBanyakHarga(daftarHarga, minimum) {
  let total = 0
  for (const nilai of daftarHarga) {
    if (nilai > minimum) {
      total++
    }
  }
  return total
}

console.log(hitungBanyakHarga([3000, 7000, 12000], 5000)) // 2
