function ambilHargaDiAtas(daftarHarga, minimum) {
  const hasil = []
  for (const nilai of daftarHarga) {
    if (nilai > minimum) {
      hasil.push(nilai)
    }
  }
  return hasil
}

console.log(ambilHargaDiAtas([3000, 7000, 12000], 5000))
// [7000, 12000]
