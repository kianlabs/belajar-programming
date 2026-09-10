const keranjang = [
  { nama: 'Buku', harga: 5000, jumlah: 3 },
  { nama: 'Pulpen', harga: 3000, jumlah: 2 },
]

function hitungTotalBelanja(daftarBelanja) {
  let total = 0
  for (const barang of daftarBelanja) {
    total += barang.harga * barang.jumlah
  }
  return total
}

const totalBelanja = hitungTotalBelanja(keranjang)
const uangBayar = 21000

if (uangBayar < totalBelanja) {
  console.log('uang kurang')
} else {
  console.log('kembalian: ' + (uangBayar - totalBelanja))
}

console.log(totalBelanja)
