import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';


const cases = [
    {
        title: 'GlobalScale Logistics',
        slug: 'globalscale',
        tag: 'Enterprise IoT',
        desc: 'How we helped a logistics giant track 1M+ shipments in real-time using IoT and React Native.',
        metric: '1M+ Shipments Tracked',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
        featured: true
    },
    {
        title: 'Bloom',
        slug: 'bloom',
        tag: 'Mobile App',
        desc: 'A beautiful mobile application with minimalist design and vibrant user experience.',
        metric: '+50% User Engagement',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop'
    },
    {
        title: 'Now You Know Nashville',
        slug: 'now-you-know-nashville',
        tag: 'Travel App',
        desc: 'Discover and explore Nashville with personalized city experiences and recommendations.',
        metric: '10k+ Downloads',
        image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop'
    },
    {
        title: 'Fitness By Faith',
        slug: 'fitness-by-faith',
        tag: 'Health & Fitness',
        desc: 'Comprehensive fitness app with workout sessions, yoga, and wellness tracking.',
        metric: '95% User Satisfaction',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop'
    },
    {
        title: 'My Garage Outlet',
        slug: 'my-garage-outlet',
        tag: 'E-commerce',
        desc: 'Community marketplace for garage sales and local deals with seamless transactions.',
        metric: '200+ Active Sellers',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'
    },
    {
        title: 'Fit 110',
        slug: 'fit-110',
        tag: 'Web Platform',
        desc: 'DIY and construction tutorials platform with video guides and project management.',
        metric: '500+ Tutorials',
        image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=600&fit=crop'
    },
    {
        title: 'JB Sittner Trucking',
        slug: 'jb-sittner-trucking',
        tag: 'Business Portal',
        desc: 'Professional trucking company portal with fleet management and logistics tracking.',
        metric: '100+ Vehicles',
        image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop'
    },
    {
        title: 'Market Toll',
        slug: 'market-toll',
        tag: 'Marketplace',
        desc: 'Modern marketplace platform connecting buyers and sellers with video integration.',
        metric: '1k+ Active Users',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
    }
];

const CaseStudies = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Get featured case study (first one or one marked as featured)
    const featuredCase = cases.find(c => c.featured) || cases[0];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="relative pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 md:pb-12 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop&q=80" 
                        alt="Case Studies Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
                </div>
                <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-5">
                    <div className="text-center">
                        <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-extrabold mb-4 sm:mb-5 md:mb-6 px-2">
                            <span className="text-white drop-shadow-2xl">Successful </span>
                            <span className="bg-gradient-to-r from-cyan-400 via-green-400 to-accent bg-clip-text text-transparent drop-shadow-2xl">Projects</span>
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white max-w-4xl mx-auto mb-5 sm:mb-6 md:mb-7 px-4 drop-shadow-2xl font-semibold leading-relaxed">
                            Crafting <span className="text-accent font-bold">memorable identities</span> and <span className="text-accent font-bold">innovative solutions</span> that build trust
                        </p>
                        <Link to="/contact">
                            <button className="bg-accent text-white px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-lg font-semibold hover:bg-accent/90 transition-colors text-base sm:text-lg touch-manipulation">
                                Get A Free Consultation
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Case Grid with Overlapping Images */}
            <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white overflow-x-hidden">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
                    {/* Mobile/Tablet Grid View */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-6 sm:gap-8">
                        {cases.filter(c => !c.featured).map((item, i) => (
                            <Link 
                                key={i}
                                to={`/case-studies/${item.slug}`} 
                                className="group block bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_15px_50px_rgba(16,185,129,0.25)] transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02]"
                            >
                                <div className="relative h-[280px] sm:h-[320px] w-full overflow-hidden bg-gradient-to-br from-accent/20 to-primary/20">
                                    <img 
                                        src={item.image} 
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.parentElement.style.background = 'linear-gradient(135deg, #10b981 0%, #0ea5e9 100%)';
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 transition-colors"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10">
                                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold bg-accent text-white mb-3 shadow-lg">
                                            {item.tag}
                                        </span>
                                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors leading-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-white/90 text-base sm:text-lg leading-relaxed line-clamp-2">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Overlapping View */}
                    <div className="hidden lg:block relative min-h-[500px] xl:min-h-[600px] py-12">
                        <div className="w-full flex flex-wrap justify-center items-center" style={{ minHeight: '500px' }}>
                            {cases.filter(c => !c.featured).map((item, i) => {
                                const rotation = (i % 4) * 5 - 10; // -10, -5, 0, 5 degrees
                                const nonFeaturedCases = cases.filter(c => !c.featured);
                                const baseZIndex = nonFeaturedCases.length - i;
                                
                                return (
                                    <div 
                                        key={i}
                                        className="relative group/card transition-all duration-300"
                                        style={{
                                            transform: `rotate(${rotation}deg)`,
                                            zIndex: baseZIndex,
                                            marginLeft: i > 0 ? '-80px' : '0',
                                            marginTop: i % 2 === 0 ? '0' : '40px'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.zIndex = '999'}
                                        onMouseLeave={(e) => e.currentTarget.style.zIndex = baseZIndex}
                                    >
                                        <Link 
                                            to={`/case-studies/${item.slug}`} 
                                            className="block bg-white rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.15)] group-hover/card:shadow-[0_20px_60px_rgba(16,185,129,0.4)] transition-all duration-500 group-hover/card:-translate-y-8 group-hover/card:rotate-0 group-hover/card:scale-110 border-4 border-white"
                                        >
                                            <div className="relative h-[350px] w-[260px] xl:h-[400px] xl:w-[300px] overflow-hidden bg-gradient-to-br from-accent/20 to-primary/20">
                                                <img 
                                                    src={item.image} 
                                                    alt={item.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                                                    loading="lazy"
                                                    onError={(e) => {
                                                        e.target.style.display = 'none';
                                                        e.target.parentElement.style.background = 'linear-gradient(135deg, #10b981 0%, #0ea5e9 100%)';
                                                    }}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover/card:from-black/95 transition-colors"></div>
                                                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                                                    <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold bg-accent text-white mb-3 shadow-lg">
                                                        {item.tag}
                                                    </span>
                                                    <h3 className="text-xl xl:text-2xl font-bold text-white mb-2 group-hover/card:text-accent transition-colors leading-tight">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-white/90 text-base leading-relaxed line-clamp-2">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Block */}
            <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-5">
                    <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500">
                        <div className="grid md:grid-cols-2 gap-0">
                            {/* Left Section - Content */}
                            <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center bg-white">
                                <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-semibold bg-accent/10 text-accent mb-3 sm:mb-4 md:mb-5 w-fit">
                                    ⭐ Featured Case Study
                                </span>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-4 md:mb-5 leading-tight">
                                    {featuredCase.title}
                                </h2>
                                <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                                    {featuredCase.desc}
                                </p>
                                <div className="flex items-center gap-2 mb-4 sm:mb-5 md:mb-6">
                                    <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm sm:text-base font-semibold border border-green-200">
                                        {featuredCase.tag}
                                    </span>
                                    <span className="px-3 py-1 bg-accent/5 text-accent rounded-full text-sm sm:text-base font-bold">
                                        {featuredCase.metric}
                                    </span>
                                </div>
                                <Link to={`/case-studies/${featuredCase.slug}`}>
                                    <button className="bg-gradient-to-r from-accent to-green-500 text-white px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 text-base sm:text-lg md:text-xl w-fit touch-manipulation">
                                        Read the Story <ArrowRight size={18} className="sm:w-5 sm:h-5" />
                                    </button>
                                </Link>
                            </div>
                            {/* Right Section - Visual */}
                            <div className="h-64 sm:h-80 md:h-96 lg:h-auto relative overflow-hidden min-h-[250px] sm:min-h-[300px] md:min-h-[350px] group">
                                <img 
                                    src={featuredCase.image} 
                                    alt={featuredCase.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-green-500/10 to-transparent"></div>
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                                    <span className="text-accent font-bold text-sm sm:text-base">🚀 Success Story</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-8 sm:py-12 md:py-16 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img 
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&q=80" 
                        alt="Technology Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
                </div>
                
                <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-5 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4 drop-shadow-2xl px-2">
                        Your project could be next
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-white mb-4 sm:mb-5 md:mb-6 max-w-2xl mx-auto drop-shadow-lg px-4">
                        Join the ranks of successful founders building with Codezyra.
                    </p>
                    <Link to="/contact">
                        <button className="bg-white text-accent px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl text-base sm:text-lg md:text-xl touch-manipulation">
                            Book Strategy Call
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default CaseStudies;
