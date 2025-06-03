<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Dashboard Admin | Sakarsa Kost</title>
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
<body class="bg-white min-h-screen">
    <div class="container mx-auto px-4 py-8">
        <!-- Header Section -->
        <div class="flex justify-between items-center mb-8">
            <div>
                <h1 class="text-3xl font-bold text-birutua1">Dashboard Admin</h1>
                <p class="text-gray-500 text-sm mt-1">Kelola data kost dan pengguna</p>
            </div>
            
            <div class="flex items-center space-x-4">
                <!-- Logout Button -->
                <form action="{{ route('logout') }}" method="POST" class="m-0">
                    @csrf
                    <button type="submit" class="flex items-center text-gray-600 hover:text-red-500 transition duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Logout
                    </button>
                </form>
        
                <!-- Add Kost Button -->
                <a href="/add-kost" class="bg-biru hover:bg-birutua2 text-white px-4 py-2 rounded-lg transition duration-300 flex items-center shadow-md hover:shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                    </svg>
                    Tambah Kost
                </a>
            </div>
        </div>

        <!-- Kost Table -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
            <div class="overflow-x-auto">
                <table class="w-full">
                    <thead class="bg-birutua2 text-white">
                        <tr>
                            <th class="px-6 py-3 text-left text-sm font-medium">ID</th>
                            <th class="px-6 py-3 text-left text-sm font-medium">Nama Kost</th>
                            <th class="px-6 py-3 text-left text-sm font-medium">Pemilik</th>
                            <th class="px-6 py-3 text-right text-sm font-medium">Aksi</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                        @foreach ($data as $a)
                        <tr class="hover:bg-birumuda1/50 transition-colors duration-150">
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-birutua1 font-medium">{{ $a->id }}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{{ $a->nama }}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{{ $a->pemilik->nama_pemilik }}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                                <a href="{{ route('edit-kost', $a->id) }}" class="text-biru hover:text-birutua2 transition-colors duration-200 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                    </svg>
                                    Edit
                                </a>
                                <form action="{{ route('delete-kost', $a->id) }}" method="POST" class="inline">
                                    @csrf
                                    <button type="submit" class="text-red-600 hover:text-red-800 transition-colors duration-200 flex items-center" onclick="return confirm('Apakah Anda yakin ingin menghapus?')">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                        </svg>
                                        Hapus
                                    </button>
                                </form>
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- Confirmation Dialog Script -->
    <script>
        function confirmDelete() {
            return confirm('Apakah Anda yakin ingin menghapus data ini?');
        }
    </script>
</body>
</html>