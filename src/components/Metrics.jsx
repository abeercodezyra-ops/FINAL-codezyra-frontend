import React, { useEffect, useRef } from 'react';
import { Users, Briefcase, Smile, MapPin } from 'lucide-react';
import directorImg from '../assets/Director img.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Metrics = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const cardsRef = useRef([]);
    const testimonialRef = useRef(null);

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

                <div ref={testimonialRef} className="flex items-center justify-center gap-4 pt-8 border-t border-gray-200">
                    <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                        <img src={directorImg} alt="Aashir Afaq" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div>
                        <div className="text-gray-800 font-semibold">Aashir Afaq</div>
                        <div className="text-base text-gray-500">Director of Operations</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Metrics;
