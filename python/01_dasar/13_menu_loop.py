while True:
  print('=== MENU ===')
  print('1. Print angka 1-10')
  print('2. Print pola bintang')
  print('3. Keluar')

  pilih = int(input('Pilih (1/2/3): '))
  if pilih == 1:
    for i in range(1, 11):
      print(i)
  elif pilih == 2:
    for i in range(1, 6):
      print('*' * i)
  elif pilih == 3:
      print('Terima Kasih!')
      break
  else:
    print('pilihan tidak valid')

