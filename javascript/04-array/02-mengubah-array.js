const kegiatan = ['belajar', 'istirahat', 'tidur']

kegiatan[1] = 'olahraga'
kegiatan.push('membaca')

console.log(kegiatan)
console.log(kegiatan.length)

const dihapus = kegiatan.pop()

console.log(dihapus)
console.log(kegiatan.length)
