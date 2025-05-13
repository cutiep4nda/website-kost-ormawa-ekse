import React from "react";
import CardBiasa from "../Components/CardBiasa";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "@inertiajs/react";

export default function Kos() {
    return (
        <div>
            <Navbar></Navbar>
            <div className="px-14 py-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-14">
                {/* Kolom Kiri: Info Kos */}
                <div className="lg:col-span-2 space-y-4">
                    {/* Gambar utama */}
                    <div className="bg-gray-300 h-80 rounded-md" />

                    {/* Nama Kos & Info */}
                    <div>
                        <h1 className="text-2xl font-bold">
                            Nama Kos Nama Kos Nama Kos Nama Kos Nama Kos
                        </h1>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                            <span className="bg-gray-100 px-2 py-1 rounded">
                                Kos Putra
                            </span>
                            <span>• Nama daerah</span>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                            <span className="text-red-500 font-medium text-sm">
                                Tersisa 1 kamar
                            </span>
                        </div>
                    </div>
                    {/* Deskripsi */}
                    <div className="">
                        <h1 className="text-lg font-bold mt-4 text-justify">
                            Deskripsi
                        </h1>
                        <p className="text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Magni accusamus debitis quo aperiam doloribus
                            iure cupiditate et facere eligendi cumque optio,
                            quod atque nostrum repellendus cum, qui amet.
                            Eveniet quidem quis itaque. Temporibus quam, officia
                            sed cumque inventore pariatur perspiciatis
                            exercitationem modi enim magni dolorum impedit sunt
                            laudantium illo doloribus accusamus, nam illum
                            quisquam quas quia suscipit atque iure. Harum vero,
                            neque corrupti blanditiis quisquam unde eos
                            reprehenderit, est velit cupiditate itaque facilis
                            impedit molestias illo porro ab non necessitatibus
                            sit voluptas molestiae corporis exercitationem
                            aspernatur tempora? Provident aperiam saepe rem ex
                            dolor, quasi suscipit at id, facilis, veritatis
                            modi.
                        </p>
                    </div>

                    {/* Fasilitas Kamar */}
                    <div>
                        <h2 className="text-lg font-bold mt-4 mb-2">
                            Fasilitas Kamar
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-2 gap-2 text-lg text-gray-700">
                            <span>📐 3 x 4 meter</span>
                            <span>🛏️ Kasur</span>
                            <span>❄️ AC</span>
                            <span>🗄️ Lemari</span>
                            <span>🛏️ Bantal</span>
                            <span>🌀 Kipas angin</span>
                        </div>
                    </div>

                    {/* Fasilitas Kos */}
                    <div className="pt-4 border-t">
                        <h2 className="text-lg font-bold mt-2 mb-2">
                            Fasilitas Kos
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-2 gap-2 text-lg text-gray-700">
                            <span>🚿 Kamar mandi dalam</span>
                            <span>🍳 Dapur</span>
                            <span>🧊 Kulkas</span>
                            <span>📶 Wifi</span>
                            <span>🛵 Parkir motor</span>
                            <span>🚗 Parkir mobil</span>
                            <span>👩‍💼 Pengurus kos</span>
                        </div>
                    </div>
                </div>

                {/* Kolom Kanan: Harga & Lokasi */}
                <div className="space-y-4">
                    {/* Galeri samping */}
                    <div className="space-y-4">
                        <div className="bg-gray-300 h-40 rounded-md" />
                        <div className="bg-gray-300 h-40 rounded-md flex items-center justify-center text-sm text-gray-700">
                            Lainnya
                        </div>
                    </div>

                    {/* Harga & Kontak */}
                    <div className="bg-white shadow-md p-4 rounded-md">
                        <p className="text-lg font-semibold text-gray-800">
                            Rp. X.xxx.xxx,xx{" "}
                            <span className="text-sm text-gray-500">
                                /bulan
                            </span>
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                            Nama pemilik nama pemilik
                        </p>
                        <div className="mt-4 flex gap-2">
                            <a
                                href="#"
                                className="flex-1 bg-green-500 text-white text-sm text-center py-2 rounded-md"
                            >
                                WhatsApp
                            </a>
                            <a
                                href="#"
                                className="flex-1 bg-gray-800 text-white text-sm text-center py-2 rounded-md"
                            >
                                Telepon pemilik
                            </a>
                        </div>
                    </div>

                    {/* Lokasi */}
                    <div>
                        <h2 className="text-lg font-semibold mb-2">Lokasi</h2>
                        <div className="bg-gray-300 h-40 rounded-md flex items-center justify-center">
                            <span className="text-4xl">📍</span>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="my-4 max-w-7xl mx-auto px-10 " />

            <div class="px-10 flex flex-col gap- max-w-7xl mx-auto mb-10">
                <div class="flex justify-between mb-6">
                    <p class="font-bold text-4xl">
                        Kos di daerah yang sama{" "}
                        <span class="text-blue-500 font-bold">Bateng</span>
                    </p>
                    <div class="flex gap-4">
                        <Link href="/semua">Lihat semua</Link>
                        <p>kiri</p>
                        <p>kanan</p>
                    </div>
                </div>
                <div class="grid grid-cols-3 gap-6">
                    <CardBiasa></CardBiasa>
                    <CardBiasa></CardBiasa>
                    <CardBiasa></CardBiasa>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
}
