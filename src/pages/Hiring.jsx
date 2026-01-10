import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Code, Smartphone, Server, Layout, Database, Cog, ArrowRight, CheckCircle, ArrowLeft } from 'lucide-react';

const Hiring = () => {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        companyName: '',
        projectType: '',
        budget: '',
        description: ''
    });
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        if (!formData.fullName || !formData.email || !formData.projectType || !formData.description) {
            setSubmitStatus({ type: 'error', message: 'Please fill in all required fields' });
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setSubmitStatus({ type: 'error', message: 'Please enter a valid email address' });
            return;
        }

        // Success message
        setSubmitStatus({ type: 'success', message: 'Request submitted successfully! We will contact you within 24 hours.' });

        // Reset form after 3 seconds
        setTimeout(() => {
            setFormData({
                fullName: '',
                email: '',
                companyName: '',
                projectType: '',
                budget: '',
                description: ''
            });
            setSubmitStatus({ type: '', message: '' });
            setShowForm(false);
        }, 3000);
    };

    const services = [
        { icon: <Smartphone size={32} />, title: 'Mobile App Development', desc: 'Native iOS & Android apps built with React Native, Flutter, or Swift/Kotlin' },
        { icon: <Code size={32} />, title: 'Web Development', desc: 'Modern web applications using React, Vue, or Angular with cutting-edge tech' },
        { icon: <Server size={32} />, title: 'Backend Development', desc: 'Scalable APIs and server infrastructure with Node.js, Python, or Java' },
        { icon: <Layout size={32} />, title: 'Admin Panels & Dashboards', desc: 'Custom admin interfaces with real-time data visualization and management' },
        { icon: <Database size={32} />, title: 'API Integration', desc: 'Seamless third-party integrations and custom API development' },
        { icon: <Cog size={32} />, title: 'Custom Systems', desc: 'Tailored solutions for unique business requirements and workflows' },
    ];

    const process = [
        { step: '01', title: 'Requirement Analysis', desc: 'We understand your business goals, target users, and technical needs' },
        { step: '02', title: 'Planning & Architecture', desc: 'Detailed project roadmap with technical specifications and timelines' },
        { step: '03', title: 'Development', desc: 'Agile development with regular updates and transparent communication' },
        { step: '04', title: 'Testing & QA', desc: 'Comprehensive testing to ensure quality, performance, and security' },
        { step: '05', title: 'Delivery & Support', desc: 'Smooth deployment with ongoing maintenance and technical support' },
    ];

    const whyChoose = [
        'Experienced team of full-stack developers and designers',
        'Proven track record with enterprise and startup clients',
        'Multi-technology expertise across modern frameworks',
        'Transparent communication throughout the project lifecycle',
        'Scalable solutions built for long-term growth',
        'Post-launch support and continuous improvement',
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-5">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-extrabold mb-5 sm:mb-6 md:mb-7 px-2 leading-tight">
                            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">Hire </span>
                            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Codezyra</span>
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6 sm:mb-8 px-4 font-semibold leading-relaxed">
                            Your trusted partner for <span className="text-accent font-bold">end-to-end software development</span>. We build scalable, high-performance digital solutions tailored to your business needs.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
                            <Link to="/contact">
                                <button className="w-full sm:w-auto bg-brand-gradient text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                                    Start a Project
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="py-12 sm:py-16 md:py-20">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-5">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
                            What We Build
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                            From mobile apps to complex backend systems, we deliver production-ready software
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {services.map((service, i) => (
                            <div key={i} className="group bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:shadow-2xl hover:border-accent transition-all duration-300 hover:-translate-y-2">
                                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-5 group-hover:bg-accent group-hover:text-white transition-all">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-accent transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-base text-gray-600 leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Work Process */}
            <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-5">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
                            How We Work
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                            A proven process that ensures quality and timely delivery
                        </p>
                    </div>

                    <div className="space-y-6">
                        {process.map((item, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:shadow-xl hover:border-accent transition-all duration-300">
                                <div className="flex items-start gap-6">
                                    <div className="flex-shrink-0 w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center text-accent font-bold text-xl">
                                        {item.step}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-black mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-base text-gray-600 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Codezyra */}
            <section className="py-12 sm:py-16 md:py-20">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6">
                                Why Choose <span className="text-accent">Codezyra?</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                We're not just developers—we're your technical partners committed to your success. Our team brings expertise, reliability, and a results-driven approach to every project.
                            </p>
                            <div className="space-y-4">
                                {whyChoose.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                                        <p className="text-base text-gray-700 leading-relaxed">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl p-8 md:p-12 border border-accent/20 relative overflow-hidden">
                            {/* CTA Content */}
                            <div 
                                className={`transition-all duration-500 ease-in-out ${showForm ? 'opacity-0 -translate-x-full absolute inset-0 pointer-events-none' : 'opacity-100 translate-x-0'}`}
                            >
                                <h3 className="text-2xl font-bold text-black mb-6">
                                    Ready to Build Something Great?
                                </h3>
                                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                    Let's discuss your project requirements and create a tailored solution that drives real business value.
                                </p>
                                <button 
                                    onClick={() => setShowForm(true)}
                                    className="w-full bg-brand-gradient text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
                                >
                                    <span>Hire Us Now</span>
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Form Content */}
                            <div 
                                className={`transition-all duration-500 ease-in-out ${showForm ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full absolute inset-0 pointer-events-none'}`}
                            >
                                {/* Back Button */}
                                <button
                                    onClick={() => {
                                        setShowForm(false);
                                        setSubmitStatus({ type: '', message: '' });
                                    }}
                                    className="flex items-center gap-2 text-accent hover:text-accent/80 font-semibold mb-6 transition-colors"
                                >
                                    <ArrowLeft className="w-5 h-5" />
                                    <span>Back</span>
                                </button>

                                <h3 className="text-2xl font-bold text-black mb-6">
                                    Tell Us About Your Project
                                </h3>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Full Name */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-sm"
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Email Address <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-sm"
                                            placeholder="john@company.com"
                                            required
                                        />
                                    </div>

                                    {/* Company Name */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Company Name
                                        </label>
                                        <input
                                            type="text"
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-sm"
                                            placeholder="Your Company"
                                        />
                                    </div>

                                    {/* Project Type */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Project Type <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            name="projectType"
                                            value={formData.projectType}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all bg-white text-sm"
                                            required
                                        >
                                            <option value="">Select project type</option>
                                            <option value="Website">Website</option>
                                            <option value="Mobile App">Mobile App</option>
                                            <option value="Admin Panel">Admin Panel</option>
                                            <option value="Custom Software">Custom Software</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    {/* Budget Range */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Project Budget Range
                                        </label>
                                        <select
                                            name="budget"
                                            value={formData.budget}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all bg-white text-sm"
                                        >
                                            <option value="">Select budget range</option>
                                            <option value="Under $5k">Under $5k</option>
                                            <option value="$5k - $10k">$5k - $10k</option>
                                            <option value="$10k - $25k">$10k - $25k</option>
                                            <option value="$25k - $50k">$25k - $50k</option>
                                            <option value="$50k+">$50k+</option>
                                        </select>
                                    </div>

                                    {/* Project Description */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Project Description <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            name="description"
                                            value={formData.description}
                                            onChange={handleInputChange}
                                            rows="3"
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all resize-none text-sm"
                                            placeholder="Brief description of your project requirements..."
                                            required
                                        ></textarea>
                                    </div>

                                    {/* Status Message */}
                                    {submitStatus.message && (
                                        <div className={`p-3 rounded-lg text-sm ${submitStatus.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                                            {submitStatus.message}
                                        </div>
                                    )}

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="w-full bg-brand-gradient text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm"
                                    >
                                        Submit Request
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hiring;
