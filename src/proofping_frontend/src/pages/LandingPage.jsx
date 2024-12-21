import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { FaRocket, FaShieldAlt, FaUsers, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center p-5 text-white bg-white">
        <div className="absolute inset-0 bg-white"></div>
        <div className="relative z-10 flex flex-col gap-5 items-center w-3/4 text-center">
          <h1 className="text-6xl text-black font-bold capitalize mb-4">
            Proofping: Bukti Kehadiran Terdesentralisasi
          </h1>
          <p className="text-xl mb-8 text-black">Solusi inovatif untuk manajemen kehadiran yang aman, transparan, dan efisien.</p>
          <button 
            className="px-12 py-3 rounded-lg bg-[#AAFF00] text-black text-xl font-medium hover:bg-[#88CC00] transition duration-300"
            onClick={() => navigate('/app')}
          >
            Mulai Sekarang
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-12">
          <h2 className="text-4xl font-bold text-center mb-12">Fitur Unggulan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <FaRocket className="text-5xl mb-4 text-blue-500" />, title: "Cepat & Efisien", description: "Proses kehadiran yang cepat dan mudah dengan teknologi blockchain." },
              { icon: <FaShieldAlt className="text-5xl mb-4 text-green-500" />, title: "Aman & Terpercaya", description: "Data kehadiran yang tidak dapat dimanipulasi dan selalu terlindungi." },
              { icon: <FaUsers className="text-5xl mb-4 text-purple-500" />, title: "Terdesentralisasi", description: "Tidak ada otoritas tunggal, meningkatkan transparansi dan kepercayaan." }
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
          <h2 className="text-4xl font-bold text-center mb-12">Cara Kerja</h2>
          <div className="flex flex-col md:flex-row justify-around items-center">
            {[
              { step: 1, title: "Daftar", description: "Buat akun Proofping Anda" },
              { step: 2, title: "Verifikasi", description: "Konfirmasi identitas Anda" },
              { step: 3, title: "Gunakan", description: "Mulai catat kehadiran Anda" },
              { step: 4, title: "Pantau", description: "Lihat riwayat kehadiran Anda" }
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
          <h2 className="text-4xl font-bold text-center mb-12">Apa Kata Mereka</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Budi Santoso", role: "HR Manager", quote: "Proofping telah mengubah cara kami mengelola kehadiran karyawan. Sangat direkomendasikan!" },
              { name: "Siti Rahma", role: "Karyawan", quote: "Saya merasa lebih aman dengan sistem kehadiran yang transparan ini." },
              { name: "Joko Widodo", role: "CEO", quote: "Efisiensi meningkat drastis sejak kami menggunakan Proofping. Terima kasih!" }
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
          <h2 className="text-4xl font-bold mb-4">Siap Untuk Memulai?</h2>
          <p className="text-xl mb-8">Bergabunglah dengan ribuan organisasi yang telah merasakan manfaat Proofping</p>
          <button 
            className="px-12 py-3 rounded-lg bg-[#AAFF00] text-black text-xl font-medium hover:bg-[#88CC00] transition duration-300"
            onClick={() => navigate('/app')}
          >
            Daftar Sekarang
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Proofping</h3>
              <p>Solusi kehadiran terdesentralisasi untuk era digital.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Tautan Cepat</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#AAFF00]">Beranda</a></li>
                <li><a href="#" className="hover:text-[#AAFF00]">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-[#AAFF00]">Fitur</a></li>
                <li><a href="#" className="hover:text-[#AAFF00]">Harga</a></li>
                <li><a href="#" className="hover:text-[#AAFF00]">Kontak</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Dukungan</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#AAFF00]">FAQ</a></li>
                <li><a href="#" className="hover:text-[#AAFF00]">Dokumentasi</a></li>
                <li><a href="#" className="hover:text-[#AAFF00]">Forum Komunitas</a></li>
                <li><a href="#" className="hover:text-[#AAFF00]">Status Sistem</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Ikuti Kami</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-2xl hover:text-[#AAFF00]"><FaFacebook /></a>
                <a href="#" className="text-2xl hover:text-[#AAFF00]"><FaTwitter /></a>
                <a href="#" className="text-2xl hover:text-[#AAFF00]"><FaInstagram /></a>
                <a href="#" className="text-2xl hover:text-[#AAFF00]"><FaLinkedin /></a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2024 Proofping. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;

