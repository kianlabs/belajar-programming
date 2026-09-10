const keranjang = [
  { nama: 'Buku', harga: 5000, jumlah: 3 },
  { nama: 'Pulpen', harga: 3000, jumlah: 2 },
  { nama: 'penghapus', harga: 2000, jumlah: 2 },
]

function hitungTotalBelanja(daftarBelanja) {
  let total = 0
  for (const barang of daftarBelanja) {
    total += barang.harga * barang.jumlah
  }
  return total
}

const totalBelanja = hitungTotalBelanja(keranjang)
const uangBayar = 30000

for (const barang of keranjang) {
  const subtotal = barang.harga * barang.jumlah
  console.log(`${barang.nama} x${barang.jumlah}: ${subtotal}`)
}

console.log(`total: ${totalBelanja}`)

if (uangBayar < totalBelanja) {
  console.log(`uang kurang`)
} else {
  console.log(`kembalian: ${uangBayar - totalBelanja}`)
}
