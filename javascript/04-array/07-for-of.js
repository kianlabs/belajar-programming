function hitungTotalDiAtas(daftarHarga, minimum) {
  let total = 0
  for (const nilai of daftarHarga) {
    if (nilai > minimum) {
      total += nilai
    }
  }
  return total
}

console.log(hitungTotalDiAtas([3000, 7000, 12000], 7000))
