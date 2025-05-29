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
          <div className="flex-shrink-0 justify-center items-center h-15">
            <h1 className="text-5xl font-bold text-Black">Honey <br/>For Life</h1>
          </div>

        <div className="flex justify-between items-center h-16 font-body text-[1.3rem] font-inherit ">
         
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-Black hover:text-amber-600 transition-colors">
              Home
            </a>
            <a href="/honey" className="text-Black hover:text-amber-600 transition-colors">
              Products
            </a>
            
            <a href="/blog" className="text-Black hover:text-amber-600 transition-colors">
              Blog
            </a>

            <a href="/about" className="text-Black hover:text-amber-600 transition-colors">
              About Us
            </a>
            <a href="/contact" className="text-Black hover:text-amber-600 transition-colors">
              Contact
            </a>
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
            {/* <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button> */}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-amber-600">
                Home
              </a>
              <a href="#products" className="block px-3 py-2 text-gray-700 hover:text-amber-600">
                Products
              </a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-amber-600">
                About Us
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-amber-600">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
