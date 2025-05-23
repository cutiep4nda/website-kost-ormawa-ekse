import React from "react";
import Navbar from "../Components/Navbar";
import CardKos from "../Components/CardKos";
import Footer from "../Components/Footer";

import { IoMdArrowRoundForward } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "@inertiajs/react";

export default function Semua(props) {
    const kost = props.data;
    console.log(props);
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <div className="Desktop">
                <Navbar></Navbar>
                <div className="px-4 md:px-10 font-bold text-3xl mt-4 ">
                    Pilihan Kos Bersadarkan Filter
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 px-4 md:px-10 py-6 gap-8">
                    {kost.length > 0 ? (
                        kost.map((value, index) => (
                            <div key={index}>
                                {" "}
                                {/* Pindahkan key ke div terluar */}
                                <CardKos
                                    data={value}
                                    // delay={(index % 2) * 500}
                                />
                                <hr
                                    className="sm:hidden mt-6"
                                    data-aos="fade-up"
                                    data-aos-duration="800"
                                />
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-10">
                            <p className="text-gray-500 text-lg">
                                Tidak ada data
                            </p>
                        </div>
                    )}
                </div>
                <div className="flex justify-center mb-10">
                    <p>Pokoknya paginasi</p>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
}
