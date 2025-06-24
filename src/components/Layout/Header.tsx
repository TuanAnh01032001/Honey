import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
// import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="announcement-bar__message  flex flex-col items-center text-xl bg-black w-full text-white py-3 h-13">
                <p>FREE SHIPPING ON ORDERS OVER $100</p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col items-center ">

         {/* Logo */}
          <div className="flex-shrink-0 justify-center items-center uppercase h-15">
            <h1 className="text-5xl font-bold text-Black text-center">HANNA HONEY</h1>
          </div>

        <div className="flex justify-between items-center h-16 font-body text-[1.3rem] font-inherit ">
         
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-black font-semibold">
            <a href="/" className=" hover:text-amber-600 transition-colors">
              Home
            </a>
            <a href="/honey" className=" hover:text-amber-600 transition-colors">
              Products
            </a>
            
            <a href="/blog" className=" hover:text-amber-600 transition-colors">
              Blog
            </a>

            <a href="/about" className=" hover:text-amber-600 transition-colors">
              About Us
            </a>
            <a href="/contact" className=" hover:text-amber-600 transition-colors">
              Contact
            </a>
             <a href="/contact" className=" hover:text-amber-600 transition-colors">
              Contact
            </a>
            <a href="/global-partnerships" className="hover:text-amber-600 transition-colors">Global PartnerShips</a>
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button> */}

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-[#F7D375] flex flex-col h-full w-full animate-fade-in md:hidden">
            {/* Top bar with close and cart/search */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#f3c96b]">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center w-14 h-14 p-0 text-3xl font-bold text-black focus:outline-none focus:ring-2 focus:ring-amber-500 active:bg-[#ffe59e] rounded-full transition-all duration-150 hover:bg-[#ffe59e] cursor-pointer bg-transparent"
                aria-label="Đóng menu"
                tabIndex={0}
                style={{ backgroundClip: 'padding-box' }}
              >
                <X className="h-8 w-8 pointer-events-none" />
              </button>
              <h2 className="text-3xl font-bold tracking-wide text-black text-center flex-1 -ml-8">HANA<br/>HONEY FOR LIFE</h2>
             
            </div>
            {/* Menu items: chỉ lấy từ Desktop Navigation */}
            <nav className="flex-1 flex flex-col gap-2 px-6 py-8 text-lg font-semibold">
              <a href="/" className="py-4 border-b border-[#f3c96b]">Home</a>
              <a href="/honey" className="py-4 border-b border-[#f3c96b]">Products</a>
              <a href="/blog" className="py-4 border-b border-[#f3c96b]">Blog</a>
              <a href="/about" className="py-4 border-b border-[#f3c96b]">About Us</a>
              <a href="/contact" className="py-4 border-b border-[#f3c96b]">Contact</a>
              <a href="/global-partnerships" className="py-4 border-b border-[#f3c96b]">Global PartnerShips</a>
            </nav>

          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
