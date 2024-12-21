import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { FaRocket, FaShieldAlt, FaUsers, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../../public/globals.css';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center p-5 text-white bg-white">
        <div className="absolute inset-0 bg-white"></div>
        <div className="relative z-10 flex flex-col gap-5 items-center w-3/4 text-center">
          <h1 className="text-6xl text-black font-bold capitalize mb-4 judul">
            Proofping: Decentralized Attendance Proof
          </h1>
          <p className="text-xl mb-8 text-black">An innovative solution for secure, transparent, and efficient attendance management.</p>
          <button 
            className="px-12 py-3 rounded-lg bg-[#AAFF00] text-black text-xl font-medium hover:bg-[#88CC00] transition duration-300"
            onClick={() => navigate('/app')}
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-12">
          <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <FaRocket className="text-5xl mb-4 text-blue-500" />, title: "Fast & Efficient", description: "Quick and easy attendance process with blockchain technology." },
              { icon: <FaShieldAlt className="text-5xl mb-4 text-green-500" />, title: "Secure & Reliable", description: "Attendance data that cannot be manipulated and is always protected." },
              { icon: <FaUsers className="text-5xl mb-4 text-purple-500" />, title: "Decentralized", description: "No single authority, increasing transparency and trust." }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg text-center hover:shadow-lg transition duration-300">
                {feature.icon}
                <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-200">
        <div className="container mx-auto px-12">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-around items-center">
            {[
              { step: 1, title: "Register", description: "Create your Proofping account" },
              { step: 2, title: "Verify", description: "Confirm your identity" },
              { step: 3, title: "Use", description: "Start recording your attendance" },
              { step: 4, title: "Monitor", description: "View your attendance history" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center mb-8 md:mb-0">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
        <div className="container mx-auto px-12">
          <h2 className="text-4xl font-bold text-center mb-12">What They Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Budi Santoso", role: "HR Manager", quote: "Proofping has transformed the way we manage employee attendance. Highly recommended!" },
              { name: "Siti Rahma", role: "Employee", quote: "I feel more secure with this transparent attendance system." },
              { name: "Joko Anwar", role: "CEO", quote: "Efficiency has drastically increased since we started using Proofping. Thank you!" }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white bg-opacity-20 p-6 rounded-lg">
                <p className="mb-4 italic">"{testimonial.quote}"</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Join thousands of organizations that have experienced the benefits of Proofping</p>
          <button 
            className="px-12 py-3 rounded-lg bg-[#AAFF00] text-black text-xl font-medium hover:bg-[#88CC00] transition duration-300"
            onClick={() => navigate('/app')}
          >
            Sign Up Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Proofping</h3>
              <p>Decentralized attendance solution for the digital era.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#AAFF00]">Home</a></li>
                <li><a href="#" className="hover:text-[#AAFF00]">About Us</a></li>
                <li><a href="#" className="hover:text-[#AAFF00]">Features</a></li>
                <li><a href="#" className="hover:text-[#AAFF00]">Pricing</a></li>
                <li><a href="#" className="hover:text-[#AAFF00]">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#AAFF00]">FAQ</a></li>
                <li><a href="#" className="hover:text-[#AAFF00]">Documentation</a></li>
                <li><a href="#" className="hover:text-[#AAFF00]">Community Forum</a></li>
                <li><a href="#" className="hover:text-[#AAFF00]">System Status</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-2xl hover:text-[#AAFF00]"><FaFacebook /></a>
                <a href="#" className="text-2xl hover:text-[#AAFF00]"><FaTwitter /></a>
                <a href="#" className="text-2xl hover:text-[#AAFF00]"><FaInstagram /></a>
                <a href="#" className="text-2xl hover:text-[#AAFF00]"><FaLinkedin /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;

