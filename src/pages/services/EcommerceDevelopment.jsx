import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart, CreditCard, Package } from 'lucide-react';

const EcommerceDevelopment = () => {
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
                        src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&h=1080&fit=crop&q=80" 
                        alt="E-Commerce Development Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
                </div>
                <div className="relative z-10 max-w-[1280px] mx-auto px-5">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                            E-Commerce Development
                        </h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 drop-shadow-md">
                            Complete e-commerce solutions with secure payment integration, inventory management, and optimized user experience to boost your online sales.
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
                                <h2 className="text-4xl font-bold text-black mb-4">Build Your Online Store</h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    We create feature-rich e-commerce platforms that provide seamless shopping experiences and drive conversions.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-black mb-4">E-Commerce Features</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-gray-700">
                                        <span className="text-accent mt-1">✓</span>
                                        <span>Custom shopping cart and checkout</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-700">
                                        <span className="text-accent mt-1">✓</span>
                                        <span>Payment gateway integration (Stripe, PayPal, etc.)</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-700">
                                        <span className="text-accent mt-1">✓</span>
                                        <span>Inventory and order management</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-700">
                                        <span className="text-accent mt-1">✓</span>
                                        <span>Multi-vendor marketplace support</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-700">
                                        <span className="text-accent mt-1">✓</span>
                                        <span>Mobile-responsive design</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-700">
                                        <span className="text-accent mt-1">✓</span>
                                        <span>SEO optimization for better visibility</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-black mb-6">What We Deliver</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                                        <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-4">
                                            <ShoppingCart size={32} />
                                        </div>
                                        <h4 className="text-xl font-bold text-black mb-2">Seamless Shopping</h4>
                                        <p className="text-gray-600">Intuitive user experience</p>
                                    </div>
                                    <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                                        <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-4">
                                            <CreditCard size={32} />
                                        </div>
                                        <h4 className="text-xl font-bold text-black mb-2">Secure Payments</h4>
                                        <p className="text-gray-600">PCI-compliant transactions</p>
                                    </div>
                                    <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                                        <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-4">
                                            <Package size={32} />
                                        </div>
                                        <h4 className="text-xl font-bold text-black mb-2">Inventory Management</h4>
                                        <p className="text-gray-600">Real-time stock tracking</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1 space-y-6">
                            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                                <h3 className="text-2xl font-bold text-black mb-3">Ready to Start?</h3>
                                <p className="text-gray-600 mb-6">Let's build your online store</p>
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
                                    <Link to="/services/digital-marketing" className="block text-accent hover:text-primary transition-colors">
                                        Digital Marketing →
                                    </Link>
                                    <Link to="/services/custom-software" className="block text-accent hover:text-primary transition-colors">
                                        Custom Software Development →
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
                        Ready to Launch Your E-Commerce Store?
                    </h2>
                    <p className="text-xl text-white mb-8 max-w-2xl mx-auto drop-shadow-lg">
                        Let's discuss how we can help bring your online store vision to life with our expert team.
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

export default EcommerceDevelopment;
