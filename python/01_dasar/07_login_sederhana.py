username_benar = 'admin'
password_benar = '12345'

username = str(input('Username: '))
password = str(input('Password: '))

if username == username_benar:
    if password == password_benar:
      print('Login Berhasil')
    else:
      print('password salah')
else:
  print('username tidak ditemukan')

