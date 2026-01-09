import React, { useEffect, useRef, useState } from 'react';
import { Users, Briefcase, Smile, MapPin, ChevronDown, Linkedin, Mail } from 'lucide-react';
import directorImg from '../assets/Gemini_Generated_Image_kmm2azkmm2azkmm2.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Metrics = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const cardsRef = useRef([]);
    const testimonialRef = useRef(null);
    const [isDirectorBioOpen, setIsDirectorBioOpen] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Heading animation
            gsap.fromTo(headingRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: headingRef.current,
                        start: 'top 85%',
                    }
                }
            );

            // Metrics cards stagger animation with number counting
            cardsRef.current.forEach((card, i) => {
                if (card) {
                    gsap.fromTo(card,
                        { opacity: 0, y: 60, scale: 0.8 },
                        {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            duration: 0.6,
                            delay: i * 0.15,
                            ease: 'back.out(1.7)',
                            scrollTrigger: {
                                trigger: card,
                                start: 'top 85%',
                            }
                        }
                    );
                }
            });

            // Testimonial animation
            gsap.fromTo(testimonialRef.current,
                { opacity: 0, x: -30 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: testimonialRef.current,
                        start: 'top 85%',
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-8 sm:py-12 md:py-20 lg:py-24 bg-white">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-5">
                <div ref={headingRef} className="text-center mb-8 sm:mb-12 md:mb-18">
                    <h2 className="text-[2.2rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[4.5rem] font-extrabold mb-4 sm:mb-5 md:mb-6 px-2">
                        <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">Backed by </span>
                        <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Experience</span>
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed px-4">
                        Explore how we've <span className="text-accent font-bold">helped clients</span>, delivered <span className="text-accent font-bold">projects</span>, and turned <span className="text-accent font-bold">ideas into reality</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-16">
                    <div 
                        ref={el => cardsRef.current[0] = el}
                        className="bg-white rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 group"
                    >
                        <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                            <Users className="w-8 h-8 text-accent group-hover:text-white transition-colors" strokeWidth={2} />
                        </div>
                        <div className="text-5xl font-bold text-black mb-2">100+</div>
                        <div className="text-gray-600 font-semibold">Global Talents</div>
                    </div>
                    <div 
                        ref={el => cardsRef.current[1] = el}
                        className="bg-white rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 group"
                    >
                        <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                            <Briefcase className="w-8 h-8 text-accent group-hover:text-white transition-colors" strokeWidth={2} />
                        </div>
                        <div className="text-5xl font-bold text-black mb-2">50+</div>
                        <div className="text-gray-600 font-semibold">Projects Delivered</div>
                    </div>
                    <div 
                        ref={el => cardsRef.current[2] = el}
                        className="bg-white rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 group"
                    >
                        <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                            <Smile className="w-8 h-8 text-accent group-hover:text-white transition-colors" strokeWidth={2} />
                        </div>
                        <div className="text-5xl font-bold text-black mb-2">40+</div>
                        <div className="text-gray-600 font-semibold">Happy Clients</div>
                    </div>
                    <div 
                        ref={el => cardsRef.current[3] = el}
                        className="bg-white rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 group"
                    >
                        <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                            <MapPin className="w-8 h-8 text-accent group-hover:text-white transition-colors" strokeWidth={2} />
                        </div>
                        <div className="text-5xl font-bold text-black mb-2">7+</div>
                        <div className="text-gray-600 font-semibold">Global Presence</div>
                    </div>
                </div>

                {/* Director Section - Enhanced */}
                <div ref={testimonialRef} className="mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-10 md:pt-12 border-t-2 border-gray-200">
                    <div className="max-w-4xl mx-auto">
                        {/* Director Header with Larger Image */}
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 mb-6">
                            {/* Larger Profile Image */}
                            <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center overflow-hidden shadow-xl ring-4 ring-accent/20 flex-shrink-0">
                                <img src={directorImg} alt="Aashir Afaq - Director of Operations" className="w-full h-full object-cover" loading="lazy" />
                            </div>
                            
                            {/* Director Info */}
                            <div className="flex-1 text-center sm:text-left">
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">Aashir Afaq</h3>
                                <p className="text-lg sm:text-xl text-accent font-semibold mb-4">Director of Operations</p>
                                
                                {/* Social Links */}
                                <div className="flex items-center justify-center sm:justify-start gap-3 mb-5">
                                    <a 
                                        href="https://linkedin.com/in/aashir-afaq" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 touch-manipulation text-sm sm:text-base font-medium"
                                        aria-label="LinkedIn Profile"
                                    >
                                        <Linkedin size={18} />
                                        <span>LinkedIn</span>
                                    </a>
                                    <a 
                                        href="mailto:aashir@codezyra.com" 
                                        className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 touch-manipulation text-sm sm:text-base font-medium"
                                        aria-label="Email"
                                    >
                                        <Mail size={18} />
                                        <span>Email</span>
                                    </a>
                                </div>
                                
                                {/* Dropdown Toggle Button */}
                                <button
                                    onClick={() => setIsDirectorBioOpen(!isDirectorBioOpen)}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent to-primary text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 touch-manipulation"
                                >
                                    <span>{isDirectorBioOpen ? 'Hide' : 'Read'} Profile</span>
                                    <ChevronDown 
                                        size={20} 
                                        className={`transform transition-transform duration-300 ${isDirectorBioOpen ? 'rotate-180' : ''}`} 
                                    />
                                </button>
                            </div>
                        </div>

                        {/* Collapsible Bio Section */}
                        <div 
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                isDirectorBioOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                            }`}
                        >
                            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 sm:p-8 md:p-10 shadow-lg border-l-4 border-accent">
                                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Leadership & Vision</h4>
                                
                                <div className="space-y-4 sm:space-y-5 text-base sm:text-lg text-gray-700 leading-relaxed">
                                    <p>
                                        Aashir Afaq leads operational strategy and execution at Codezyra, overseeing the delivery of scalable digital solutions for clients worldwide. With extensive experience in software development operations, he ensures seamless project management, team coordination, and technical excellence across all engagements.
                                    </p>
                                    
                                    <p>
                                        His leadership focuses on building efficient processes, fostering innovation, and maintaining the highest standards of quality in software delivery. Aashir's strategic approach combines technical expertise with business acumen, enabling Codezyra to consistently deliver enterprise-grade solutions that drive measurable results for our clients.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Metrics;
