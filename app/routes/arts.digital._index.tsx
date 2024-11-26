// src/components/DigitalProjs.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from '@remix-run/react';



function DigitalProjs() {
    const navigate = useNavigate();

    const handleLinkClick = (destination: string) => {
        navigate(`./${destination}`);
    };

    return (
        <div className="overflow-x-auto">
            <div className="flex flex-row flex-wrap items-center w-full">
                {/* climbing */}
                <button type="button" onClick={() => handleLinkClick('climbing')} className="w-full sm:w-1/3 min-h-[300px] sm:min-h-[300px] flex items-center justify-center text-center bg-[url('https://res.cloudinary.com/dxewrioco/image/upload/v1718136018/climbing_ceujsw.png')] bg-cover bg-full md:bg-[120%]">
                    <div className="bg-white/50 text-[#242424] no-underline hover:bg-black/50 hover:text-white px-4 py-2">
                        <h2>climbing</h2>
                    </div>
                </button>
                {/* biking adventures */}
                <button type="button" onClick={() => handleLinkClick('biking-adventures')} className="w-full sm:w-1/3 min-h-[300px] sm:min-h-[300px] flex items-center justify-center text-center bg-[url('https://res.cloudinary.com/dxewrioco/image/upload/v1718136017/binking_adv_wvlov1.png')] bg-cover bg-full md:bg-[120%]">
                    <div className="bg-white/50 text-[#242424] no-underline hover:bg-black/50 hover:text-white px-4 py-2">
                        <h2>biking adventures</h2>
                    </div>
                </button>
                {/* yosemite valley theme park */}
                <button type="button" onClick={() => handleLinkClick('yosemite')} className="w-full sm:w-1/3 min-h-[300px] sm:min-h-[300px] flex items-center justify-center text-center bg-[url('https://res.cloudinary.com/dxewrioco/image/upload/v1718136025/yvtp_kdfbrj.png')] bg-cover bg-full md:bg-[120%]">
                    <div className="bg-white/50 text-[#242424] no-underline hover:bg-black/50 hover:text-white px-4 py-2">
                        <h2>yosemite valley theme park</h2>
                    </div>
                </button>
            </div>
            <div className="flex flex-row flex-wrap items-center w-full">
                {/* graduation */}
                <button type="button" onClick={() => handleLinkClick('graduation')} className="w-full sm:w-1/3 min-h-[300px] sm:min-h-[300px] flex items-center justify-center text-center bg-[url('https://res.cloudinary.com/dxewrioco/image/upload/v1718136020/grad_c9ra1i.png')] bg-cover bg-full  md:bg-[120%]">
                    <div className="bg-white/50 text-[#242424] no-underline hover:bg-black/50 hover:text-white px-4 py-2">
                        <h2>graduation</h2>
                    </div>
                </button>
                {/* the town: in conversation with daniel shea */}
                <button type="button" onClick={() => handleLinkClick('in-conversation')} className="w-full sm:w-1/3 min-h-[300px] sm:min-h-[300px] flex items-center justify-center text-center bg-[url('https://res.cloudinary.com/dxewrioco/image/upload/v1718136020/icwr_u9vnny.png')] bg-cover bg-full  md:bg-[120%]">
                    <div className="bg-white/50 text-[#242424] no-underline hover:bg-black/50 hover:text-white px-4 py-2">
                        <h2>the town: in conversation with daniel shea</h2>
                    </div>
                </button>
                {/* kt */}
                <button type="button" onClick={() => handleLinkClick('kt')} className="w-full sm:w-1/3 min-h-[300px] sm:min-h-[300px] flex items-center justify-center text-center bg-[url('https://res.cloudinary.com/dxewrioco/image/upload/v1718136021/kt_j9nz7z.png')] bg-cover bg-full bg-full md:bg-[120%]">
                    <div className="bg-white/50 text-[#242424] no-underline hover:bg-black/50 hover:text-white px-4 py-2">
                        <h2>kt.</h2>
                    </div>
                </button>
            </div>
            <div className="flex flex-row flex-wrap items-center w-full">
                {/* friends */}
                <button type="button" onClick={() => handleLinkClick('friends')} className="w-full sm:w-1/3 min-h-[300px] sm:min-h-[300px] flex items-center justify-center text-center bg-[url('https://res.cloudinary.com/dxewrioco/image/upload/v1718136019/digital_friends_vsuw35.png')] bg-cover bg-full md:bg-[120%]">
                    <div className="bg-white/50 text-[#242424] no-underline hover:bg-black/50 hover:text-white px-4 py-2">
                        <h2>friends</h2>
                    </div>
                </button>
                {/* scuba diving */}
                <button type="button" onClick={() => handleLinkClick('scuba')} className="w-full sm:w-1/3 min-h-[300px] sm:min-h-[300px] flex items-center justify-center text-center bg-[url('https://res.cloudinary.com/dxewrioco/image/upload/v1718136024/scuba_zylfdk.png')] bg-cover bg-full md:bg-[120%]">
                    <div className="bg-white/50 text-[#242424] no-underline hover:bg-black/50 hover:text-white px-4 py-2">
                        <h2>scuba diving</h2>
                    </div>
                </button>
                {/* 3 friends, a bike, lights and a kimono */}
                <button type="button" onClick={() => handleLinkClick('night')} className="w-full sm:w-1/3 min-h-[300px] sm:min-h-[300px] flex items-center justify-center text-center bg-[url('https://res.cloudinary.com/dxewrioco/image/upload/v1718136023/night_rftgi3.png')] bg-cover bg-full md:bg-[120%]">
                    <div className="bg-white/50 text-[#242424] no-underline hover:bg-black/50 hover:text-white px-4 py-2">
                        <h2>3 friends, a bike, lights, and a kimono</h2>
                    </div>
                </button>
            </div>
        </div>
    );
}

export default DigitalProjs;