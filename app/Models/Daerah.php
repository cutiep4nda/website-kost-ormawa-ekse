<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class daerah extends Model
{
    protected $table = "daerah";
    protected $fillable = ["daerah"];
    public function kost(): HasMany
    {
        return $this->hasMany(Kost::class, 'daerah_id', 'id');
    }
}
