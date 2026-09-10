const daftarBarang = [
  { nama: 'keyboard', harga: 150000, stok: 3 },
  { nama: 'mouse', harga: 75000, stok: 2 },
]

let total = 0
for (const barang of daftarBarang) {
  total += barang.harga * barang.stok
}

console.log(total)
