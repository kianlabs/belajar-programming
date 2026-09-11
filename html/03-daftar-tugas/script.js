const formTugas = document.querySelector('#form-tugas')
const inputTugas = document.querySelector('#tugas')
const daftarTugas = document.querySelector('#daftar-tugas')

let dataTugas = JSON.parse(localStorage.getItem('daftarTugas')) || []

function simpanTugas() {
  localStorage.setItem('daftarTugas', JSON.stringify(dataTugas))
}

function tampilkanSemuaTugas() {
  daftarTugas.replaceChildren()

  for (let indeks = 0; indeks < dataTugas.length; indeks++) {
    const itemTugas = document.createElement('li')
    itemTugas.textContent = dataTugas[indeks]

    const tombolHapus = document.createElement('button')
    tombolHapus.type = 'button'
    tombolHapus.textContent = 'Hapus'

    tombolHapus.addEventListener('click', function () {
      dataTugas.splice(indeks, 1)
      simpanTugas()
      tampilkanSemuaTugas()
    })

    itemTugas.append(tombolHapus)
    daftarTugas.append(itemTugas)
  }
}

tampilkanSemuaTugas()

formTugas.addEventListener('submit', function (event) {
  event.preventDefault()

  const teksTugas = inputTugas.value.trim()

  if (teksTugas === '') {
    return
  }

  dataTugas.push(teksTugas)
  simpanTugas()
  tampilkanSemuaTugas()

  formTugas.reset()
  inputTugas.focus()
})
