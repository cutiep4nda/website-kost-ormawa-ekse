<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://ormawaeksekutifpku.com/img/Home1.png" height="200"></a></p>

# Website Kost Ormawa Eksekutif

Tulisan ini sebagai Hands On Guidance untuk memelihara repository ini

## Git Clone
Mengkloning repository ke local computer dan menjadikan direktori tersebut sebagai Git Repository
```
git clone https://github.com/cutiep4nda/website-kost-ormawa-ekse.git
```

### Git - Branch
Branch berfungsi sebagai 'identitas' ketika melakukan edit file.

- Menambahkan branch baru
```
git checkout -b <nama-branch>
```
- Mengganti branch
```
git checkout <nama-branch>
```
Sangat disarankan membuat branch baru di local computer ketika ingin melakukan kerja. Hal ini agar kode dari branch 'main' akan di-'copy' ke branch baru yang telah dibuat (ketika membuat branch baru, seluruh kode akan otomatis di-'copy')

delete branch
```
git branch -d <nama-branch>
```

### Git - Merge
Merging atau menggabungkan dua buah kode dari branch berbeda
```
git merge <nama-branch>
```
Akan menggabungkan branch <nama-branch> ke branch yang aktif sekarang

### Git - Push
Mengunggah repository lokal dengan branch yang aktif saat ini ke repository GitHub dengan branch main melalui remote origin
```
git push origin main
```

### Git - Pull
Melakukan penarikan perubahan yang ada pada branch main di repository GitHub melalui remote origin dan otomatis akan melakukan merging ke branch yang aktif saat ini
```
git pull origin main
```

### Git - Init
Digunakan untuk menginisiasi direktori saat ini sebagai repository git lokal
```
git init
```
(perintah ini tidak perlu dijalankan ketika melakukan git clone)

### Git - Commit
Untuk memberikan 'keterangan' ke perubahan pada branch yang aktif saat ini
```
git commit -m "Keterangan"
```

## NOTE
- Pada repository GitHub ini, hanya ada 1 branch (main)

<hr>
<a href="https://docs.google.com/presentation/d/1-A5a0rSfTO_NLigLYPvgFWed2aNYlxRJkXBggGFYAV0/edit#slide=id.p">Link database schema</a>