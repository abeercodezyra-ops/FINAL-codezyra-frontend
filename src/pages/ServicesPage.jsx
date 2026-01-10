import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Globe, Cpu, ShoppingBag, LifeBuoy, PenTool, ArrowRight, TrendingUp } from 'lucide-react';

const fullServices = [
    {
        icon: <Smartphone size={40} />,
        title: 'Mobile App Development',
        slug: 'mobile-app-development',
        desc: 'Native and cross-platform mobile solutions that users love.',
        features: ['React Native & Swift', 'Offline capability', 'App Store Optimization', 'Push Notifications']
    },
    {
        icon: <Globe size={40} />,
        title: 'Web App Development',
        slug: 'web-app-development',
        desc: 'Scalable cloud-native web applications using modern frameworks.',
        features: ['React & Vite', 'Serverless Architecture', 'PWA Support', 'SEO Optimized']
    },
    {
        icon: <Cpu size={40} />,
        title: 'Custom Software',
        slug: 'custom-software',
        desc: 'Bespoke software solutions tailored to your unique business needs.',
        features: ['Enterprise ERPs', 'Internal Dashboards', 'API Integration', 'Data Migration']
    },
    {
        icon: <ShoppingBag size={40} />,
        title: 'E-Commerce',
        slug: 'ecommerce-development',
        desc: 'High-converting online stores built on Shopify or custom stacks.',
        features: ['Shopify Experts', 'Headless Commerce', 'Payment Gateway Integration', 'Inventory Sync']
    },
    {
        icon: <LifeBuoy size={40} />,
        title: 'Project Rescue',
        slug: 'project-rescue',
        desc: 'We take over struggling projects and bring them to the finish line.',
        features: ['Code Audit', 'Performance Optimization', 'Bug Fixing', 'Technical Debt Removal']
    },
    {
        icon: <TrendingUp size={40} />,
        title: 'Digital Marketing',
        slug: 'digital-marketing',
        desc: 'Data-driven marketing strategies to grow your online presence.',
        features: ['SEO & SEM', 'Social Media Marketing', 'Content Strategy', 'Analytics & Reporting']
    }
];

const ServicesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&h=1080&fit=crop&q=80" 
                        alt="Software Services Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
                </div>
                <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-5">
                    <div className="text-center">
                        <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-extrabold mb-5 sm:mb-6 md:mb-7 px-2">
                            <span className="text-white drop-shadow-2xl">End-to-End </span>
                            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent drop-shadow-2xl">Software Services</span>
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-white max-w-3xl mx-auto px-4 font-semibold drop-shadow-lg">
                            From concept to deployment, we handle every aspect of your digital product lifecycle.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-12 sm:py-16 md:py-20">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                        {fullServices.map((service, i) => (
                            <div
                                key={i}
                                className="group bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:shadow-2xl hover:border-accent transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-4 sm:mb-5 md:mb-6 group-hover:bg-accent group-hover:text-white transition-all">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-black mb-2 sm:mb-3 group-hover:text-accent transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-5 md:mb-6 leading-relaxed">
                                    {service.desc}
                                </p>
                                <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-5 md:mb-6">
                                    {service.features.map((feat, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-base sm:text-lg text-gray-700">
                                            <span className="text-accent mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    to={`/services/${service.slug}`}
                                    className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-4 transition-all text-base sm:text-lg"
                                >
                                    Learn More <ArrowRight size={16} className="sm:w-5 sm:h-5" />
                                </Link>
                            </div>
                        ))}
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
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 sm:mb-6 md:mb-7 px-2">
                        <span className="text-white drop-shadow-2xl">Ready to Start Your </span>
                        <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent drop-shadow-2xl">Project?</span>
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-7 md:mb-8 max-w-2xl mx-auto font-semibold px-4 drop-shadow-lg">
                        Let's discuss how we can help bring your vision to life with our expert team.
                    </p>
                    <Link to="/contact">
                        <button className="bg-accent text-white px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-lg text-base sm:text-lg md:text-xl font-bold transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-1 hover:bg-accent/90 touch-manipulation">
                            Get Started Today
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
