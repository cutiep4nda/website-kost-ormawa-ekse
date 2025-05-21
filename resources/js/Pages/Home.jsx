import React from "react";
import { Link } from "@inertiajs/react";
import CardPremium from "../Components/CardPremium";
import CardBiasa from "../Components/CardBiasa";
import CardDaerah from "../Components/CardDaerah";
import Navbar from "../Components/Navbar";
import { FaLocationDot } from "react-icons/fa6";
import { LuTextSearch } from "react-icons/lu";
import Footer from "../Components/Footer";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Home() {
    const settings = {
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                stagePadding: 0,
            },
            480: {
                items: 2,
                stagePadding: 50,
            },
        },
        nav: false,
        dots: true,
        dotsSpeed: 500,
        center: true,
        autoWidth: true,
        margin: 50,
    };
    const settingsBiasa = {
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplaySpeed: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 4,
                stagePadding: 0,
            },
            480: {
                items: 4,
                stagePadding: 0,
            },
        },
        nav: false,
        dots: true,
        dotsSpeed: 500,
        center: true,
        autoWidth: true,
        margin: 20,
    };
    return (
        <div className="">
            {/*{/* <!-- Buat Mobile  */}
            <div></div>
            {/*{/* <!-- Buat desktop  */}
            {/*{/* <!-- Bagian 1  */}
            <div className="h-auto lg:h-screen flex flex-col">
                {/* Navbar */}
                <Navbar />

                {/* Hero Content */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-3 items-center px-4 md:px-10 py-6 gap-6">
                    {/* Bagian Kiri */}
                    <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-5 items-center gap-4">
                        <div
                            className="md:col-span-2 flex justify-center"
                            data-aos="fade-right"
                            data-aos-duration="800"
                        >
                            <img
                                src="img/logo/sakarsa.png"
                                alt=""
                                className="w-3/4 md:w-full max-w-xs"
                            />
                        </div>
                        <div
                            className="md:col-span-3 flex flex-col gap-4 px-2 md:px-4"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            <p className="text-birutua1 font-bold text-3xl md:text-5xl text-center md:text-left">
                                Risbang Investigation
                            </p>
                            <p className="text-birutua1 text-justify text-sm md:text-base">
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

                    {/* Bagian Kanan */}
                    <div
                        className="md:col-span-1 md:flex flex-col items-center text-center gap-3 hidden"
                        data-aos="fade-left"
                        data-aos-duration="800"
                    >
                        <p className="font-bold text-birutua1 text-base md:text-lg">
                            Mau cari Kos???
                        </p>
                        <p className="text-birutua1 text-sm">
                            Cari dulu daerahnya
                        </p>

                        <div className="flex items-center gap-3 px-2 py-4 w-full max-w-xs sm:max-w-sm md:max-w-md">
                            <div className="flex items-center bg-biru text-birumuda2 border border-birumuda1 rounded-lg px-2 py-1 w-full shadow-sm">
                                <LuTextSearch className="text-2xl md:text-3xl mx-2 text-white" />
                                <input
                                    type="text"
                                    placeholder="Sekitaran IPB"
                                    className="outline-none text-sm w-full placeholder-[#fff] text-white bg-transparent font-semibold"
                                />
                                <button className="ml-2 bg-birumuda2 hover:bg-birutua2 text-white text-xs md:text-sm px-3 py-1 rounded-lg transition duration-300 font-semibold">
                                    Cari
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*    <!-- Bagiann 2  */}
            <div
                class="flex flex-col items-center gap-4 md:mt-10 mt-20 px-10 justify-center"
                data-aos="fade-up"
                data-aos-duration="800"
            >
                <OwlCarousel className="owl-theme" {...settings}>
                    <CardPremium link="premium"></CardPremium>
                    <CardPremium link="premium"></CardPremium>
                    <CardPremium link="premium"></CardPremium>
                    <CardPremium link="premium"></CardPremium>
                </OwlCarousel>

                <div class="">
                    <a href="#" class="hover:text-blue-400">
                        Lihat Semua Rekomendasi
                    </a>
                </div>
            </div>

            <hr class="border-2 border-slate-400 my-6" />

            {/*    <!-- Bagian 3  */}
            <div className="px-3 md:px-10 flex flex-col gap-6">
                <div
                    className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    <p className="font-bold text-2xl md:text-4xl">
                        Pilihan lainnya
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-sm md:text-base">
                        <Link
                            href="/semua"
                            className="text-blue-600 hover:underline"
                        >
                            Lihat semua
                        </Link>
                        <p>kiri</p>
                        <p>kanan</p>
                    </div>
                </div>

                <div
                    className="w-full "
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    <div className="sm:block hidden">
                        <OwlCarousel className="owl-theme" {...settingsBiasa}>
                            <CardBiasa />
                            <CardBiasa />
                            <CardBiasa />
                            <CardBiasa />
                            <CardBiasa />
                            <CardBiasa />
                        </OwlCarousel>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:gap-4 gap-3 sm:hidden">
                        <CardBiasa />
                        <CardBiasa />
                        <CardBiasa />
                        <CardBiasa />
                    </div>
                </div>
            </div>

            <hr class="border-2 border-slate-400 my-6" />

            {/*    <!-- Bagian 4  */}

            <div className="px-3 md:px-10 flex flex-col gap-6">
                <div
                    className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    <p className="font-bold text-2xl md:text-4xl">
                        Pilihan kos di{" "}
                        <span class="text-blue-500 font-bold">Daerah ^</span>
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-sm md:text-base">
                        <Link
                            href="/semua"
                            className="text-blue-600 hover:underline"
                        >
                            Lihat semua
                        </Link>
                        <p>kiri</p>
                        <p>kanan</p>
                    </div>
                </div>

                <div
                    className="w-full "
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    <div className="sm:block hidden">
                        <OwlCarousel className="owl-theme" {...settingsBiasa}>
                            <CardBiasa />
                            <CardBiasa />
                            <CardBiasa />
                            <CardBiasa />
                            <CardBiasa />
                            <CardBiasa />
                        </OwlCarousel>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:gap-4 gap-3 sm:hidden">
                        <CardBiasa />
                        <CardBiasa />
                        <CardBiasa />
                        <CardBiasa />
                    </div>
                </div>
            </div>
            <hr class="border-2 border-slate-400 my-6" />
            {/*{/* <!-- Bagian 5  */}
            <div class="px-4 md:px-10 flex flex-col gap-6 mb-10">
                <p
                    class="font-bold text-4xl"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    Daerah Kos Populer
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:gap-4 gap-3">
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
            <Footer></Footer>

            {/* <div class="h-screen"></div> */}
        </div>
    );
}
