import React from "react";
import {AiOutlineMenu, AiOutlineSearch} from "react-icons/ai";

const Navbar = () => {
    return (
        <div>
            <div className="flex place-items-center justify-between px-2 shadow-lg py-4 bg-black text-white">
                <div className="flex place-items-center gap-4 cursor-pointer">
                    <AiOutlineMenu className="text-white text-2xl"/>
                    <h1 className="text-purple-600 font-bold italic text-xl ">
                        9ANIME V2
                    </h1>
                </div>
                <div className="flex items-center gap-x-1 bg-slate-900 p-1 rounded-lg">
                    <AiOutlineSearch className="text-gray-500 text-2xl cursor-pointer" />
                    <input
                        type="search"
                        id="default-search"
                        className="w-96 h-8 bg-slate-900 p-2 text-sm border-none focus:outline-none shadow-md placeholder-gray-500 text-gray-300 rounded-lg"
                        placeholder="Search Animes..."
                    />
                </div>


                <button className=" bg-purple-700 p-2 rounded-lg text-sm text-white hover:bg-purple-600">
                    Sign in
                </button>
            </div>
        </div>
    );
};

export default Navbar;
