<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login | Admin Sakarsa Kost</title>
</head>
<body>
    <h2 style="text-align: center">Login Admin Sakarsa Kost</h2>
    <form action="#" method="post">
        @csrf
        <table>
            <tr>
                <td>Username</td>
                <td>:</td>
                <td>
                    <input type="text" name="username">
                </td>
            </tr>
            <tr>
                <td>password</td>
                <td>:</td>
                <td>
                    <input type="password" name="password">
                </td>
            </tr>
            <tr>
                <td></td><td></td>
                <td><input type="submit" name="submit" value="Login"></td>
            </tr>
        </table>
    </form>
    @if ($errors->any())
            {{-- <div class="mt-4 p-3 text-sm text-red-700 bg-red-100 rounded-md"> --}}
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            {{-- </div> --}}
        @endif
</body>
</html>