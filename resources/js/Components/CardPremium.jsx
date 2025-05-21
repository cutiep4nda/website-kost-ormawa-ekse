import { Link } from "@inertiajs/react";
import React from "react";

export default function CardPremium(props) {
    return (
        <Link className="Card" href={props.link}>
            <div className="md:w-[450px] bg-white rounded-xl overflow-hidden shadow-md">
                {/*    <!-- Gambar kos  */}
                <div className="relative">
                    <img
                        src="img/gambar/kos.jpeg"
                        alt="Kosan"
                        className="w-full h-48 object-cover"
                    />

                    {/*    <!-- Label Putra/Putri  */}
                    <span className="absolute bottom-2 left-2 bg-white text-black text-xs font-semibold px-2 py-1 rounded shadow">
                        Putra
                    </span>
                </div>

                {/*    <!-- Konten  */}
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-black">
                        Nama Kosan Nama Kosan
                    </h3>

                    <p className="flex items-center text-sm text-black font-semibold mt-1">
                        {/*    <!-- Icon lokasi (pakai react-icons atau Heroicons di project sebenarnya)  */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-1 text-black"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 22s8-4.5 8-10c0-4.418-3.582-8-8-8S4 7.582 4 12c0 5.5 8 10 8 10z"
                            />
                        </svg>
                        Nama daerah
                    </p>

                    <p className="text-sm text-gray-600 mt-1">
                        Kamar mandi dalam, WiFi, AC, Kasur
                    </p>
                </div>
            </div>
        </Link>
    );
}
