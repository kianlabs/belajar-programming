function cekStok(stok) {
  if (stok <= 0) {
    return 'habis'
  }
  if (stok <= 5) {
    return 'stok menipis'
  }
  return 'stok cukup'
}

const hasil = cekStok(0)
const hasil2 = cekStok(3)
const hasil3 = cekStok(10)
console.log(hasil)
console.log(hasil2)
console.log(hasil3)
