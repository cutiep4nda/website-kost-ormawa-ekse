import React from "react";
import { Link } from "@inertiajs/react";
import CardPremium from "../Components/CardPremium";
import CardBiasa from "../Components/CardBiasa";
import CardDaerah from "../Components/CardDaerah";
import Navbar from "../Components/Navbar";
import { FaLocationDot } from "react-icons/fa6";
import { LuTextSearch } from "react-icons/lu";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function Home() {
    return (
        <div className="">
            {/*{/* <!-- Buat Mobile  */}
            <div></div>
            {/*{/* <!-- Buat desktop  */}
            {/*{/* <!-- Bagian 1  */}
            <div class="h-screen flex flex-col">
                {/*{/* <!-- Navbar  */}
                <Navbar></Navbar>

                {/*    <!-- Hero Content  */}
                <div class="flex-1 grid grid-cols-3 items-center">
                    {/*    <!-- Bagian Kiri  */}
                    <div class="col-span-2 grid grid-cols-5 items-center">
                        <div class="col-span-2">
                            <img
                                src="img/logo/sakarsa.png"
                                alt=""
                                class="w-full"
                            />
                        </div>
                        <div class="col-span-3 flex gap-2 px-4 flex-col">
                            <p class="text-birutua1 font-bold text-5xl mb-6">
                                Risbang Investigation
                            </p>
                            <p class="text-birutua1 text-justify">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Laudantium, inventore corrupti
                                aut quos voluptate nesciunt suscipit itaque
                                quod, deserunt commodi eveniet nulla temporibus.
                                Temporibus animi incidunt id a veritatis sed
                                est, repudiandae, nesciunt fugiat obcaecati
                                corrupti. Porro eos consequuntur saepe in quia
                                tempora iure est eius vel pariatur accusantium,
                                aliquid ex incidunt molestias cumque optio
                                explicabo iusto architecto nemo laudantium? Nemo
                                debitis sapiente, facere facilis distinctio
                                officiis provident obcaecati explicabo. Tempore
                                aliquam deserunt aut exercitationem consectetur
                                voluptate officia natus ducimus deleniti. Ex
                                officia saepe, animi illum, ducimus eaque unde
                                quos rerum corrupti sapiente minus ad sit.
                                Beatae vitae quaerat autem.
                            </p>
                        </div>
                    </div>

                    {/*    <!-- Bagian Kanan  */}
                    <div class="col-span-1 flex flex-col items-center">
                        <p class="font-bold text-birutua1 text-lg">
                            Mau cari Kos???
                        </p>
                        <p class="text-birutua1 text-sm">Cari dulu daerahnya</p>
                        <div class="flex items-center gap-6 p-4 w-3/5 max-w-md">
                            {/*    <!-- Search Box  */}
                            <div class="flex items-center bg-biru text-birumuda2 border border-birumuda1 rounded-lg px-2 py-1 w-full shadow-sm">
                                {/*    <!-- Icon (gunakan icon library seperti Heroicons atau lucide-react)  */}
                                <LuTextSearch className="text-3xl mx-2 text-white"></LuTextSearch>

                                <input
                                    type="text"
                                    placeholder="Sekitaran IPB"
                                    class="outline-none text-sm w-full placeholder-[#fff] text-white bg-transparent font-semibold"
                                />

                                <button class="ml-2 bg-birumuda2 hover:bg-birutua2 text-white text-sm px-3 py-1 rounded-lg transition duration-300 font-semibold">
                                    Cari
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*    <!-- Bagiann 2  */}
            <div class="flex flex-col items-center gap-4">
                <CardPremium></CardPremium>

                <div class="">
                    <a href="#" class="hover:text-blue-400">
                        Lihat Semua Rekomendasi
                    </a>
                </div>
            </div>

            <hr class="border-2 border-slate-400 my-6" />

            {/*    <!-- Bagian 3  */}
            <div class="px-10 flex flex-col gap-6">
                <div class="flex justify-between">
                    <p class="font-bold text-4xl">Pilihan lainnya</p>
                    <div class="flex gap-4">
                        <Link href="/semua">Lihat semua</Link>

                        <p>kiri</p>
                        <p>kanan</p>
                    </div>
                </div>
                <div class="grid grid-cols-4 gap-4">
                    <CardBiasa></CardBiasa>
                    <CardBiasa></CardBiasa>
                    <CardBiasa></CardBiasa>
                    <CardBiasa></CardBiasa>
                </div>
            </div>
            <hr class="border-2 border-slate-400 my-6" />

            {/*    <!-- Bagian 4  */}
            <div class="px-10 flex flex-col gap-6">
                <div class="flex justify-between">
                    <p class="font-bold text-4xl">
                        Pilihan kos di{" "}
                        <span class="text-blue-500 font-bold">Daerah ^</span>
                    </p>
                    <div class="flex gap-4">
                        <Link href="/semua">Lihat semua</Link>

                        <p>kiri</p>
                        <p>kanan</p>
                    </div>
                </div>
                <div class="grid grid-cols-4 gap-4">
                    <CardBiasa></CardBiasa>
                    <CardBiasa></CardBiasa>
                    <CardBiasa></CardBiasa>
                    <CardBiasa></CardBiasa>
                </div>
            </div>
            <hr class="border-2 border-slate-400 my-6" />
            {/*{/* <!-- Bagian 5  */}
            <div class="px-10 flex flex-col gap-6">
                <p class="font-bold text-4xl">Daerah Kos Populer</p>
                <div class="grid grid-cols-4 gap-4">
                    <CardDaerah daerah="Bateng"></CardDaerah>
                    <CardDaerah daerah="Bateng"></CardDaerah>
                    <CardDaerah daerah="Bateng"></CardDaerah>
                    <CardDaerah daerah="Bateng"></CardDaerah>
                    <CardDaerah daerah="Bateng"></CardDaerah>
                    <CardDaerah daerah="Bateng"></CardDaerah>
                    <CardDaerah daerah="Bateng"></CardDaerah>
                    <CardDaerah daerah="Bateng"></CardDaerah>
                </div>
            </div>

            <div class="h-screen"></div>
        </div>
    );
}
