import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, Quote } from 'lucide-react';


const studyData = {
    'finflow-app': {
        title: 'FinFlow App',
        tagline: 'Banking for the Next Billion Users',
        metric: '+40% Conversions',
        overview: {
            client: 'FinFlow Inc.',
            problem: 'The existing app was slow, crashed frequently, and had a confusing UX that led to high churn.',
            solution: 'We rebuilt the app from the ground up using React Native, implementing a new design system and optimizing API calls.',
            result: 'The new app launched to 5-star reviews, seeing a 40% increase in user retention and 30% faster transaction times.'
        },
        testimonial: {
            quote: "Codezyra didn't just write code; they transformed our business. The new app is blazing fast and our users love it.",
            author: "Sarah Jenkins, CEO"
        }
    },
    'e-comify': {
        title: 'E-Comify Platform',
        tagline: 'Scaling Fashion E-Commerce',
        metric: '200ms Load Time',
        overview: {
            client: 'E-Comify Global',
            problem: 'Legacy Magento platform was struggling to handle Black Friday traffic spikes.',
            solution: ' migrated to a headless architecture with Shopify Plus + React storefront.',
            result: 'Zero downtime during peak sales, 200ms page loads, and a 15% increase in AOV.'
        },
        testimonial: {
            quote: "The migration was seamless. We handled 10x our usual traffic without a glitch.",
            author: "Michael Ross, Founder"
        }
    }
};

const CaseStudyDetail = () => {
    const { slug } = useParams();
    const data = studyData[slug];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!data) {
        return <Navigate to="/case-studies" replace />;
    }

    return (
        <div className="page-wrapper">
            {/* Hero */}
            <section className="cs-hero">
                <div className="container">
                    <h1 className="cs-title">{data.title}</h1>
                    <p className="cs-tagline">{data.tagline}</p>
                    <div className="cs-metric-hero">
                        <span>{data.metric}</span>
                    </div>
                </div>
            </section>

            {/* Overview Grid */}
            <section className="section-padding">
                <div className="container">
                    <div className="overview-grid">
                        <div className="overview-block">
                            <h3>Client</h3>
                            <p>{data.overview.client}</p>
                        </div>
                        <div className="overview-block">
                            <h3>Problem</h3>
                            <p>{data.overview.problem}</p>
                        </div>
                        <div className="overview-block">
                            <h3>Solution</h3>
                            <p>{data.overview.solution}</p>
                        </div>
                        <div className="overview-block highlight">
                            <h3>Results</h3>
                            <p>{data.overview.result}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visuals */}
            <section className="section-padding bg-darker">
                <div className="container">
                    <h2 className="section-title mb-5">Visuals</h2>
                    <div className="visuals-grid">
                        <div className="visual-placeholder large"></div>
                        <div className="visual-placeholder"></div>
                        <div className="visual-placeholder"></div>
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            <section className="section-padding">
                <div className="container text-center">
                    <div className="cs-quote-box">
                        <Quote size={40} className="quote-icon" />
                        <p className="cs-quote-text">{data.testimonial.quote}</p>
                        <p className="cs-quote-author">- {data.testimonial.author}</p>
                    </div>
                </div>
            </section>

            {/* Related */}
            <section className="section-padding bg-card">
                <div className="container">
                    <h2 className="section-title mb-4">More Success Stories</h2>
                    <div className="related-grid">
                        <Link to="/case-studies/healthcheck-portal" className="related-card">
                            <h4>HealthCheck Portal</h4>
                            <span className="link-text">Read Case Study <ArrowRight size={14} /></span>
                        </Link>
                        <Link to="/case-studies/learnloop-lms" className="related-card">
                            <h4>LearnLoop LMS</h4>
                            <span className="link-text">Read Case Study <ArrowRight size={14} /></span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-banner">
                <div className="container text-center">
                    <h2>Ready to write your success story?</h2>
                    <Link to="/contact">
                        <button className="btn-primary mt-4">Work with Codezyra</button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default CaseStudyDetail;
