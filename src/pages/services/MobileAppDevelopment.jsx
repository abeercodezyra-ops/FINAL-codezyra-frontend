import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Smartphone, Code, Zap } from 'lucide-react';

const MobileAppDevelopment = () => {
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
                        src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1920&h=1080&fit=crop&q=80" 
                        alt="Mobile App Development Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
                </div>
                <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-5">
                    <div className="text-center">
                        <h1 className="text-[2rem] sm:text-[2.5rem] md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-5 md:mb-6 px-2 drop-shadow-lg">
                            Mobile App Development
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-7 md:mb-8 px-4 drop-shadow-md">
                            Build fast, scalable, and user-friendly mobile apps for iOS and Android that help your business grow and engage customers effectively.
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
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-6 sm:space-y-7 md:space-y-8">
                            <div>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-4 px-2">Why Choose Our Mobile App Development?</h2>
                                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed px-2">
                                    We create mobile applications that deliver exceptional user experiences across all devices. Our team specializes in both native and cross-platform development to meet your specific business needs.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4 px-2">Our Approach</h3>
                                <ul className="space-y-2 sm:space-y-3 px-2">
                                    <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-700">
                                        <span className="text-accent mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                                        <span>Native iOS development with Swift</span>
                                    </li>
                                    <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-700">
                                        <span className="text-accent mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                                        <span>Native Android development with Kotlin</span>
                                    </li>
                                    <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-700">
                                        <span className="text-accent mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                                        <span>Cross-platform solutions with React Native and Flutter</span>
                                    </li>
                                    <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-700">
                                        <span className="text-accent mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                                        <span>Comprehensive testing and quality assurance</span>
                                    </li>
                                    <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-700">
                                        <span className="text-accent mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                                        <span>App Store and Google Play deployment</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-5 md:mb-6 px-2">What We Deliver</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                                    <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:shadow-lg transition-all duration-300">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-3 sm:mb-4">
                                            <Smartphone size={24} className="sm:w-8 sm:h-8" />
                                        </div>
                                        <h4 className="text-lg sm:text-xl font-bold text-black mb-1 sm:mb-2">Native Performance</h4>
                                        <p className="text-xs sm:text-sm text-gray-600">Optimized apps that leverage platform-specific features</p>
                                    </div>
                                    <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:shadow-lg transition-all duration-300">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-3 sm:mb-4">
                                            <Code size={24} className="sm:w-8 sm:h-8" />
                                        </div>
                                        <h4 className="text-lg sm:text-xl font-bold text-black mb-1 sm:mb-2">Clean Code</h4>
                                        <p className="text-xs sm:text-sm text-gray-600">Maintainable, scalable architecture</p>
                                    </div>
                                    <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:shadow-lg transition-all duration-300 sm:col-span-2 lg:col-span-1">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-3 sm:mb-4">
                                            <Zap size={24} className="sm:w-8 sm:h-8" />
                                        </div>
                                        <h4 className="text-lg sm:text-xl font-bold text-black mb-1 sm:mb-2">Fast Delivery</h4>
                                        <p className="text-xs sm:text-sm text-gray-600">Agile development with regular updates</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1 space-y-4 sm:space-y-5 md:space-y-6">
                            <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-200">
                                <h3 className="text-xl sm:text-2xl font-bold text-black mb-2 sm:mb-3">Ready to Start?</h3>
                                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-5 md:mb-6">Let's discuss your mobile app project</p>
                                <Link to="/contact">
                                    <button className="w-full bg-brand-gradient text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-bold transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5 text-sm sm:text-base touch-manipulation">
                                        Contact Us
                                    </button>
                                </Link>
                            </div>

                            <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-200">
                                <h4 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4">Related Services</h4>
                                <div className="space-y-2 sm:space-y-3">
                                    <Link to="/services/web-app-development" className="block text-sm sm:text-base text-accent hover:text-primary transition-colors">
                                        Web App Development →
                                    </Link>
                                    <Link to="/services/custom-software" className="block text-sm sm:text-base text-accent hover:text-primary transition-colors">
                                        Custom Software Development →
                                    </Link>
                                    <Link to="/services/digital-marketing" className="block text-sm sm:text-base text-accent hover:text-primary transition-colors">
                                        Digital Marketing →
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
                        Ready to Build Your Mobile App?
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-6 sm:mb-7 md:mb-8 max-w-2xl mx-auto drop-shadow-lg px-4">
                        Let's discuss how we can help bring your mobile app vision to life with our expert team.
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

export default MobileAppDevelopment;
