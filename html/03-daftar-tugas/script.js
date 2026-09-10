const formTugas = document.querySelector('#form-tugas')
const inputTugas = document.querySelector('#tugas')
const daftarTugas = document.querySelector('#daftar-tugas')

const tugas = ['Belajar HTML', 'Latihan JavaScript']
let dataTugas = JSON.parse(localStorage.getItem('daftarTugas')) || []

function tampilkanTugas(teksTugas) {
  const itemTugas = document.createElement('li')
  itemTugas.textContent = teksTugas

  const tombolHapus = document.createElement('button')
  tombolHapus.type = 'button'
  tombolHapus.textContent = 'Hapus'

  tombolHapus.addEventListener('click', function () {
    itemTugas.remove()
  })

  itemTugas.append(tombolHapus)
  daftarTugas.append(itemTugas)
}

for (const tugas of dataTugas) {
  tampilkanTugas(tugas)
}

formTugas.addEventListener('submit', function (event) {
  event.preventDefault()

  const teksTugas = inputTugas.value.trim()
  if (teksTugas === '') {
    return
  }

  dataTugas.push(teksTugas)
  localStorage.setItem('daftarTugas', JSON.stringify(dataTugas))

  const itemTugas = document.createElement('li')
  itemTugas.textContent = teksTugas

  const tombolHapus = document.createElement('button')
  tombolHapus.type = 'button'
  tombolHapus.textContent = 'hapus'

  tombolHapus.addEventListener('click', function () {
    itemTugas.remove()
  })

  tampilkanTugas(teksTugas)

  formTugas.reset()
  inputTugas.focus()
})
