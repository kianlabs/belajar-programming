total_belanja = int(input('Total belanja: ')) 

if total_belanja >= 500000:
  diskon = 20
  harga_akhir = total_belanja * 0.80
elif total_belanja >= 300000:
  diskon = 15
  harga_akhir = total_belanja * 0.85
elif total_belanja >= 100000:
  diskon = 10
  harga_akhir = total_belanja * 0.90
else:
  diskon = 0
  harga_akhir = total_belanja

print(f'Diskon: {diskon}%')
print(f'Harga akhir: {harga_akhir}')