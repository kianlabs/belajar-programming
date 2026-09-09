let jumlahHariBelajar = 0

for (let hari = 1; hari <= 7; hari++) {
  if (hari === 7 || hari === 6) {
    console.log('Hari ke-' + hari + ': Libur')
    jumlahHariBelajar++
  } else {
    console.log('Hari ke-' + hari + ': Belajar')
  }
}

console.log(jumlahHariBelajar)
