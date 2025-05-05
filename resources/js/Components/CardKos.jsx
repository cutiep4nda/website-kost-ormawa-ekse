import React from "react";
import { Link } from "@inertiajs/react";
import { FaLocationDot } from "react-icons/fa6";

export default function CardKos() {
    return (
        <Link
            className="w-full flex gap-5 rounded-2xl overflow-hidden"
            href="/kos"
        >
            <div className="w-1/2 flex justify-center">
                <img
                    src="img/gambar/kos.jpeg"
                    alt=""
                    className="rounded-2xl h-full object-cover"
                />
            </div>
            <div class="flex-1">
                <h1 class=" bg-slate-200 text-black text-lg font-semibold px-2 py-1 rounded-lg shadow-md inline-block mb-2">
                    Putra
                </h1>
                <h3 class="text-lg font-bold text-black">
                    Nama Kosan Nama Kosan
                </h3>

                <p class="flex items-center text-sm text-black font-semibold mt-1">
                    {/*    <!-- Icon lokasi (pakai react-icons atau Heroicons di project sebenarnya)  */}
                    <FaLocationDot className="mr-1"></FaLocationDot> Nama daerah
                </p>

                <p class="text-sm text-gray-600 mt-1">
                    Kamar mandi dalam, WiFi, AC, Kasur
                </p>
                <p class="text-md text-black font-semibold mt-1">
                    Rp.1.000.000/bulan
                </p>
            </div>
        </Link>
    );
}
