function cekKelulusan(nilai) {
  if (nilai >= 75) {
    return 'Lulus'
  }
  return 'Tidak Lulus'
}

const hasil = cekKelulusan(80)
const hasil2 = cekKelulusan(60)
console.log(hasil)
console.log(hasil2)
