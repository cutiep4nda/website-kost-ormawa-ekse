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
            
            // fasilitas kamar
            $table->string("ukuran");
            $table->boolean('ac')->default(0);
            $table->boolean("bantal")->default(0);
            $table->boolean("kasur")->default(0);
            $table->boolean("lemari")->default(0);
            $table->boolean("kipas_angin")->default(0);
            $table->boolean("meja_belajar")->default(0);
            $table->boolean("km_dalam")->default(0);
            $table->boolean("shower")->default(0);
            $table->boolean("water_heater")->default(0);

            // fasilitas kos
            $table->boolean("kulkas")->default(0);
            $table->boolean("p_motor")->default(0);
            $table->boolean("p_mobil")->default(0);
            $table->boolean("pengurus_kos")->default(0);
            $table->boolean("dapur")->default(0);
            $table->boolean("wifi")->default(0);
            $table->boolean("km_luar")->default(0);
            $table->boolean("tv")->default(0);
            $table->boolean("cctv")->default(0);
            $table->boolean("lobby")->default(0);
            $table->boolean("r_jemur")->default(0);
            $table->boolean("mesin_cuci")->default(0);

            $table->longText("lainnya")->default("");

            // identitas
            $table->string("nama");
            $table->bigInteger("harga");
            $table->json("gambar")->nullable();
            $table->longText("deskripsi");
            $table->integer("stock")->default(0);
            $table->longText("alamat")->default("");

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
