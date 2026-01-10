import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import globalImage from '../assets/istockphoto-1325219364-612x612.jpg';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        quote: "I needed a website but wasn't sure where to start. The Codezyra team guided me through the entire process and created exactly what I expected. Super smooth experience.",
        name: "Ahmed",
        role: "CEO of PureGlow Labs",
        img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face"
    },
    {
        quote: "The entire process, from design to development, went smoothly. Thanks to their knowledge, our app is now operating without a glitch.",
        name: "Mellbery",
        role: "IT Project Manager of SavoryBite Foods",
        img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
        quote: "They took care of everything from beginning to end. The app works perfectly, and we are really pleased with the outcome!",
        name: "Hazen",
        role: "Founder & CTO of GlowLuxe Beauty",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
        quote: "Working with this team has been a game-changer for our business. They delivered beyond our expectations.",
        name: "Victor",
        role: "Director of Operations",
        img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
        quote: "The Codezyra team was outstanding! Fast response, honest communication, and an excellent end result.",
        name: "Umer",
        role: "Co-founder & President of Dealsparx",
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    }
];

// Pakistan flag image
const pakistanFlag = 'https://flagcdn.com/w160/pk.png';

const Testimonials = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const cardsRef = useRef([]);
    const presenceRef = useRef(null);

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

            // Testimonial cards stagger animation
            cardsRef.current.forEach((card, i) => {
                if (card) {
                    gsap.fromTo(card,
                        { opacity: 0, y: 60, scale: 0.9 },
                        {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            duration: 0.6,
                            delay: i * 0.1,
                            ease: 'back.out(1.7)',
                            scrollTrigger: {
                                trigger: card,
                                start: 'top 85%',
                            }
                        }
                    );
                }
            });

            // Our Presence section animation
            gsap.fromTo(presenceRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: presenceRef.current,
                        start: 'top 85%',
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative py-8 sm:py-12 md:py-20 lg:py-24 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-5">
                {/* Large Centered Heading */}
                <div ref={headingRef} className="text-center mb-8 sm:mb-10 md:mb-14">
                    <h2 className="text-[2.2rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[4.5rem] font-extrabold leading-tight px-2 mb-4 sm:mb-5">
                        <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">Success Stories From </span>
                        <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Our Clients</span>
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium px-4">
                        Real results from <span className="text-accent font-bold">businesses</span> we've partnered with
                    </p>
                </div>

                {/* Testimonials Grid - Static Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-10 md:mb-16">
                    {testimonials.map((testi, i) => (
                        <div 
                            key={i} 
                            ref={el => cardsRef.current[i] = el}
                            className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200"
                        >
                            <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-4 sm:mb-5 md:mb-6 leading-relaxed">"{testi.quote}"</p>
                            <div className="flex items-center gap-3 sm:gap-4">
                                <img 
                                    src={testi.img} 
                                    alt={testi.name} 
                                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full ring-2 ring-accent/20 object-cover flex-shrink-0"
                                    onError={(e) => {
                                        e.target.src = `https://ui-avatars.com/api/?name=${testi.name}&background=10b981&color=fff&size=150`;
                                    }}
                                />
                                <div className="min-w-0">
                                    <h4 className="font-bold text-black text-base sm:text-lg truncate">{testi.name}</h4>
                                    <span className="text-sm sm:text-base text-gray-500 truncate block">{testi.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Our Presence Section */}
                <div ref={presenceRef} className="relative mt-12 sm:mt-16 md:mt-20 lg:mt-24 pt-12 sm:pt-16 md:pt-20 overflow-hidden">
                    {/* Clean Background Image - No Overlay */}
                    <img
                        src={globalImage}
                        alt="Global Presence"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center pb-12 sm:pb-16">
                        {/* Heading */}
                        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-5 md:mb-6 text-center px-4">
                            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent drop-shadow-2xl">Our Presence</span>
                        </h3>
                        
                        {/* Description */}
                        <p className="text-black text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-center mb-8 sm:mb-10 md:mb-12 leading-relaxed px-4 font-bold">
                            We're proud to serve clients globally from our base in Pakistan, delivering world-class software solutions with passion and expertise.
                        </p>
                        
                        {/* Flag with Arrow */}
                        <div className="flex flex-col items-center gap-4">
                            {/* Arrow */}
                            <div className="mb-2">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 3L5 21H19L12 3Z" fill="#10b981" stroke="#10b981" strokeWidth="1" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            
                            {/* Flag */}
                            <div className="w-[80px] h-[80px] rounded-full overflow-hidden shadow-lg ring-2 ring-accent/30">
                                <img src={pakistanFlag} alt="Pakistan" className="w-full h-full object-cover" />
                            </div>
                            
                            {/* Text */}
                            <div className="mt-6 text-center">
                                <p className="text-2xl font-bold text-black mb-1">Pakistan</p>
                                <p className="text-base text-gray-700 font-medium">Our Home Base</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
