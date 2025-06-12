import React from "react";
import { useState, useEffect } from "react";
import { Link, router } from "@inertiajs/react";
import CardPremium from "../Components/CardPremium";
import CardBiasa from "../Components/CardBiasa";
import CardDaerah from "../Components/CardDaerah";
import Navbar from "../Components/Navbar";
import { LuTextSearch } from "react-icons/lu";
import axios from "axios";
import Footer from "../Components/Footer";
import { FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Home(props) {
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
        dots: true,
        dotsSpeed: 500,
        center: true,
        autoWidth: true,
        margin: 50,
    };
    const settingsBiasa = {
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplaySpeed: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 4,
                stagePadding: 0,
            },
            480: {
                items: 4,
                stagePadding: 0,
            },
        },
        nav: false,
        dots: true,
        dotsSpeed: 500,
        center: true,
        autoWidth: true,
        margin: 20,
    };

    const DaftarDaerah = [
        { id: 1, nama: "Balebak" },
        { id: 2, nama: "Balio" },
        { id: 3, nama: "Bara" },
        { id: 4, nama: "Perwira" },
        { id: 5, nama: "Cibanteng" },
        { id: 6, nama: "Bateng" },
        { id: 7, nama: "Dramaga Cantik" },
        { id: 8, nama: "Cangkurawok" },
    ];

    const [selectedDaerah, setSelectedDaerah] = useState(DaftarDaerah[0]);
    useEffect(() => {
        console.log("Nilai selectedDaerah berubah:", selectedDaerah);
    }, [selectedDaerah]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedFacilities, setSelectedFacilities] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // Fungsi untuk handle perubahan daerah
    const handleDaerahChange = (daerah) => {
        setSelectedDaerah(daerah);
        setShowDropdown(false);
        const filters = {
            daerah: daerah,
            search: "",
            gender: "",
            min_price: 0,
            max_price: 0,
            facilities: [],
        };
        router.get("/filter", filters, {
            preserveState: true,
            preserveScroll: true,
            onFinish: () => {
                setIsLoading(false);
                // setShowFilter(false); // Close filter panel after submission
            },
        });
        router.post("/filter", filters, {
            onFinish: () => {
                setIsLoading(false);
                // setShowFilter(false); // Close filter panel after submission
            },
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Create the filter object with only non-empty values
        const filters = {
            search: searchTerm || "",
            daerah: "",
        };

        // Only add facilities if there are any selected
        if (selectedFacilities.length > 0) {
            filters.facilities = selectedFacilities;
        }

        // Use Inertia's router to make the request
        router.get("/filter", filters, {
            preserveState: true,
            preserveScroll: true,
            onFinish: () => {
                setIsLoading(false);
                // setShowFilter(false); // Close filter panel after submission
            },
        });
        router.post("/filter", filters, {
            onFinish: () => {
                setIsLoading(false);
                // setShowFilter(false); // Close filter panel after submission
            },
        });
    };

    const premium = [
        {
            id: 1,
            gambar: "images/premium/tasima/tasimaadaro2.jpg",
            nama: "Kost Tasima",
            daerah: "Cibanteng",
            jenis: "Campur",
            fasilitas: "KM Dalam, Wifi, AC, CCTV",
            link: "/tasima",
        },
        {
            id: 2,
            gambar: "images/premium/syakura/s8.jpg",
            nama: "Rukost Syakura",
            jenis: "Putri",
            daerah: "Balungbang Jaya",
            fasilitas: "TV, Lobby, AC, KM dalam",
            link: "/syakura",
        },
        {
            id: 3,
            gambar: "images/premium/skena/s2.jpg",
            nama: "Kost Skena",
            jenis: "Putra",
            daerah: "Cikarawang",
            fasilitas: "TV, Gym, AC, KM dalam",
            link: "/skena",
        },
        {
            id: 4,
            gambar: "images/premium/wisma-rosa/a1.jpeg",
            nama: "Wisma Rosa",
            jenis: "Putra",
            daerah: "Balio",
            fasilitas: "Meja, Kasur, Kipas Angin, CCTV",
            link: "/wisma-rosa",
        },
        {
            id: 5,
            nama: "SKS Living",
            gambar: "images/premium/sks/sks1.jpg",
            jenis: "Campur",
            daerah: "Cikarawang",
            fasilitas: "Kasur, Wifi, AC, CCTV",
            link: "/sks-living",
        },
    ];

    console.log(premium);
    return (
        <div className="">
            {/*{/* <!-- Buat Mobile  */}
            <div></div>
            {/*{/* <!-- Buat desktop  */}
            {/*{/* <!-- Bagian 1  */}
            <div className="h-auto lg:h-screen flex flex-col">
                {/* Navbar */}
                <Navbar />

                {/* Hero Content */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-3 items-center px-4 md:px-10 py-6 gap-6">
                    {/* Bagian Kiri */}
                    <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-5 items-center gap-4">
                        <div
                            className="md:col-span-2 flex justify-center"
                            data-aos="fade-right"
                            data-aos-duration="800"
                        >
                            <img
                                src="img/logo/sakarsa.png"
                                alt=""
                                className="w-3/4 md:w-full max-w-xs"
                            />
                        </div>
                        <div
                            className="md:col-span-3 flex flex-col gap-4 px-2 md:px-4"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            <p className="text-birutua1 font-bold text-3xl md:text-5xl text-center md:text-left">
                                Risbang Investigation
                            </p>
                            <p className="text-birutua1 text-justify text-sm md:text-base">
                                Program kerja yang bertujuan untuk melakukan
                                survei terkait pemilihan kos bagi mahasiswa baru
                                IPB University dengan mengumpulkan data lokasi,
                                harga, dan fasilitas kos. Data yang terkumpul
                                akan dianalisis dan hasilnya akan dipublikasikan
                                untuk membantu mahasiswa baru dalam memilih kos
                                yang sesuai
                            </p>
                        </div>
                    </div>

                    {/* Bagian Kanan */}
                    {/* <div
                        className="md:col-span-1 md:flex flex-col items-center text-center gap-3 hidden"
                        data-aos="fade-left"
                        data-aos-duration="800"
                    >
                        <p className="font-bold text-birutua1 text-base md:text-lg">
                            Mau cari Kos???
                        </p>
                        <p className="text-birutua1 text-sm">
                            Cari dulu daerahnya
                        </p>

                        <div className="flex items-center gap-3 px-2 py-4 w-full max-w-xs sm:max-w-sm md:max-w-md">
                            <form
                                className="flex items-center bg-biru text-birumuda2 border border-birumuda1 rounded-lg px-2 py-1 w-full shadow-sm"
                                onSubmit={handleSubmit}
                            >
                                <LuTextSearch className="text-2xl md:text-3xl mx-2 text-white" />
                                <input
                                    type="text"
                                    placeholder="Sekitaran IPB"
                                    className="outline-none text-sm w-full placeholder-[#fff] text-white bg-transparent font-semibold"
                                    value={searchTerm}
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                    disabled={isLoading}
                                />
                                <button
                                    type="submit"
                                    className={`ml-2 ${
                                        isLoading
                                            ? "bg-gray-400"
                                            : "bg-birumuda2 hover:bg-birutua2"
                                    } text-white text-xs md:text-sm px-3 py-1 rounded-lg transition duration-300 font-semibold`}
                                    disabled={isLoading}
                                >
                                    {isLoading ? "Mencari..." : "Cari"}
                                </button>
                            </form>
                        </div>
                    </div> */}
                </div>
            </div>

            {/*    <!-- Bagiann 2  */}
            <div
                className="flex flex-col items-center gap-4 md:mt-10 mt-20 px-10 justify-center"
                data-aos="fade-up"
                data-aos-duration="800"
            >
                <h1 className="text-4xl font-bold  mb-2">Rekomendasi Kost</h1>
                <OwlCarousel className="owl-theme" {...settings}>
                    {premium.length > 0 ? (
                        premium.map((value, index) => (
                            <CardPremium
                                link="premium"
                                key={index}
                                data={value}
                            ></CardPremium>
                        ))
                    ) : (
                        <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
                            <p>gaada</p>
                        </div>
                    )}
                </OwlCarousel>
            </div>

            <hr className="border-2 border-slate-400 my-6" />

            {/*    <!-- Bagian 3  */}
            <div className="px-3 md:px-10 flex flex-col gap-6">
                <div
                    className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    <p className="font-bold text-2xl md:text-4xl">
                        Pilihan lainnya
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-sm md:text-base">
                        <Link
                            href="/semua"
                            className="text-blue-600 hover:underline"
                        >
                            Lihat semua
                        </Link>
                    </div>
                </div>

                <div
                    className="w-full "
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    <div className="sm:block hidden">
                        <OwlCarousel className="owl-theme" {...settingsBiasa}>
                            {props.kost.length > 0 ? (
                                props.kost.map((data, index) => (
                                    <CardBiasa
                                        key={index}
                                        data={data}
                                    ></CardBiasa>
                                ))
                            ) : (
                                <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
                                    <p>gaada</p>
                                </div>
                            )}
                        </OwlCarousel>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:gap-4 gap-3 sm:hidden">
                        {props.kost.length > 0 ? (
                            props.kost.map((data, index) => (
                                <CardBiasa key={index} data={data}></CardBiasa>
                            ))
                        ) : (
                            <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
                                <p>gaada</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <hr className="border-2 border-slate-400 my-6" />

            {/*    <!-- Bagian 4  */}

            <div className="px-3 md:px-10 flex flex-col gap-6 mb-10">
                <div
                    className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    <div className="relative">
                        <p className="font-bold text-2xl md:text-3xl">
                            Pilihan kos di{" "}
                            <span
                                className="text-blue-500 font-bold cursor-pointer hover:underline items-center"
                                onClick={() => setShowDropdown(!showDropdown)}
                            >
                                {selectedDaerah.nama}{" "}
                                <FaChevronDown
                                    className="ml-2 inline"
                                    size={16}
                                />
                            </span>
                        </p>

                        {showDropdown && (
                            <div className="top-full left-0 mt-2 bg-white shadow-lg rounded-md  w-96">
                                <div className="grid grid-cols-2">
                                    {DaftarDaerah.map((daerah) => (
                                        <div
                                            key={daerah.id}
                                            className={`px-4 py-2 hover:bg-blue-50 cursor-pointer z-50 ${
                                                selectedDaerah.id === daerah.id
                                                    ? "bg-blue-100 text-blue-600"
                                                    : ""
                                            }`}
                                            onClick={() =>
                                                handleDaerahChange(daerah)
                                            }
                                        >
                                            {daerah.nama}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-sm md:text-base ">
                        <Link
                            href="/semua"
                            className="text-blue-600 hover:underline"
                        >
                            Lihat semua
                        </Link>
                    </div>
                </div>

                <div
                    className="w-full "
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    <div className="sm:block hidden">
                        <OwlCarousel className="owl-theme" {...settingsBiasa}>
                            {props.kost_daerah.length > 0 ? (
                                props.kost_daerah.map((data, index) => (
                                    <CardBiasa
                                        key={index}
                                        data={data}
                                    ></CardBiasa>
                                ))
                            ) : (
                                <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
                                    <p>gaada</p>
                                </div>
                            )}
                        </OwlCarousel>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:gap-4 gap-3 sm:hidden">
                        {props.kost_daerah.length > 0 ? (
                            props.kost_daerah.map((data, index) => (
                                <CardBiasa key={index} data={data}></CardBiasa>
                            ))
                        ) : (
                            <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
                                <p>gaada</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/* <hr className="border-2 border-slate-400 my-6" /> */}
            {/*{/* <!-- Bagian 5  */}
            {/* <div className="px-4 md:px-10 flex flex-col gap-6 mb-10">
                <p
                    className="font-bold text-4xl"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    Daerah Kos Populer
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:gap-4 gap-3">
                    {props.daerah.length > 0 ? (
                        props.daerah.map((value, index) => (
                            <CardDaerah data={value}></CardDaerah>
                        ))
                    ) : (
                        <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
                            <p>gaada</p>
                        </div>
                    )}
                </div>
            </div> */}
            <Footer></Footer>

            {/* <div className="h-screen"></div> */}
        </div>
    );
}
