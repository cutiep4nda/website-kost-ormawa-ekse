import { Link } from "@inertiajs/react";
import React from "react";

export default function CardDaerah(props) {
    return (
        <Link class="Card Daerah" href="semua">
            <div class="max-w-lg aspect-square bg-[#B8F2FF] rounded-xl overflow-hidden shadow-md flex items-center justify-center hover:bg-blue-500 transition duration-300">
                <p class="font-bold text-xl">{props.daerah}</p>
            </div>
        </Link>
    );
}
