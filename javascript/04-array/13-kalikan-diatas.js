function kalikanDiAtas(daftarAngka, minimum, pengali) {
  const hasil = []
  for (const nilai of daftarAngka) {
    if (nilai > minimum) {
      hasil.push(nilai * pengali)
    }
  }
  return hasil
}

console.log(kalikanDiAtas([2, 4, 6, 8], 4, 3))
// [18, 24]
