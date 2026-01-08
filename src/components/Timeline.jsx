import React, { useEffect, useRef } from 'react';
import { Settings, Bug, PenTool, Code, Layers, TrendingUp, Shield } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import rocketImg from '../assets/From Start To Finish/Gemini_Generated_Image_djjx0idjjx0idjjx-removebg-preview.png';

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        id: '01',
        title: 'Discovery & Planning',
        desc: 'We start by understanding your business goals, target audience, and requirements. This helps us create a clear roadmap and strategy for your project.',
        icon: <Settings size={20} />
    },
    {
        id: '02',
        title: 'UI/UX Design',
        desc: 'Our design team creates intuitive user interfaces and experiences. We focus on user-centered design that is both beautiful and functional.',
        icon: <PenTool size={20} />
    },
    {
        id: '03',
        title: 'Development',
        desc: 'We build your web application using modern technologies and best practices. Our developers write clean, maintainable code that scales with your business.',
        icon: <Code size={20} />
    },
    {
        id: '04',
        title: 'Testing & Quality Assurance',
        desc: 'We thoroughly test your application to ensure it works flawlessly across all devices and browsers. We identify and fix issues before launch.',
        icon: <Bug size={20} />
    },
    {
        id: '05',
        title: 'Deployment & Launch',
        desc: 'We deploy your application to production with proper hosting and security measures. We ensure a smooth launch and monitor everything closely.',
        icon: <Layers size={20} />
    },
    {
        id: '06',
        title: 'Maintenance & Support',
        desc: 'After launch, we provide ongoing maintenance, updates, and support. We monitor performance and make improvements based on real-world usage.',
        icon: <TrendingUp size={20} />
    },
    {
        id: '07',
        title: 'Scale & Optimize',
        desc: 'As your business grows, we help scale your application and optimize performance. We ensure your software evolves with your needs.',
        icon: <Shield size={20} />
    }
];

const Timeline = () => {
    const timelineRef = useRef(null);
    const pathRef = useRef(null);

    useEffect(() => {
        const path = pathRef.current;
        if (!path) return;

        // Get total length of the path
        const pathLength = path.getTotalLength();
        
        // Set up initial state - path is invisible
        path.style.strokeDasharray = pathLength;
        path.style.strokeDashoffset = pathLength;

        // Animate path on scroll
        gsap.to(path, {
            strokeDashoffset: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: timelineRef.current,
                start: 'top 80%',
                end: 'bottom 20%',
                scrub: 1, // Smooth scrubbing
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section className="py-8 sm:py-12 md:py-20 lg:py-24 bg-white relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-5">
                {/* Title Section */}
                <div className="text-center mb-6 sm:mb-10 md:mb-16">
                    <h2 className="text-[2rem] sm:text-[2.5rem] md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-3 sm:mb-4 px-2">
                        From Start To <span className="text-accent">Finish</span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                        We follow a structured and client focused development process to ensure the successful delivery of high quality software solutions.
                    </p>
                </div>

                {/* Timeline Container - Desktop */}
                <div ref={timelineRef} className="relative max-w-6xl mx-auto min-h-[1800px] md:min-h-[2000px] lg:min-h-[2400px] hidden md:block">
                    {/* Subtle Soft Curved Background Path - BEHIND all content, touching each step icon */}
                    <svg
                        className="absolute left-1/2 top-0 w-full -translate-x-1/2 pointer-events-none overflow-visible z-0"
                        style={{ height: '2400px' }}
                        viewBox="0 0 100 2400"
                        preserveAspectRatio="none"
                    >
                        <path
                            ref={pathRef}
                            d="M 30 150 
                               L 25 120
                               Q 25 175, 50 175
                               Q 75 175, 75 230
                               L 75 350
                               L 75 470
                               Q 75 525, 50 525
                               Q 25 525, 25 580
                               L 25 700
                               L 25 820
                               Q 25 875, 50 875
                               Q 75 875, 75 930
                               L 75 1050
                               L 75 1170
                               Q 75 1225, 50 1225
                               Q 25 1225, 25 1280
                               L 25 1400
                               L 25 1520
                               Q 25 1575, 50 1575
                               Q 75 1575, 75 1630
                               L 75 1750
                               L 75 1870
                               Q 75 1925, 50 1925
                               Q 25 1925, 25 1980
                               L 25 2000
                               Q 23 2900, 80 2340"
                            stroke="rgba(16, 185, 129, 0.83)"
                            strokeWidth="1.5"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    {/* Timeline Steps - Above the curve */}
                    <div className="relative z-10">
                        {steps.map((step, index) => {
                            const isLeft = index % 2 === 0;
                            const topPosition = index * 280 + (index * 70); // Responsive spacing between steps

                            return (
                                <div
                                    key={step.id}
                                    className="absolute w-full animate-fade-in"
                                    style={{ 
                                        top: `${topPosition}px`,
                                        animationDelay: `${index * 0.1}s`
                                    }}
                                >
                                    {/* Card */}
                                    <div
                                        className={`w-full max-w-[400px] md:max-w-[450px] lg:max-w-[500px] bg-white rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-8 shadow-[0_8px_24px_rgba(0,0,0,0.15)] relative z-10 ${isLeft ? 'ml-0' : 'ml-auto'
                                            }`}
                                    >
                                        {/* Icon Circle - Positioned at top corner of card */}
                                        <div
                                            className={`absolute -top-4 md:-top-6 w-10 h-10 md:w-12 md:h-12 bg-accent rounded-full flex items-center justify-center text-white shadow-lg z-20 ${isLeft ? 'left-4 md:left-6' : 'right-4 md:right-6'
                                                }`}
                                        >
                                            {step.icon}
                                        </div>
                                        {/* Large Step Number Background */}
                                        <div className="absolute bottom-2 md:bottom-4 right-4 md:right-8 text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] font-bold text-gray-100 -z-10 select-none leading-none">
                                            {step.id}
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-accent mb-3 md:mb-4 relative z-10">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed relative z-10">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Rocket at Bottom Right */}
                    <div
                        className="absolute right-4 md:right-8 lg:right-12 xl:right-24 z-10 hidden md:block"
                        style={{ top: 'calc(100% - 200px)' }}
                    >
                        <div className="relative flex items-center justify-center" style={{ width: 'clamp(150px, 20vw, 256px)', height: 'clamp(150px, 20vw, 256px)' }}>
                            {/* Codezyra-style Pulse Ring Animation - behind rocket */}
                            {/* Pulse Ring 1 - Outer */}
                            <div 
                                className="absolute rounded-full border-2 border-accent/40"
                                style={{ 
                                    width: '100%', 
                                    height: '100%',
                                    left: '50%',
                                    top: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    zIndex: '1',
                                    background: 'rgba(8, 151, 103, 0.61)',
                                    animation: 'pulse-ring 2.4s ease-out infinite',
                                    animationDelay: '0s'
                                }}
                            ></div>
                            {/* Pulse Ring 2 - Middle */}
                            <div 
                                className="absolute rounded-full border-2 border-accent/35"
                                style={{ 
                                    width: '100%', 
                                    height: '100%',
                                    left: '50%',
                                    top: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    zIndex: '2',
                                    background: 'rgba(16, 185, 129, 0.38)',
                                    animation: 'pulse-ring 2.4s ease-out infinite',
                                    animationDelay: '0.8s'
                                }}
                            ></div>
                            {/* Pulse Ring 3 - Inner */}
                            <div 
                                className="absolute rounded-full border-2 border-accent/30"
                                style={{ 
                                    width: '100%', 
                                    height: '100%',
                                    left: '50%',
                                    top: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    zIndex: '3',
                                    background: 'rgba(16, 185, 129, 0.35)',
                                    animation: 'pulse-ring 2.4s ease-out infinite',
                                    animationDelay: '1.6s'
                                }}
                            ></div>
                            
                            {/* Light gray circular shadow/glow behind rocket */}
                            <div 
                                className="absolute bg-gray-100 rounded-full blur-xl"
                                style={{ 
                                    width: '100%', 
                                    height: '100%',
                                    left: '50%',
                                    top: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    opacity: '0.6',
                                    zIndex: '4'
                                }}
                            ></div>
                            
                            {/* Rocket Image - STATIC */}
                            <img
                                src={rocketImg}
                                alt="CODEZYRA Rocket"
                                className="w-full h-auto max-w-[150px] md:max-w-[200px] lg:max-w-[256px] relative z-10"
                                style={{ 
                                    zIndex: '10', 
                                    position: 'relative',
                                    transform: 'rotate(48.5deg)'
                                }}
                            />
                            
                            <style>{`
                                @keyframes pulse-ring {
                                    0% { 
                                        transform: translate(-50%, -50%) scale(0.8);
                                        opacity: 0.6;
                                    }
                                    100% { 
                                        transform: translate(-50%, -50%) scale(2);
                                        opacity: 0;
                                    }
                                }
                            `}</style>
                        </div>
                    </div>
                </div>

                {/* Spacer for rocket on desktop */}
                <div className="h-40 hidden md:block"></div>
            </div>

            {/* Mobile Responsive Version */}
            <div className="md:hidden max-w-6xl mx-auto px-4 sm:px-5">
                <div className="relative">
                    {/* Mobile Steps */}
                    {steps.map((step, index) => (
                        <div 
                            key={step.id} 
                            className="relative mb-6 sm:mb-8 animate-fade-in"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Card - Centered */}
                            <div className="w-full bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-[0_8px_24px_rgba(0,0,0,0.15)] relative z-10">
                                {/* Icon Circle - Top Left */}
                                <div className="absolute -top-4 sm:-top-5 left-4 sm:left-6 w-10 h-10 sm:w-12 sm:h-12 bg-accent rounded-full flex items-center justify-center text-white shadow-lg z-20">
                                    {step.icon}
                                </div>
                                
                                {/* Large Step Number Background */}
                                <div className="absolute bottom-2 sm:bottom-4 right-4 sm:right-6 text-[50px] sm:text-[60px] md:text-[80px] font-bold text-gray-100 -z-10 select-none leading-none">
                                    {step.id}
                                </div>

                                {/* Content */}
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-accent mb-2 sm:mb-3 relative z-10 pt-2">
                                    {step.title}
                                </h3>
                                <p className="text-gray-700 leading-relaxed text-sm sm:text-base relative z-10">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Timeline;
