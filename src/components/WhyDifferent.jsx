import React, { useEffect, useRef } from 'react';
import { Rocket, DollarSign, Handshake, GraduationCap, Users, Zap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        title: 'Startup Friendly',
        desc: 'Helping startups launch with expert solutions, ensuring a confident and smooth journey from the start.',
        color: '#020617', // dark
        icon: Rocket
    },
    {
        title: 'Cost Effective',
        desc: 'Smart, high-quality solutions that maximize value while staying within your budget.',
        color: '#10b981', // accent/green
        icon: DollarSign
    },
    {
        title: 'Partner-First Approach',
        desc: 'Aligning with your vision and goals, we build lasting partnerships focused on your success.',
        color: '#020617', // dark
        icon: Handshake
    },
    {
        title: 'Education & Support',
        desc: 'We empower you with knowledge and provide ongoing support to ensure long-term success.',
        color: '#10b981', // accent/green
        icon: GraduationCap
    },
    {
        title: 'Global Tech Talent',
        desc: 'Access a diverse pool of elite developers from around the world to build world-class software.',
        color: '#020617', // dark
        icon: Users
    },
    {
        title: 'Fast Project Delivery',
        desc: 'Fast, efficient processes that ensure high-quality projects delivered on time, every time.',
        color: '#020617', // dark
        icon: Zap
    }
];

const WhyDifferent = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const cardsRef = useRef([]);

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

            // Cards stagger animation
            cardsRef.current.forEach((card, i) => {
                if (card) {
                    gsap.fromTo(card,
                        { opacity: 0, y: 60, rotationY: -15 },
                        {
                            opacity: 1,
                            y: 0,
                            rotationY: 0,
                            duration: 0.7,
                            delay: i * 0.1,
                            ease: 'power3.out',
                            scrollTrigger: {
                                trigger: card,
                                start: 'top 85%',
                            }
                        }
                    );
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-8 sm:py-12 md:py-20 lg:py-24 bg-gray-50" id="why-us">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-5">
                <div ref={headingRef} className="text-center mb-6 sm:mb-10 md:mb-16">
                    <h2 className="text-[2rem] sm:text-[2.5rem] md:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-4 px-2">
                        See How We Are <span className="text-accent">Different</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We bring you expert-driven, scalable, and affordable software solutions fast, reliable, and built for your success!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {features.map((feature, i) => {
                        const IconComponent = feature.icon;
                        return (
                            <div 
                                key={i} 
                                ref={el => cardsRef.current[i] = el}
                                className="bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 group"
                            >
                                <div
                                    className="w-14 h-14 rounded-xl mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-sm flex items-center justify-center"
                                    style={{ background: feature.color }}
                                >
                                    <IconComponent className="w-7 h-7 text-white" strokeWidth={2} />
                                </div>
                                <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-accent transition-colors">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-base">{feature.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyDifferent;
