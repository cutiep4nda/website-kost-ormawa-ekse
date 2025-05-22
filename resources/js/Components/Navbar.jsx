import { useState, useEffect } from "react";
import { Link, router } from "@inertiajs/react";
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

export default function Navbar({ initialFilters = {} }) {
    // Set up state with initial values from URL if available
    const [showFilter, setShowFilter] = useState(false);
    const [selectedGender, setSelectedGender] = useState(
        initialFilters.gender || ""
    );
    const [selectedFacilities, setSelectedFacilities] = useState(
        initialFilters.facilities || []
    );
    const [minPrice, setMinPrice] = useState(initialFilters.min_price || "");
    const [maxPrice, setMaxPrice] = useState(initialFilters.max_price || "");
    const [searchTerm, setSearchTerm] = useState(initialFilters.search || "");
    const [isLoading, setIsLoading] = useState(false);
    
    const Daerah = [
        {
            id:"",
            nama:"",
        }
    ]
    const [selectedDaerah, setSelectedDaerah] = useState(Daerah[0]);
    

    // Function to toggle facility selection
    const toggleFacility = (facility) => {
        setSelectedFacilities((prev) =>
            prev.includes(facility)
                ? prev.filter((item) => item !== facility)
                : [...prev, facility]
        );
    };
    

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Create the filter object with only non-empty values
        const filters = {
            search: searchTerm || "",
            gender: selectedGender || "",
            min_price: minPrice || 0,
            max_price: maxPrice || 0,
            facilities: [],
            daerah : selectedDaerah,
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
                setShowFilter(false); // Close filter panel after submission
            },
        });
        router.post("/filter", filters, {
            onFinish: () => {
                setIsLoading(false);
                setShowFilter(false); // Close filter panel after submission
            },
        });
    };

    // Reset filter function
    const resetFilters = () => {
        setSelectedGender("");
        setSelectedFacilities([]);
        setMinPrice("");
        setMaxPrice("");
        setSearchTerm("");
    };
    useEffect(() => {
        console.log({
            searchTerm,
            selectedGender,
            minPrice,
            maxPrice,
            selectedFacilities,
        });
    }, [searchTerm, selectedGender, minPrice, maxPrice, selectedFacilities]);

    return (
        <div className="bg-birumuda1 w-full px-4 sm:px-6 md:px-10 py-3 md:py-0">
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
                            className="ml-2 bg-birumuda2 hover:bg-biru text-white text-sm px-3 py-1 rounded-full transition duration-300 flex items-center"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <span className="inline-block animate-spin mr-1">
                                    ⟳
                                </span>
                            ) : null}
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
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="font-semibold">Filter</h2>
                            <button
                                onClick={resetFilters}
                                className="text-xs text-gray-500 hover:text-birumuda2"
                            >
                                Reset Filter
                            </button>
                        </div>

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
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <span className="inline-block animate-spin mr-2">
                                        ⟳
                                    </span>
                                ) : (
                                    <FaSearch className="mr-2" />
                                )}
                                {isLoading ? "Mencari..." : "Cari"}
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}
