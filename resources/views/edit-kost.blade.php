<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ $data->nama }} | Sakarsa Kost</title>
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
    <div class="max-w-6xl mx-auto px-4">
        <!-- Header -->
        <div class="mb-8 text-center">
            <h1 class="text-3xl font-bold text-birutua1">{{ $data->nama }}</h1>
            <p class="text-biru mt-2">Edit informasi kost</p>
        </div>

        <!-- Image Gallery -->
        <div class="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 class="text-xl font-semibold text-birutua2 mb-4">Gambar Kost</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                @foreach (json_decode($data->gambar) as $value)
                <div class="overflow-hidden rounded-lg">
                    <img src="{{ Storage::url($value) }}" alt="{{ $data->nama }}" class="w-full h-48 object-cover hover:scale-105 transition-transform duration-300">
                </div>
                @endforeach
            </div>
        </div>

        <!-- Basic Info -->
        <div class="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                    <h2 class="text-xl font-semibold text-birutua2">Informasi Dasar</h2>
                    <p class="text-gray-600">{{ $jenis }} • {{ $daerah }}</p>
                </div>
                <div class="mt-4 md:mt-0">
                    <p class="text-lg font-medium text-birutua1">Pemilik: {{ $pemilik }}</p>
                    <p class="text-gray-600">WA: {{ $data->no_telp }}</p>
                </div>
            </div>

            <p class="text-gray-800 mb-6"><span class="font-semibold">Ukuran Kamar:</span> {{ $data->ukuran }}</p>
        </div>

        <!-- Edit Form -->
        <form action="{{ route('edit-kost-post', $data->id) }}" method="post" class="bg-white rounded-xl shadow-lg p-6">
            @csrf
            
            <!-- Basic Information -->
            <h2 class="text-xl font-semibold text-birutua2 border-b pb-2 mb-4">Edit Informasi</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                    <label class="block text-birutua1 font-medium mb-2">Alamat</label>
                    <input type="text" name="alamat" value="{{ $data->alamat }}" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-birumuda2 focus:border-birumuda2 transition">
                </div>
                
                <div>
                    <label class="block text-birutua1 font-medium mb-2">Harga</label>
                    <input type="number" name="harga" value="{{ $data->harga }}" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-birumuda2 focus:border-birumuda2 transition">
                </div>
                
                <div>
                    <label class="block text-birutua1 font-medium mb-2">Sisa Kamar</label>
                    <input type="number" name="stock" value="{{ $data->stock }}" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-birumuda2 focus:border-birumuda2 transition">
                </div>
            </div>
            
            <div class="mb-6">
                <label class="block text-birutua1 font-medium mb-2">Deskripsi</label>
                <textarea name="deskripsi" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-birumuda2 focus:border-birumuda2 transition">{{ $data->deskripsi }}</textarea>
            </div>

            <!-- Fasilitas Kamar -->
            <h2 class="text-xl font-semibold text-birutua2 border-b pb-2 mb-4">Fasilitas Kamar</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                @foreach ($f_kamar as $key => $value)
                <label class="flex items-center space-x-2 p-2 hover:bg-birumuda1 rounded-lg transition-colors duration-200">
                    <input type="checkbox" name="{{ $key }}" value="1" class="rounded text-biru focus:ring-birumuda2" @if($value) checked @endif>
                    <span class="capitalize">{{ str_replace('_', ' ', $key) }}</span>
                </label>
                @endforeach
            </div>

            <!-- Fasilitas Kost -->
            <h2 class="text-xl font-semibold text-birutua2 border-b pb-2 mb-4">Fasilitas Kost</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                @foreach ($f_kost as $key => $value)
                <label class="flex items-center space-x-2 p-2 hover:bg-birumuda1 rounded-lg transition-colors duration-200">
                    <input type="checkbox" name="{{ $key }}" value="1" class="rounded text-biru focus:ring-birumuda2" @if($value) checked @endif>
                    <span class="capitalize">{{ str_replace('_', ' ', $key) }}</span>
                </label>
                @endforeach
            </div>

            <!-- Lainnya -->
            <div class="mb-6">
                <label class="block text-birutua1 font-medium mb-2">Lainnya</label>
                <textarea name="lainnya" rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-birumuda2 focus:border-birumuda2 transition">{{ $data->lainnya }}</textarea>
            </div>

            <!-- Submit Button -->
            <div class="flex justify-end">
                <button type="submit" class="bg-biru hover:bg-birutua2 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                    Simpan Perubahan
                </button>
            </div>
        </form>
    </div>
</body>
</html>