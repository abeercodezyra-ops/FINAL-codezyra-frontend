import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Code, Palette, Smartphone, Server, Heart, Users, Zap, BookOpen, ArrowRight, X, Upload } from 'lucide-react';

const Career = () => {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        skills: '',
        portfolioUrl: '',
        resume: null,
        coverMessage: ''
    });
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Close modal on ESC key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') setShowModal(false);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    // Prevent background scroll when modal is open
    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [showModal]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && (file.type === 'application/pdf' || file.type === 'application/msword' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
            setFormData(prev => ({ ...prev, resume: file }));
        } else {
            alert('Please upload a PDF or DOC file');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        if (!formData.fullName || !formData.email || !formData.phone || !formData.position || !formData.experience || !formData.skills || !formData.resume) {
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
        setSubmitStatus({ type: 'success', message: 'Application submitted successfully! We will contact you soon.' });

        // Reset form after 2 seconds
        setTimeout(() => {
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                position: '',
                experience: '',
                skills: '',
                portfolioUrl: '',
                resume: null,
                coverMessage: ''
            });
            setSubmitStatus({ type: '', message: '' });
            setShowModal(false);
        }, 2000);
    };

    const openRoles = [
        {
            icon: <Code size={32} />,
            title: 'Frontend Developer',
            type: 'Full-time',
            skills: ['React.js', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
            desc: 'Build responsive and intuitive user interfaces for modern web applications'
        },
        {
            icon: <Server size={32} />,
            title: 'Backend Developer',
            type: 'Full-time',
            skills: ['Node.js', 'Python', 'PostgreSQL', 'Microservices'],
            desc: 'Design and develop scalable server-side applications and APIs'
        },
        {
            icon: <Smartphone size={32} />,
            title: 'Mobile App Developer',
            type: 'Full-time',
            skills: ['React Native', 'Flutter', 'iOS/Android', 'Mobile UI/UX'],
            desc: 'Create cross-platform mobile applications with native performance'
        },
        {
            icon: <Palette size={32} />,
            title: 'UI/UX Designer',
            type: 'Full-time',
            skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping'],
            desc: 'Design engaging user experiences and beautiful interfaces'
        }
    ];

    const culture = [
        {
            icon: <BookOpen size={28} />,
            title: 'Continuous Learning',
            desc: 'Access to courses, workshops, and conferences to grow your skills'
        },
        {
            icon: <Zap size={28} />,
            title: 'Real Projects',
            desc: 'Work on production applications used by thousands of users'
        },
        {
            icon: <Users size={28} />,
            title: 'Collaborative Team',
            desc: 'Work with talented developers who value knowledge sharing'
        },
        {
            icon: <Heart size={28} />,
            title: 'Work-Life Balance',
            desc: 'Flexible hours and remote work options for better productivity'
        }
    ];

    const expectations = [
        'Strong problem-solving skills and attention to detail',
        'Passion for writing clean, maintainable code',
        'Ability to work independently and in a team',
        'Good communication and collaboration skills',
        'Eagerness to learn new technologies and best practices',
        'Commitment to meeting deadlines and delivering quality work'
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-5">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-extrabold mb-5 sm:mb-6 md:mb-7 px-2 leading-tight">
                            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">Join </span>
                            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Codezyra</span>
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6 sm:mb-8 px-4 font-semibold leading-relaxed">
                            Be part of a <span className="text-accent font-bold">growth-focused team</span> building impactful software solutions. We value talent, creativity, and a passion for excellence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Codezyra */}
            <section className="py-12 sm:py-16 md:py-20">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-5">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
                            Why Work With Us?
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                            We believe in creating an environment where developers thrive and grow
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {culture.map((item, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-accent transition-all duration-300 hover:-translate-y-2">
                                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-5">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-black mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-base text-gray-600 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Roles */}
            <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-5">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
                            Open Positions
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                            We're always looking for talented individuals to join our team
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {openRoles.map((role, i) => (
                            <div key={i} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200">
                                <div className="flex items-start gap-4 mb-5">
                                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center text-white flex-shrink-0">
                                        {role.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-black mb-2">
                                            {role.title}
                                        </h3>
                                        <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                                            {role.type}
                                        </span>
                                    </div>
                                </div>

                                <p className="text-base text-gray-600 mb-5 leading-relaxed">
                                    {role.desc}
                                </p>

                                <div className="mb-5">
                                    <p className="text-sm font-semibold text-black mb-3">Required Skills:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {role.skills.map((skill, idx) => (
                                            <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What We Look For */}
            <section className="py-12 sm:py-16 md:py-20">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-5">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
                                What We Look For
                            </h2>
                            <p className="text-lg text-gray-600">
                                Key qualities that help you succeed at Codezyra
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl p-8 md:p-12 border border-accent/20">
                            <ul className="space-y-4">
                                {expectations.map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                                            {i + 1}
                                        </div>
                                        <p className="text-base text-gray-700 leading-relaxed pt-1">
                                            {item}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-5">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                            Ready to Join Our Team?
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                            Send us your resume and portfolio. We'd love to hear from talented developers who are passionate about building great software.
                        </p>
                        <button 
                            onClick={() => setShowModal(true)}
                            className="bg-brand-gradient text-white px-10 py-4 rounded-xl text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center gap-3"
                        >
                            <span>Apply Now</span>
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <p className="text-sm text-gray-400 mt-6">
                            Or email your resume to: <a href="mailto:careers@codezyra.com" className="text-accent hover:underline">careers@codezyra.com</a>
                        </p>
                    </div>
                </div>
            </section>

            {/* Application Modal */}
            {showModal && (
                <div 
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 overflow-y-auto"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) setShowModal(false);
                    }}
                >
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl my-8 animate-slide-down">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-200">
                            <h3 className="text-2xl font-bold text-black">Apply for Position</h3>
                            <button 
                                onClick={() => setShowModal(false)}
                                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                            >
                                <X size={20} className="text-gray-600" />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[calc(100vh-200px)] overflow-y-auto">
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
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                                    placeholder="Enter your full name"
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
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                                    placeholder="your.email@example.com"
                                    required
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Phone / WhatsApp Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                                    placeholder="+1 234 567 8900"
                                    required
                                />
                            </div>

                            {/* Position */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Position Applying For <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="position"
                                    value={formData.position}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all bg-white"
                                    required
                                >
                                    <option value="">Select a position</option>
                                    <option value="Frontend Developer">Frontend Developer</option>
                                    <option value="Backend Developer">Backend Developer</option>
                                    <option value="Mobile App Developer">Mobile App Developer</option>
                                    <option value="UI/UX Designer">UI/UX Designer</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            {/* Experience */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Years of Experience <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all bg-white"
                                    required
                                >
                                    <option value="">Select experience level</option>
                                    <option value="0-1">0-1 years (Entry Level)</option>
                                    <option value="1-3">1-3 years</option>
                                    <option value="3-5">3-5 years</option>
                                    <option value="5-8">5-8 years</option>
                                    <option value="8+">8+ years (Senior)</option>
                                </select>
                            </div>

                            {/* Skills */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Skills / Tech Stack <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="skills"
                                    value={formData.skills}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                                    placeholder="e.g., React, Node.js, Python, AWS"
                                    required
                                />
                            </div>

                            {/* Portfolio URL */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Portfolio / GitHub / LinkedIn URL (Optional)
                                </label>
                                <input
                                    type="url"
                                    name="portfolioUrl"
                                    value={formData.portfolioUrl}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                                    placeholder="https://github.com/yourprofile"
                                />
                            </div>

                            {/* Resume Upload */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Upload CV / Resume <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type="file"
                                        onChange={handleFileChange}
                                        accept=".pdf,.doc,.docx"
                                        className="hidden"
                                        id="resume-upload"
                                        required
                                    />
                                    <label
                                        htmlFor="resume-upload"
                                        className="flex items-center justify-center gap-3 w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-accent transition-colors cursor-pointer bg-gray-50 hover:bg-gray-100"
                                    >
                                        <Upload size={20} className="text-gray-600" />
                                        <span className="text-gray-700">
                                            {formData.resume ? formData.resume.name : 'Choose PDF or DOC file'}
                                        </span>
                                    </label>
                                </div>
                            </div>

                            {/* Cover Message */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Short Cover Message (Optional)
                                </label>
                                <textarea
                                    name="coverMessage"
                                    value={formData.coverMessage}
                                    onChange={handleInputChange}
                                    rows="4"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all resize-none"
                                    placeholder="Tell us why you'd be a great fit for this role..."
                                ></textarea>
                            </div>

                            {/* Status Message */}
                            {submitStatus.message && (
                                <div className={`p-4 rounded-lg ${submitStatus.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                                    {submitStatus.message}
                                </div>
                            )}

                            {/* Submit Button */}
                            <div className="flex gap-3 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 px-6 py-3 bg-brand-gradient text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                                >
                                    Submit Application
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Career;
