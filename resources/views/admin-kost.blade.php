<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
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
    <h2 style="text-align: center">Dashboard Admin Sakarsa Kost</h2>
    <a href="/add-kost">Tambah Kost</a>
    <table>
        <tr>
            <th>No id</th>
            <th>Nama Kost</th>
            <th>Pemilik</th>
            <th>Aksi</th>
        </tr>
        @foreach ($data as $a)
            <tr>
                <td>{{ $a->id }}</td>
                <td>{{ $a->nama }}</td>
                <td>
                    {{ $a->pemilik->nama_pemilik }}
                </td>
                <td>
                    <a href="{{ route('edit-kost', $a->id) }}">Edit</a>
                    <form action="{{ route('delete-kost', $a->id) }}" method="POST">
                        @csrf
                        <input type="submit" value="delete">
                    </form>
                </td>
            </tr>
        @endforeach
        
    </table>
</body>
</html>