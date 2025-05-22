import { Link } from "@inertiajs/react";
import React from "react";

export default function CardDaerah(props) {
    // console.log(props);
    return (
        <Link
            className="Card Daerah"
            href={`/daerah/${props.data.daerah}`}
            data-aos="fade-up"
            data-aos-duration="800"
        >
            <div className="max-w-lg aspect-square bg-[#B8F2FF] rounded-xl overflow-hidden shadow-md flex items-center justify-center hover:bg-blue-500 transition duration-300">
                <p className="font-bold text-xl">{props.data.daerah}</p>
            </div>
        </Link>
    );
}
