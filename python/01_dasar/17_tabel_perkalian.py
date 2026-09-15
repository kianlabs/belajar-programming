while True:
  angka = int(input('Masukkan angka: '))

  if angka >= 1 and angka <= 10:
    print(f'Tabel Perkalian {angka}: ')

    for i in range(1, 11):
      print(f'{angka} x {i} = {angka * i}')
    break
  else:
    print('Angka harus antara 1-10!')