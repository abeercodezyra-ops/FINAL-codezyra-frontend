import React from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo/Logo_Codezyra_PNG.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [moreOpen, setMoreOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white md:bg-transparent border-none shadow-sm md:shadow-none">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-5 py-2 sm:py-3 flex items-center justify-between gap-2 sm:gap-4 md:gap-8">
        {/* LOGO SECTION - PILL STYLE */}
        <div className="flex items-center gap-2 sm:gap-4 bg-white rounded-full px-3 sm:px-4 md:px-6 py-2 sm:py-3 shadow-sm border border-gray-100">
          <Link to="/" className="flex items-center">
            <img src={logoImg} alt="Codezyra Logo" className="h-10 sm:h-12 md:h-[45px] w-auto object-contain transition-transform duration-200 hover:scale-105" />
          </Link>

          <div className="h-6 md:h-8 w-px bg-gray-200"></div>

          <div className="block">
            <div className="text-xs text-gray-800 font-bold leading-tight">problem-solving tech partner</div>
            <div className="text-xs text-gray-500 font-medium leading-tight">Anywhere, Anytime.</div>
          </div>
        </div>

        {/* PILL MENU - CENTERED */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex items-center gap-0.5 sm:gap-1 bg-white rounded-full px-3 sm:px-4 md:px-6 py-2 sm:py-3 shadow-sm border border-gray-100 navbar-menu">
            <Link to="/" className="px-2 sm:px-3 md:px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 hover:text-accent transition-colors whitespace-nowrap">
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <div className="flex items-center gap-1 px-2 sm:px-3 md:px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 hover:text-accent transition-colors whitespace-nowrap">
                <Link to="/services" className="flex items-center gap-1">
                  Services <ChevronDown size={12} className="sm:w-3.5 sm:h-3.5" />
                </Link>
              </div>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[9999]">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 sm:p-6 md:p-8 min-w-[250px] sm:min-w-[300px]">
                  <div className="space-y-2 sm:space-y-3">
                    <h4 className="text-xs sm:text-sm font-bold text-gray-900 mb-3 sm:mb-4">Services</h4>
                    <Link to="/services/mobile-app-development" className="block text-xs sm:text-sm text-gray-600 hover:text-accent transition-colors py-1">Mobile App Development</Link>
                    <Link to="/services/web-app-development" className="block text-xs sm:text-sm text-gray-600 hover:text-accent transition-colors py-1">Web App Development</Link>
                    <Link to="/services/custom-software" className="block text-xs sm:text-sm text-gray-600 hover:text-accent transition-colors py-1">Custom Software Development</Link>
                    <Link to="/services/ecommerce-development" className="block text-xs sm:text-sm text-gray-600 hover:text-accent transition-colors py-1">E-commerce Development</Link>
                    <Link to="/services/project-rescue" className="block text-xs sm:text-sm text-gray-600 hover:text-accent transition-colors py-1">Software Project Rescue Service</Link>
                    <Link to="/services/digital-marketing" className="block text-xs sm:text-sm text-gray-600 hover:text-accent transition-colors py-1">Digital Marketing</Link>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/case-studies" className="px-2 sm:px-3 md:px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 hover:text-accent transition-colors whitespace-nowrap">
              Case Studies
            </Link>
            <Link to="/blog" className="px-2 sm:px-3 md:px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 hover:text-accent transition-colors whitespace-nowrap">
              Blogs
            </Link>

            <Link to="/industries" className="px-2 sm:px-3 md:px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 hover:text-accent transition-colors whitespace-nowrap">
              Industries
            </Link>

            <Link to="/contact" className="px-2 sm:px-3 md:px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 hover:text-accent transition-colors whitespace-nowrap">
              FAQs
            </Link>

            {/* More Dropdown */}
            <div className="relative group">
              <div className="flex items-center gap-1 px-2 sm:px-3 md:px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 hover:text-accent transition-colors whitespace-nowrap cursor-pointer">
                More <ChevronDown size={12} className="sm:w-3.5 sm:h-3.5" />
              </div>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[9999]">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 sm:p-6 md:p-8 min-w-[200px]">
                  <div className="space-y-2 sm:space-y-3">
                    <h4 className="text-xs sm:text-sm font-bold text-gray-900 mb-3 sm:mb-4">More</h4>
                    <Link to="/hiring" className="block text-xs sm:text-sm text-gray-600 hover:text-accent transition-colors py-1">Hiring</Link>
                    <Link to="/pricing" className="block text-xs sm:text-sm text-gray-600 hover:text-accent transition-colors py-1">Pricing</Link>
                    <Link to="/career" className="block text-xs sm:text-sm text-gray-600 hover:text-accent transition-colors py-1">Career</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Link to="/contact">
            <button className="hidden md:flex items-center gap-2 bg-brand-gradient text-white px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5 whitespace-nowrap group">
              <span>Contact Sales</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </Link>
          <button
            className="md:hidden text-gray-700 hover:text-accent transition-colors p-2 touch-manipulation"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 overflow-hidden">
          <div className="flex flex-col space-y-1 px-4 sm:px-5">
            <Link to="/" onClick={() => setIsOpen(false)} className="px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-accent rounded-lg transition-colors touch-manipulation">
              Home
            </Link>
            <Link to="/services" onClick={() => setIsOpen(false)} className="px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-accent rounded-lg transition-colors touch-manipulation">
              Services
            </Link>
            <Link to="/case-studies" onClick={() => setIsOpen(false)} className="px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-accent rounded-lg transition-colors touch-manipulation">
              Case Studies
            </Link>
            <Link to="/blog" onClick={() => setIsOpen(false)} className="px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-accent rounded-lg transition-colors touch-manipulation">
              Blogs
            </Link>
            <Link to="/industries" onClick={() => setIsOpen(false)} className="px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-accent rounded-lg transition-colors touch-manipulation">
              Industries
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-accent rounded-lg transition-colors touch-manipulation">
              FAQs
            </Link>

            {/* More Accordion */}
            <div>
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className="w-full px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-accent rounded-lg transition-colors touch-manipulation flex items-center justify-between"
              >
                <span>More</span>
                <ChevronDown size={16} className={`transition-transform duration-200 ${moreOpen ? 'rotate-180' : ''}`} />
              </button>
              {moreOpen && (
                <div className="pl-8 mt-1 space-y-1">
                  <Link to="/hiring" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-base text-gray-600 hover:text-accent transition-colors touch-manipulation">
                    Hiring
                  </Link>
                  <Link to="/pricing" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-base text-gray-600 hover:text-accent transition-colors touch-manipulation">
                    Pricing
                  </Link>
                  <Link to="/career" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-base text-gray-600 hover:text-accent transition-colors touch-manipulation">
                    Career
                  </Link>
                </div>
              )}
            </div>

            <Link to="/contact" onClick={() => setIsOpen(false)} className="mt-4 mx-4 px-4 py-3 text-base font-bold text-white bg-brand-gradient rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-accent/20 touch-manipulation text-center flex items-center justify-center gap-2">
              <span>Contact Sales</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      )}
      <style>{`
        .navbar-menu {
          overflow: visible !important;
        }
        nav {
          overflow: visible !important;
        }
        nav > div {
          overflow: visible !important;
        }
        nav .group {
          overflow: visible !important;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
