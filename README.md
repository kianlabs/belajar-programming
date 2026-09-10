# Belajar Programming

Repo untuk latihan dasar programming, mulai dari JavaScript lalu HTML.

## Struktur

```text
javascript/
  01-kondisi/         # if / else
  02-perulangan/      # for + if
  03-fungsi/          # function, parameter, return
  04-array/           # array + perulangan
  05-object/          # object + array of object
  06-proyek-kasir/    # latihan gabungan: kasir sederhana
html/
  01-struktur-dasar/  # index.html + profil.png
```

## Isi

### `javascript/`

- `01-kondisi/` (1 file) — variabel + `if` / `else` sederhana:
  - `01-target-belajar.js`
- `02-perulangan/` (4 file) — `for` + `if` (hitung, total, rata-rata):
  - `01-jadwal-belajar.js`, `02-hitung-jumlah.js`, `03-hitung-rentang.js`, `04-rata-rata.js`
- `03-fungsi/` (11 file) — `function`, parameter, dan `return`:
  - `01-tampilkan-target.js`, `02-cek-target.js`, `03-hitung-total.js`, `04-return-status.js`
  - `05-cek-kelulusan.js`, `06-kategori-nilai.js`, `07-cek-stok.js`
  - `08-fungsi-pengulangan.js`, `09-pengulangan-if.js`, `10-pengulangan-dua-parameter.js`, `11-menjumlahkan-angka-yang-lolos.js`
- `04-array/` (14 file) — dasar array, `for` / `for...of`, filter dan transformasi:
  - `01-mengenal-array.js`, `02-mengubah-array.js`, `03-perulangan-array.js`, `04-total-array.js`
  - `05-fungsi-total-array.js`, `06-total-harga-diatas.js`, `07-for-of.js`, `08-hitung-harga-diatas.js`
  - `09-kumpulkan-harga.js`, `10-harga-dalam-rentang.js`, `11-tambah-biaya.js`, `12-kalikan-angka.js`
  - `13-kalikan-diatas.js`, `14-jumlah-dan-daftar.js`
- `05-object/` (3 file) — object dan array of object:
  - `01-mengenal-object.js`, `02-array-object.js`, `03-total-stok.js`
- `06-proyek-kasir/` (3 file) — proyek gabungan function + array + object:
  - `01-total-belanja.js` — hitung total keranjang
  - `02-kembalian.js` — total + hitung kembalian
  - `03-struk-belanja.js` — cetak struk per item + total + kembalian

### `html/`

- `01-struktur-dasar/index.html` — struktur dasar HTML (`header`, `main`, `footer`, `img`, `ul`, `a`)

## Cara menjalankan

Pastikan [Node.js](https://nodejs.org/) terinstal, lalu:

```bash
# contoh per materi
node javascript/01-kondisi/01-target-belajar.js
node javascript/02-perulangan/04-rata-rata.js
node javascript/03-fungsi/03-hitung-total.js
node javascript/04-array/01-mengenal-array.js
node javascript/05-object/03-total-stok.js
node javascript/06-proyek-kasir/03-struk-belanja.js
```

Untuk HTML, buka langsung di browser:

```bash
# dari root repo, misalnya:
xdg-open html/01-struktur-dasar/index.html
```

atau pakai Live Server / ekstensi sejenis di editor.

## Rencana belajar

- [x] Variabel & `if` / `else`
- [x] Pengulangan `for`
- [x] Function dasar (parameter & `return`)
- [x] Array
- [x] Object
- [x] Proyek gabungan (kasir sederhana)
- [x] HTML struktur dasar
- [ ] CSS dasar
- [ ] JavaScript DOM / interaksi HTML + JS
- [ ] Materi lanjutan lainnya
