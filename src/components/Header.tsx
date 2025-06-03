import { Authenticated, Unauthenticated } from "convex/react";
import { SignOutButton } from "../SignOutButton";
import { useState } from "react";
import { Logo } from "./Logo";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-custom sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Logo />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 space-x-reverse">
            <a href="#home" className="text-gray-700 hover:text-blue-800 font-semibold transition-all duration-300 hover:scale-105 relative group">
              الرئيسية
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-800 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-800 font-semibold transition-all duration-300 hover:scale-105 relative group">
              خدماتنا
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-800 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#equipment" className="text-gray-700 hover:text-blue-800 font-semibold transition-all duration-300 hover:scale-105 relative group">
              المعدات
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-800 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#request" className="text-gray-700 hover:text-blue-800 font-semibold transition-all duration-300 hover:scale-105 relative group">
              طلب خدمة
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-800 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-800 font-semibold transition-all duration-300 hover:scale-105 relative group">
              اتصل بنا
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-800 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Authenticated>
              <SignOutButton />
            </Authenticated>
            <Unauthenticated>
              <button className="btn-primary text-sm">
                <span className="mr-2">👤</span>
                تسجيل الدخول
              </button>
            </Unauthenticated>
            
            {/* Mobile menu button */}
            <button 
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <nav className="pt-4 pb-2 space-y-2">
            <a href="#home" className="block py-2 px-4 text-gray-700 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors">الرئيسية</a>
            <a href="#services" className="block py-2 px-4 text-gray-700 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors">خدماتنا</a>
            <a href="#equipment" className="block py-2 px-4 text-gray-700 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors">المعدات</a>
            <a href="#request" className="block py-2 px-4 text-gray-700 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors">طلب خدمة</a>
            <a href="#contact" className="block py-2 px-4 text-gray-700 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors">اتصل بنا</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
