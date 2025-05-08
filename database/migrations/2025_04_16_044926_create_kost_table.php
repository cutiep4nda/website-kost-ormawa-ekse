<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('kost', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('daerah_id');
            $table->unsignedBigInteger('jenis_id');
            $table->unsignedBigInteger('pemilik_id');
            $table->foreign('daerah_id')->references('id')->on('daerah');
            $table->foreign('jenis_id')->references('id')->on('jenis');
            $table->foreign('pemilik_id')->references('id')->on('pemilik');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kost');
    }
};
