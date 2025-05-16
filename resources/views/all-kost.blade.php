<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Sakarsa Kost</title>
</head>
<body>
    @foreach ($data as $value)
        {{ $loop->iteration }}
        <a href="{{ route("kost", $value->id) }}">{{ $value->nama }}</a>
    @endforeach
</body>
</html>