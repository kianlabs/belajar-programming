function kalikanAngka(daftarAngka, pengali) {
  const hasil = []
  for (const nilai of daftarAngka) {
    hasil.push(nilai * pengali)
  }
  return hasil
}

console.log(kalikanAngka([2, 4, 6], 3))
// [6, 12, 18]
