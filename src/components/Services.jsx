import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

// Import service images
import mobileAppImg from '../assets/what we do/home-mobile-app-development-image.webp';
import webAppImg from '../assets/what we do/home-web-app-development-service-image.webp';
import softwareDevImg from '../assets/what we do/home-software-development-service-image.webp';
import ecommerceImg from '../assets/what we do/home-ecommerce-app-development-service-image.webp';
import projectRescueImg from '../assets/what we do/software-project-rescue-service-image.webp';
import digitalMarketingImg from '../assets/what we do/home-digital-marketing-service-mockup.webp';

const services = [
    {
        id: 1,
        title: 'Mobile App Development',
        desc: 'We build fast, scalable, and user-friendly mobile apps for iOS and Android that help your business grow and engage customers effectively.',
        img: mobileAppImg
    },
    {
        id: 2,
        title: 'Web App Development',
        desc: 'Custom web applications built with modern technologies to deliver seamless user experiences and powerful functionality for your business needs.',
        img: webAppImg
    },
    {
        id: 3,
        title: 'Software Development',
        desc: 'End-to-end custom software solutions designed to solve your unique business challenges with scalable, secure, and efficient code.',
        img: softwareDevImg
    },
    {
        id: 4,
        title: 'E-Commerce Development',
        desc: 'Complete e-commerce solutions with secure payment integration, inventory management, and optimized user experience to boost your online sales.',
        img: ecommerceImg
    },
    {
        id: 5,
        title: 'Software Project Rescue',
        desc: 'Revive stalled or failing projects with expert analysis, strategic planning, and execution to get your software back on track and delivered successfully.',
        img: projectRescueImg
    },
    {
        id: 6,
        title: 'Digital Marketing',
        desc: 'Data-driven digital marketing strategies including SEO, social media, and content marketing to increase your online visibility and drive growth.',
        img: digitalMarketingImg
    }
];

const Services = () => {
    const [activeId, setActiveId] = useState(null);
    const [hoveredId, setHoveredId] = useState(null);
    const expandedRefs = useRef({});
    const contentRefs = useRef({});
    const imageRefs = useRef({});
    const hoverImageRefs = useRef({});

    // Handle dropdown expand/collapse animations
    useEffect(() => {
        services.forEach((service) => {
            const expandedDiv = expandedRefs.current[service.id];
            const contentDiv = contentRefs.current[service.id];
            const imageDiv = imageRefs.current[service.id];

            if (activeId === service.id) {
                // Expand animation
                if (expandedDiv && contentDiv && imageDiv) {
                    // Set initial state
                    gsap.set(expandedDiv, { height: 0, opacity: 0 });
                    gsap.set([contentDiv, imageDiv], { opacity: 0, y: 30 });

                    // Animate dropdown opening
                    gsap.to(expandedDiv, {
                        height: 'auto',
                        opacity: 1,
                        duration: 0.6,
                        ease: 'power3.out',
                        onComplete: () => {
                            gsap.set(expandedDiv, { height: 'auto' });
                        }
                    });

                    // Animate content with stagger
                    gsap.to([contentDiv, imageDiv], {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: 'back.out(1.2)',
                        stagger: 0.15,
                        delay: 0.2
                    });

                    // Image 3D rotation animation
                    gsap.fromTo(imageDiv,
                        {
                            rotationY: -30,
                            rotationX: 10,
                            scale: 0.8,
                            opacity: 0
                        },
                        {
                            rotationY: -10,
                            rotationX: 3,
                            scale: 1,
                            opacity: 1,
                            duration: 1,
                            ease: 'power3.out',
                            delay: 0.3
                        }
                    );
                }
            } else {
                // Collapse animation
                if (expandedDiv && contentDiv && imageDiv) {
                    gsap.to([contentDiv, imageDiv], {
                        opacity: 0,
                        y: -20,
                        duration: 0.3,
                        ease: 'power2.in'
                    });

                    gsap.to(expandedDiv, {
                        height: 0,
                        opacity: 0,
                        duration: 0.4,
                        ease: 'power2.in',
                        delay: 0.1
                    });
                }
            }
        });
    }, [activeId]);

    // Handle hover image animation
    useEffect(() => {
        services.forEach((service) => {
            const hoverImage = hoverImageRefs.current[service.id];

            if (hoveredId === service.id && activeId !== service.id) {
                if (hoverImage) {
                    gsap.fromTo(hoverImage,
                        {
                            opacity: 0,
                            scale: 0.8,
                            rotationY: -30,
                            rotationX: 10,
                            x: -50
                        },
                        {
                            opacity: 1,
                            scale: 1.1,
                            rotationY: -18,
                            rotationX: 8,
                            x: 0,
                            duration: 0.6,
                            ease: 'back.out(1.4)'
                        }
                    );
                }
            } else {
                if (hoverImage) {
                    gsap.to(hoverImage, {
                        opacity: 0,
                        scale: 0.8,
                        duration: 0.3,
                        ease: 'power2.in'
                    });
                }
            }
        });
    }, [hoveredId, activeId]);

    return (
        <section className="py-8 sm:py-12 md:py-20 lg:py-24 bg-white" id="services">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-5">
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    <h2 className="text-[2.2rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[4rem] font-extrabold mb-4 sm:mb-5 md:mb-6 px-2">
                        <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">What We </span>
                        <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Do?</span>
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto px-4 leading-relaxed font-medium">
                        We help you <span className="text-accent font-bold">grow</span> with clear software solutions created by <span className="text-accent font-bold">skilled experts</span> around the world
                    </p>
                </div>

                <div className="max-w-[1200px] mx-auto flex flex-col gap-3 sm:gap-4 md:gap-5">
                    {services.map((service, index) => {
                        const isExpanded = activeId === service.id;
                        const isHovered = hoveredId === service.id;
                        const serviceNumber = String(index + 1).padStart(2, '0');

                        return (
                            <div
                                key={service.id}
                                className="relative cursor-pointer overflow-visible transition-all duration-400"
                                onClick={() => setActiveId(activeId === service.id ? null : service.id)}
                                onMouseEnter={() => setHoveredId(service.id)}
                                onMouseLeave={() => setHoveredId(null)}
                            >
                                {/* Service Number */}
                                <div className={`absolute hidden lg:block left-2 sm:left-5 md:left-8 lg:left-10 top-1/2 -translate-y-1/2 text-sm sm:text-sm md:text-base font-bold z-[5] transition-colors duration-400 ${isHovered || isExpanded ? 'text-white' : 'text-gray-400'
                                    }`}>
                                    ({serviceNumber})
                                </div>

                                {/* Hover Image Preview - Hidden on mobile */}
                                {isHovered && !isExpanded && (
                                    <div
                                        ref={el => hoverImageRefs.current[service.id] = el}
                                        className="hidden lg:block absolute left-[60px] lg:left-[80px] xl:left-[100px] top-1/2 -translate-y-1/2 w-[280px] xl:w-[350px] 2xl:w-[420px] h-[180px] xl:h-[220px] 2xl:h-[280px] z-10 pointer-events-none perspective-1200"
                                    >
                                        <img
                                            src={service.img}
                                            alt={service.title}
                                            className="w-full h-full object-contain"
                                            style={{
                                                filter: 'drop-shadow(-20px 20px 50px rgba(0, 0, 0, 0.5))'
                                            }}
                                        />
                                    </div>
                                )}

                                {/* Service Header */}
                                <div className={`py-6 sm:py-8 md:py-10 pl-14 pr-10 sm:px-8 md:px-16 lg:px-20 xl:px-[120px] flex items-center justify-start sm:justify-center transition-all duration-400 relative rounded-xl sm:rounded-2xl ${isHovered || isExpanded
                                    ? 'bg-black border-black'
                                    : 'bg-transparent border border-gray-200'
                                    }`}>
                                    <h3 className={`text-base sm:text-xl md:text-2xl lg:text-[2.8rem] font-semibold m-0 transition-colors duration-400 text-left sm:text-center relative z-[4] ml-0 sm:ml-8 md:ml-12 lg:ml-16 xl:ml-[180px] ${isHovered || isExpanded ? 'text-white' : 'text-gray-300'
                                        }`}>
                                        {service.title}
                                    </h3>
                                    <ArrowRight
                                        className={`absolute right-3 sm:right-5 md:right-8 lg:right-[50px] text-accent transition-transform duration-300 sm:w-6 sm:h-6 ${isExpanded ? 'rotate-180' : ''}`}
                                        size={20}
                                    />
                                </div>

                                {/* Expanded Content */}
                                {(isExpanded || expandedRefs.current[service.id]) && (
                                    <div
                                        ref={el => expandedRefs.current[service.id] = el}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-4 sm:py-6 md:py-8 pb-4 sm:pb-6 md:pb-8 flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-8 items-start lg:items-center bg-dark rounded-b-xl sm:rounded-b-2xl -mt-2 sm:-mt-3 md:-mt-5">
                                            <div ref={el => contentRefs.current[service.id] = el} className="flex-1 w-full lg:w-auto">
                                                <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-4 sm:mb-5 leading-relaxed">
                                                    {service.desc}
                                                </p>
                                                <Link
                                                    to="/services"
                                                    className="inline-flex items-center gap-2 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 border border-white rounded-full transition-all duration-300 hover:bg-accent hover:border-accent hover:text-white touch-manipulation text-base sm:text-lg"
                                                >
                                                    Learn More <ArrowRight size={16} className="sm:w-5 sm:h-5" />
                                                </Link>
                                            </div>
                                            <div className="hidden lg:flex flex-1 w-full lg:w-auto justify-center lg:justify-end items-end perspective-1200 mt-4 lg:mt-6 ml-4 lg:ml-8">
                                                <img
                                                    ref={el => imageRefs.current[service.id] = el}
                                                    src={service.img}
                                                    alt={service.title}
                                                    className="w-full max-w-[120px] sm:max-w-[150px] md:max-w-[180px] lg:max-w-[220px] h-auto object-contain rounded-xl"
                                                    style={{
                                                        filter: 'drop-shadow(-12px 12px 35px rgba(0, 0, 0, 0.4))'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
