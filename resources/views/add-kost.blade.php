<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Tambah Kost | Sakara Kost</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        birumuda1: '#b8f2ff',
                        biru: '#248da8',
                        birumuda2: '#16cdd8',
                        birutua1: '#102542',
                        birutua2: '#003459',
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-birumuda1 min-h-screen py-8">
    <div class="max-w-4xl mx-auto px-4">
        <!-- Header -->
        <div class="text-center mb-8">
            <h1 class="text-3xl font-bold text-birutua1">Tambah Kost Baru</h1>
            <p class="text-biru mt-2">Isi form berikut untuk menambahkan data kost baru</p>
        </div>

        <!-- Form Container -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden p-6">
            <form action="#" method="post" enctype="multipart/form-data" class="space-y-6">
                @csrf
                
                <!-- Basic Information Section -->
                <div class="space-y-4">
                    <h2 class="text-xl font-semibold text-birutua2 border-b pb-2">Informasi Dasar</h2>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                        <label class="text-birutua1 font-medium">Nama Kost</label>
                        <div class="md:col-span-2">
                            <input type="text" name="nama" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-birumuda2 focus:border-birumuda2 transition">
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                        <label class="text-birutua1 font-medium">Alamat</label>
                        <div class="md:col-span-2">
                            <input type="text" name="alamat" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-birumuda2 focus:border-birumuda2 transition">
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                        <label class="text-birutua1 font-medium">Harga</label>
                        <div class="md:col-span-2">
                            <input type="number" name="harga" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-birumuda2 focus:border-birumuda2 transition">
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                        <label class="text-birutua1 font-medium">Sisa Kamar</label>
                        <div class="md:col-span-2">
                            <input type="number" name="stock" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-birumuda2 focus:border-birumuda2 transition">
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <label class="text-birutua1 font-medium">Deskripsi</label>
                        <div class="md:col-span-2">
                            <textarea name="deskripsi" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-birumuda2 focus:border-birumuda2 transition"></textarea>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                        <label class="text-birutua1 font-medium">Jenis Kost</label>
                        <div class="md:col-span-2">
                            <select name="jenis_id" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-birumuda2 focus:border-birumuda2 transition">
                                @foreach ($jenis as $a)
                                    <option value="{{ $a->id }}">{{ $a->jenis }}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                        <label class="text-birutua1 font-medium">Daerah</label>
                        <div class="md:col-span-2">
                            <select name="daerah_id" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-birumuda2 focus:border-birumuda2 transition">
                                @foreach ($daerah as $a)
                                    <option value="{{ $a->id }}">{{ $a->daerah }}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <label class="text-birutua1 font-medium">Pemilik</label>
                        <div class="md:col-span-2 space-y-2">
                            <select name="pemilik_id" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-birumuda2 focus:border-birumuda2 transition">
                                <option value="0" selected>Tidak Ditemukan</option>
                                @foreach ($pemilik as $a)
                                    <option value="{{ $a->id }}">{{ $a->nama_pemilik }}</option>
                                @endforeach
                            </select>
                            <input type="text" name="pemilik_notfound" placeholder="Nama pemilik baru" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-birumuda2 focus:border-birumuda2 transition">
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                        <label class="text-birutua1 font-medium">No Telepon (WA)</label>
                        <div class="md:col-span-2">
                            <input type="text" name="no_telp" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-birumuda2 focus:border-birumuda2 transition">
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                        <label class="text-birutua1 font-medium">Gambar Kost</label>
                        <div class="md:col-span-2">
                            <input type="file" name="gambar[]" multiple accept="image/jpeg, image/png, image/jpg" class="w-full">
                            <p class="text-sm text-gray-500 mt-1">Unggah beberapa gambar (JPEG, PNG, JPG)</p>
                        </div>
                    </div>
                </div>

                <!-- Fasilitas Kamar Section -->
                <div class="space-y-4">
                    <h2 class="text-xl font-semibold text-birutua2 border-b pb-2">Fasilitas Kamar</h2>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                        <label class="text-birutua1 font-medium">Ukuran Kamar</label>
                        <div class="md:col-span-2">
                            <input type="text" name="ukuran" placeholder="Contoh: 3x4 meter" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-birumuda2 focus:border-birumuda2 transition">
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <label class="text-birutua1 font-medium">Fasilitas</label>
                        <div class="md:col-span-2">
                            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                <label class="flex items-center space-x-2">
                                    <input type="checkbox" name="ac" value="1" class="rounded text-biru focus:ring-birumuda2">
                                    <span>AC</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input type="checkbox" name="bantal" value="1" class="rounded text-biru focus:ring-birumuda2">
                                    <span>Bantal</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input type="checkbox" name="kasur" value="1" class="rounded text-biru focus:ring-birumuda2">
                                    <span>Kasur</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input type="checkbox" name="lemari" value="1" class="rounded text-biru focus:ring-birumuda2">
                                    <span>Lemari</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input type="checkbox" name="kipas_angin" value="1" class="rounded text-biru focus:ring-birumuda2">
                                    <span>Kipas Angin</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input type="checkbox" name="km_dalam" value="1" class="rounded text-biru focus:ring-birumuda2">
                                    <span>Kamar Mandi Dalam</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input type="checkbox" name="meja_belajar" value="1" class="rounded text-biru focus:ring-birumuda2">
                                    <span>Meja Belajar</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input type="checkbox" name="shower" value="1" class="rounded text-biru focus:ring-birumuda2">
                                    <span>Shower</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input type="checkbox" name="water_heater" value="1" class="rounded text-biru focus:ring-birumuda2">
                                    <span>Water Heater</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Fasilitas Kost Section -->
                <div class="space-y-4">
                    <h2 class="text-xl font-semibold text-birutua2 border-b pb-2">Fasilitas Kost</h2>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <label class="text-birutua1 font-medium">Fasilitas Umum</label>
                        <div class="md:col-span-2">
                            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                <label class="flex items-center space-x-2">
                                    <input type="checkbox" name="km_luar" value="1" class="rounded text-biru focus:ring-birumuda2">
                                    <span>Kamar Mandi Luar</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input type="checkbox" name="kulkas" value="1" class="rounded text-biru focus:ring-birumuda2">
                                    <span>Kulkas</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input type="checkbox" name="p_motor" value="1" class="rounded text-biru focus:ring-birumuda2">
                                    <span>Parkiran Motor</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input type="checkbox" name="p_mobil" value="1" class="rounded text-biru focus:ring-birumuda2">
                                    <span>Parkiran Mobil</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input type="checkbox" name="pengurus_kos" value="1" class="rounded text-biru focus:ring-birumuda2">
                                    <span>Pengurus Kost</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input type="checkbox" name="dapur" value="1" class="rounded text-biru focus:ring-birumuda2">
                                    <span>Dapur</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input type="checkbox" name="wifi" value="1" class="rounded text-biru focus:ring-birumuda2">
                                    <span>WiFi</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input type="checkbox" name="tv" value="1" class="rounded text-biru focus:ring-birumuda2">
                                    <span>TV</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input type="checkbox" name="cctv" value="1" class="rounded text-biru focus:ring-birumuda2">
                                    <span>CCTV</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input type="checkbox" name="lobby" value="1" class="rounded text-biru focus:ring-birumuda2">
                                    <span>Lobby</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input type="checkbox" name="r_jemur" value="1" class="rounded text-biru focus:ring-birumuda2">
                                    <span>Ruang Jemur</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input type="checkbox" name="mesin_cuci" value="1" class="rounded text-biru focus:ring-birumuda2">
                                    <span>Mesin Cuci</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <label class="text-birutua1 font-medium">Lainnya</label>
                        <div class="md:col-span-2">
                            <textarea name="lainnya" rows="2" placeholder="Fasilitas lain yang tidak tercantum" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-birumuda2 focus:border-birumuda2 transition"></textarea>
                        </div>
                    </div>
                </div>

                <!-- Submit Button -->
                <div class="pt-6">
                    <button type="submit" class="w-full bg-biru hover:bg-birutua2 text-white font-bold py-3 px-4 rounded-lg transition duration-300">
                        Tambah Kost
                    </button>
                </div>
            </form>
        </div>
    </div>
</body>
</html>