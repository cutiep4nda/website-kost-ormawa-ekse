<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Kost extends Model
{
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
