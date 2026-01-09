import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const posts = [
    {
        cardTitle: "Staff Augmentation",
        category: "TEAM AUGMENTATION",
        title: "How IT Staff Augmentation Turns Struggling Teams Into Productive Ones",
        bgColor: "#28313B", // Dark blue/gray
        textColor: "white",
        img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
    },
    {
        cardTitle: "Freelancer Comparison",
        category: "COMPARISON",
        title: "Freelancers vs. Staff Augmentation: Which Delivers Better Results?",
        bgColor: "#28313B", // Dark blue/gray
        textColor: "white",
        img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
    },
    {
        cardTitle: "Startup Validation",
        category: "STARTUP TIPS",
        title: "The Fastest Way To Validate Your Startup Idea Before You Spend Big",
        bgColor: "#10b981", // Teal/green (accent)
        textColor: "white",
        img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop"
    }
];

const BlogPreview = () => {
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

            // Blog cards stagger animation
            cardsRef.current.forEach((card, i) => {
                if (card) {
                    gsap.fromTo(card,
                        { opacity: 0, y: 60, scale: 0.95 },
                        {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            duration: 0.6,
                            delay: i * 0.15,
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
        <section ref={sectionRef} className="py-24 bg-white">
            <div className="max-w-[1280px] mx-auto px-5">
                <div ref={headingRef} className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-black mb-4">
                        Discover What's <span className="text-accent">New and Next</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Stay ahead of the curve with our latest insights on technology, development trends, and business growth strategies.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, i) => (
                        <Link 
                            to="/blog" 
                            key={i} 
                            ref={el => cardsRef.current[i] = el}
                            className="group block"
                        >
                            <div className="flex flex-col">
                                {/* Image */}
                                <div className="relative rounded-t-2xl overflow-hidden h-48 mb-0">
                                    <img
                                        src={post.img}
                                        alt={post.cardTitle}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                                    {/* Card title overlay - transparent background */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <h3 
                                            className="text-xl font-bold text-center drop-shadow-lg"
                                            style={{ color: post.textColor }}
                                        >
                                            {post.cardTitle}
                                        </h3>
                                    </div>
                                </div>
                                
                                {/* Category and Title below card */}
                                <div className="bg-white rounded-b-2xl p-6 shadow-lg">
                                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                                        {post.category}
                                    </p>
                                    <h4 className="text-lg font-bold text-black group-hover:text-accent transition-colors leading-tight">
                                        {post.title}
                                    </h4>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogPreview;
