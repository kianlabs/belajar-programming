let total = 0
let jumlah = 0

for (let angka = 1; angka <= 10; angka++) {
  if (angka >= 2 && angka <= 6) {
    jumlah++
    total += angka
  }
}

console.log(jumlah)
console.log(total)

const rataRata = total / jumlah
console.log('rata-ratanya: ' + rataRata)
