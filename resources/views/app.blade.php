<!DOCTYPE html>
<html>
<head>
    @vite('resources/js/app.jsx')
</head>
    @if (file_exists(public_path('build/manifest.json')) || file_exists(public_path('hot')))
                @vite(['resources/css/app.css', 'resources/js/app.js'])
            @endif
<body>
    @inertia
</body>
</html>