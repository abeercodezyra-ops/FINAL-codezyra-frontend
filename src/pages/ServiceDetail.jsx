import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Check, ArrowRight, Code, Layout, Server, Database, Shield, Smartphone } from 'lucide-react';


// Data lookup
const serviceData = {
    'mobile-app-development': {
        title: 'Mobile App Development',
        subtitle: 'Native iOS & Android apps built for performance and scale.',
        outcomes: [
            { num: '4.8+', text: 'Avg App Store Rating' },
            { num: '99%', text: 'Crash-Free Users' },
            { num: 'Fast', text: 'Time-to-Market' }
        ],
        features: {
            left: 'We do not just build apps; we build businesses. Our mobile engineering team uses the latest technologies like React Native and Swift to deliver native experiences that feel seamless.',
            list: ['Cross-Platform Development', 'Native iOS & Android', 'UI/UX Design', 'App Store Submission', 'Maintenance & Support']
        },
        techStack: ['React Native', 'Swift', 'Kotlin', 'Firebase', 'Redux'],
        caseStudies: [
            { title: 'FinFlow App', tag: 'FinTech' },
            { title: 'HealthCheck', tag: 'Health' }
        ]
    },
    'web-app-development': {
        title: 'Web App Development',
        subtitle: 'Scalable, SEO-optimized web applications.',
        outcomes: [
            { num: '100', text: 'Lighthouse Score' },
            { num: '<1s', text: 'Load Time' },
            { num: 'SEO', text: 'Optimized Structure' }
        ],
        features: {
            left: 'The web has changed. Static sites are out; dynamic, personalized web apps are in. We build using React and Vite for the perfect balance of performance and SEO.',
            list: ['Single Page Applications (SPA)', 'Progressive Web Apps (PWA)', 'Server-Side Rendering', 'CMS Integration', 'API Development']
        },
        techStack: ['React', 'Vite', 'Node.js', 'PostgreSQL', 'AWS'],
        caseStudies: [
            { title: 'E-Comify Platform', tag: 'E-Commerce' },
            { title: 'EduLearn Portal', tag: 'EdTech' }
        ]
    }
    // Add other slugs... fallback will handle missing data
};

const ServiceDetail = () => {
    const { slug } = useParams();
    const data = serviceData[slug];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!data) {
        return <Navigate to="/services" replace />;
    }

    return (
        <div className="detail-wrapper">
            {/* Hero */}
            <section className="detail-hero">
                <div className="container">
                    <div className="hero-grid">
                        <div className="hero-text">
                            <h1 className="hero-title">{data.title}</h1>
                            <p className="hero-subtitle">{data.subtitle}</p>
                            <button className="btn-primary mt-4">Start Your Project</button>
                        </div>
                        <div className="hero-mockup">
                            {/* Abstract Mockup */}
                            <div className="mockup-box">
                                <div className="mockup-dot red"></div>
                                <div className="mockup-dot yellow"></div>
                                <div className="mockup-dot green"></div>
                                <div className="mockup-line w-80"></div>
                                <div className="mockup-line w-60"></div>
                                <div className="mockup-line w-40"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Outcomes */}
            <section className="section-padding bg-darker">
                <div className="container">
                    <div className="outcomes-grid">
                        {data.outcomes.map((item, i) => (
                            <div className="outcome-card" key={i}>
                                <span className="outcome-num">{item.num}</span>
                                <span className="outcome-text">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="section-padding">
                <div className="container">
                    <div className="features-split">
                        <div className="features-desc">
                            <h2 className="section-title">What's Included</h2>
                            <p className="text-secondary">{data.features.left}</p>
                        </div>
                        <div className="features-list">
                            {data.features.list.map((feat, i) => (
                                <div className="check-item" key={i}>
                                    <div className="check-icon"><Check size={20} /></div>
                                    <span>{feat}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="section-padding bg-card">
                <div className="container">
                    <h2 className="section-title text-center mb-5">Our Development Lifecycle</h2>
                    <div className="vertical-steps">
                        {['Discovery', 'Architecture', 'UI/UX Design', 'Development', 'QA Testing', 'Launch'].map((step, i) => (
                            <div className="v-step" key={i}>
                                <div className="v-num">{i + 1}</div>
                                <div className="v-content">{step}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="section-padding">
                <div className="container text-center">
                    <h2 className="section-title mb-4">Tech Stack</h2>
                    <div className="stack-grid">
                        {data.techStack.map((tech, i) => (
                            <span className="stack-badge" key={i}>{tech}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-banner">
                <div className="container text-center">
                    <h2>Start Your {data.title} with Codezyra</h2>
                    <Link to="/contact">
                        <button className="btn-primary mt-4">Book Free Strategy Call</button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;
