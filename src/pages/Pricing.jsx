import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Calendar, Building2, CheckCircle, ArrowRight } from 'lucide-react';

const Pricing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const pricingModels = [
        {
            icon: <DollarSign size={40} />,
            title: 'Project-Based Pricing',
            subtitle: 'Fixed scope, fixed cost',
            bestFor: 'Startups and businesses with well-defined project requirements',
            includes: [
                'Complete project delivered as per agreed scope',
                'Fixed timeline and budget',
                'Dedicated project manager',
                'Quality assurance and testing',
                'Post-launch support (30 days)',
                'Source code and documentation'
            ],
            note: 'Final pricing depends on project complexity, features, and timeline',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: <Calendar size={40} />,
            title: 'Dedicated Developer / Monthly Model',
            subtitle: 'Flexible engagement, ongoing development',
            bestFor: 'Companies needing continuous development and iterative improvements',
            includes: [
                'Full-time dedicated developer(s) assigned',
                'Flexible monthly commitment',
                'Direct communication with your team',
                'Regular sprints and updates',
                'Technology stack of your choice',
                'Scalable team size as needed'
            ],
            note: 'Monthly rates vary based on developer expertise and tech stack',
            color: 'from-accent to-green-600'
        },
        {
            icon: <Building2 size={40} />,
            title: 'Custom / Enterprise Solutions',
            subtitle: 'Tailored for large-scale projects',
            bestFor: 'Enterprises requiring complex systems and custom architecture',
            includes: [
                'Custom solution design and architecture',
                'Multi-phase project planning',
                'Scalable infrastructure and security',
                'Integration with existing systems',
                'Dedicated technical team',
                'Long-term support and maintenance'
            ],
            note: 'Pricing structured based on scope, team size, and engagement duration',
            color: 'from-purple-500 to-pink-500'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-5">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-extrabold mb-5 sm:mb-6 md:mb-7 px-2 leading-tight">
                            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">Transparent </span>
                            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Pricing</span>
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6 sm:mb-8 px-4 font-semibold leading-relaxed">
                            Flexible pricing models designed to fit your <span className="text-accent font-bold">budget and project needs</span>. No hidden costs, no surprises—just honest estimates.
                        </p>
                    </div>
                </div>
            </section>

            {/* Intro */}
            <section className="py-12 sm:py-16 md:py-20">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-5">
                    <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl p-8 md:p-12 border border-accent/20 text-center max-w-4xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                            Every Project is Unique
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            We understand that no two projects are the same. That's why we offer flexible pricing models tailored to your specific requirements. Whether you need a one-time project or ongoing development support, we have a solution that works for you.
                        </p>
                    </div>
                </div>
            </section>

            {/* Pricing Models */}
            <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-5">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
                            Our Pricing Models
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                            Choose the engagement model that best fits your project and business goals
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {pricingModels.map((model, i) => (
                            <div key={i} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200">
                                <div className={`w-20 h-20 bg-gradient-to-br ${model.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}>
                                    {model.icon}
                                </div>
                                
                                <h3 className="text-2xl font-bold text-black mb-2">
                                    {model.title}
                                </h3>
                                <p className="text-base text-gray-500 mb-6">
                                    {model.subtitle}
                                </p>

                                <div className="mb-6 pb-6 border-b border-gray-200">
                                    <p className="text-sm font-semibold text-accent mb-2">Best For:</p>
                                    <p className="text-base text-gray-700">
                                        {model.bestFor}
                                    </p>
                                </div>

                                <div className="mb-6">
                                    <p className="text-sm font-semibold text-black mb-4">What's Included:</p>
                                    <ul className="space-y-3">
                                        {model.includes.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        <span className="font-semibold text-gray-800">Note:</span> {model.note}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How We Calculate */}
            <section className="py-12 sm:py-16 md:py-20">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-5">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-8 text-center">
                            How We Calculate Your Estimate
                        </h2>
                        
                        <div className="space-y-6">
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all">
                                <h3 className="text-xl font-bold text-black mb-3">
                                    Project Complexity
                                </h3>
                                <p className="text-base text-gray-600 leading-relaxed">
                                    Number of features, integrations, custom requirements, and technical challenges
                                </p>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all">
                                <h3 className="text-xl font-bold text-black mb-3">
                                    Technology Stack
                                </h3>
                                <p className="text-base text-gray-600 leading-relaxed">
                                    Choice of frameworks, platforms, and tools required for your project
                                </p>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all">
                                <h3 className="text-xl font-bold text-black mb-3">
                                    Timeline & Resources
                                </h3>
                                <p className="text-base text-gray-600 leading-relaxed">
                                    Project deadline, team size needed, and development sprint planning
                                </p>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all">
                                <h3 className="text-xl font-bold text-black mb-3">
                                    Ongoing Support
                                </h3>
                                <p className="text-base text-gray-600 leading-relaxed">
                                    Maintenance, updates, bug fixes, and feature enhancements post-launch
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-accent/10 to-primary/10">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-5">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6">
                            Ready to Get Started?
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
                            Share your project requirements with us, and we'll provide a detailed estimate tailored to your needs and budget.
                        </p>
                        <Link to="/contact">
                            <button className="bg-brand-gradient text-white px-10 py-4 rounded-xl text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center gap-3">
                                <span>Get a Quote</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;
