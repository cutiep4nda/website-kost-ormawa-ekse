<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Kost extends Model
{
    protected $primarykey = "id";
    protected $table = "kost";
    protected $fillable = ["daerah_id", "jenis_id", "pemilik_id", "ukuran", "bantal", "kasur", "lemari", "kipas_angin", "km_dalam", "kulkas", "p_motor", "pengurus_kos", "dapur", "wifi", "lainnya", "nama", "harga", "gambar", "deskripsi", "meja_belajar", "km_luar", "stock", "alamat", "tv", "cctv", "lobby", "r_jemur", "mesin_cuci", "shower", "water_heater", "no_telp"];
    public function daerah(): BelongsTo
    {
        return $this->belongsTo(Daerah::class, 'daerah_id');
    }
    public function jenis(): BelongsTo
    {
        return $this->belongsTo(Jenis::class, 'jenis_id');
    }
    public function pemilik(): BelongsTo
    {
        return $this->belongsTo(Pemilik::class, 'pemilik_id');
    }
}
