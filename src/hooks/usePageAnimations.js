import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const usePageAnimations = () => {
    const location = useLocation();

    useEffect(() => {
        // Reset scroll
        window.scrollTo(0, 0);

        // Selectors to animate
        const selectors = [
            '.page-title',
            '.hero-main-title',
            '.service-detail-card',
            '.timeline-item',
            '.diff-card',
            '.tech-logo-card',
            '.metric-card',
            '.testi-card',
            '.blog-card',
            '.faq-item',
            '.loc-wrapper'
        ];

        const elements = document.querySelectorAll(selectors.join(', '));

        elements.forEach(el => {
            gsap.fromTo(el,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 85%',
                    }
                }
            );
        });

    }, [location.pathname]);

};

export default usePageAnimations;
