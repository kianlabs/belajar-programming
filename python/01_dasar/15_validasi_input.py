while True:
  umur = int(input('Masukkan umur: '))
  if umur < 1 or umur > 120:
    print('umur tidak valid, coba lagi')
  else:
    print(f'umur lo: {umur}')
    break
