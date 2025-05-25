<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Sakarsa Kost</title>
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
<body class="bg-birumuda1 min-h-screen">
    <div class="container mx-auto px-4 py-12">
        <!-- Header Section -->
        <header class="mb-12 text-center">
            <h1 class="text-4xl font-bold text-birutua1 mb-2">Sakarsa Kost</h1>
            <p class="text-xl text-biru">Temukan tempat tinggal nyaman untuk Anda</p>
        </header>

        <!-- Kost Listing Section -->
        <div class="max-w-4xl mx-auto">
            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
                <!-- Table Header -->
                <div class="grid grid-cols-12 bg-birutua2 text-white p-4 font-semibold">
                    <div class="col-span-1">No</div>
                    <div class="col-span-11">Nama Kost</div>
                </div>
                
                <!-- Kost Items -->
                @foreach ($data as $value)
                <div class="grid grid-cols-12 p-4 border-b border-gray-200 hover:bg-birumuda1 transition-colors duration-200">
                    <div class="col-span-1 flex items-center text-birutua1 font-medium">
                        {{ $loop->iteration }}
                    </div>
                    <div class="col-span-11">
                        <a href="{{ route('kost', $value->id) }}" class="block text-lg text-biru hover:text-birutua2 font-medium transition-colors duration-200">
                            {{ $value->nama }}
                            <span class="ml-2 text-birumuda2 group-hover:text-white transition-colors duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
                @endforeach
            </div>
        </div>

        <!-- Footer -->
        <footer class="mt-12 text-center text-birutua1 text-sm">
            <p>© 2023 Sakarsa Kost. All rights reserved.</p>
        </footer>
    </div>
</body>
</html>