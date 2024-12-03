import React from 'react';
import { FaFileDownload } from 'react-icons/fa';

const mle_cv = 'https://drive.google.com/uc?export=download&id=1T4CU47P3jS9iBB8vROXz-5Ajspe4iX84';
const ds_cv = 'https://drive.google.com/uc?export=download&id=1x6DpT9u6t1vxP6OjljdyC38yq4UdL8MW';
const swe_cv = 'https://drive.google.com/uc?export=download&id=1od2vZVKyonxdlnAZXLzhdP3ar4lTngdR';

const targetPath_mle = 'meza_rodrigo_mle_cv.pdf';
const targetPath_ds = 'meza_rodrigo_ds_cv.pdf';
const targetPath_swe = 'meza_rodrigo_swe_cv.pdf';

const handleClick = (cvUrl: string, fileName: string) => {
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function Pdf() {
    return (
        <div className="flex flex-col items-center justify-start min-h-screen py-12">
            <h1 className="text-3xl font-bold mb-8 text-center" >Download My Resume</h1>
            <div className="flex flex-col md:flex-row md:space-x-4 w-full md:w-auto justify-center items-center">
                <div className="bg-gray-400 p-6 shadow-md mb-4 md:mb-0 mx-2 md:min-w-[40%] w-10/12 h-40 flex flex-col justify-between">
                    <h2 className="text-xl font-semibold mb-4 text-center text-white">Machine Learning</h2>
                    <button
                        className="flex items-center justify-center w-full px-4 py-2 bg-gray-600/50 text-white hover:bg-secondary-dark transition"
                        type="button"
                        onClick={() => handleClick(mle_cv, targetPath_mle)}
                    >
                        <FaFileDownload className="mr-2" />
                        Download
                    </button>
                </div>
                <div className="bg-gray-600 p-6 shadow-md mb-4 md:mb-0 mx-2 md:min-w-[40%] w-10/12 h-40 flex flex-col justify-between">
                    <h2 className="text-xl font-semibold mb-4 text-center text-white">Data Science</h2>
                    <button
                        className="flex items-center justify-center w-full px-4 py-2 bg-gray-800/50 text-white hover:bg-secondary-dark transition"
                        type="button"
                        onClick={() => handleClick(ds_cv, targetPath_ds)}
                    >
                        <FaFileDownload className="mr-2" />
                        Download
                    </button>
                </div>
                <div className="bg-gray-800 p-6 shadow-md mx-2 md:min-w-[40%] w-10/12 h-40 flex flex-col justify-between">
                    <h2 className="text-xl font-semibold mb-4 text-center text-white">Software Engineering</h2>
                    <button
                        className="flex items-center justify-center w-full px-4 py-2 bg-gray-400/50 text-white hover:bg-secondary-dark transition"
                        type="button"
                        onClick={() => handleClick(swe_cv, targetPath_swe)}
                    >
                        <FaFileDownload className="mr-2" />
                        Download
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Pdf;
