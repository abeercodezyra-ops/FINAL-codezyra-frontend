import React from 'react';
import { Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';
import LazyMap from './LazyMap';

const pakistanLocation = {
    id: 'PK',
    name: 'Pakistan',
    address: 'block 3 Nazimabad Rd Number 3,\nopposite Al Mehran Rabri,\nBlock 3 Nazimabad, Karachi, 74600'
};

const Footer = () => {

    return (
        <footer className="bg-[#0f172a] text-white pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-6 sm:pb-8">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-5">

                {/* SERVING BUSINESSES SECTION */}
                <div className="flex flex-col lg:flex-row items-start justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-8 sm:mb-12 md:mb-16 lg:mb-20">
                    <div className="flex-1 w-full lg:w-auto">
                        <h2 className="text-[1.8rem] sm:text-[2.2rem] md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight">
                            Serving <br className="hidden sm:block" /> Businesses <br className="hidden sm:block" /> in Pakistan
                        </h2>

                        <div className="flex flex-wrap gap-2 sm:gap-3">
                            <div className="px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full text-sm sm:text-base font-semibold bg-accent text-white shadow-lg shadow-accent/20">
                                PK
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 w-full lg:w-auto bg-[#1e293b]/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 md:gap-6 border border-gray-700/50">
                        <div className="flex-1 w-full sm:w-auto">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-white">{pakistanLocation.name}</h3>
                            <p className="text-gray-300 text-sm sm:text-base whitespace-pre-line leading-relaxed">
                                {pakistanLocation.address}
                            </p>
                        </div>
                        <div className="w-full sm:w-[160px] md:w-[180px] h-[100px] sm:h-[120px] rounded-lg overflow-hidden border border-gray-700/50 flex-shrink-0">
                            <LazyMap
                                title="Codezyra Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.042552047916!2d67.0274853!3d24.9185313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x830c145438f4e52b%3A0x5240266fe20189be!2sCodezyra!5e1!3m2!1sen!2s!4v1767631032549!5m2!1sen!2s"
                                aspectClass="h-full w-full"
                                className="h-full w-full"
                            />
                        </div>
                    </div>
                </div>

                {/* BOTTOM AREA */}
                <div className="relative overflow-hidden py-4 sm:py-5">
                    {/* Watermark */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[3rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] xl:text-[11rem] font-black text-gray-700/10 pointer-events-none whitespace-nowrap overflow-hidden select-none">
                        CODEZYRA
                    </div>
                    
                    <div className="relative z-10 flex flex-col items-center">
                        {/* Top Section - Links */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-400 mb-3 sm:mb-4 px-4">
                            <a href="/privacy" className="hover:text-white transition-colors touch-manipulation">Privacy Policy</a>
                            <span className="hidden sm:inline text-gray-600">|</span>
                            <a href="/terms" className="hover:text-white transition-colors touch-manipulation">Terms & Conditions</a>
                        </div>

                        {/* Bottom Section - Copyright, Social Icons */}
                        <div className="flex flex-col items-center gap-2 sm:gap-3">
                            {/* Copyright */}
                            <div className="text-sm sm:text-base text-gray-400 text-center px-4">
                                &copy; {new Date().getFullYear()} Codezyra. All Rights Reserved.
                            </div>

                            {/* Social Media Icons - Center */}
                            <div className="flex items-center gap-2 sm:gap-3">
                                <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-accent flex items-center justify-center hover:bg-accent/80 transition-all duration-300 hover:scale-110 touch-manipulation">
                                    <Facebook size={16} className="sm:w-[18px] sm:h-[18px] text-white" />
                                </a>
                                <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-accent flex items-center justify-center hover:bg-accent/80 transition-all duration-300 hover:scale-110 touch-manipulation">
                                    <Linkedin size={16} className="sm:w-[18px] sm:h-[18px] text-white" />
                                </a>
                                <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-accent flex items-center justify-center hover:bg-accent/80 transition-all duration-300 hover:scale-110 touch-manipulation">
                                    <Instagram size={16} className="sm:w-[18px] sm:h-[18px] text-white" />
                                </a>
                                <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-accent flex items-center justify-center hover:bg-accent/80 transition-all duration-300 hover:scale-110 touch-manipulation">
                                    <Twitter size={16} className="sm:w-[18px] sm:h-[18px] text-white" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
