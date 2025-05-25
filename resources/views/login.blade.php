<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login | Admin Sakarsa Kost</title>
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
<body class="bg-birumuda1 min-h-screen flex items-center justify-center p-4">
    <div class="w-full max-w-md">
        <!-- Login Card -->
        <div class="bg-white rounded-xl shadow-2xl overflow-hidden">
            <!-- Header -->
            <div class="bg-birutua2 p-6 text-center">
                <h1 class="text-2xl font-bold text-white">Admin Sakarsa Kost</h1>
                <p class="text-birumuda1 mt-1">Silakan masuk ke akun Anda</p>
            </div>
            
            <!-- Form -->
            <form action="#" method="post" class="p-6 space-y-6">
                @csrf
                
                <!-- Username Field -->
                <div class="space-y-2">
                    <label for="username" class="block text-sm font-medium text-birutua1">Username</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-birumuda2 focus:border-birumuda2 transition"
                        placeholder="Masukkan username"
                    >
                </div>
                
                <!-- Password Field -->
                <div class="space-y-2">
                    <label for="password" class="block text-sm font-medium text-birutua1">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-birumuda2 focus:border-birumuda2 transition"
                        placeholder="Masukkan password"
                    >
                </div>
                
                <!-- Submit Button -->
                <button 
                    type="submit" 
                    name="submit" 
                    class="w-full bg-biru hover:bg-birutua2 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
                >
                    Login
                </button>
                
                <!-- Error Messages -->
                @if ($errors->any())
                <div class="mt-4 p-3 text-sm text-red-600 bg-red-50 rounded-lg">
                    <ul class="space-y-1">
                        @foreach ($errors->all() as $error)
                            <li class="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mt-0.5 mr-1.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                                </svg>
                                <span>{{ $error }}</span>
                            </li>
                        @endforeach
                    </ul>
                </div>
                @endif
            </form>
            
            <!-- Footer Note -->
            <div class="px-6 py-4 bg-gray-50 text-center text-sm text-gray-600">
                © 2025 Biro Riset Pengembangan Ormawa Eksekutif PKU.
            </div>
        </div>
    </div>
</body>
</html>