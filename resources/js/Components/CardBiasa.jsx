import { Link } from "@inertiajs/react";
import { FaLocationDot } from "react-icons/fa6";
import React from "react";

export default function CardBiasa() {
    return (
        <Link
            class="Card hover:-translate-y-2 transition duration-500 group"
            href="/kos"
        >
            <div class="max-w-lg bg-[#B8F2FF] rounded-xl overflow-hidden shadow-md">
                {/*    <!-- Gambar kos  */}
                <div class="relative">
                    <div className="">
                        <img
                            src={`${window.location.origin}/img/gambar/kos.jpeg`}
                            alt="Kosan"
                            class="w-full h-48 object-cover group-hover:scale-110 transition duration-1000 overflow-hidden"
                        />
                    </div>

                    {/*    <!-- Label Putra/Putri  */}
                    <span class="absolute bottom-2 left-2 bg-white text-black text-xs font-semibold px-2 py-1 rounded shadow">
                        Putra
                    </span>
                </div>

                {/*    <!-- Konten  */}
                <div class="p-4">
                    <h3 class="text-lg font-bold text-black">
                        Nama Kosan Nama Kosan
                    </h3>

                    <p class="flex items-center text-sm text-black font-semibold mt-1">
                        {/*    <!-- Icon lokasi (pakai react-icons atau Heroicons di project sebenarnya)  */}
                        <FaLocationDot className="mr-1"></FaLocationDot> Nama
                        daerah
                    </p>

                    <p class="text-sm text-gray-600 mt-1">
                        Kamar mandi dalam, WiFi, AC, Kasur
                    </p>
                    <p class="text-md text-black font-semibold mt-1">
                        Rp.1.000.000/bulan
                    </p>
                </div>
            </div>
        </Link>
    );
}
