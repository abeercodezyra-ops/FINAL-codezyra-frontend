import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Layers, Cpu } from 'lucide-react';

const CustomSoftware = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&h=1080&fit=crop&q=80" 
                        alt="Custom Software Development Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
                </div>
                <div className="relative z-10 max-w-[1280px] mx-auto px-5">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                            Custom Software Development
                        </h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 drop-shadow-md">
                            End-to-end custom software solutions designed to solve your unique business challenges with scalable, secure, and efficient code.
                        </p>
                        <Link to="/contact">
                            <button className="bg-brand-gradient text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5 hover:opacity-90">
                                Get Started <ArrowRight size={20} className="inline ml-2" />
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="max-w-[1280px] mx-auto px-5">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <h2 className="text-4xl font-bold text-black mb-4">Tailored Software Solutions</h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    We build custom software that perfectly fits your business processes, helping you automate workflows and increase efficiency.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-black mb-4">Our Expertise</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-gray-700">
                                        <span className="text-accent mt-1">✓</span>
                                        <span>Enterprise software development</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-700">
                                        <span className="text-accent mt-1">✓</span>
                                        <span>SaaS application development</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-700">
                                        <span className="text-accent mt-1">✓</span>
                                        <span>API development and integration</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-700">
                                        <span className="text-accent mt-1">✓</span>
                                        <span>Legacy system modernization</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-700">
                                        <span className="text-accent mt-1">✓</span>
                                        <span>Cloud-native applications</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-black mb-6">What We Deliver</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                                        <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-4">
                                            <Code2 size={32} />
                                        </div>
                                        <h4 className="text-xl font-bold text-black mb-2">Clean Architecture</h4>
                                        <p className="text-gray-600">Maintainable and scalable code</p>
                                    </div>
                                    <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                                        <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-4">
                                            <Layers size={32} />
                                        </div>
                                        <h4 className="text-xl font-bold text-black mb-2">Modular Design</h4>
                                        <p className="text-gray-600">Flexible and extensible systems</p>
                                    </div>
                                    <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                                        <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-4">
                                            <Cpu size={32} />
                                        </div>
                                        <h4 className="text-xl font-bold text-black mb-2">High Performance</h4>
                                        <p className="text-gray-600">Optimized for efficiency</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1 space-y-6">
                            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                                <h3 className="text-2xl font-bold text-black mb-3">Ready to Start?</h3>
                                <p className="text-gray-600 mb-6">Let's discuss your custom software needs</p>
                                <Link to="/contact">
                                    <button className="w-full bg-brand-gradient text-white px-6 py-3 rounded-lg font-bold transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5">
                                        Contact Us
                                    </button>
                                </Link>
                            </div>

                            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                                <h4 className="text-xl font-bold text-black mb-4">Related Services</h4>
                                <div className="space-y-3">
                                    <Link to="/services/web-app-development" className="block text-accent hover:text-primary transition-colors">
                                        Web App Development →
                                    </Link>
                                    <Link to="/services/project-rescue" className="block text-accent hover:text-primary transition-colors">
                                        Software Project Rescue →
                                    </Link>
                                    <Link to="/services/mobile-app-development" className="block text-accent hover:text-primary transition-colors">
                                        Mobile App Development →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-20 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img 
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&q=80" 
                        alt="Technology Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
                </div>
                
                <div className="relative z-10 max-w-[1280px] mx-auto px-5 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl">
                        Ready to Build Custom Software?
                    </h2>
                    <p className="text-xl text-white mb-8 max-w-2xl mx-auto drop-shadow-lg">
                        Let's discuss how we can help bring your custom software vision to life with our expert team.
                    </p>
                    <Link to="/contact">
                        <button className="bg-accent text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-1 hover:bg-accent/90">
                            Get Started Today
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default CustomSoftware;
