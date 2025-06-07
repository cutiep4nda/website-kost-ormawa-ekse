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
melakukan rebase pada git pull
```
git pull --rebase origin main
```

### Git - Init
Digunakan untuk menginisiasi direktori saat ini sebagai repository git lokal
```
git init
```
(perintah ini tidak perlu dijalankan ketika melakukan git clone)

### Git - Rebase
Memindahkan commit terakhir ke posisi yang paling terakhir setelah melakukan sesuatu (git pull).
```
git rebase 
```

### Git - Commit
Untuk memberikan 'keterangan' ke perubahan pada branch yang aktif saat ini
```
git commit -m "Keterangan"
```

### Installation on Ormawaekse Server
```
git clone https://github.com/cutiep4nda/website-kost-ormawa-ekse.git
composer install --no-dev --optimize-autoloader
cp .env.example .env
nano .env #edit this file properly
php artisan key:generate
mysql
CREATE DATABASE your_database_name CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'your_database_user'@'localhost' IDENTIFIED BY 'your_database_user_password';
GRANT ALL PRIVILEGES ON your_database_name.* TO 'your_database_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;
php artisan migrate --force
php artisan db:seed
php artisan optimize:clear # Clears all caches
php artisan config:cache    # Caches configuration for faster loading
sudo chown -R www-data:www-data storage/
sudo chown -R www-data:www-data bootstrap/cache
sudo chmod -R 775 storage/
sudo chmod -R 775 bootstrap/cache
npm install
npm run build
```

### Configure Domain
```
sudo nano /etc/nginx/sites-available/your-domain.com
```
add this:
```
server {
    listen 80;
    listen [::]:80;
    server_name your_domain.com www.your_domain.com; # Replace with your domain name or VPS IP
    root /path/to/your/laravel-project/public; # IMPORTANT: Point to the public directory

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";

    index index.php index.html index.htm;

    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt { access_log off; log_not_found off; }

    error_page 404 /index.php;

    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.2-fpm.sock; # Ensure this matches your PHP-FPM version
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.(?!well-known).* {
        deny all;
    }
}
```
```
sudo ln -s /etc/nginx/sites-available/your-domain.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```


## NOTE
- Pada repository GitHub ini, hanya ada 1 branch (main)

<hr>
<a href="https://docs.google.com/presentation/d/1-A5a0rSfTO_NLigLYPvgFWed2aNYlxRJkXBggGFYAV0/edit#slide=id.p">Link database schema</a>