import React from "react";
import BannerAnimes from "../lib/BannerAnimes.js";
import {AiFillEye} from 'react-icons/ai/'

const RightSide = () => {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
                <h1 className="text-xl">Top Anime</h1>
                <div className="flex items-center justify-center gap-2 cursor-pointer bg-black px-0.5 py-1 rounded-md">
                    <span className="text-sm bg-purple-900 px-1.5 py-1 hover:bg-purple-700 rounded-md">Day</span>
                    <span className="text-sm  hover:bg-gray-500 px-1.5 py-1 rounded-md">Week</span>
                    <span className="text-sm  hover:bg-gray-500 px-1.5 py-1 rounded-md">Month</span>
                </div>
            </div>
            <div className="bg-black text-white min-h-screen rounded-lg ">

                <div className=" p-2 flex flex-col gap-4 ">
                    {BannerAnimes
                        .sort((a, b) => b.views - a.views)
                        .map((anime) => (
                            <div
                                className="flex  items-center gap-4 bg-slate-900 hover:bg-slate-800 p-1 cursor-pointer rounded-md"
                                key={anime.name}>
                                <div className="w-16 h-20">
                                    <img
                                        src={anime.image_url}
                                        alt={anime.title}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="mt-2 flex flex-col gap-y-1.5">
                                    <p className="text-center text-sm">{anime.title}</p>
                                    <div className="flex  items-center gap-x-1 text-gray-500">
                                        <AiFillEye/>
                                        <span className="text-[11px]">{anime.views.toLocaleString()} </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default RightSide;
