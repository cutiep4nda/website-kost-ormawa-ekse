<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Tambah Kost | Sakara Kost</title>
    <style>
        table, tr, td, th{
            border: 1px solid black;
            border-collapse: collapse;
        }
        td{
            padding: 4px;
        }
    </style>
</head>
<body>
    <h2 style="text-align: center">Tambah Kost</h2>
    <form action="#" method="post" enctype="multipart/form-data">
        @csrf
        <table style="margin-left: auto; margin-right: auto;">
            <tr>
                <td>Nama Kost</td>
                <td>:</td>
                <td>
                    <input type="text" name="nama">
                </td>
            </tr>
            <tr>
                <td>Harga</td>
                <td>:</td>
                <td>
                    <input type="number" name="harga">
                </td>
            </tr>
            <tr>
                <td>Sisa</td>
                <td>:</td>
                <td>
                    <input type="number" name="stock">
                </td>
            </tr>
            <tr>
                <td>Deskripsi</td>
                <td>:</td>
                <td>
                    <textarea name="deskripsi"></textarea>
                </td>
            </tr>
            <tr>
                <td>Jenis Kost</td>
                <td>:</td>
                <td>
                    <select name="jenis_id">
                        @foreach ($jenis as $a)
                            <option value={{ $a->id }}>{{ $a->jenis }}</option>
                        @endforeach
                    </select>
                </td>
            </tr>
            <tr>
                <td>Daerah</td>
                <td>:</td>
                <td>
                    <select name="daerah_id">
                        @foreach ($daerah as $a)
                            <option value={{ $a->id }}>{{ $a->daerah }}</option>
                        @endforeach
                    </select>
                </td>
            </tr>
            <tr>
                <td>Pemilik</td>
                <td>:</td>
                <td>
                    <select name="pemilik_id">
                        <option value=0 selected>Tidak Ditemukan</option>
                        @foreach ($pemilik as $a)
                            <option value={{ $a->id }}>{{ $a->nama_pemilik }}</option>
                        @endforeach
                    </select><br>
                    <input type="text" name="pemilik_notfound" value="">
                </td>
            </tr>
            <tr>
                <td>wa_text</td>
                <td>:</td>
                <td>
                    <input type="text" name="wa_text">
                </td>
            </tr>
            <tr>
                <td>Tambah Gambar</td>
                <td>:</td>
                <td>
                    <input type="file" name="gambar[]" multiple accept="image/jpeg, image/png, image/jpg">
                </td>
            </tr>
            <tr>
                <td>Fasilitas Kamar</td>
                <td>:</td>
                <td>
                    <table>
                        <tr>
                            <td>Ukuran</td>
                            <td>:</td>
                            <td>
                                <input type="text" name="ukuran">
                            </td>
                        </tr>
                        <tr>
                            <td>AC</td>
                            <td>:</td>
                            <td>
                                <input type="checkbox" name="ac" value=1>
                            </td>
                        </tr>
                        <tr>
                            <td>Bantal</td>
                            <td>:</td>
                            <td>
                                <input type="checkbox" name="bantal" value=1>
                            </td>
                        </tr>
                        <tr>
                            <td>Kasur</td>
                            <td>:</td>
                            <td>
                                <input type="checkbox" name="kasur" value=1>
                            </td>
                        </tr>
                        <tr>
                            <td>Lemari</td>
                            <td>:</td>
                            <td>
                                <input type="checkbox" name="lemari" value=1>
                            </td>
                        </tr>
                        <tr>
                            <td>Kipas Angin</td>
                            <td>:</td>
                            <td>
                                <input type="checkbox" name="kipas_angin" value=1>
                            </td>
                        </tr>
                        <tr>
                            <td>Kamar Mandi Dalam</td>
                            <td>:</td>
                            <td>
                                <input type="checkbox" name="km_dalam" value=1>
                            </td>
                        </tr>
                        <tr>
                            <td>Meja Belajar</td>
                            <td>:</td>
                            <td>
                                <input type="checkbox" name="meja_belajar" value=1>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td>Fasilitas Kost</td>
                <td>:</td>
                <td>
                    <table>
                        <tr>
                            <td>Kamar Mandi Luar</td>
                            <td>:</td>
                            <td>
                                <input type="checkbox" name="km_luar" value=1>
                            </td>
                        </tr>
                        <tr>
                            <td>Kulkas</td>
                            <td>:</td>
                            <td>
                                <input type="checkbox" name="kulkas" value=1>
                            </td>
                        </tr>
                        <tr>
                            <td>Parkiran Motor</td>
                            <td>:</td>
                            <td>
                                <input type="checkbox" name="p_motor" value=1>
                            </td>
                        </tr>
                        <tr>
                            <td>Parkiran Mobil</td>
                            <td>:</td>
                            <td>
                                <input type="checkbox" name="p_mobil" value=1>
                            </td>
                        </tr>
                        <tr>
                            <td>Pengurus Kost</td>
                            <td>:</td>
                            <td>
                                <input type="checkbox" name="pengurus_kos" value=1>
                            </td>
                        </tr>
                        <tr>
                            <td>Dapur</td>
                            <td>:</td>
                            <td>
                                <input type="checkbox" name="dapur" value=1>
                            </td>
                        </tr>
                        <tr>
                            <td>WiFi</td>
                            <td>:</td>
                            <td>
                                <input type="checkbox" name="wifi" value=1>
                            </td>
                        </tr>
                        <tr>
                            <td>Lainnya</td>
                            <td>:</td>
                            <td>
                                <textarea name="lainnya"></textarea>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td>
                    <input type="submit" value="Tambah!">
                </td>
            </tr>
        </table>
    </form>
</body>
</html>