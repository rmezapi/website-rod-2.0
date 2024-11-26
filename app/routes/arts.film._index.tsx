import React from 'react';
import { useNavigate } from '@remix-run/react';

function Film() {
  const navigate = useNavigate();

  const handleLinkClick = (destination: string) => {
    navigate(`./${destination}`);
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex flex-row flex-wrap items-center w-full md:flex-row">
        <button type="button" onClick={() => handleLinkClick('road-cycling')} className="bg-[url('https://res.cloudinary.com/dxewrioco/image/upload/v1718136024/road_z1b27k.png')] bg-cover bg-full md:bg-[120%] min-w-[100%] md:min-w-[33.3%] min-h-[300px] flex items-center justify-center text-center">
          <div className="bg-white/50 text-[#242424] no-underline hover:bg-black/50 hover:text-white px-4 py-2">
            <h2>road cycling</h2>
          </div>
        </button>
        <button type="button" onClick={() => handleLinkClick('bouldering')} className="bg-[url('https://res.cloudinary.com/dxewrioco/image/upload/v1718136017/bouldering_wviwie.png')] bg-cover bg-full md:bg-[120%] min-w-[100%] md:min-w-[33.4%] min-h-[300px] flex items-center justify-center text-center">
          <div className="bg-white/50 text-[#242424] no-underline hover:bg-black/50 hover:text-white px-4 py-2">
            <h2>bouldering</h2>
          </div>
        </button>
        <button type="button" onClick={() => handleLinkClick('mtb')} className="bg-[url('https://res.cloudinary.com/dxewrioco/image/upload/v1718136023/mtb_awoltf.png')] bg-cover bg-full md:bg-[120%] min-w-[100%] md:min-w-[33.3%] min-h-[300px] flex items-center justify-center text-center">
          <div className="bg-white/50 text-[#242424] no-underline hover:bg-black/50 hover:text-white px-4 py-2">
            <h2>mountain biking</h2>
          </div>
        </button>
      </div>
      <div className="flex flex-row flex-wrap items-center w-full md:flex-row">
        <button type="button" onClick={() => handleLinkClick('biking')} className="bg-[url('https://res.cloudinary.com/dxewrioco/image/upload/v1718136019/film-biking_hlbzpe.png')] bg-cover bg-full md:bg-[120%] min-w-[100%] md:min-w-[33.3%] min-h-[300px] flex items-center justify-center text-center">
          <div className="bg-white/50 text-[#242424] no-underline hover:bg-black/50 hover:text-white px-4 py-2">
            <h2>biking adventures</h2>
          </div>
        </button>
        <button type="button" onClick={() => handleLinkClick('st-simon')} className="bg-[url('https://res.cloudinary.com/dxewrioco/image/upload/v1718136025/stsimon_yaqo0d.png')] bg-cover bg-full md:bg-[120%] min-w-[100%] md:min-w-[33.4%] min-h-[300px] flex items-center justify-center text-center">
          <div className="bg-white/50 text-[#242424] no-underline hover:bg-black/50 hover:text-white px-4 py-2">
            <h2>st. simon's island trip</h2>
          </div>
        </button>
        <button type="button" onClick={() => handleLinkClick('friends')} className="bg-[url('https://res.cloudinary.com/dxewrioco/image/upload/v1718138266/film-friends_w4pger.png')] bg-cover bg-full md:bg-[120%] min-w-[100%] md:min-w-[33.3%] min-h-[300px] flex items-center justify-center text-center">
          <div className="bg-white/50 text-[#242424] no-underline hover:bg-black/50 hover:text-white px-4 py-2">
            <h2>friends</h2>
          </div>
        </button>
        <div className="flex flex-row items-center w-full md:flex-row">
          <button type="button" onClick={() => handleLinkClick('sf')} className="bg-[url('https://res.cloudinary.com/dxewrioco/image/upload/v1732231574/R1-09443-0037_o3e2fj.jpg')] bg-cover bg-full md:bg-[120%] min-w-[100%] md:min-w-[33.4%] min-h-[300px] flex items-center justify-center text-center">
            <div className="bg-white/50 text-[#242424] no-underline hover:bg-black/50 hover:text-white px-4 py-2">
              <h2>san francisco</h2>
            </div>
          </button>
          <button type="button" onClick={() => handleLinkClick('climbing')} className="bg-[url('https://res.cloudinary.com/dxewrioco/image/upload/v1732231372/R1-09445-0022_fwlrqy.jpg')] bg-cover bg-full md:bg-[120%] min-w-[100%] md:min-w-[33.4%] min-h-[300px] flex items-center justify-center text-center">
            <div className="bg-white/50 text-[#242424] no-underline hover:bg-black/50 hover:text-white px-4 py-2">
              <h2>climbing</h2>
            </div>
          </button>
          <button type="button" onClick={() => handleLinkClick('bw-climbing')} className="bg-[url('https://res.cloudinary.com/dxewrioco/image/upload/v1732231447/R1-09568-0024_sconfq.jpg')] bg-cover bg-full md:bg-[120%] min-w-[100%] md:min-w-[33.4%] min-h-[300px] flex items-center justify-center text-center">
            <div className="bg-white/50 text-[#242424] no-underline hover:bg-black/50 hover:text-white px-4 py-2">
              <h2>bw climbing</h2>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Film;