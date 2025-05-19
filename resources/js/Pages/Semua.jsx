import React from "react";
import Navbar from "../Components/Navbar";
import CardKos from "../Components/CardKos";
import Footer from "../Components/Footer";

import { IoMdArrowRoundForward } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "@inertiajs/react";

export default function Semua(props) {
    const kost = props.kost;
    // console.log(kost);
    return (
        <div>
            <div className="Desktop">
                <Navbar></Navbar>
                <div className="px-4 md:px-10 font-bold text-3xl mt-4 ">
                    Pilihan Lainnya Di ....
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 px-4 md:px-10 py-6 gap-8 ">
                    {kost.map((value, index) => (
                        <div className="">
                            <CardKos data={value} key={index}></CardKos>
                            <hr className="sm:hidden mt-6" />
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mb-10">
                    <p>Pokoknya paginasi</p>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
}
