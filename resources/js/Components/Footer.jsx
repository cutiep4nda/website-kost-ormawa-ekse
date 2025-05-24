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
        <div className="bg-[#102542] py-12 px-6 sm:px-8 border-t-2 border-[#16cdd8]">
            <div className="max-w-6xl mx-auto">
                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
                    {/* Brand Section */}
                    <div className="lg:col-span-5 flex flex-col md:flex-row items-center gap-6">
                        <img
                            src={`${window.location.origin}/img/logo/sakarsa.png`}
                            alt="Sakarsa Logo"
                            className="w-24 h-24 object-contain"
                        />
                        <div className="text-center md:text-left">
                            <p className="text-[#b8f2ff] text-sm font-medium mb-1">
                                DIKEMBANGKAN OLEH
                            </p>
                            <h3 className="text-white text-xl font-bold mb-1">
                                Biro Riset Pengembangan
                            </h3>
                            <p className="text-[#b8f2ff] text-sm">
                                Ormawa Eksekutif PKU IPB 2024/2025
                            </p>
                        </div>
                    </div>

                    {/* Social Media Section */}
                    <div className="lg:col-span-7">
                        <div className="flex flex-col items-center md:items-end h-full justify-between">
                            <h3 className="text-white text-lg font-semibold mb-4 self-center md:self-end">
                                HUBUNGI KAMI
                            </h3>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a
                                    href="https://instagram.com/ormawaeksekutifpku"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full bg-[#003459] flex items-center justify-center hover:bg-[#16cdd8] transition-all duration-300 group"
                                >
                                    <FaInstagram className="text-xl text-white group-hover:scale-110 transition-transform" />
                                </a>
                                <a
                                    href="https://x.com/ormawaeksepku"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full bg-[#003459] flex items-center justify-center hover:bg-[#16cdd8] transition-all duration-300 group"
                                >
                                    <FaXTwitter className="text-xl text-white group-hover:scale-110 transition-transform" />
                                </a>
                                <a
                                    href="https://tiktok.com/@ormawaeksekutifpku"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full bg-[#003459] flex items-center justify-center hover:bg-[#16cdd8] transition-all duration-300 group"
                                >
                                    <FaTiktok className="text-xl text-white group-hover:scale-110 transition-transform" />
                                </a>
                                <a
                                    href="https://youtube.com/@ormawaeksekutifpkuipb"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full bg-[#003459] flex items-center justify-center hover:bg-[#16cdd8] transition-all duration-300 group"
                                >
                                    <FaYoutube className="text-xl text-white group-hover:scale-110 transition-transform" />
                                </a>
                                <a
                                    href="mailto:eksekutifpku@apps.ipb.ac.id"
                                    className="w-12 h-12 rounded-full bg-[#003459] flex items-center justify-center hover:bg-[#16cdd8] transition-all duration-300 group"
                                >
                                    <MdEmail className="text-xl text-white group-hover:scale-110 transition-transform" />
                                </a>
                                <a
                                    href="https://wa.me/+6281367809725"
                                    className="w-12 h-12 rounded-full bg-[#003459] flex items-center justify-center hover:bg-[#16cdd8] transition-all duration-300 group"
                                >
                                    <FaWhatsapp className="text-xl text-white group-hover:scale-110 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="pt-6 border-t border-[#248da8]">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-[#b8f2ff] text-xs md:text-sm text-center md:text-left">
                            © {new Date().getFullYear()} Biro Riset Pengembangan
                            - Ormawa Eksekutif PKU IPB
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
