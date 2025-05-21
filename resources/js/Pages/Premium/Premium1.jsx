import React, { useState, useEffect } from "react";
import {
    FaMapMarkerAlt,
    FaHeart,
    FaStar,
    FaBath,
    FaBed,
    FaCoffee,
    FaWifi,
    FaSnowflake,
    FaChevronDown,
    FaExternalLinkAlt,
    FaLocationArrow,
} from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

// Data untuk kos-kosan
const kostData = [
    {
        id: 1,
        name: "Kos Harmoni Asri",
        location: "Jl. Merdeka No. 123, Bandung",
        price: 1200000,
        type: "Putri",
        remaining: 3,
        rating: 4.8,
        reviews: 24,
        locationLink:
            "Jl. Cilubang, RT.02/RW.08, Balungbangjaya, Kec. Bogor Bar., Kota Bogor, Jawa Barat",
        images: [
            "/img/gambar/kos.jpeg",
            "/img/gambar/kos.jpeg",
            "/img/gambar/kos.jpeg",
        ],
        description:
            "Kos Harmoni Asri menawarkan lingkungan yang nyaman dan tenang untuk mahasiswi dan profesional muda. Lokasi strategis dekat dengan kampus dan pusat kota.",
        facilities: [
            { name: "Kamar Mandi Dalam", icon: FaBath },
            { name: "Kasur", icon: FaBed },
            { name: "Meja Belajar", icon: FaCoffee },
            { name: "WiFi", icon: FaWifi },
            { name: "AC", icon: FaSnowflake },
        ],
    },
];

// Landing Page Component
const KostLandingPage = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const kost = kostData[0];

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
                    src={kost.images[0]}
                    alt="Kos Hero"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#102542]/90 to-[#003459]/70"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4 py-10 md:py-0 sm:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                        {kost.name}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto">
                        Hunian kos terbaik dengan fasilitas lengkap untuk
                        kenyamanan Anda selama menuntut ilmu maupun bekerja
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-8">
                        <div className="flex items-center text-[#16cdd8]">
                            <FaMapMarkerAlt className="mr-2" />
                            <span>{kost.location}</span>
                        </div>
                        <div className="flex items-center text-[#16cdd8]">
                            <FaMapMarkerAlt className="mr-2" />
                            <span>Balebak</span>
                        </div>

                        <div className="flex items-center text-[#16cdd8]">
                            <span className="font-bold">
                                Rp {kost.price.toLocaleString("id-ID")}
                            </span>
                            <span className="ml-1">/bulan</span>
                        </div>
                    </div>

                    {/* Search Bar */}

                    {/* Facility Highlights */}
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        {kost.facilities.slice(0, 4).map((facility, index) => (
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
                    <button className="bg-[#16cdd8] hover:bg-[#14b9c4] py-3 px-8 rounded-lg font-semibold text-lg transition-colors">
                        Lihat Detail Kamar
                    </button>
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

export default function Premium1() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const kost = kostData[0];

    const nextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === kost.images.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? kost.images.length - 1 : prev - 1
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
                <div className="relative rounded-2xl overflow-hidden shadow-xl mb-8 bg-white border-birutua1 border-2">
                    <div className="relative h-96 md:h-[500px]">
                        <img
                            src={kost.images[currentImageIndex]}
                            // src={`${window.location.origin}/${kost.images[currentImageIndex]}`}
                            alt={`${kost.name} view ${currentImageIndex + 1}`}
                            className="w-full h-full object-cover"
                        />

                        <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full text-[#003459] hover:bg-white transition"
                        >
                            <IoChevronBackOutline size={24} />
                        </button>

                        <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full text-[#003459] hover:bg-white transition"
                        >
                            <IoChevronForwardOutline size={24} />
                        </button>

                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                            {kost.images.map((_, index) => (
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
                                <h1 className="text-3xl font-bold text-[#003459]">
                                    {kost.name}
                                </h1>
                                <div className="flex items-center mt-2 text-gray-600">
                                    <FaMapMarkerAlt
                                        size={16}
                                        className="mr-1 text-[#248da8]"
                                    />
                                    <span>{kost.location}</span>
                                </div>
                            </div>
                            <div className="bg-[#16cdd8]/10 px-4 py-2 rounded-lg">
                                <div className="text-[#003459] font-bold text-xl">
                                    {kost.type}
                                </div>
                                <div className="text-[#248da8] text-sm">
                                    Sisa {kost.remaining} kamar
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center mb-6">
                            <div className="flex items-center text-yellow-500 mr-2">
                                <FaLocationArrow size={18} />
                                <span className="ml-2 font-semibold text-[#003459]">
                                    Balebak{kost.rating}
                                </span>
                            </div>
                            <span className="text-gray-500">
                                ({kost.reviews} ulasan)
                            </span>
                        </div>

                        <hr className="my-6 border-gray-200" />

                        {/* Price & Description */}
                        <div className="mb-8">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-2xl font-bold text-[#003459]">
                                    Rp {kost.price.toLocaleString("id-ID")}
                                    <span className="text-gray-500 text-lg font-normal">
                                        /bulan
                                    </span>
                                </h2>
                                <button className="bg-[#248da8] text-white px-6 py-3 rounded-lg hover:bg-[#16cdd8] transition font-semibold">
                                    Pesan Sekarang
                                </button>
                            </div>

                            <h3 className="text-xl font-semibold text-[#003459] mb-2">
                                Deskripsi
                            </h3>
                            <p className="text-gray-600 mb-6">
                                {kost.description}
                            </p>
                        </div>
                        <div className="flex gap-4 md:flex-row flex-col">
                            {/* Facilities */}
                            <div className="mt-8">
                                <h3 className="text-xl font-semibold text-[#003459] mb-4">
                                    Fasilitas
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {kost.facilities.map((facility, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center bg-[#b8f2ff]/30 p-3 rounded-lg"
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
                                <h3 className="text-xl font-semibold text-[#003459] mb-4">
                                    Lokasi
                                </h3>
                                <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden shadow-lg">
                                    <iframe
                                        src={`https://maps.google.com/maps?q=${encodeURIComponent(
                                            kost.locationLink
                                        )}&output=embed`}
                                        className="absolute top-0 left-0 w-full h-full border-0"
                                        allowFullScreen
                                        loading="lazy"
                                    />
                                </div>
                                <div className="mt-3">
                                    <a
                                        href={
                                            kost.locationLink?.replace(
                                                "embed",
                                                "view"
                                            ) || "#"
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#248da8] hover:text-[#16cdd8] flex items-center"
                                    >
                                        <FaExternalLinkAlt className="mr-2" />
                                        Buka di Google Maps
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden shadow-xl mb-8 bg-white border-birutua1 border-2">
                    <div className="relative h-96 md:h-[500px]">
                        <img
                            src={kost.images[currentImageIndex]}
                            // src={`${window.location.origin}/${kost.images[currentImageIndex]}`}
                            alt={`${kost.name} view ${currentImageIndex + 1}`}
                            className="w-full h-full object-cover"
                        />

                        <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full text-[#003459] hover:bg-white transition"
                        >
                            <IoChevronBackOutline size={24} />
                        </button>

                        <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full text-[#003459] hover:bg-white transition"
                        >
                            <IoChevronForwardOutline size={24} />
                        </button>

                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                            {kost.images.map((_, index) => (
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
                                <h1 className="text-3xl font-bold text-[#003459]">
                                    {kost.name}
                                </h1>
                                <div className="flex items-center mt-2 text-gray-600">
                                    <FaMapMarkerAlt
                                        size={16}
                                        className="mr-1 text-[#248da8]"
                                    />
                                    <span>{kost.location}</span>
                                </div>
                            </div>
                            <div className="bg-[#16cdd8]/10 px-4 py-2 rounded-lg">
                                <div className="text-[#003459] font-bold text-xl">
                                    {kost.type}
                                </div>
                                <div className="text-[#248da8] text-sm">
                                    Sisa {kost.remaining} kamar
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center mb-6">
                            <div className="flex items-center text-yellow-500 mr-2">
                                <FaLocationArrow size={18} />
                                <span className="ml-2 font-semibold text-[#003459]">
                                    Balebak{kost.rating}
                                </span>
                            </div>
                            <span className="text-gray-500">
                                ({kost.reviews} ulasan)
                            </span>
                        </div>

                        <hr className="my-6 border-gray-200" />

                        {/* Price & Description */}
                        <div className="mb-8">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-2xl font-bold text-[#003459]">
                                    Rp {kost.price.toLocaleString("id-ID")}
                                    <span className="text-gray-500 text-lg font-normal">
                                        /bulan
                                    </span>
                                </h2>
                                <button className="bg-[#248da8] text-white px-6 py-3 rounded-lg hover:bg-[#16cdd8] transition font-semibold">
                                    Pesan Sekarang
                                </button>
                            </div>

                            <h3 className="text-xl font-semibold text-[#003459] mb-2">
                                Deskripsi
                            </h3>
                            <p className="text-gray-600 mb-6">
                                {kost.description}
                            </p>
                        </div>
                        <div className="flex gap-4 md:flex-row flex-col">
                            {/* Facilities */}
                            <div className="mt-8">
                                <h3 className="text-xl font-semibold text-[#003459] mb-4">
                                    Fasilitas
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {kost.facilities.map((facility, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center bg-[#b8f2ff]/30 p-3 rounded-lg"
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
                                <h3 className="text-xl font-semibold text-[#003459] mb-4">
                                    Lokasi
                                </h3>
                                <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden shadow-lg">
                                    <iframe
                                        src={`https://maps.google.com/maps?q=${encodeURIComponent(
                                            kost.locationLink
                                        )}&output=embed`}
                                        className="absolute top-0 left-0 w-full h-full border-0"
                                        allowFullScreen
                                        loading="lazy"
                                    />
                                </div>
                                <div className="mt-3">
                                    <a
                                        href={
                                            kost.locationLink?.replace(
                                                "embed",
                                                "view"
                                            ) || "#"
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#248da8] hover:text-[#16cdd8] flex items-center"
                                    >
                                        <FaExternalLinkAlt className="mr-2" />
                                        Buka di Google Maps
                                    </a>
                                </div>
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
