import React from 'react'
import Banner from '../../components/Banner'
import LeftSide from "../../components/LeftSide.jsx";
import RightSide from "../../components/RightSide.jsx";

const Home = () => {
    return (
        <>
            <div className="text-white bg-slate-900 flex flex-col gap-5">
                <Banner/>
                <div className="flex p-2">
                    <div className="flex-grow w-[70%]">
                        <LeftSide/>
                    </div>
                    <div className="flex-grow w-[30%] p-2">
                        <RightSide/>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Home
