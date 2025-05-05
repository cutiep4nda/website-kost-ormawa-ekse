import { Link } from "@inertiajs/react";
import React from "react";

export default function CardPremium() {
    return (
        <Link class="Card" href="/Premium">
            <div class="max-w-lg bg-white rounded-xl overflow-hidden shadow-md">
                {/*    <!-- Gambar kos  */}
                <div class="relative">
                    <img
                        src="img/gambar/kos.jpeg"
                        alt="Kosan"
                        class="w-full h-48 object-cover"
                    />

                    {/*    <!-- Label Putra/Putri  */}
                    <span class="absolute bottom-2 left-2 bg-white text-black text-xs font-semibold px-2 py-1 rounded shadow">
                        Putra
                    </span>
                </div>

                {/*    <!-- Konten  */}
                <div class="p-4">
                    <h3 class="text-lg font-semibold text-black">
                        Nama Kosan Nama Kosan
                    </h3>

                    <p class="flex items-center text-sm text-black font-semibold mt-1">
                        {/*    <!-- Icon lokasi (pakai react-icons atau Heroicons di project sebenarnya)  */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4 mr-1 text-black"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z"
                            />
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 22s8-4.5 8-10c0-4.418-3.582-8-8-8S4 7.582 4 12c0 5.5 8 10 8 10z"
                            />
                        </svg>
                        Nama daerah
                    </p>

                    <p class="text-sm text-gray-600 mt-1">
                        Kamar mandi dalam, WiFi, AC, Kasur
                    </p>
                </div>
            </div>
        </Link>
    );
}
