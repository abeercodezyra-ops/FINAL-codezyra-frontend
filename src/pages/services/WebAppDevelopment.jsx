import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Zap, Shield } from 'lucide-react';

const WebAppDevelopment = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop&q=80" 
                        alt="Web App Development Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
                </div>
                <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-5">
                    <div className="text-center">
                        <h1 className="text-[2rem] sm:text-[2.5rem] md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-5 md:mb-6 px-2 drop-shadow-lg">
                            Web App Development
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-7 md:mb-8 px-4 drop-shadow-md">
                            Custom web applications built with modern technologies to deliver seamless user experiences and powerful functionality for your business needs.
                        </p>
                        <Link to="/contact">
                            <button className="bg-brand-gradient text-white px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-lg text-sm sm:text-base md:text-lg font-bold transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5 hover:opacity-90 touch-manipulation">
                                Get Started <ArrowRight size={18} className="sm:w-5 sm:h-5 inline ml-2" />
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 sm:py-16 md:py-20">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-5">
                    {/* Intro Section */}
                    <div className="mb-12 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 text-center">
                            What We Offer
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto text-center leading-relaxed mb-8">
                            We specialize in creating professional, user-friendly, and high-performing websites to meet your business needs. Here's what we offer:
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 md:mb-16">
                        <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all">
                            <h3 className="text-2xl font-bold text-black mb-4">
                                Custom Design
                            </h3>
                            <p className="text-base text-gray-600 leading-relaxed">
                                Build visually stunning websites tailored to your brand identity.
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all">
                            <h3 className="text-2xl font-bold text-black mb-4">
                                Responsive Development
                            </h3>
                            <p className="text-base text-gray-600 leading-relaxed">
                                Ensure seamless functionality across all devices, including mobile, tablet, and desktop.
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all">
                            <h3 className="text-2xl font-bold text-black mb-4">
                                E-Commerce Solutions
                            </h3>
                            <p className="text-base text-gray-600 leading-relaxed">
                                Develop secure and scalable online stores with payment gateway integration and inventory management.
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all">
                            <h3 className="text-2xl font-bold text-black mb-4">
                                User Experience (UX) Optimization
                            </h3>
                            <p className="text-base text-gray-600 leading-relaxed">
                                Create intuitive navigation and layouts for an enhanced user experience.
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all">
                            <h3 className="text-2xl font-bold text-black mb-4">
                                SEO-Friendly Development
                            </h3>
                            <p className="text-base text-gray-600 leading-relaxed">
                                Build websites optimized for search engines to improve visibility and rankings.
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all">
                            <h3 className="text-2xl font-bold text-black mb-4">
                                Maintenance & Support
                            </h3>
                            <p className="text-base text-gray-600 leading-relaxed">
                                Provide ongoing technical support, updates, and troubleshooting to ensure your website runs smoothly.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-6 sm:space-y-7 md:space-y-8">
                            <div>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-4 px-2">Build Powerful Web Applications</h2>
                                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed px-2">
                                    We create scalable, secure, and high-performance web applications that drive business growth and enhance user engagement.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4 px-2">Our Technology Stack</h3>
                                <ul className="space-y-2 sm:space-y-3 px-2">
                                    <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-700">
                                        <span className="text-accent mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                                        <span>React, Vue.js, and Angular for frontend</span>
                                    </li>
                                    <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-700">
                                        <span className="text-accent mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                                        <span>Node.js, Python, and PHP for backend</span>
                                    </li>
                                    <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-700">
                                        <span className="text-accent mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                                        <span>PostgreSQL, MongoDB, and MySQL databases</span>
                                    </li>
                                    <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-700">
                                        <span className="text-accent mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                                        <span>AWS, Google Cloud, and Azure deployment</span>
                                    </li>
                                    <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-700">
                                        <span className="text-accent mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                                        <span>RESTful APIs and GraphQL integration</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-5 md:mb-6 px-2">What We Deliver</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                                    <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:shadow-lg transition-all duration-300">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-3 sm:mb-4">
                                            <Globe size={24} className="sm:w-8 sm:h-8" />
                                        </div>
                                        <h4 className="text-lg sm:text-xl font-bold text-black mb-1 sm:mb-2">Scalable Solutions</h4>
                                        <p className="text-xs sm:text-sm text-gray-600">Built to grow with your business</p>
                                    </div>
                                    <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:shadow-lg transition-all duration-300">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-3 sm:mb-4">
                                            <Zap size={24} className="sm:w-8 sm:h-8" />
                                        </div>
                                        <h4 className="text-lg sm:text-xl font-bold text-black mb-1 sm:mb-2">Fast Performance</h4>
                                        <p className="text-xs sm:text-sm text-gray-600">Optimized for speed and efficiency</p>
                                    </div>
                                    <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:shadow-lg transition-all duration-300 sm:col-span-2 lg:col-span-1">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-3 sm:mb-4">
                                            <Shield size={24} className="sm:w-8 sm:h-8" />
                                        </div>
                                        <h4 className="text-lg sm:text-xl font-bold text-black mb-1 sm:mb-2">Secure & Reliable</h4>
                                        <p className="text-xs sm:text-sm text-gray-600">Enterprise-grade security</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1 space-y-4 sm:space-y-5 md:space-y-6">
                            <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-200">
                                <h3 className="text-xl sm:text-2xl font-bold text-black mb-2 sm:mb-3">Ready to Start?</h3>
                                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-5 md:mb-6">Let's discuss your web app project</p>
                                <Link to="/contact">
                                    <button className="w-full bg-brand-gradient text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-bold transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5 text-sm sm:text-base touch-manipulation">
                                        Contact Us
                                    </button>
                                </Link>
                            </div>

                            <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-200">
                                <h4 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4">Related Services</h4>
                                <div className="space-y-2 sm:space-y-3">
                                    <Link to="/services/mobile-app-development" className="block text-sm sm:text-base text-accent hover:text-primary transition-colors">
                                        Mobile App Development →
                                    </Link>
                                    <Link to="/services/custom-software" className="block text-sm sm:text-base text-accent hover:text-primary transition-colors">
                                        Custom Software Development →
                                    </Link>
                                    <Link to="/services/ecommerce-development" className="block text-sm sm:text-base text-accent hover:text-primary transition-colors">
                                        E-Commerce Development →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
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
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-5 md:mb-6 drop-shadow-2xl px-2">
                        Ready to Build Your Web App?
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-6 sm:mb-7 md:mb-8 max-w-2xl mx-auto drop-shadow-lg px-4">
                        Let's discuss how we can help bring your web application vision to life with our expert team.
                    </p>
                    <Link to="/contact">
                        <button className="bg-accent text-white px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-lg text-sm sm:text-base md:text-lg font-bold transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-1 hover:bg-accent/90 touch-manipulation">
                            Get Started Today
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default WebAppDevelopment;
