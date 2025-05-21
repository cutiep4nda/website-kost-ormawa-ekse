import { useState } from "react";
import axios from "axios";
// import Link from "next/link";
import { Link } from "@inertiajs/react";
import { LuTextSearch } from "react-icons/lu";
import {
    FaMale,
    FaFemale,
    FaUsers,
    FaToilet,
    FaSnowflake,
    FaBed,
    FaChair,
    FaWifi,
    FaFan,
    FaSearch,
} from "react-icons/fa";

export default function Navbar() {
    const [showFilter, setShowFilter] = useState(false);
    const [selectedGender, setSelectedGender] = useState("");
    const [selectedFacilities, setSelectedFacilities] = useState([]);
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const toggleFacility = (facility) => {
        setSelectedFacilities((prev) =>
            prev.includes(facility)
                ? prev.filter((item) => item !== facility)
                : [...prev, facility]
        );
    };

    const handleSubmit = () => {};

    // Enhanced handleSubmit with better debugging for 500 errors
    // Enhanced debugging to extract Laravel error message from HTML response

    return (
        <div className="bg-birumuda1 w-full px-4 sm:px-6 md:px-10 py-3 md:py-0 ">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 h-full relative">
                {/* Logo & Title */}
                <Link className="flex gap-3 items-center" href="/">
                    <img
                        src="/img/logo/sakarsa.png"
                        alt="Sakarsa Logo"
                        className="h-20 sm:h-24 object-contain"
                    />
                    <p className="font-bold text-birutua2 text-2xl">
                        Sakarsa Kos
                    </p>
                </Link>

                {/* Search & Filter */}
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
                    <form
                        className="flex items-center bg-white border border-[#B8F2FF] rounded-full px-2 py-1 w-full sm:w-[300px] md:w-[400px] shadow-sm"
                        onSubmit={handleSubmit}
                    >
                        <LuTextSearch className="text-2xl mx-2 text-biru" />
                        <input
                            type="text"
                            placeholder="Sekitaran IPB"
                            className="outline-none text-sm w-full placeholder-birumtext-birumuda2 text-birutua1 bg-transparent"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="ml-2 bg-birumuda2 hover:bg-biru text-white text-sm px-3 py-1 rounded-full transition duration-300"
                        >
                            Cari
                        </button>
                    </form>

                    {/* Filter Button */}
                    <button
                        onClick={() => setShowFilter(!showFilter)}
                        className={`flex items-center gap-1 text-sm transition duration-300 ${
                            showFilter
                                ? "text-birutua1"
                                : "text-biru hover:text-birutua1"
                        }`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 13.414V19a1 1 0 01-1.447.894l-4-2A1 1 0 019 17v-3.586L3.293 6.707A1 1 0 013 6V4z"
                            />
                        </svg>
                        Filter
                    </button>
                </div>

                {/* Filter Panel */}
                {showFilter && (
                    <div className="absolute z-50 top-full mt-2 right-4 sm:right-10 bg-white shadow-md rounded-md p-6 w-full sm:w-[400px]">
                        <h2 className="text-center font-semibold mb-4">
                            Filter
                        </h2>

                        <form onSubmit={handleSubmit}>
                            {/* Jenis Kos */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2">
                                    Jenis Kos
                                </label>
                                <div className="grid grid-cols-3 gap-4">
                                    {[
                                        {
                                            value: "Putra",
                                            icon: (
                                                <FaMale className="inline mr-1" />
                                            ),
                                        },
                                        {
                                            value: "Putri",
                                            icon: (
                                                <FaFemale className="inline mr-1" />
                                            ),
                                        },
                                        {
                                            value: "Campur",
                                            icon: (
                                                <FaUsers className="inline mr-1" />
                                            ),
                                        },
                                    ].map((item) => (
                                        <div
                                            key={item.value}
                                            className="flex items-center"
                                        >
                                            <input
                                                type="radio"
                                                id={`gender-${item.value}`}
                                                name="gender"
                                                value={item.value}
                                                checked={
                                                    selectedGender ===
                                                    item.value
                                                }
                                                onChange={() =>
                                                    setSelectedGender(
                                                        item.value
                                                    )
                                                }
                                                className="hidden"
                                            />
                                            <label
                                                htmlFor={`gender-${item.value}`}
                                                className={`border rounded-md py-2 text-center text-sm transition hover:bg-birumuda2 hover:text-white w-full cursor-pointer ${
                                                    selectedGender ===
                                                    item.value
                                                        ? "bg-birumuda2 text-white"
                                                        : ""
                                                }`}
                                            >
                                                {item.icon} {item.value}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <hr className="my-6" />

                            {/* Harga */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-4">
                                    Harga
                                </label>
                                <div className="flex gap-6 items-center">
                                    <div className="flex-1">
                                        <input
                                            type="number"
                                            name="minPrice"
                                            placeholder="Minimal"
                                            className="border rounded px-3 py-2 w-full text-sm"
                                            value={minPrice}
                                            onChange={(e) =>
                                                setMinPrice(e.target.value)
                                            }
                                        />
                                    </div>
                                    <span className="text-gray-500">-</span>
                                    <div className="flex-1">
                                        <input
                                            type="number"
                                            name="maxPrice"
                                            placeholder="Maksimal"
                                            className="border rounded px-3 py-2 w-full text-sm"
                                            value={maxPrice}
                                            onChange={(e) =>
                                                setMaxPrice(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                            </div>

                            <hr className="my-6" />

                            {/* Fasilitas */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-4">
                                    Fasilitas Kamar
                                </label>
                                <div className="grid grid-cols-3 gap-4 text-xs">
                                    {[
                                        {
                                            value: "K. Mandi Dalam",
                                            icon: (
                                                <FaToilet className="inline mr-1" />
                                            ),
                                        },
                                        {
                                            value: "AC",
                                            icon: (
                                                <FaSnowflake className="inline mr-1" />
                                            ),
                                        },
                                        {
                                            value: "Kasur",
                                            icon: (
                                                <FaBed className="inline mr-1" />
                                            ),
                                        },
                                        {
                                            value: "Lemari",
                                            icon: (
                                                <FaChair className="inline mr-1" />
                                            ),
                                        },
                                        {
                                            value: "Wifi",
                                            icon: (
                                                <FaWifi className="inline mr-1" />
                                            ),
                                        },
                                        {
                                            value: "Kipas",
                                            icon: (
                                                <FaFan className="inline mr-1" />
                                            ),
                                        },
                                    ].map((item) => (
                                        <div
                                            key={item.value}
                                            className="flex items-center"
                                        >
                                            <input
                                                type="checkbox"
                                                id={`facility-${item.value}`}
                                                name="facilities"
                                                value={item.value}
                                                checked={selectedFacilities.includes(
                                                    item.value
                                                )}
                                                onChange={() =>
                                                    toggleFacility(item.value)
                                                }
                                                className="hidden"
                                            />
                                            <label
                                                htmlFor={`facility-${item.value}`}
                                                className={`border rounded-md py-2 text-center transition hover:bg-birumuda2 hover:text-white w-full cursor-pointer ${
                                                    selectedFacilities.includes(
                                                        item.value
                                                    )
                                                        ? "bg-birumuda2 text-white"
                                                        : ""
                                                }`}
                                            >
                                                {item.icon} {item.value}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="py-2 w-full bg-birumuda2 rounded-2xl mt-6 font-bold text-white hover:bg-biru transition duration-300 flex items-center justify-center"
                            >
                                <FaSearch className="mr-2" /> Cari
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}
