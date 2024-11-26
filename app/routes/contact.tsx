import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const LandingPage = () => {
    return (
        <div className="landing-container min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold mb-8">Get in touch!</h1>
            <div className="flex flex-col md:flex-row md:space-x-4 w-full md:w-auto justify-center items-center">
                <div className="bg-gray-400 p-6 shadow-md mb-4 md:mb-0 mx-2 md:min-w-[40%] w-10/12 h-30 flex flex-col justify-center items-center">
                    <a href="mailto:rodrigo.meza.pineda@outlook.com" target="_blank" aria-label="Email" className="text-2xl text-gray-800 hover:text-blue-500 transition">
                        <FaEnvelope />
                    </a>
                </div>
                <div className="bg-gray-800 p-6 shadow-md mb-4 md:mb-0 mx-2 md:min-w-[40%] w-10/12 h-30 flex flex-col justify-center items-center">
                    <a href="https://www.linkedin.com/in/rodrigo-meza-pineda/" target="_blank" aria-label="LinkedIn" className="text-2xl text-gray-800 hover:text-blue-700 transition">
                        <FaLinkedin className="text-white" />
                    </a>
                </div>
                <div className="bg-gray-400 p-6 shadow-md mb-4 md:mb-0 mx-2 md:min-w-[40%] w-10/12 h-30 flex flex-col justify-center items-center">
                    <a href="https://github.com/rmezapi" target="_blank" aria-label="GitHub" className="text-2xl text-gray-800 hover:text-gray-900 transition">
                        <FaGithub />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
