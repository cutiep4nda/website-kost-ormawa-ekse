import React from "react";
import {
    FaWifi,
    FaParking,
    FaTv,
    FaUtensils,
    FaSnowflake,
    FaKey,
    FaBed,
    FaShower,
    FaDesktop,
} from "react-icons/fa";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

export default function Premium2() {
    return (
        <div className="font-sans bg-[#f8fafc] text-[#102542]">
            {/* Hero Section */}
            <div className="relative h-screen w-full overflow-hidden">
                <Navbar></Navbar>
                <div className="">
                    <img
                        src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                        alt="Kost Modern"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#102542]/60 flex items-center justify-center">
                        <div className="text-center px-4">
                            <h1 className="text-5xl md:text-7xl font-bold text-[#b8f2ff] mb-6 animate-fade-in">
                                Kost Bahari Residence
                            </h1>
                            <p className="text-xl text-white max-w-2xl mx-auto">
                                Tempat tinggal nyaman dengan fasilitas lengkap
                                di jantung kota
                            </p>
                            <button className="mt-8 bg-[#16cdd8] hover:bg-[#248da8] text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
                                Lihat Kamar Tersedia
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Kost Info Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <h2 className="text-4xl font-bold mb-6 text-[#003459]">
                            Tentang Kost Kami
                        </h2>
                        <div className="space-y-4 text-lg">
                            <p>
                                Kost Bahari Residence menawarkan pengalaman
                                tinggal yang nyaman dan modern untuk mahasiswa
                                dan profesional muda. Terletak di lokasi
                                strategis dengan akses mudah ke kampus dan pusat
                                kota.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mt-6">
                                <div className="bg-[#b8f2ff] p-4 rounded-lg">
                                    <p className="font-semibold text-[#248da8]">
                                        Tipe
                                    </p>
                                    <p>Putra & Putri (Terpisah)</p>
                                </div>
                                <div className="bg-[#b8f2ff] p-4 rounded-lg">
                                    <p className="font-semibold text-[#248da8]">
                                        Sisa Kamar
                                    </p>
                                    <p>3 Kamar Tersedia</p>
                                </div>
                                <div className="bg-[#b8f2ff] p-4 rounded-lg">
                                    <p className="font-semibold text-[#248da8]">
                                        Harga
                                    </p>
                                    <p>Rp 1.800.000 - 2.500.000/bulan</p>
                                </div>
                                <div className="bg-[#b8f2ff] p-4 rounded-lg">
                                    <p className="font-semibold text-[#248da8]">
                                        Lokasi
                                    </p>
                                    <p>Jalan Bahari No. 45, Kota</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                            alt="Kamar Kost"
                            className="rounded-lg h-64 w-full object-cover shadow-lg"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                            alt="Kamar Mandi Kost"
                            className="rounded-lg h-64 w-full object-cover shadow-lg"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                            alt="Dapur Kost"
                            className="rounded-lg h-64 w-full object-cover shadow-lg"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                            alt="Area Bersama Kost"
                            className="rounded-lg h-64 w-full object-cover shadow-lg"
                        />
                    </div>
                </div>

                {/* Facilities Section */}
                <div className="mb-20">
                    <h2 className="text-4xl font-bold mb-12 text-center text-[#003459]">
                        Fasilitas Unggulan
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                            <div className="text-[#248da8] text-4xl mb-4">
                                <FaBed />
                            </div>
                            <h3 className="text-xl font-bold mb-3">
                                Kamar Tidur
                            </h3>
                            <p className="text-gray-600">
                                Kamar luas dengan kasur springbed, lemari
                                pakaian, dan meja rias. Pencahayaan alami yang
                                baik.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                            <div className="text-[#248da8] text-4xl mb-4">
                                <FaShower />
                            </div>
                            <h3 className="text-xl font-bold mb-3">
                                Kamar Mandi
                            </h3>
                            <p className="text-gray-600">
                                Kamar mandi dalam dengan shower air hangat,
                                kloset duduk, dan perlengkapan mandi standar.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                            <div className="text-[#248da8] text-4xl mb-4">
                                <FaDesktop />
                            </div>
                            <h3 className="text-xl font-bold mb-3">
                                Meja Belajar
                            </h3>
                            <p className="text-gray-600">
                                Meja belajar ergonomis dengan kursi nyaman dan
                                pencahayaan khusus untuk aktivitas
                                belajar/bekerja.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                            <div className="text-[#248da8] text-4xl mb-4">
                                <FaWifi />
                            </div>
                            <h3 className="text-xl font-bold mb-3">
                                Internet Cepat
                            </h3>
                            <p className="text-gray-600">
                                WiFi high-speed unlimited 24 jam dengan
                                kecepatan hingga 100 Mbps untuk semua kebutuhan
                                digital.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                            <div className="text-[#248da8] text-4xl mb-4">
                                <FaSnowflake />
                            </div>
                            <h3 className="text-xl font-bold mb-3">AC</h3>
                            <p className="text-gray-600">
                                AC inverter hemat listrik dengan pengaturan suhu
                                yang dapat disesuaikan untuk kenyamanan
                                maksimal.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                            <div className="text-[#248da8] text-4xl mb-4">
                                <FaUtensils />
                            </div>
                            <h3 className="text-xl font-bold mb-3">
                                Dapur Bersama
                            </h3>
                            <p className="text-gray-600">
                                Dapur lengkap dengan kompor, microwave, kulkas,
                                dan peralatan masak untuk kebutuhan memasak
                                harian.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Pricing Section */}
                <div className="bg-[#102542] rounded-2xl p-12 text-white">
                    <h2 className="text-4xl font-bold mb-2">Pilihan Kamar</h2>
                    <p className="text-[#b8f2ff] mb-10">
                        Pilih kamar sesuai kebutuhan dan budget Anda
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-[#248da8]">
                            <h3 className="text-2xl font-bold mb-4">
                                Tipe Standard
                            </h3>
                            <p className="text-[#b8f2ff] mb-6">
                                3x3 m, Kamar mandi luar
                            </p>
                            <p className="text-4xl font-bold mb-6">
                                Rp 1.800.000
                                <span className="text-lg">/bulan</span>
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center">
                                    <span className="text-[#16cdd8] mr-2">
                                        ✓
                                    </span>{" "}
                                    Kasur single
                                </li>
                                <li className="flex items-center">
                                    <span className="text-[#16cdd8] mr-2">
                                        ✓
                                    </span>{" "}
                                    Lemari pakaian
                                </li>
                                <li className="flex items-center">
                                    <span className="text-[#16cdd8] mr-2">
                                        ✓
                                    </span>{" "}
                                    Meja belajar
                                </li>
                                <li className="flex items-center">
                                    <span className="text-[#16cdd8] mr-2">
                                        ✓
                                    </span>{" "}
                                    WiFi
                                </li>
                            </ul>
                            <button className="w-full bg-[#16cdd8] hover:bg-[#248da8] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                                Pilih Kamar Ini
                            </button>
                        </div>

                        <div className="bg-[#248da8] p-8 rounded-xl relative overflow-hidden">
                            <div className="absolute top-4 right-4 bg-[#b8f2ff] text-[#102542] text-xs font-bold px-3 py-1 rounded-full">
                                POPULER
                            </div>
                            <h3 className="text-2xl font-bold mb-4">
                                Tipe Deluxe
                            </h3>
                            <p className="text-[#b8f2ff] mb-6">
                                4x3 m, Kamar mandi dalam
                            </p>
                            <p className="text-4xl font-bold mb-6">
                                Rp 2.200.000
                                <span className="text-lg">/bulan</span>
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center">
                                    <span className="text-white mr-2">✓</span>{" "}
                                    Kasur double
                                </li>
                                <li className="flex items-center">
                                    <span className="text-white mr-2">✓</span>{" "}
                                    Lemari pakaian besar
                                </li>
                                <li className="flex items-center">
                                    <span className="text-white mr-2">✓</span>{" "}
                                    Meja belajar + kursi
                                </li>
                                <li className="flex items-center">
                                    <span className="text-white mr-2">✓</span>{" "}
                                    AC
                                </li>
                                <li className="flex items-center">
                                    <span className="text-white mr-2">✓</span>{" "}
                                    WiFi high speed
                                </li>
                            </ul>
                            <button className="w-full bg-white hover:bg-[#b8f2ff] text-[#102542] font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                                Pilih Kamar Ini
                            </button>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-[#248da8]">
                            <h3 className="text-2xl font-bold mb-4">
                                Tipe Executive
                            </h3>
                            <p className="text-[#b8f2ff] mb-6">
                                4x4 m, Kamar mandi dalam + Balkon
                            </p>
                            <p className="text-4xl font-bold mb-6">
                                Rp 2.500.000
                                <span className="text-lg">/bulan</span>
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center">
                                    <span className="text-[#16cdd8] mr-2">
                                        ✓
                                    </span>{" "}
                                    Kasur double premium
                                </li>
                                <li className="flex items-center">
                                    <span className="text-[#16cdd8] mr-2">
                                        ✓
                                    </span>{" "}
                                    Lemari pakaian besar + cermin
                                </li>
                                <li className="flex items-center">
                                    <span className="text-[#16cdd8] mr-2">
                                        ✓
                                    </span>{" "}
                                    Meja kerja ergonomis
                                </li>
                                <li className="flex items-center">
                                    <span className="text-[#16cdd8] mr-2">
                                        ✓
                                    </span>{" "}
                                    AC inverter
                                </li>
                                <li className="flex items-center">
                                    <span className="text-[#16cdd8] mr-2">
                                        ✓
                                    </span>{" "}
                                    WiFi high speed
                                </li>
                                <li className="flex items-center">
                                    <span className="text-[#16cdd8] mr-2">
                                        ✓
                                    </span>{" "}
                                    Balkon pribadi
                                </li>
                            </ul>
                            <button className="w-full bg-[#16cdd8] hover:bg-[#248da8] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                                Pilih Kamar Ini
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer CTA */}
            <div className="bg-[#003459] text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-6">
                        Tertarik untuk tinggal di Kost Bahari Residence?
                    </h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto text-[#b8f2ff]">
                        Hubungi kami sekarang untuk informasi lebih lanjut atau
                        jadwalkan kunjungan
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-[#16cdd8] hover:bg-[#248da8] text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300">
                            Hubungi via WhatsApp
                        </button>
                        <button className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300">
                            Lihat Lokasi
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
