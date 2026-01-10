import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import heroBgImage from '../assets/logo/Gemini_Generated_Image_8yvj1y8yvj1y8yvj.png';

const ROTATING_TEXTS = [
    "Visionary Software Architects",
    "Certified Scrum Masters",
    "Agile Development Experts",
    "Product-Focused Engineers",
    "Scalable Tech Partners",
    "Enterprise-Grade Teams"
];

const Hero = () => {
    const heroRef = React.useRef(null);
    const [currentTextIndex, setCurrentTextIndex] = React.useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % ROTATING_TEXTS.length);
        }, 3000); // Rotate every 3 seconds

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate from bottom with fade
            gsap.fromTo('.hero-main-title',
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: 'power3.out' }
            );

            gsap.fromTo('.hero-sub',
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, delay: 0.3, ease: 'power3.out' }
            );

            gsap.fromTo('.hero-actions',
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, delay: 0.4, ease: 'power3.out' }
            );
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="relative min-h-[70vh] sm:min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'transparent', backgroundColor: 'transparent' }}>
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img 
                    src={heroBgImage} 
                    alt="Hero Background" 
                    className="w-full h-full object-cover object-center"
                    style={{ 
                        height: '100%',
                        objectPosition: 'center center'
                    }}
                />
            </div>
            
            <div className="max-w-[1280px] mx-auto px-4 sm:px-5 w-full relative z-10 py-8 sm:py-12 md:py-0">
                <div className="relative z-10 text-center max-w-5xl mx-auto pt-8 sm:pt-12 md:pt-8">
                    <h1 className="hero-main-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight text-white mb-2 sm:mb-3 tracking-tight px-2 drop-shadow-2xl">
                        <span className="inline-block transform hover:scale-105 transition-transform duration-300">Plan</span>
                        <span className="inline-block text-accent mx-2 sm:mx-3 drop-shadow-[0_0_15px_rgba(16,185,129,0.8)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">→</span>
                        <span className="inline-block transform hover:scale-105 transition-transform duration-300">Build</span>
                        <span className="inline-block text-accent mx-2 sm:mx-3 drop-shadow-[0_0_15px_rgba(16,185,129,0.8)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">→</span>
                        <span className="inline-block transform hover:scale-105 transition-transform duration-300">Succeed</span>
                    </h1>

                    {/* Rotating Text */}
                    <div className="hero-sub font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-normal mt-3 sm:mt-4 md:mt-5 mb-5 sm:mb-6 h-12 sm:h-14 md:h-16 lg:h-20 flex items-center justify-center relative px-2">
                        {ROTATING_TEXTS.map((text, index) => (
                            <span
                                key={index}
                                className={`absolute transition-all duration-500 text-center px-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-green-400 bg-clip-text text-transparent font-extrabold drop-shadow-2xl ${index === currentTextIndex
                                    ? 'opacity-100 translate-y-0 scale-100 z-20'
                                    : 'opacity-0 translate-y-6 scale-95 z-0 pointer-events-none'
                                    }`}
                            >
                                {text}
                            </span>
                        ))}
                    </div>
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mb-6 sm:mb-7 md:mb-8 max-w-4xl mx-auto font-semibold px-4 drop-shadow-2xl leading-relaxed">
                        Available in your <span className="text-accent font-bold">Timezone</span>, at <span className="text-accent font-bold">Affordable Rates</span>, with <span className="text-accent font-bold">Full Transparency</span>
                    </p>
                    <div className="hero-actions flex flex-col sm:flex-row items-center justify-center gap-3 px-4">
                        <Link to="/contact" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto bg-brand-gradient text-white px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-4 rounded-xl text-lg sm:text-xl font-bold transition-all duration-300 shadow-[0_10px_30px_rgba(16,185,129,0.4)] hover:shadow-[0_15px_50px_rgba(16,185,129,0.7)] hover:-translate-y-1 hover:scale-105 touch-manipulation">
                                Get a Free Consultation
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
