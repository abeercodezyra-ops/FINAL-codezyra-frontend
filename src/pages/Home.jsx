import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Services from '../components/Services';
import ProblemsSolutions from '../components/ProblemsSolutions';
import WhyDifferent from '../components/WhyDifferent';
import Timeline from '../components/Timeline';
import TechStack from '../components/TechStack';
import Metrics from '../components/Metrics';
import Testimonials from '../components/Testimonials';
import BlogPreview from '../components/BlogPreview';
import FAQ from '../components/FAQ';

const Home = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Hero />
            <TrustBar />
            <TechStack />
            <Services />
            <Timeline />
            <ProblemsSolutions />
            <Metrics />
            <WhyDifferent />
            <Testimonials />
            <BlogPreview />
            <FAQ />
        </>
    );
};

export default Home;
