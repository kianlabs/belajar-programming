const daftarBarang = [
  { nama: 'keyboard', harga: 150000, stok: 3 },
  { nama: 'mouse', harga: 75000, stok: 2 },
]

for (const barang of daftarBarang) {
  console.log(barang.nama + ': ' + barang.harga)
}
