function cekTarget(jam) {
  if (jam >= 2) {
    return 'target tercapai'
  } else {
    return 'belum tercapai'
  }
}

const status = cekTarget(3)
console.log(status)
