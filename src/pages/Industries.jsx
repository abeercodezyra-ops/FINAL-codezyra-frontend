import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Landmark, Stethoscope, GraduationCap, Truck, Cloud, ArrowRight } from 'lucide-react';


const industries = [
    {
        icon: <ShoppingCart size={40} />,
        title: 'Ecommerce & Retail',
        desc: 'Scalable storefronts and headless commerce architectures.',
        bullets: ['Shopify Plus', 'Custom Marketplaces', 'Inventory Sync']
    },
    {
        icon: <Landmark size={40} />,
        title: 'FinTech',
        desc: 'Secure banking apps and payment gateways compliant with regulations.',
        bullets: ['PCI Compliance', 'Blockchain', 'Real-time Payments']
    },
    {
        icon: <Stethoscope size={40} />,
        title: 'HealthTech',
        desc: 'HIPAA-compliant telemedicine platforms and patient portals.',
        bullets: ['Telehealth', 'EHR Integration', 'IoT Wearables']
    },
    {
        icon: <GraduationCap size={40} />,
        title: 'EdTech',
        desc: 'Interactive LMS and virtual classroom solutions.',
        bullets: ['Live Streaming', 'Gamification', 'Student Analytics']
    },
    {
        icon: <Truck size={40} />,
        title: 'Logistics',
        desc: 'Real-time tracking and fleet management systems.',
        bullets: ['Route Optimization', 'Supply Chain Visibility', 'Driver Apps']
    },
    {
        icon: <Cloud size={40} />,
        title: 'SaaS',
        desc: 'Multi-tenant cloud applications built for scale.',
        bullets: ['Subscription Billing', 'Tenant Isolation', 'API First']
    }
];

const Industries = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-5">
                    <div className="text-center">
                        <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-extrabold mb-5 sm:mb-6 md:mb-7 px-2">
                            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">Digital Solutions by </span>
                            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Industry</span>
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 max-w-4xl mx-auto px-4 font-semibold leading-relaxed">
                            We bring <span className="text-accent font-bold">deep domain expertise</span> to every project, understanding your <span className="text-accent font-bold">regulatory requirements</span> and <span className="text-accent font-bold">user behaviors</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* Industries Grid */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                        {industries.map((ind, i) => (
                            <div
                                key={i}
                                className="group bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:shadow-2xl hover:border-accent transition-all duration-300 hover:-translate-y-3"
                            >
                                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-4 sm:mb-5 md:mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300 group-hover:scale-110">
                                    {ind.icon}
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4 group-hover:text-accent transition-colors">
                                    {ind.title}
                                </h3>
                                <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-5 md:mb-6 leading-relaxed">
                                    {ind.desc}
                                </p>
                                <ul className="space-y-2 sm:space-y-3">
                                    {ind.bullets.map((b, idx) => (
                                        <li key={idx} className="flex items-start gap-2 sm:gap-3 text-base sm:text-lg text-gray-700">
                                            <span className="text-accent mt-0.5 sm:mt-1 font-bold flex-shrink-0">✓</span>
                                            <span className="leading-relaxed">{b}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Codezyra Section */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-5">
                    <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-5 md:mb-6 px-2">
                                Why Codezyra for Your <span className="text-accent">Industry?</span>
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-7 md:mb-8 leading-relaxed px-2">
                                Generic dev shops don't understand your regulatory requirements or user behaviors. We do.
                            </p>
                            <div className="space-y-4 sm:space-y-5 md:space-y-6">
                                <div className="flex gap-4 sm:gap-5 md:gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-accent/10 rounded-xl flex items-center justify-center text-accent font-bold text-lg sm:text-xl">
                                        01
                                    </div>
                                    <div>
                                        <h4 className="text-lg sm:text-xl font-bold text-black mb-1 sm:mb-2">Regulatory Compliance</h4>
                                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                                            We build with HIPAA, PCI, and GDPR in mind from day one, ensuring your application meets all industry standards.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4 sm:gap-5 md:gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-accent/10 rounded-xl flex items-center justify-center text-accent font-bold text-lg sm:text-xl">
                                        02
                                    </div>
                                    <div>
                                        <h4 className="text-lg sm:text-xl font-bold text-black mb-1 sm:mb-2">Scalable Architecture</h4>
                                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                                            Systems designed to handle millions of transactions, users, and data points without breaking a sweat.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4 sm:gap-5 md:gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-accent/10 rounded-xl flex items-center justify-center text-accent font-bold text-lg sm:text-xl">
                                        03
                                    </div>
                                    <div>
                                        <h4 className="text-lg sm:text-xl font-bold text-black mb-1 sm:mb-2">Industry Expertise</h4>
                                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                                            Our team has worked across multiple industries, bringing proven solutions and best practices to your project.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative mt-8 md:mt-0">
                            <div className="bg-gradient-to-br from-accent/20 via-accent/10 to-accent/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 h-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-accent/20 rounded-full mx-auto mb-4 sm:mb-5 md:mb-6 flex items-center justify-center">
                                        <Cloud size={40} className="sm:w-16 sm:h-16 md:w-16 md:h-16 text-accent" />
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4 px-2">Industry-Focused Solutions</h3>
                                    <p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto px-4">
                                        We understand the unique challenges and opportunities in each industry we serve.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
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
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 drop-shadow-2xl px-2">
                        Got a specific industry challenge?
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-6 sm:mb-7 md:mb-8 max-w-2xl mx-auto drop-shadow-lg px-4">
                        Let's discuss how we can help solve your industry-specific problems with tailored solutions.
                    </p>
                    <Link to="/contact">
                        <button className="bg-white text-accent px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 text-base sm:text-lg md:text-xl touch-manipulation">
                            Discuss Your Industry Project <ArrowRight size={18} className="sm:w-5 sm:h-5 inline ml-2" />
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Industries;
