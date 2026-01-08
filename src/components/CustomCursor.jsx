import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import cursorImg from '../assets/Gemini_Generated_Image_pdmf4opdmf4opdmf-removebg-preview.png';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const sparklesRef = useRef([]);

    useEffect(() => {
        const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouch) return; // Skip on touch devices for smoothness

        const cursor = cursorRef.current;

        if (!cursor) return;

        // Hide default cursor globally via CSS injection (only on desktop)
        if (window.innerWidth >= 768) {
            const styleElement = document.createElement('style');
            styleElement.id = 'custom-cursor-style';
            styleElement.textContent = `
                * {
                    cursor: none !important;
                }
                a, button, input, textarea, select, [role="button"], .group {
                    cursor: none !important;
                }
            `;
            document.head.appendChild(styleElement);
        }

        let mouseX = 0;
        let mouseY = 0;

        // Create sparkle elements
        const createSparkles = () => {
            const sparkles = [];
            for (let i = 0; i < 8; i++) {
                const sparkle = document.createElement('div');
                sparkle.className = 'cursor-sparkle';
                sparkle.style.cssText = `
                    position: fixed;
                    width: 3px;
                    height: 20px;
                    background:rgb(0, 0, 0);
                    border-radius: 2px;
                    pointer-events: none;
                    z-index: 9999;
                    opacity: 0;
                    transform-origin: center bottom;
                `;
                document.body.appendChild(sparkle);
                sparkles.push(sparkle);
            }
            sparklesRef.current = sparkles;
        };

        createSparkles();

        // Update mouse position (throttled with rAF for smoother paints)
        let frame;
        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (frame) cancelAnimationFrame(frame);
            frame = requestAnimationFrame(() => {
                gsap.to(cursor, {
                    x: mouseX,
                    y: mouseY,
                    duration: 0,
                });
            });
        };

        // Click animation with sparkles
        const handleClick = () => {
            const sparkles = sparklesRef.current;
            
            sparkles.forEach((sparkle, i) => {
                const angle = (i * 360) / sparkles.length;
                const distance = 30;
                const radian = (angle * Math.PI) / 180;
                const x = mouseX + Math.cos(radian) * distance;
                const y = mouseY + Math.sin(radian) * distance;

                gsap.set(sparkle, {
                    x: mouseX,
                    y: mouseY,
                    rotation: angle,
                    opacity: 1,
                    scale: 0,
                });

                gsap.to(sparkle, {
                    x: x,
                    y: y,
                    scale: 1,
                    opacity: 0,
                    duration: 0.4,
                    ease: 'power2.out',
                    delay: i * 0.02,
                });
            });

            // Cursor click animation
            gsap.to(cursor, {
                scale: 0.8,
                duration: 0.1,
                yoyo: true,
                repeat: 1,
                ease: 'power2.inOut',
            });
        };

        // Hide cursor on mouse leave
        const handleMouseLeave = () => {
            gsap.to(cursor, {
                opacity: 0,
                scale: 0,
                duration: 0.3,
            });
        };

        // Show cursor on mouse enter
        const handleMouseEnter = () => {
            gsap.to(cursor, {
                opacity: 1,
                scale: 1,
                duration: 0.3,
            });
        };

        // Hover effects on interactive elements
        const handleMouseOver = (e) => {
            const target = e.target;
            const isInteractive = 
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.closest('.group') ||
                target.closest('[role="button"]') ||
                target.closest('input') ||
                target.closest('textarea') ||
                target.closest('select');

            if (isInteractive) {
                gsap.to(cursor, {
                    scale: 1.3,
                    duration: 0.3,
                    ease: 'power2.out',
                });
            }
        };

        const handleMouseOut = (e) => {
            const target = e.target;
            const isInteractive = 
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.closest('.group') ||
                target.closest('[role="button"]') ||
                target.closest('input') ||
                target.closest('textarea') ||
                target.closest('select');

            if (isInteractive) {
                gsap.to(cursor, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out',
                });
            }
        };

        // Event listeners
        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        document.addEventListener('click', handleClick, { passive: true });
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        // Initial hide on mobile breakpoint
        if (window.innerWidth < 768) {
            gsap.set(cursor, { opacity: 0, scale: 0 });
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('click', handleClick);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
            
            // Cleanup sparkles
            sparklesRef.current.forEach(sparkle => {
                if (sparkle && sparkle.parentNode) {
                    sparkle.parentNode.removeChild(sparkle);
                }
            });
            
            // Remove injected style
            const styleToRemove = document.getElementById('custom-cursor-style');
            if (styleToRemove && styleToRemove.parentNode) {
                styleToRemove.parentNode.removeChild(styleToRemove);
            }
            if (frame) cancelAnimationFrame(frame);
        };
    }, []);

    return (
        <>
            {/* Main Cursor - Image */}
            <img
                ref={cursorRef}
                src={cursorImg}
                alt="Cursor"
                className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
                style={{
                    width: '23px',
                    height: 'auto',
                    transform: 'translate(-50%, -50%)',
                    willChange: 'transform',
                    pointerEvents: 'none',
                    userSelect: 'none',
                    WebkitUserSelect: 'none',
                    MozUserSelect: 'none',
                    msUserSelect: 'none',
                    objectFit: 'contain',
                    objectPosition: 'center center',
                    filter: 'brightness(0) saturate(100%)',
                    opacity: 1,
                }}
            />
        </>
    );
};

export default CustomCursor;

