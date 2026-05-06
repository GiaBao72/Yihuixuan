'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSolid(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-[500] px-[60px] h-[68px] flex items-center justify-between transition-all duration-400 ${
          solid ? 'bg-[rgba(2,11,26,0.95)] backdrop-blur-[16px] border-b border-[rgba(255,255,255,0.07)]' : 'border-b border-transparent'
        }`}
      >
        <Link href="/" className="text-2xl font-extrabold tracking-wide">
          YIHUIXUAN<em className="not-italic text-[#4a90e2]">LASER</em>
        </Link>

        <div className="hidden md:flex gap-9 items-center">
          <a href="#hero" className="text-[13px] font-medium text-[rgba(255,255,255,0.7)] tracking-wide hover:text-white transition-colors">
            Trang chủ
          </a>
          <a href="#products" className="text-[13px] font-medium text-[rgba(255,255,255,0.7)] tracking-wide hover:text-white transition-colors">
            Sản phẩm
          </a>
          <a href="#about" className="text-[13px] font-medium text-[rgba(255,255,255,0.7)] tracking-wide hover:text-white transition-colors">
            Về chúng tôi
          </a>
          <a href="#industries" className="text-[13px] font-medium text-[rgba(255,255,255,0.7)] tracking-wide hover:text-white transition-colors">
            Ngành ứng dụng
          </a>
          <a href="#contact" className="bg-[#1b5fd4] text-white px-[22px] py-2 rounded-full text-[13px] font-semibold hover:bg-[#1348b0] hover:-translate-y-[1px] transition-all">
            Liên hệ →
          </a>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[600] bg-[#020b1a] flex flex-col items-center justify-center gap-6">
          <button
            className="absolute top-6 right-6 text-3xl text-white"
            onClick={() => setMobileOpen(false)}
          >
            ✕
          </button>
          <a href="#hero" className="text-xl font-medium" onClick={() => setMobileOpen(false)}>
            Trang chủ
          </a>
          <a href="#products" className="text-xl font-medium" onClick={() => setMobileOpen(false)}>
            Sản phẩm
          </a>
          <a href="#about" className="text-xl font-medium" onClick={() => setMobileOpen(false)}>
            Về chúng tôi
          </a>
          <a href="#industries" className="text-xl font-medium" onClick={() => setMobileOpen(false)}>
            Ngành ứng dụng
          </a>
          <a href="#contact" className="text-xl font-medium" onClick={() => setMobileOpen(false)}>
            Liên hệ
          </a>
        </div>
      )}
    </>
  );
}
