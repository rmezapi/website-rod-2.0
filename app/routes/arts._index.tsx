import { useNavigate } from '@remix-run/react';


export default function Arts() {
  const navigate = useNavigate();


  const handleLinkClick = (link: string) => {
    console.log(`Navigating to: ${link}`);
    navigate(`/arts/${link}`);
  };
  return (
    <div className="flex flex-col md:flex-row items-center h-screen">
      {/* film */}
      <button 
        type="button"
        onClick={(e) => {
          e.preventDefault();
          handleLinkClick('film');
        }}
        className="flex flex-col justify-center items-center bg-cover bg-center h-1/2 md:h-full w-full md:w-1/2 p-8" 
        style={{ backgroundImage: "url('https://res.cloudinary.com/dxewrioco/image/upload/v1717800130/rod-website-images/film/road/daa5idg5mm0r77osxsko.png')" }}
      >
        <div className="btn text-lg bg-white/50 text-gray-800 no-underline hover:bg-black/50 hover:text-white p-4">
          <h2 className="text-center text-xl">Film Photography</h2>
        </div>
      </button>
      {/* digital */}
      <button 
        type="button"
        onClick={(e) => {
          e.preventDefault();
          handleLinkClick('digital');
        }}
        className="flex flex-col justify-center items-center bg-cover bg-center h-1/2 md:h-full w-full md:w-1/2 p-8" 
        style={{ backgroundImage: "url('https://res.cloudinary.com/dxewrioco/image/upload/v1717800096/rod-website-images/digital/climbing/ghovwne9tkyqwe9bmbyv.png')" }}
      >
        <div className="btn text-lg bg-white/50 text-gray-800 no-underline hover:bg-black/50 hover:text-white p-4">
          <h2 className="text-center text-xl">Digital Photography</h2>
        </div>
      </button>
    </div>
  );
}