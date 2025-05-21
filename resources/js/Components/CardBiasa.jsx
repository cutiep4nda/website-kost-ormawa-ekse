import { Link } from "@inertiajs/react";
import { FaLocationDot } from "react-icons/fa6";
import React from "react";

export default function CardBiasa() {
    return (
        <Link
            className="Card hover:-translate-y-2 transition duration-500 group"
            href="/kost/5"
            data-aos="fade-up"
            data-aos-duration="800"
        >
            <div className="max-w-lg bg-[#B8F2FF] rounded-xl overflow-hidden shadow-md ">
                {/*    <!-- Gambar kos  */}
                <div className="relative">
                    <div className="">
                        <img
                            src={`${window.location.origin}/img/gambar/kos.jpeg`}
                            alt="Kosan"
                            className="w-full object-cover group-hover:scale-110 transition duration-1000 overflow-hidden aspect-video"
                        />
                    </div>

                    {/*    <!-- Label Putra/Putri  */}
                    <span className="absolute bottom-2 left-2 bg-white text-black text-xs font-semibold px-2 py-1 rounded shadow">
                        Putra
                    </span>
                </div>

                {/*    <!-- Konten  */}
                <div className="p-3 md:space-y-2">
                    <h3 className="text-lg font-bold text-black line-clamp-1">
                        Nama Kosan Nama Kosan
                    </h3>

                    <p className="flex items-center text-sm text-black font-semibold">
                        <FaLocationDot className="mr-1" />
                        Nama daerah
                    </p>

                    <p className="text-sm text-gray-700 line-clamp-2">
                        Kamar mandi dalam, WiFi, AC, Kasur
                    </p>

                    <p className="text-md text-black font-semibold">
                        Rp.1.000.000{" "}
                        <span className="text-sm text-gray-600">/bulan</span>
                    </p>
                </div>
            </div>
        </Link>
    );
}
