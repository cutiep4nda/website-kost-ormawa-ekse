import { Link } from "@inertiajs/react";
import React, { useState } from "react";
import { LuTextSearch } from "react-icons/lu";

export default function Navbar() {
    const [showFilter, setShowFilter] = useState(false);
    const [selectedGender, setSelectedGender] = useState("");
    const [selectedFacilities, setSelectedFacilities] = useState([]);
    const toggleFacility = (facility) => {
        setSelectedFacilities((prev) =>
            prev.includes(facility)
                ? prev.filter((item) => item !== facility)
                : [...prev, facility]
        );
    };

    return (
        <div className="bg-birumuda1 w-full px-4 sm:px-6 md:px-10 py-3 md:py-0 ">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 h-full relative">
                {/* Logo & Title */}
                <Link className="flex gap-3 items-center" href="/">
                    <img
                        src={`${window.location.origin}/img/logo/sakarsa.png`}
                        alt=""
                        className="h-20 sm:h-24 object-contain"
                    />
                    <p className="font-bold text-birutua2 text-2xl">
                        Sakarsa Kos
                    </p>
                </Link>

                {/* Search & Filter */}
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
                    <div className="flex items-center bg-white border border-[#B8F2FF] rounded-full px-2 py-1 w-full sm:w-[300px] md:w-[400px] shadow-sm">
                        <LuTextSearch className="text-2xl mx-2 text-biru" />
                        <input
                            type="text"
                            placeholder="Sekitaran IPB"
                            className="outline-none text-sm w-full placeholder-birumtext-birumuda2 text-birutua1 bg-transparent"
                        />
                        <button className="ml-2 bg-birumuda2 hover:bg-biru text-white text-sm px-3 py-1 rounded-full transition duration-300">
                            Cari
                        </button>
                    </div>

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

                        {/* Jenis Kos */}
                        <div className="grid grid-cols-3 gap-4">
                            {["Putra", "Putri", "Campur"].map((gender) => (
                                <button
                                    key={gender}
                                    onClick={() => setSelectedGender(gender)}
                                    className={`border rounded-md py-2 text-center text-sm transition hover:bg-birumuda2 hover:text-white ${
                                        selectedGender === gender
                                            ? "bg-birumuda2 text-white"
                                            : ""
                                    }`}
                                >
                                    {gender === "Putra" && "👦"}
                                    {gender === "Putri" && "👧"}
                                    {gender === "Campur" && "👥"}
                                    {` ${gender}`}
                                </button>
                            ))}
                        </div>

                        <hr className="my-6" />

                        {/* Harga */}
                        <div>
                            <label className="block text-sm font-medium mb-4">
                                Harga
                            </label>
                            <div className="flex gap-6">
                                <input
                                    type="number"
                                    placeholder="Minimal"
                                    className="border rounded px-2 py-1 w-full text-sm"
                                />
                                <span className="text-gray-500">-</span>
                                <input
                                    type="number"
                                    placeholder="Maksimal"
                                    className="border rounded px-2 py-1 w-full text-sm"
                                />
                            </div>
                        </div>

                        <hr className="my-6" />

                        {/* Fasilitas */}
                        <div>
                            <label className="block text-sm font-medium mb-4">
                                Fasilitas Kamar
                            </label>
                            <div className="grid grid-cols-3 gap-4 text-xs text-center">
                                {[
                                    "K. Mandi Dalam",
                                    "AC",
                                    "Kasur",
                                    "Lemari",
                                    "Wifi",
                                    "Kipas",
                                ].map((facility) => (
                                    <button
                                        key={facility}
                                        onClick={() => toggleFacility(facility)}
                                        className={`border rounded-md py-2 transition hover:bg-birumuda2 hover:text-white ${
                                            selectedFacilities.includes(
                                                facility
                                            )
                                                ? "bg-birumuda2 text-white"
                                                : ""
                                        }`}
                                    >
                                        {facility}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button className="py-2 w-full bg-birumuda2 rounded-2xl mt-6 font-bold text-white hover:bg-biru transition duration-300">
                            Cari
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
