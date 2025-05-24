<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ $data->nama }} | Sakarsa Kost</title>
</head>
<body>
    <h2>{{ $data->nama }}</h2>
    <table>
        <tr>
            @foreach (json_decode($data->gambar) as $value)
                <td>
                    <img src="{{ Storage::url($value) }}" alt="{{ $data->nama }}" width="200px">
                </td>
            @endforeach
        </tr>
    </table>

    <p>{{ $pemilik }}</p>
    {{ $jenis }} . {{ $daerah }}</br>
    Ukuran : {{ $data->ukuran }}</br>

    <form action="{{ route('edit-kost-post', $data->id) }}" method="post">
        @csrf
        alamat : <input type="text" name="alamat" value="{{ $data->alamat }}">
        harga : <input type="number" name="harga" value="{{ $data->harga }}"></br>
        sisa : <input type="number" name="stock" value="{{ $data->stock }}"></br>
        deskripsi : <textarea name="deskripsi">{{ $data->deskripsi }}</textarea></br>
        wa_text : {{ $data->no_telp }}</br>
        fasilitas kamar : </br>
        <table style="border: 1px solid black">
            @foreach ($f_kamar as $key => $value)
                <tr style="border: 1px solid black">
                    <td style="border: 1px solid black">
                        {{ $key }} : <input type="checkbox" name="{{ $key }}" value="1" @if ($value)
                            checked
                        @endif>
                    </td>
                </tr>
            @endforeach
        </table>
        fasilitas kost : 
        <table style="border: 1px solid black">
            @foreach ($f_kost as $key => $value)
                <tr style="border: 1px solid black">
                    <td style="border: 1px solid black">
                        {{ $key }} : <input type="checkbox" name="{{ $key }}" value="1" @if ($value)
                            checked
                        @endif>
                    </td>
                </tr>
            @endforeach
        </table>
        Lainnya : <textarea name="lainnya">{{ $data->lainnya }}</textarea></br>
        <input type="submit" value="Submit">
        </br>
    </form>
</body>
</html>