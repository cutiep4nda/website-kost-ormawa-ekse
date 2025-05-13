<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Jenis extends Model
{
    protected $table = "jenis";
    protected $fillable = ["jenis"];

    public function kost(): HasMany
    {
        return $this->hasMany(Kost::class, 'jenis_id', 'id');
    }
}
