import React, { useState, useEffect } from "react";
import {
    FaMapMarkerAlt,
    FaBed,
    FaBox,
    FaBath,
    FaToilet,
    FaShower,
    FaCoffee,
    FaParking,
    FaFan,
    FaWifi,
    FaSnowflake,
    FaChevronDown,
    FaExternalLinkAlt,
    FaLocationArrow,
} from "react-icons/fa";
import { MdTv } from "react-icons/md";
import { MdOutlineTableRestaurant } from "react-icons/md";
import { LuCctv } from "react-icons/lu";
import { FaKitchenSet } from "react-icons/fa6";
import { GiMirrorMirror } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { RiFridgeFill } from "react-icons/ri";

import { IoIosSearch } from "react-icons/io";
import { MdDryCleaning } from "react-icons/md";

import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

// Data untuk kos-kosan
const kostData = [
    {
        id: 1,
        name: "SKS Rukost",
        // location: "Jl. Merdeka No. 123, Bandung",
        wa: "6282221019606",
        daerah: "Cikarawang",
        price: 1800000,
        type: "Campur",
        remaining: 100,
        image_landing: "images/premium/sks/sks2.jpg",
        alamat: "sks living, Jl. Serelek, Cikarawang, Kec. Dramaga, Kabupaten Bogor, Jawa Barat 16680",
        images: [
            "images/premium/sks/sks1.jpg",
            "images/premium/sks/sks2.jpg",
            "images/premium/sks/sks3.jpg",
            "images/premium/sks/sks4.jpg",
        ],
        desk_singkat:
            "Nikmati kenyamanan kost eksklusif dengan fasilitas lengkap dan akses mudah ke kampus—segera daftar dan rasakan pengalaman seperti di rumah sendiri",
        deskripsi:
            "Kost eksklusif dengan suasana aesthetic yang nyaman seperti rumah kedua ini hanya berjarak 5 menit dari kampus, lengkap dengan sarapan gratis setiap hari pukul 06.00-08.00 WIB dan shuttle bus gratis ke IPB University selama 3 bulan pertama. Selain itu, penghuni juga mendapatkan layanan pembersihan kamar dua kali sebulan, pasokan air galon dan gas tanpa biaya, serta keamanan 24 jam. Tak hanya itu, penghuni kost juga berkesempatan menikmati konser Juicy Luicy secara gratis di SKS, menjadikan tempat ini pilihan sempurna untuk kenyamanan dan kemudahan selama kuliah. Biaya sudah termasuk listrik dan air, Rp.18.000.000/tahun",
        facilities: [
            { name: "Kasur", icon: FaBed },
            { name: "Lemari", icon: FaBox }, // FaBox mewakili storage/lemari
            { name: "Meja Belajar", icon: MdOutlineTableRestaurant },
            { name: "AC", icon: FaSnowflake },
            { name: "WiFi", icon: FaWifi },
            { name: "Kamar Mandi Dalam", icon: FaBath },
            { name: "Shower", icon: FaShower },
            { name: "Water Heater", icon: FaShower },
            // { name: "TV", icon: MdTv },
            { name: "Kloset", icon: FaToilet },
            { name: "CCTV", icon: LuCctv },
            { name: "Dapur", icon: FaKitchenSet },
            { name: "Kulkas", icon: RiFridgeFill },
            { name: "Ruang Jemur", icon: MdDryCleaning },
            { name: "Parkir", icon: FaParking },
        ],
    },
    {
        id: 1,
        name: "SKS Quarter",
        // location: "Jl. Merdeka No. 123, Bandung",
        wa: "6282221019606",
        daerah: "Cikarawang",
        price: 1700000,
        type: "Campur",
        remaining: 100,
        image_landing: "images/premium/sks/sks2.jpg",
        alamat: "sks living, Jl. Serelek, Cikarawang, Kec. Dramaga, Kabupaten Bogor, Jawa Barat 16680",
        images: [
            "images/premium/sks/sks1.jpg",
            "images/premium/sks/sks2.jpg",
            "images/premium/sks/sks3.jpg",
            "images/premium/sks/sks4.jpg",
        ],
        desk_singkat:
            "Nikmati kenyamanan kost eksklusif dengan fasilitas lengkap dan akses mudah ke kampus—segera daftar dan rasakan pengalaman seperti di rumah sendiri",
        deskripsi:
            "Kost eksklusif dengan suasana aesthetic yang nyaman seperti rumah kedua ini hanya berjarak 5 menit dari kampus, lengkap dengan sarapan gratis setiap hari pukul 06.00-08.00 WIB dan shuttle bus gratis ke IPB University selama 3 bulan pertama. Selain itu, penghuni juga mendapatkan layanan pembersihan kamar dua kali sebulan, pasokan air galon dan gas tanpa biaya, serta keamanan 24 jam. Tak hanya itu, penghuni kost juga berkesempatan menikmati konser Juicy Luicy secara gratis di SKS, menjadikan tempat ini pilihan sempurna untuk kenyamanan dan kemudahan selama kuliah. Biaya sudah termasuk listrik dan air, Rp.18.000.000/tahun",
        facilities: [
            { name: "Kasur", icon: FaBed },
            { name: "Lemari", icon: FaBox }, // FaBox mewakili storage/lemari
            { name: "Meja Belajar", icon: MdOutlineTableRestaurant },
            { name: "AC", icon: FaSnowflake },
            { name: "WiFi", icon: FaWifi },
            { name: "Kamar Mandi Dalam", icon: FaBath },
            { name: "Shower", icon: FaShower },
            { name: "Water Heater", icon: FaShower },
            // { name: "TV", icon: MdTv },
            { name: "Kloset", icon: FaToilet },
            { name: "CCTV", icon: LuCctv },
            { name: "Dapur", icon: FaKitchenSet },
            { name: "Kulkas", icon: RiFridgeFill },
            { name: "Ruang Jemur", icon: MdDryCleaning },
            { name: "Parkir", icon: FaParking },
        ],
    },
];
// Landing Page Component
const KostLandingPage = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const kost1 = kostData[0];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="relative md:h-screen w-full ">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={kost1.image_landing}
                    alt="Kos Hero"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#102542]/90 to-[#003459]/70"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4 py-10 md:py-0 sm:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h1
                        className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6"
                        data-aos="fade-up"
                        data-aos-duration="800"
                    >
                        SKS Living
                    </h1>
                    <p
                        className="text-md md:text-xl mb-8 font-light max-w-2xl mx-auto"
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay="100"
                    >
                        {kost1.desk_singkat}
                    </p>

                    {/* Highlights */}
                    <div
                        className="flex flex-wrap justify-center gap-6 md:gap-6 mb-8"
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay="200"
                    >
                        <div className="flex items-center text-[#16cdd8]">
                            <FaMapMarkerAlt className="mr-2" />
                            <span>{kost1.alamat}</span>
                        </div>
                        <div className="flex items-center text-[#16cdd8]">
                            <FaMapMarkerAlt className="mr-2" />
                            <span>{kost1.daerah}</span>
                        </div>

                        <div className="flex items-center text-[#16cdd8] text-2xl">
                            <span className="font-bold">
                                Rp 1.500.000 - Rp 1.700.000
                            </span>
                            <span className="ml-1">/bulan</span>
                        </div>
                    </div>

                    {/* Search Bar */}

                    {/* Facility Highlights */}
                    <div
                        className="flex flex-wrap justify-center gap-4 mb-8"
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay="300"
                    >
                        {kost1.facilities.slice(0, 4).map((facility, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center"
                            >
                                <facility.icon className="text-[#16cdd8] mr-2" />
                                <span>{facility.name}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                </div>

                {/* Scroll Down Indicator */}
                <div
                    className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center transition-opacity duration-500 ${
                        isScrolled ? "opacity-0" : "opacity-100"
                    }`}
                >
                    <button
                        onClick={() =>
                            window.scrollTo({
                                top: window.innerHeight,
                                behavior: "smooth",
                            })
                        }
                        className="animate-bounce bg-white/20 rounded-full p-2 backdrop-blur-sm"
                    >
                        <FaChevronDown className="text-white" />
                    </button>
                    <div className="mt-2 text-sm text-white/80">
                        Scroll untuk detail
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function Sks() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const kost1 = kostData[0];
    const kost2 = kostData[1];

    const nextImage1 = () => {
        setCurrentImageIndex((prev) =>
            prev === kost1.images.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage1 = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? kost1.images.length - 1 : prev - 1
        );
    };
    const nextImage2 = () => {
        setCurrentImageIndex((prev) =>
            prev === kost2.images.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage2 = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? kost2.images.length - 1 : prev - 1
        );
    };

    return (
        <div className="bg-gradient-to-b from-white to-white min-h-screen">
            {/* Header / Navbar */}

            <Navbar warna="birutua-1"></Navbar>

            {/* Landing Page Hero Section */}
            <KostLandingPage />

            {/* Main Content */}
            <main className="container mx-auto px-4 pt-8">
                {/* Hero Section with Image Carousel */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl mb-8 bg-white border-birutua1 border-[1px]">
                    <div className="relative h-96 md:h-[500px]">
                        <img
                            src={kost1.images[currentImageIndex]}
                            alt={`${kost1.name} view ${currentImageIndex + 1}`}
                            className="w-full h-full object-cover"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        />

                        <button
                            onClick={prevImage1}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full text-[#003459] hover:bg-white transition"
                        >
                            <IoChevronBackOutline size={24} />
                        </button>

                        <button
                            onClick={nextImage1}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full text-[#003459] hover:bg-white transition"
                        >
                            <IoChevronForwardOutline size={24} />
                        </button>

                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                            {kost1.images.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-3 h-3 rounded-full ${
                                        index === currentImageIndex
                                            ? "bg-[#16cdd8]"
                                            : "bg-white/60"
                                    }`}
                                    onClick={() => setCurrentImageIndex(index)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Kos Information */}
                    <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h1
                                    className="text-3xl font-bold text-[#003459]"
                                    data-aos="fade-up"
                                    data-aos-duration="800"
                                >
                                    {kost1.name}
                                </h1>
                                <div
                                    className="flex items-center mt-2 text-gray-600"
                                    data-aos="fade-up"
                                    data-aos-duration="800"
                                >
                                    <FaMapMarkerAlt
                                        size={16}
                                        className="mr-1 text-[#248da8]"
                                    />
                                    <span>{kost1.alamat}</span>
                                </div>
                            </div>
                            <div
                                className="bg-[#16cdd8]/10 px-4 py-2 rounded-lg"
                                data-aos="fade-up"
                                data-aos-duration="800"
                            >
                                <div className="text-[#003459] font-bold text-xl">
                                    {kost1.type}
                                </div>
                                <div className="text-[#248da8] text-sm">
                                    Sisa {kost1.remaining} kamar
                                </div>
                            </div>
                        </div>

                        <div
                            className="flex items-center mb-6"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            <div className="flex items-center text-yellow-500 mr-2">
                                <FaLocationArrow size={18} />
                                <span className="ml-2 font-semibold text-[#003459]">
                                    {kost1.daerah}
                                </span>
                            </div>
                        </div>

                        <hr
                            className="my-6 border-gray-200"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        />

                        {/* Price & deskripsi */}
                        <div className="mb-8">
                            <div
                                className="flex justify-between items-center mb-4"
                                data-aos="fade-up"
                                data-aos-duration="800"
                            >
                                <h2 className="text-2xl font-bold text-[#003459]">
                                    Rp {kost1.price.toLocaleString("id-ID")}
                                    <span className="text-gray-500 text-lg font-normal">
                                        /bulan
                                    </span>
                                </h2>
                                <a
                                    className="bg-[#248da8] text-white px-6 py-3 rounded-lg hover:bg-[#16cdd8] transition font-semibold"
                                    href={`https://wa.me/${kost1.wa}`}
                                >
                                    Pesan Sekarang
                                </a>
                            </div>

                            <h3
                                className="text-xl font-semibold text-[#003459] mb-2"
                                data-aos="fade-up"
                                data-aos-duration="800"
                            >
                                Deskripsi
                            </h3>
                            <p
                                className="text-gray-600 mb-6"
                                data-aos="fade-up"
                                data-aos-duration="800"
                            >
                                {kost1.deskripsi}
                            </p>
                        </div>
                        <div className="flex gap-4 md:flex-row flex-col">
                            {/* Facilities */}
                            <div className="mt-8">
                                <h3
                                    className="text-xl font-semibold text-[#003459] mb-4"
                                    data-aos="fade-up"
                                    data-aos-duration="800"
                                >
                                    Fasilitas
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {kost1.facilities.map((facility, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center bg-[#b8f2ff]/30 p-3 rounded-lg"
                                            data-aos="fade-up"
                                            data-aos-duration="800"
                                        >
                                            <facility.icon
                                                size={20}
                                                className="text-[#248da8] mr-2"
                                            />
                                            <span className="text-[#003459]">
                                                {facility.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Google Maps Embed */}
                            <div className="mt-6 flex-1">
                                <h3
                                    className="text-xl font-semibold text-[#003459] mb-4"
                                    data-aos="fade-up"
                                    data-aos-duration="800"
                                >
                                    Lokasi
                                </h3>
                                <div
                                    className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden shadow-lg"
                                    data-aos="fade-up"
                                    data-aos-duration="800"
                                >
                                    <iframe
                                        src={`https://maps.google.com/maps?q=${encodeURIComponent(
                                            kost1.alamat
                                        )}&output=embed`}
                                        className="absolute top-0 left-0 w-full h-full border-0"
                                        allowFullScreen
                                        loading="lazy"
                                    />
                                </div>
                                <div className="mt-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <main className="container mx-auto px-4 pt-8">
                {/* Hero Section with Image Carousel */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl mb-8 bg-white border-birutua1 border-[1px]">
                    <div className="relative h-96 md:h-[500px]">
                        <img
                            src={kost2.images[currentImageIndex]}
                            alt={`${kost2.name} view ${currentImageIndex + 1}`}
                            className="w-full h-full object-cover"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        />

                        <button
                            onClick={prevImage2}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full text-[#003459] hover:bg-white transition"
                        >
                            <IoChevronBackOutline size={24} />
                        </button>

                        <button
                            onClick={nextImage2}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full text-[#003459] hover:bg-white transition"
                        >
                            <IoChevronForwardOutline size={24} />
                        </button>

                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                            {kost2.images.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-3 h-3 rounded-full ${
                                        index === currentImageIndex
                                            ? "bg-[#16cdd8]"
                                            : "bg-white/60"
                                    }`}
                                    onClick={() => setCurrentImageIndex(index)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Kos Information */}
                    <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h1
                                    className="text-3xl font-bold text-[#003459]"
                                    data-aos="fade-up"
                                    data-aos-duration="800"
                                >
                                    {kost2.name}
                                </h1>
                                <div
                                    className="flex items-center mt-2 text-gray-600"
                                    data-aos="fade-up"
                                    data-aos-duration="800"
                                >
                                    <FaMapMarkerAlt
                                        size={16}
                                        className="mr-1 text-[#248da8]"
                                    />
                                    <span>{kost2.alamat}</span>
                                </div>
                            </div>
                            <div
                                className="bg-[#16cdd8]/10 px-4 py-2 rounded-lg"
                                data-aos="fade-up"
                                data-aos-duration="800"
                            >
                                <div className="text-[#003459] font-bold text-xl">
                                    {kost2.type}
                                </div>
                                <div className="text-[#248da8] text-sm">
                                    Sisa {kost2.remaining} kamar
                                </div>
                            </div>
                        </div>

                        <div
                            className="flex items-center mb-6"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            <div className="flex items-center text-yellow-500 mr-2">
                                <FaLocationArrow size={18} />
                                <span className="ml-2 font-semibold text-[#003459]">
                                    {kost2.daerah}
                                </span>
                            </div>
                        </div>

                        <hr
                            className="my-6 border-gray-200"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        />

                        {/* Price & deskripsi */}
                        <div className="mb-8">
                            <div
                                className="flex justify-between items-center mb-4"
                                data-aos="fade-up"
                                data-aos-duration="800"
                            >
                                <h2 className="text-2xl font-bold text-[#003459]">
                                    Rp {kost2.price.toLocaleString("id-ID")}
                                    <span className="text-gray-500 text-lg font-normal">
                                        /bulan
                                    </span>
                                </h2>
                                <a
                                    className="bg-[#248da8] text-white px-6 py-3 rounded-lg hover:bg-[#16cdd8] transition font-semibold"
                                    href={`https://wa.me/${kost2.wa}`}
                                >
                                    Pesan Sekarang
                                </a>
                            </div>

                            <h3
                                className="text-xl font-semibold text-[#003459] mb-2"
                                data-aos="fade-up"
                                data-aos-duration="800"
                            >
                                Deskripsi
                            </h3>
                            <p
                                className="text-gray-600 mb-6"
                                data-aos="fade-up"
                                data-aos-duration="800"
                            >
                                {kost2.deskripsi}
                            </p>
                        </div>
                        <div className="flex gap-4 md:flex-row flex-col">
                            {/* Facilities */}
                            <div className="mt-8">
                                <h3
                                    className="text-xl font-semibold text-[#003459] mb-4"
                                    data-aos="fade-up"
                                    data-aos-duration="800"
                                >
                                    Fasilitas
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {kost2.facilities.map((facility, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center bg-[#b8f2ff]/30 p-3 rounded-lg"
                                            data-aos="fade-up"
                                            data-aos-duration="800"
                                        >
                                            <facility.icon
                                                size={20}
                                                className="text-[#248da8] mr-2"
                                            />
                                            <span className="text-[#003459]">
                                                {facility.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Google Maps Embed */}
                            <div className="mt-6 flex-1">
                                <h3
                                    className="text-xl font-semibold text-[#003459] mb-4"
                                    data-aos="fade-up"
                                    data-aos-duration="800"
                                >
                                    Lokasi
                                </h3>
                                <div
                                    className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden shadow-lg"
                                    data-aos="fade-up"
                                    data-aos-duration="800"
                                >
                                    <iframe
                                        src={`https://maps.google.com/maps?q=${encodeURIComponent(
                                            kost2.alamat
                                        )}&output=embed`}
                                        className="absolute top-0 left-0 w-full h-full border-0"
                                        allowFullScreen
                                        loading="lazy"
                                    />
                                </div>
                                <div className="mt-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer></Footer>
        </div>
    );
}
