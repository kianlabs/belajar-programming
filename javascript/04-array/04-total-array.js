const harga = [5000, 10000, 15000]
let total = 0

for (let indeks = 0; indeks < harga.length; indeks++) {
  if (harga[indeks] > 5000) {
    total += harga[indeks]
  }
}

console.log(total)
