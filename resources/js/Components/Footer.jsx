import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "@inertiajs/react";

export default function Footer() {
    return (
        <div className="bg-primary1 flex justify-center">
            <div className="bg-birumuda1 mb-16 md:mb-0 py-6 w-full flex flex-col md:flex-row md:justify-between items-center font-montserrat md:px-10 xxl:px-0 max-w-[1300px]">
                <div className="kiri flex flex-col md:flex-row items-center md:items-start ">
                    <img
                        src={`${window.location.origin}/img/logo/sakarsa.png`}
                        alt=""
                        className="w-24 object-cover md:mb-0"
                    />
                    <div className="text-center md:text-left">
                        <h1 className="text-birutua1 md:text-xl text-lg mb-2">
                            Dikembangkan oleh
                        </h1>
                        <h1 className="text-birutua1 md:text-3xl text-2xl font-extrabold">
                            Biro Riset Pengembangan
                        </h1>
                        <h1 className="text-birutua1 md:text-2xl text-xl font-light">
                            Ormawa PKU IPB 2024/2025
                        </h1>
                    </div>
                </div>
                <div className="Kanan flex flex-col items-center md:items-start gap-4 text-birutua1 mr-4 mt-4 md:mt-0">
                    <h1 className="font-semibold font-montserrat text-xl text-center md:text-left">
                        Hubungi Kami
                    </h1>
                    <div className="flex gap-4 justify-center md:justify-start">
                        <a
                            href="https://instagram.com/ormawaeksekutifpku"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram className="text-4xl bg-primary1 p-1.5 rounded-full text-birutua1 font-bold hover:bg-birutua1 transition duration-300 hover:text-birumuda1" />
                        </a>
                        <a
                            href="https://x.com/ormawaeksepku"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaXTwitter className="text-4xl bg-primary1 p-1.5 rounded-full text-birutua1 font-bold hover:bg-birutua1 transition duration-300 hover:text-birumuda1" />
                        </a>
                        <a
                            href="https://tiktok.com/@ormawaeksekutifpku"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaTiktok className="text-4xl bg-primary1 p-1.5 rounded-full text-birutua1 font-bold hover:bg-birutua1 transition duration-300 hover:text-birumuda1" />
                        </a>
                        <a
                            href="https://youtube.com/@ormawaeksekutifpkuipb"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaYoutube className="text-4xl bg-primary1 p-1.5 rounded-full text-birutua1 font-bold hover:bg-birutua1 transition duration-300 hover:text-birumuda1" />
                        </a>
                        <a href="mailto:eksekutifpku@apps.ipb.ac.id">
                            <MdEmail className="text-4xl bg-primary1 p-1.5 rounded-full text-birutua1 font-bold hover:bg-birutua1 transition duration-300 hover:text-birumuda1" />
                        </a>
                        <a href="https://wa.me/+6281367809725">
                            <FaWhatsapp className="text-4xl bg-primary1 p-1.5 rounded-full text-birutua1 font-bold hover:bg-birutua1 transition duration-300 hover:text-birumuda1" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
