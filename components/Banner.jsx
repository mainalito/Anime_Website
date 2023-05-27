import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ".././src/App.css"
import BannerAnimes from "../lib/BannerAnimes.js";
import {AiFillPlayCircle} from 'react-icons/ai'

const Banner = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000  // 5000ms = 5s
    };
    function getNthHighestViews(animes, n) {
        const sortedAnimes = animes.sort((a, b) => b.views - a.views);
        return sortedAnimes[n - 1]?.views || 0;
    }


    return (
        <>
        <div className="bg-black text-white max-h-[480px] overflow-hidden">
            <Slider {...settings}>
                {BannerAnimes.map((anime) => (
                    <div key={anime.name} className="flex bg-gray-900 shadow-lg rounded-lg ">
                        <div className="flex flex-row-reverse">
                            <div className="w-2/3">
                                <img className="h-full w-full object-cover" src={anime.image_url} alt={anime.name}/>
                            </div>

                            <div className="w-1/3 p-4 flex flex-col mt-16 gap-y-5 items-start cursor-pointer">
                                <h1 className={`text-5xl tracking-wider font-bold ${anime.views >= getNthHighestViews(BannerAnimes, 3) ? 'gradient-pulse' : ''}`}>
                                    {anime.title}
                                </h1>

                                <p className="mt-4">
                                    {anime.description?.split(" ").slice(0, 20).join(" ")}
                                    {anime.description?.split(" ").length > 20 ? "..." : ""}
                                </p>
                                <button className="bg-purple-600 hover:bg-purple-700 text-lg px-3.5 py-1 tracking-wide rounded-md font-bold flex items-center">
                                    PLAY NOW <AiFillPlayCircle className="ml-1.5" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
        </>


    );
};

export default Banner;
