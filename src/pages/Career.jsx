import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Code, Palette, Smartphone, Server, Heart, Users, Zap, BookOpen, ArrowRight } from 'lucide-react';

const Career = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                        <Link to="/contact">
                            <button className="bg-brand-gradient text-white px-10 py-4 rounded-xl text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center gap-3">
                                <span>Apply Now</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </Link>
                        <p className="text-sm text-gray-400 mt-6">
                            Or email your resume to: <a href="mailto:careers@codezyra.com" className="text-accent hover:underline">careers@codezyra.com</a>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Career;
