import React from "react";
import { Link } from "@inertiajs/react";
import { FaLocationDot } from "react-icons/fa6";

export default function CardKos(props) {
    const data = props.data;

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
    // console.log("Processed images:", imageArray);

    let fasilitas = [];
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
        .map(([key]) => fasilitasMapping[key] || key); // Gunakan mapping, jika tidak ada kembalikan key asli

    const formatRupiah = (price) => {
        return `Rp. ${Number(price).toLocaleString("id-ID")}`;
    };
    // console.log(data);
    return (
        <Link
            className="w-full flex gap-5 rounded-2xl overflow-hidden"
            href={`/kost/${data.id}`}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay={props.delay}
        >
            <div className="w-1/2 flex justify-center">
                <img
                    src={`${window.location.origin}/storage/${imageArray[0]}`}
                    alt=""
                    className="rounded-2xl h-48 w-full object-cover"
                />
            </div>
            <div className="flex-1">
                <h1 className=" bg-slate-200 text-black text-md font-semibold px-2 py-1 rounded-lg shadow-md inline-block mb-2">
                    {data.jenis}
                </h1>
                <h3 className="text-lg font-bold text-black">{data.nama}</h3>

                <p className="flex items-center text-sm text-black font-semibold mt-1">
                    {/*    <!-- Icon lokasi (pakai react-icons atau Heroicons di project sebenarnya)  */}
                    <FaLocationDot className="mr-1"></FaLocationDot>{" "}
                    {data.daerah}
                </p>

                <p className="text-sm text-gray-600 mt-1">
                    {fasilitasTersedia.slice(0, 4).join(", ")}
                    {fasilitasTersedia.length > 4 && "..."}
                </p>
                <p className="text-md text-black font-semibold mt-1">
                    {formatRupiah(data.harga)} / bulan
                </p>
            </div>
        </Link>
    );
}
