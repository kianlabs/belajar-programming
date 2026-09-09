function hitungTotalAngka(batas) {
  let total = 0
  for (let angka = 1; angka <= batas; angka++) {
    total += angka
  }
  return total
}

console.log(hitungTotalAngka(3))
console.log(hitungTotalAngka(5))
