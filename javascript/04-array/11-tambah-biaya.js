function tambahBiaya(daftarHarga, biaya) {
  const hasil = []
  for (const nilai of daftarHarga) {
    hasil.push(nilai + biaya)
  }
  return hasil
}

console.log(tambahBiaya([3000, 5000, 7000], 1000))
// [4000, 6000, 8000]
