import { Link } from "@inertiajs/react";
import { FaLocationDot } from "react-icons/fa6";
import React from "react";

export default function CardBiasa(props) {
    const data = props.data;
    // console.log(data.jenis.jenis);

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

    const fasilitasMapping = {
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

    const fasilitasTersedia = Object.entries(data)
        .filter(
            ([key, value]) =>
                value === 1 &&
                !["id", "jenis_id", "daerah_id", "pemilik_id"].includes(key)
        )
        .map(([key]) => fasilitasMapping[key] || key);
    const formatRupiah = (price) => {
        return `Rp. ${Number(price).toLocaleString("id-ID")}`;
    };
    return (
        <Link
            className="Card hover:-translate-y-2 transition duration-500 group max-w-96"
            href={`/kost/${data.id}`}
            data-aos="fade-up"
            data-aos-duration="800"
        >
            <div className="max-w-lg bg-[#B8F2FF] rounded-xl overflow-hidden shadow-md ">
                {/*    <!-- Gambar kos  */}
                <div className="relative">
                    <div className="">
                        <img
                            src={`${window.location.origin}/storage/${imageArray[0]}`}
                            alt="Kosan"
                            className="w-full max-h-40 object-cover group-hover:scale-110 transition duration-1000 overflow-hidden aspect-video"
                        />
                    </div>

                    {/*    <!-- Label Putra/Putri  */}
                    <span className="absolute bottom-2 left-2 bg-white text-black text-xs font-semibold px-2 py-1 rounded shadow">
                        {data.jenis}
                    </span>
                </div>

                {/*    <!-- Konten  */}
                <div className="p-3 md:space-y-2">
                    <h3 className="text-lg font-bold text-black line-clamp-1">
                        {data.nama}
                    </h3>

                    <p className="flex items-center text-sm text-black font-semibold">
                        <FaLocationDot className="mr-1" />
                        {data.daerah}
                    </p>

                    <p className="text-sm text-gray-700 mt-1 line-clamp-1">
                        {fasilitasTersedia.slice(0, 4).join(", ")}
                        {fasilitasTersedia.length > 4 && "..."}
                    </p>

                    <p className="text-md text-black font-semibold">
                        {formatRupiah(data.harga)}
                        <span className="text-sm text-gray-600">/bulan</span>
                    </p>
                </div>
            </div>
        </Link>
    );
}
