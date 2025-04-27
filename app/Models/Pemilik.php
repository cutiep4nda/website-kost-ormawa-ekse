<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Pemilik extends Model
{
    public function kost(): HasMany
    {
        return $this->hasMany(Kost::class);
    }
}
