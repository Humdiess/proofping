import React from 'react'
import logo from '../../public/images/proofping-logo.png';

// Komponen Navbar
function NavBar() {
    return (
      <header className="w-full h-max px-4 py-5 fixed border-b-2 border-black backdrop-blur z-10">
        <nav className="w-full h-16 flex justify-between items-center p-4 font-semibold">
          <div className="w-max h-max">
            <img src={logo} className="w-48" alt="ProofPing Logo" />
          </div>
          <div className="flex gap-14 text-xl w-max">
            <a href="#/">Tentang</a>
            <a href="#/">Cara Kerja</a>
            <a href="#/">Kontak</a>
            <a href="#/">FAQ</a>
          </div>
          <a
            href="#/"
            className="w-max h-max px-5 py-3 bg-[#AAFF00] border border-black shadow-[4px_4px_black] hover:translate-y-[4px] hover:translate-x-[4px] hover:shadow-none"
          >
            <span>Use Now</span>
          </a>
        </nav>
      </header>
    );
  }
  

export default NavBar
