import React from "react";
import CardBiasa from "../Components/CardBiasa";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "@inertiajs/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import {
    FaBath,
    FaShower,
    FaBed,
    FaCoffee,
    FaWifi,
    FaSnowflake,
    FaMotorcycle,
    FaCar,
    FaUserTie,
    FaUtensils,
    FaToilet,
    FaEllipsisH,
    FaFan,
    FaChair,
    FaTv,
    FaVideo,
    FaDoorOpen,
    FaSun,
    FaFireAlt,
} from "react-icons/fa";
import { GiWashingMachine } from "react-icons/gi";
import { RiFridgeFill } from "react-icons/ri";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Kos(props) {
    const data = props.data[0];

    const settings = {
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                stagePadding: 0,
            },
            480: {
                items: 2,
                stagePadding: 50,
            },
        },
        nav: false,
        dots: false,
        dotsSpeed: 500,
        center: true,
        autoWidth: true,
        margin: 25,
    };

    const processImages = () => {
        try {
            // Jika data.gambar adalah string JSON
            if (data.gambar.startsWith("[") && data.gambar.endsWith("]")) {
                const parsed = JSON.parse(data.gambar.replace(/\\/g, ""));
                return Array.isArray(parsed)
                    ? parsed.map((img) => img.trim().replace(/^"|"$/g, ""))
                    : [parsed];
            }
            // Jika sudah array atau string biasa
            return Array.isArray(data.gambar)
                ? data.gambar.map((img) => img.trim())
                : data.gambar.split(",").map((img) => img.trim());
        } catch (error) {
            console.error("Error processing images:", error);
            return [];
        }
    };

    const imageArray = processImages();
    // console.log("Processed images:", imageArray);

    let alamat = data.alamat;

    let jenis_kost = ["Putra", "Putri", "Campur"];
    let nama_daerah = ["Balebak"];

    let fasilitas = {
        ac: "AC",
        bantal: "Bantal",
        kasur: "Kasur",
        kipas_angin: "Kipas Angin",
        lemari: "Lemari",
        km_dalam: "Kamar Mandi Dalam",
        meja_belajar: "Meja Belajar",
        kulkas: "Kulkas",
        p_motor: "Parkir Motor",
        mobil: "Parkir Mobil",
        wifi: "WiFi",
        km_luar: "Kamar Mandi Luar",
        shower: "Shower",
        water_heater: "Water Heater",
        pengurus_kos: "Pengurus Kos",
        dapur: "Dapur",
        tv: "TV",
        cctv: "CCTV",
        lobby: "Lobby",
        r_jemur: "Ruang Jemur",
        mesin_cuci: "Mesin Cuci",
        lainnya: "Fasilitas Lainnya",
    };

    const facilitiesToDisplay = [];

    const facilityData = {
        kamar: [
            { key: "ac", name: "AC", icon: FaSnowflake },
            { key: "bantal", name: "Bantal", icon: FaBed },
            { key: "kasur", name: "Kasur", icon: FaBed },
            { key: "lemari", name: "Lemari", icon: FaChair },
            { key: "kipas_angin", name: "Kipas Angin", icon: FaFan },
            { key: "meja_belajar", name: "Meja Belajar", icon: FaCoffee },
            { key: "km_dalam", name: "Kamar Mandi Dalam", icon: FaBath },
        ],
        kost: [
            { key: "kulkas", name: "Kulkas", icon: RiFridgeFill },
            { key: "p_motor", name: "Parkir Motor", icon: FaMotorcycle },
            { key: "mobil", name: "Parkir Mobil", icon: FaCar },
            { key: "pengurus_kos", name: "Pengurus Kos", icon: FaUserTie },
            { key: "dapur", name: "Dapur", icon: FaUtensils },
            { key: "wifi", name: "WiFi", icon: FaWifi },
            { key: "km_luar", name: "Kamar Mandi Luar", icon: FaToilet },
            { key: "tv", name: "TV", icon: FaTv },
            { key: "cctv", name: "CCTV", icon: FaVideo },
            { key: "lobby", name: "Lobby", icon: FaDoorOpen },
            { key: "r_jemur", name: "Ruang Jemur", icon: FaSun },
            { key: "mesin_cuci", name: "Mesin Cuci", icon: GiWashingMachine },
            { key: "shower", name: "Shower", icon: FaShower },
            { key: "water_heater", name: "Water Heater", icon: FaFireAlt },
        ],
    };

    const availableFacilities = Object.entries(data)
        .filter(
            ([key, value]) =>
                value === 1 &&
                ![
                    "id",
                    "jenis_id",
                    "daerah_id",
                    "pemilik_id",
                    "stock",
                    "harga",
                    "ukuran",
                    "created_at",
                    "updated_at",
                    "nama",
                    "pemilik",
                    "daerah",
                    "jenis",
                    "alamat",
                    "deskripsi",
                    "gambar",
                ].includes(key)
        )
        .map(([key]) => key);

    // console.log(availableFacilities);

    let f_kamar = [];
    let f_kos = [];

    facilityData.kamar.forEach((fac) => {
        if (availableFacilities.includes(fac.key)) {
            f_kamar.push(fac);
        }
    });

    facilityData.kost.forEach((fac) => {
        if (availableFacilities.includes(fac.key)) {
            f_kos.push(fac);
        }
    });

    // console.log(f_kamar);
    // console.log(f_kos);

    const formatRupiah = (price) => {
        return `Rp. ${Number(price).toLocaleString("id-ID")}`;
    };

    // let jenis = jenis_kost[data.jenis_id - 1];

    return (
        <div>
            <Navbar></Navbar>
            <div className="md:px-14 px-6 py-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-14">
                {/* Kolom Kiri: Info Kos */}
                <div className="lg:col-span-2 space-y-4">
                    {/* Gambar utama */}
                    <div
                        className="h-80 rounded-md bg-gray-400 overflow-hidden"
                        data-aos="fade-up"
                        data-aos-duration="800"
                    >
                        <img
                            src={`${window.location.origin}/storage/${imageArray[0]}`}
                            alt=""
                            className="h-full w-full object-cover"
                        />
                    </div>

                    {/* Nama Kos & Info */}
                    <div>
                        <h1
                            className="text-2xl font-bold"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            {data.nama}
                        </h1>
                        <div
                            className="flex items-center gap-2 text-sm text-gray-600 mt-1"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            <span className="bg-gray-100 px-2 py-1 rounded">
                                Kos {props.jenis}
                            </span>
                            <span>• {props.daerah}</span>
                        </div>
                        <div
                            className="flex items-center justify-between mt-2"
                            data-aos="fade-up"
                            data-aos-duration="800"
                            data-aos-delay="100"
                        >
                            <span className="text-red-500 font-medium text-sm">
                                Tersisa {data.stock} kamar
                            </span>
                        </div>
                    </div>
                    {/* Deskripsi */}
                    <div
                        className=""
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-delay="200"
                    >
                        <h1 className="text-lg font-bold mt-4 text-justify">
                            Deskripsi
                        </h1>
                        <p className="text-justify">
                            {data.deskripsi}
                        </p>
                    </div>

                    {/* Fasilitas Kamar */}
                    <div>
                        <h2
                            className="text-lg font-bold mt-4 mb-2"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            Fasilitas Kamar
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-2 gap-2 text-lg text-gray-700">
                            {f_kamar.length > 0 ? (
                                f_kamar.map((facility) => (
                                    <div
                                        key={facility.key}
                                        className="flex items-center gap-1 bg-birumuda1/60 px-2 py-1 rounded text-black p-1"
                                        data-aos="fade-up"
                                        data-aos-duration="800"
                                    >
                                        <facility.icon className="text-xl" />
                                        <span className="text-base ml-2 font-semibold">
                                            {facility.name}
                                        </span>
                                    </div>
                                ))
                            ) : (
                                <div
                                    className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded"
                                    data-aos="fade-up"
                                    data-aos-duration="800"
                                >
                                    <FaEllipsisH className="text-gray-600 text-sm" />
                                    <span className="text-sm">
                                        Tidak ada fasilitas
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Fasilitas Kos */}
                    <div>
                        <h2
                            className="text-lg font-bold mt-4 mb-2"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            Fasilitas Kos
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-2 gap-2 text-lg text-gray-700">
                            {f_kos.length > 0 ? (
                                f_kos.map((facility) => (
                                    <div
                                        key={facility.key}
                                        data-aos="fade-up"
                                        data-aos-duration="800"
                                        className="flex items-center gap-1 bg-birumuda1/60 px-2 py-1 rounded text-black p-1"
                                    >
                                        <facility.icon className="text-xl" />
                                        <span className="text-base ml-2 font-semibold">
                                            {facility.name}
                                        </span>
                                    </div>
                                ))
                            ) : (
                                <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
                                    <FaEllipsisH className="text-gray-600 text-sm" />
                                    <span className="text-sm">
                                        Tidak ada fasilitas
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Kolom Kanan: Harga & Lokasi */}
                <div className="space-y-4">
                    {/* Galeri samping */}
                    <div className="space-y-4">
                        <div
                            className="bg-gray-300 h-40 rounded-md overflow-hidden"
                            data-aos="fade-left"
                            data-aos-duration="800"
                        >
                            {imageArray.length > 1 ? (
                                <img
                                    className="w-full h-full object-cover"
                                    src={`${window.location.origin}/storage/${imageArray[1]}`}
                                ></img>
                            ) : (
                                <div className="">Tidak ada gambar</div>
                            )}
                        </div>
                        <div
                            className="bg-gray-300 h-40 rounded-md overflow-hidden"
                            data-aos="fade-left"
                            data-aos-duration="800"
                            data-aos-delay="100"
                        >
                            {imageArray.length > 2 ? (
                                <img
                                    className="w-full h-full object-cover"
                                    src={`${window.location.origin}/storage/${imageArray[2]}`}
                                ></img>
                            ) : (
                                <div className="">Tidak ada gambar</div>
                            )}
                        </div>
                    </div>

                    {/* Harga & Kontak */}
                    <div
                        className="bg-white shadow-md p-4 rounded-md"
                        data-aos="fade-left"
                        data-aos-duration="800"
                        data-aos-delay="200"
                    >
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
                                href={`https://wa.me/6281383756292`}
                                className="flex-1 bg-green-500 text-white text-sm text-center py-2 rounded-md"
                            >
                                WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Lokasi */}
                    <div data-aos="fade-up" data-aos-duration="800">
                        <h2 className="text-lg font-semibold mb-2">Lokasi</h2>
                        <div className="">
                            <div className="relative pb-[56.25%] h-0 w-full rounded-xl overflow-hidden shadow-lg">
                                <iframe
                                    src={`https://maps.google.com/maps?q=${encodeURIComponent(
                                        alamat
                                    )}&output=embed`}
                                    className="absolute top-0 left-0 w-full h-full border-0"
                                    allowFullScreen
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="w-full md:px-10 px-4"
                data-aos="fade-up"
                data-aos-duration="800"
            >
                <OwlCarousel className="owl-theme" {...settings}>
                    {imageArray.map((value, index) => (
                        <div
                            className="md:w-[500px] md:h-[300px] w-72 h-52 rounded-xl overflow-hidden"
                            key={index}
                        >
                            <img
                                src={`${window.location.origin}/storage/${value}`}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </OwlCarousel>
            </div>

            <hr
                className="my-8 max-w-7xl mx-auto px-10 "
                data-aos="fade-up"
                data-aos-duration="800"
            />

            <div className="px-4 md:px-10 flex flex-col gap- max-w-7xl mx-auto mb-10">
                <div
                    className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    <p className="font-bold text-2xl md:text-3xl">
                        Pilihan kos di{" "}
                        <span className="text-blue-500 font-bold">
                            {props.daerah}
                        </span>
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

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4 md:mt-6">
                    {/* <CardBiasa></CardBiasa>
                    <CardBiasa></CardBiasa>
                    <CardBiasa></CardBiasa> */}
                    {props.kost_lain.length > 0 ? (
                        props.kost_lain.map((data, index) => (
                            <CardBiasa key={index} data={data}></CardBiasa>
                        ))
                    ) : (
                        <div
                            className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            <p>Tidak ada data kos di daerah ini</p>
                        </div>
                    )}
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
}
