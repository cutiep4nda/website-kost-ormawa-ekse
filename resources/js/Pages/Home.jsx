import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { LuTextSearch } from "react-icons/lu";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function Home() {
    return (
        <div className="text-red-600 text-4xl">
            <p>TEST</p>
            <p className="text-7xl text-biru">
                <LuTextSearch className="hover:text-primary transition duration-300" />
                <FaLocationDot />
                <IoMdArrowRoundBack />
                <IoMdArrowRoundForward />
            </p>
        </div>
    );
}
