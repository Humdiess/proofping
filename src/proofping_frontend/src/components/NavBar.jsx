import React, { useState, useEffect } from 'react'
import logo from '../../public/images/proofping-logo.png';

function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-6xl z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'top-2' : ''}`}>
            <nav className={`flex items-center justify-between px-6 py-3 rounded-full backdrop-blur-md bg-white/70 border shadow-lg transition-all duration-300 ${isScrolled ? 'py-2' : ''}`}>
                <div className="flex-shrink-0">
                    <img src={logo} className="w-32 h-auto" alt="ProofPing Logo" />
                </div>
                <div className="hidden md:flex space-x-8 text-sm font-medium">
                    <a href="#/" className="text-gray-700 hover:text-black transition-colors duration-200">About</a>
                    <a href="#/" className="text-gray-700 hover:text-black transition-colors duration-200">How It Works</a>
                    <a href="#/" className="text-gray-700 hover:text-black transition-colors duration-200">Contact</a>
                    <a href="#/" className="text-gray-700 hover:text-black transition-colors duration-200">FAQ</a>
                </div>
                <a
                    href="#/"
                    className="px-4 py-2 text-sm font-semibold text-white bg-black rounded-full hover:bg-gray-800 transition-colors duration-200"
                >
                    Use Now
                </a>
            </nav>
        </header>
    );
}

export default NavBar

