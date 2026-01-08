import React, { useEffect, useRef, useState } from 'react';

/**
 * Lazy loads a map iframe when it enters the viewport.
 */
const LazyMap = ({ src, title = 'Map', className = '', aspectClass = 'aspect-[4/3]' }) => {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const node = containerRef.current;
        if (!node) return;

        // If IntersectionObserver not supported, load immediately.
        if (!('IntersectionObserver' in window)) {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect();
                    }
                });
            },
            {
                root: null,
                rootMargin: '200px',
                threshold: 0.1,
            }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={containerRef} className={`overflow-hidden rounded-xl ${aspectClass} ${className}`}>
            {isVisible ? (
                <iframe
                    title={title}
                    src={src}
                    className="w-full h-full border-0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            ) : (
                <div className="w-full h-full bg-gray-200 animate-pulse" />
            )}
        </div>
    );
};

export default LazyMap;

