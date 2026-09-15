angka = int (input('Masukkan angka: '))

if angka == 1:
  print(f'{angka} bukan bilangan prima')
elif angka == 2:
  print(f'{angka} adalah bilangan prima')
else:
  adalah_prima = True
  for i in range(2, angka):
      if angka % i == 0:
        adalah_prima = False
        break

  if adalah_prima:
    print(f'{angka} adalah bilangan prima')
  else:
    print(f'{angka} bukan bilangan prima')