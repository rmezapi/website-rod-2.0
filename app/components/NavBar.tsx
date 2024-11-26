import React, { useState } from 'react';
import { Link, useNavigate } from '@remix-run/react';
import { FaBars } from 'react-icons/fa';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLinkClick = (link: string) => {
    setIsOpen(false);
    navigate(`./${link}`);
  };

  return (
    <nav className="bg-black text-white p-4 w-full">
      <div className="flex items-center">
        <button type="button" className="text-xl font-bold no-underline text-white pb-2" onClick={(e) => {
          e.preventDefault();
          handleLinkClick('');
        }}>rodrigo meza pineda</button>
        <div className="hidden md:flex md:gap-8 md:items-center ml-10">
          <button type="button" className="block py-2 px-1 text-white no-underline" onClick={(e) => {
            e.preventDefault();
            handleLinkClick('arts');
          }}>arts</button>
          <button type="button" className="block py-2 px-1 text-white no-underline" onClick={(e) => {
            e.preventDefault();
            handleLinkClick('computer-science');
          }}>computer science</button>
          <button type="button" className="block py-2 px-1 text-white no-underline" onClick={(e) => {
            e.preventDefault();
            handleLinkClick('contact');
          }}>contact</button>
          <button type="button" className="block py-2 px-1 text-white no-underline" onClick={(e) => {
            e.preventDefault();
            handleLinkClick('resume');
          }}>resume</button>
        </div>
        <button
          type="button"
          className="md:hidden ml-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars className="h-6 w-6 text-white" />
        </button>
      </div>
      <ul className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <li>
          <button type="button" className="block py-2 text-white no-underline" onClick={(e) => {
            e.preventDefault();
            handleLinkClick('arts');
          }}>arts</button>
        </li>
        <li>
          <button type="button" className="block py-2 text-white no-underline" onClick={(e) => {
            e.preventDefault();
            handleLinkClick('computer-science');
          }}>computer science</button>
        </li>
        <li>
          <button type="button" className="block py-2 text-white no-underline" onClick={(e) => {
            e.preventDefault();
            handleLinkClick('contact');
          }}>contact</button>
        </li>
        <li>
          <button type="button" className="block py-2 text-white no-underline" onClick={(e) => {
            e.preventDefault();
            handleLinkClick('resume');
          }}>resume</button>
        </li>
      </ul>
    </nav>
  );
}
