import React from "react";
import CardBiasa from "../Components/CardBiasa";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "@inertiajs/react";

export default function Kos(props) {
    const data = props.data[0];
    console.log(data);

    let jenis_kost = ["Putra", "Putri", "Campur"];
    let nama_daerah = ["Balebak"];
    let f_kamar = [
        "ac",
        "bantal",
        "kasur",
        "lemari",
        "kipas_angin",
        "meja_belajar",
        "km_dalam",
    ];
    let f_kamar_text = [
        "AC",
        "Bantal",
        "Kasur",
        "Lemari",
        "Kipas Angin",
        "Meja Belajar",
        "Kamar Mandi Dalam",
    ];
    // $icon = ['....'] berisi ikon tiap tiap fasilitas

    // array berisi kkey dari fasilitas kos
    let f_kost = [
        "kulkas",
        "p_motor",
        "p_mobil",
        "pengurus_kos",
        "dapur",
        "wifi",
        "km_luar",
        "lainnya",
    ];
    let f_kost_text = [
        "Kulkas",
        "Parkiran Motor",
        "Parkiran Mobil",
        "Pengurus Kost",
        "Dapur",
        "Wi-Fi",
        "Kamar Mandi Luar",
        "Lainnya",
    ];

    const formatRupiah = (price) => {
        return `Rp. ${Number(price).toLocaleString("id-ID")}`;
    };

    let jenis = jenis_kost[data.jenis_id - 1];
    let daerah = nama_daerah[data.daerah_id - 1];

    return (
        <div>
            <Navbar></Navbar>
            <div className="md:px-14 px-6 py-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-14">
                {/* Kolom Kiri: Info Kos */}
                <div className="lg:col-span-2 space-y-4">
                    {/* Gambar utama */}
                    <div className="bg-gray-300 h-80 rounded-md" />

                    {/* Nama Kos & Info */}
                    <div>
                        <h1 className="text-2xl font-bold">{data.nama}</h1>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                            <span className="bg-gray-100 px-2 py-1 rounded">
                                Kos {jenis}
                            </span>
                            <span>• {props.daerah}</span>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                            <span className="text-red-500 font-medium text-sm">
                                Tersisa {data.stock} kamar
                            </span>
                        </div>
                    </div>
                    {/* Deskripsi */}
                    <div className="">
                        <h1 className="text-lg font-bold mt-4 text-justify">
                            Deskripsi
                        </h1>
                        <p className="text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Magni accusamus debitis quo aperiam doloribus
                            iure cupiditate et facere eligendi cumque optio,
                            quod atque nostrum repellendus cum, qui amet.
                            {data.deskripsi}
                        </p>
                    </div>

                    {/* Fasilitas Kamar */}
                    <div>
                        <h2 className="text-lg font-bold mt-4 mb-2">
                            Fasilitas Kamar
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-2 gap-2 text-lg text-gray-700">
                            {f_kamar.map((value, index) =>
                                data[value] ? (
                                    <span key={index}>
                                        {f_kamar_text[index]} <br />
                                    </span>
                                ) : null
                            )}
                        </div>
                    </div>

                    {/* Fasilitas Kos */}
                    <div className="pt-4 border-t">
                        <h2 className="text-lg font-bold mt-2 mb-2">
                            Fasilitas Kos
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-2 gap-2 text-lg text-gray-700">
                            {f_kost.map((value, index) =>
                                data[value] ? (
                                    <span key={index}>
                                        {f_kost_text[index]} <br />
                                    </span>
                                ) : null
                            )}
                        </div>
                    </div>
                </div>

                {/* Kolom Kanan: Harga & Lokasi */}
                <div className="space-y-4">
                    {/* Galeri samping */}
                    <div className="space-y-4">
                        <div className="bg-gray-300 h-40 rounded-md" />
                        <div className="bg-gray-300 h-40 rounded-md flex items-center justify-center text-sm text-gray-700">
                            Lainnya
                        </div>
                    </div>

                    {/* Harga & Kontak */}
                    <div className="bg-white shadow-md p-4 rounded-md">
                        <p className="text-lg font-semibold text-gray-800">
                            {formatRupiah(data.harga)}{" "}
                            <span className="text-sm text-gray-500">
                                /bulan
                            </span>
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                            {props.pemilik}
                        </p>
                        <div className="mt-4 flex gap-2">
                            <a
                                href="#"
                                className="flex-1 bg-green-500 text-white text-sm text-center py-2 rounded-md"
                            >
                                WhatsApp
                            </a>
                            <a
                                href="#"
                                className="flex-1 bg-gray-800 text-white text-sm text-center py-2 rounded-md"
                            >
                                Telepon pemilik
                            </a>
                        </div>
                    </div>

                    {/* Lokasi */}
                    <div>
                        <h2 className="text-lg font-semibold mb-2">Lokasi</h2>
                        <div className="bg-gray-300 h-40 rounded-md flex items-center justify-center">
                            <span className="text-4xl">📍</span>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="my-4 max-w-7xl mx-auto px-10 " />

            <div class="px-4 md:px-10 flex flex-col gap- max-w-7xl mx-auto mb-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <p className="font-bold text-2xl md:text-4xl">
                        Pilihan kos di{" "}
                        <span class="text-blue-500 font-bold">Daerah ^</span>
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-sm md:text-base">
                        <Link
                            href="/semua"
                            className="text-blue-600 hover:underline"
                        >
                            Lihat semua
                        </Link>
                        <p>kiri</p>
                        <p>kanan</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4 md:mt-0">
                    <CardBiasa></CardBiasa>
                    <CardBiasa></CardBiasa>
                    <CardBiasa></CardBiasa>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
}
