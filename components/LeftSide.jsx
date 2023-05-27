import React from "react";
import bannerAnimes from "../lib/BannerAnimes.js";
import Animes from "../lib/Animes.js";

const LeftSide = () => {

    return (
        <>
            <div className="w-full min-h-screen flex flex-col gap-2">
                <h1 className="text-2xl">Recently Updated</h1>
                <div className="p-2 grid grid-cols-5 gap-4 cursor-pointer">
                    {Animes.map((anime) => (
                        <div className="relative flex flex-col items-center" key={anime.name}>
                            <div className="w-40 h-44">
                                <img
                                    src={anime.image_url}
                                    alt={anime.name}
                                    className="h-full w-full object-cover"
                                />
                                <div
                                    className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out bg-black bg-opacity-50 hover:opacity-100">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-12 w-12 text-white opacity-75 cursor-pointer hover:opacity-100"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 3l14 9-14 9V3z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="mt-2">
                                <p className="text-center text-sm hover:text-gray-300">{anime.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );


};

export default LeftSide;
