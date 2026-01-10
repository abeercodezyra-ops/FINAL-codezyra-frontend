import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import FAQ from '../components/FAQ';
import LazyMap from '../components/LazyMap';
import bgImage from '../assets/pages img/start.avif';
import { API_ENDPOINTS } from '../config/api';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        projectType: '',
        message: '',
    });
    const [status, setStatus] = useState({ loading: false, success: null, error: null });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: null, error: null });

        if (!formData.name || !formData.email || !formData.message) {
            setStatus({ loading: false, success: null, error: 'Name, email, and message are required.' });
            return;
        }

        try {
            const res = await fetch(API_ENDPOINTS.CONTACT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                throw new Error(data.error || 'Failed to send message');
            }

            setStatus({ loading: false, success: 'Message sent successfully!', error: null });
            setFormData({
                name: '',
                email: '',
                company: '',
                projectType: '',
                message: '',
            });

            // Auto-hide success after a few seconds
            setTimeout(() => {
                setStatus((prev) => ({ ...prev, success: null }));
            }, 4000);
        } catch (err) {
            setStatus({ loading: false, success: null, error: err.message || 'Failed to send message.' });
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="relative pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-18 md:pb-22 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src={bgImage} 
                        alt="Contact Background" 
                        className="w-full h-full object-cover"
                    />
                </div>
                
                {/* Light White Overlay for Text Readability */}
                <div className="absolute inset-0 bg-white/40 z-[1]"></div>
                
                {/* Content */}
                <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-5 text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-5 sm:mb-6 md:mb-7 px-2">
                        <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">Start Your </span>
                        <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Project</span>
                    </h1>
                    <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 max-w-3xl mx-auto px-4 font-semibold leading-relaxed">
                        Ready to build something <span className="text-accent font-bold">extraordinary?</span> Let's <span className="text-accent font-bold">talk</span>.
                    </p>
                </div>
            </section>

            <section className="py-12 sm:py-16 md:py-20">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">

                        {/* Form Side */}
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6 sm:mb-8">Tell us about your project</h2>
                            <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-base font-semibold text-gray-700 mb-2">Name</label>
                                        <input
                                            type="text"
                                            placeholder="Your name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-base font-semibold text-gray-700 mb-2">Email</label>
                                        <input
                                            type="email"
                                            placeholder="you@example.com"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                                    <div>
                                        <label className="block text-base font-semibold text-gray-700 mb-2">Company</label>
                                        <input
                                            type="text"
                                            placeholder="Company (optional)"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-base font-semibold text-gray-700 mb-2">Project Type</label>
                                    <div className="flex flex-wrap gap-3">
                                        {['Mobile App', 'Web App', 'Custom Software', 'Other'].map((type) => (
                                            <label key={type} className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full cursor-pointer hover:border-accent transition-colors">
                                                <input
                                                    type="radio"
                                                    name="projectType"
                                                    value={type}
                                                    checked={formData.projectType === type}
                                                    onChange={handleChange}
                                                    className="text-accent focus:ring-accent"
                                                />
                                                <span className="text-base">{type}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-base font-semibold text-gray-700 mb-2">Message</label>
                                    <textarea
                                        rows="4"
                                        placeholder="Tell us about your goals..."
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={status.loading}
                                    className="w-full bg-accent text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg text-lg sm:text-xl font-bold transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5 hover:bg-secondary touch-manipulation disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {status.loading ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>

                        {/* Info Side */}
                        <div className="space-y-6 sm:space-y-8">
                            <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8">
                                <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6">Contact Info</h3>
                                <ul className="space-y-3 sm:space-y-4">
                                    <li className="flex items-center gap-3 sm:gap-4 text-gray-700 text-base sm:text-lg">
                                        <Mail size={20} className="sm:w-6 sm:h-6 text-accent flex-shrink-0" />
                                        <span className="break-words">codezyrapakistan@gmail.com</span>
                                    </li>
                                    <li className="flex items-center gap-3 sm:gap-4 text-gray-700 text-base sm:text-lg">
                                        <Phone size={20} className="sm:w-6 sm:h-6 text-accent flex-shrink-0" />
                                        <span>+92 348 2179016</span>
                                    </li>
                                    <li className="flex items-start gap-3 sm:gap-4 text-gray-700 text-base sm:text-lg">
                                        <MapPin size={20} className="sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-1" />
                                        <span className="break-words">block 3 Nazimabad Rd Number 3, opposite Al Mehran Rabri, Block 3 Nazimabad, Karachi, 74600</span>
                                    </li>
                                </ul>
                            </div>

                            <LazyMap
                                title="Codezyra Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.042552047916!2d67.0274853!3d24.9185313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x830c145438f4e52b%3A0x5240266fe20189be!2sCodezyra!5e1!3m2!1sen!2s!4v1767631032549!5m2!1sen!2s"
                                aspectClass="aspect-[4/3]"
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-5">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black text-center mb-8 sm:mb-10 md:mb-12 px-2">Frequently Asked Questions</h2>
                    <FAQ />
                </div>
            </section>

            {/* Global toast for status */}
            {(status.error || status.success) && (
                <div className="fixed top-6 right-6 z-50 animate-slide-down max-w-[90%] sm:max-w-md">
                    <div className={`flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-2xl text-base font-bold ${status.error ? 'bg-red-50 text-red-700 border-2 border-red-300' : 'bg-green-50 text-green-700 border-2 border-green-300'
                        }`}>
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white shadow-sm border-2 mr-1 font-bold text-lg">
                            {status.error ? '!' : '✓'}
                        </span>
                        <span>{status.error || status.success}</span>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Contact;
