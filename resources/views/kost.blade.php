<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ $data->nama }} | Sakarsa Kost</title>
</head>
<body>
    @php
        // array berisi key dari fasilitas kamar
        $f_kamar = ['ac', 'bantal', 'kasur', 'lemari', 'kipas_angin', 'meja_belajar', 'km_dalam'];
        $f_kamar_text = ['AC', 'Bantal', 'Kasur', 'Lemari', 'Kipas Angin', 'Meja Belajar', 'Kamar Mandi Dalam'];
        // $icon = ['....'] berisi ikon tiap tiap fasilitas

        // array berisi kkey dari fasilitas kos
        $f_kost = ['kulkas', 'p_motor', 'p_mobil', 'pengurus_kos', 'dapur', 'wifi', 'km_luar', 'lainnya'];
        $f_kost_text = ['Kulkas', 'Parkiran Motor', 'Parkiran Mobil', 'Pengurus Kost', 'Dapur', 'Wi-Fi', 'Kamar Mandi Luar', 'Lainnya'];
    @endphp
    @foreach (json_decode($data->gambar) as $value)
        <img src="{{ Storage::url($value) }}" alt="{{ $data->nama }}">
    @endforeach
    <h2>{{ $data->nama }}</h2>
    Kost {{ $data->jenis->jenis }} . {{ $data->daerah->daerah }}
    <br>
    Tersisa {{ $data->stock }} kamar
    <h3>Deskripsi</h3>
    <p>{{ $data->deskripsi }}</p>
    <h3>Fasilitas Kamar</h3>
    @foreach ($f_kamar as $value)
        @if ($data[$value])
            {{ $f_kamar_text[$loop->index] }} <br>
        @endif
    @endforeach

    <h3>Fasilitas Kost</h3>
    @foreach ($f_kost as $value)
        @if ($data[$value])
            {{ $f_kost_text[$loop->index] }} <br>
        @endif
    @endforeach
</body>
</html>