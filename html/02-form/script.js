const judul = document.querySelector('h1')

judul.textContent = 'Kirim Pesan ke Ridzkyan'
console.log(judul.textContent)

const form = document.querySelector('form')
const inputNama = document.querySelector('#nama')
const inputEmail = document.querySelector('#email')
const inputPesan = document.querySelector('#pesan')
const statusPesan = document.querySelector('#status')

form.addEventListener('submit', function (event) {
  event.preventDefault()

  const dataPesan = {
    nama: inputNama.value.trim(),
    email: inputEmail.value.trim(),
    pesan: inputPesan.value.trim(),
  }

  if (dataPesan.nama === '') {
    statusPesan.textContent = 'Nama tidak boleh hanya berisi spasi.'
    inputNama.focus()
    return
  }

  if (dataPesan.pesan.length < 10) {
    statusPesan.textContent = 'Pesan harus minimal 10 karakter setelah spasi tepi dihapus.'
    inputPesan.focus()
    return
  }

  console.log(dataPesan)

  statusPesan.textContent = `terima kasih, ${dataPesan.nama}. data form sudah dibaca.`

  form.reset()
})
