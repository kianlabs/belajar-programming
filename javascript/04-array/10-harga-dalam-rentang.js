function ambilHargaDalamRentang(daftarHarga, minimum, maksimum) {
  const hasil = []
  for (const nilai of daftarHarga) {
    if (nilai >= minimum && nilai <= maksimum) {
      hasil.push(nilai)
    }
  }
  return hasil
}

console.log(ambilHargaDalamRentang([3000, 5000, 7000, 12000], 5000, 10000))
// [5000, 7000]
