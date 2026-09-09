function kategoriNilai(nilai) {
  if (nilai >= 90) {
    return 'sangat baik'
  }
  if (nilai >= 75 && nilai <= 89) {
    return 'baik'
  }
  return 'perlu latihan'
}

const hasil = kategoriNilai(95)
const hasil2 = kategoriNilai(80)
const hasil3 = kategoriNilai(60)

console.log(hasil)
console.log(hasil2)
console.log(hasil3)
