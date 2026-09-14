nilai_ujian = int(input('Nilai Ujian: '))

if nilai_ujian < 0 or nilai_ujian > 100:
  print('Nilai tidak valid')
elif nilai_ujian >= 90:
  print('Grade lo: A')
elif nilai_ujian >= 80:
  print('Grade lo: B')
elif nilai_ujian >= 70:
  print('Grade lo: C')
elif nilai_ujian >= 60:
  print('Grade lo: D')
elif nilai_ujian >= 0:
  print('Grade lo: E')
else:
  print('Nilai tidak valid')

