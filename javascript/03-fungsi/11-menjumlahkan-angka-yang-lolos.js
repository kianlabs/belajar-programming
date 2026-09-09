function jumlahkanDiAtas(batas, minimum) {
  let jumlah = 0
  for (let angka = 1; angka <= batas; angka++) {
    if (angka > minimum) {
      jumlah += angka
    }
  }
  return jumlah
}

console.log(jumlahkanDiAtas(8, 5)) // 21, dari 6 + 7 + 8
