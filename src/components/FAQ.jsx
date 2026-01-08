import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        q: "How do I get started with your services?",
        a: "Simply click the 'Contact Sales' button or book a free consultation call. We'll discuss your needs and outline a plan tailored to your business goals."
    },
    {
        q: "How do you ensure transparency in your processes and communication?",
        a: "We use agile methodologies and provide you with access to our project management tools, so you can see real-time progress, updates, and communicate directly with the team."
    },
    {
        q: "Do I need to have technical knowledge to work with you?",
        a: "Not at all. We handle all the technical heavy lifting while you focus on your business goals. We explain everything in simple terms and guide you through each step."
    },
    {
        q: "Can I update my website or app after it's launched?",
        a: "Yes, absolutely! We build scalable systems that are easy to update and maintain. We also offer ongoing maintenance packages to keep your software running smoothly."
    },
    {
        q: "Will I have a dedicated point of contact during the project?",
        a: "Yes, you'll have a dedicated project manager who will be your main point of contact throughout the entire development process, ensuring clear communication and timely updates."
    },
    {
        q: "What does your Mobile App Development Process Include?",
        a: "Our mobile app development process includes discovery and planning, UI/UX design, development, testing, deployment, and ongoing support to ensure your app succeeds in the market."
    },
    {
        q: "Do you offer UI UX Services?",
        a: "Yes, we offer comprehensive UI/UX design services including user research, wireframing, prototyping, and visual design to create intuitive and engaging user experiences."
    },
    {
        q: "How do you keep Mobile Apps and Websites Secure?",
        a: "We implement industry-standard security practices including encryption, secure authentication, regular security audits, and compliance with data protection regulations to keep your applications secure."
    },
    {
        q: "What services does your software development agency offer?",
        a: "We offer a full range of services including mobile app development, web app development, custom software development, e-commerce solutions, software project rescue, digital marketing, and branding & design."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-5">
                <div className="text-center mb-10 sm:mb-14 md:mb-18">
                    <h2 className="text-[2.2rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[4.5rem] font-extrabold mb-4 sm:mb-5 md:mb-6 px-2">
                        <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">Frequently Asked </span>
                        <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Questions</span>
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed px-4">
                        Find answers to common questions about our <span className="text-accent font-bold">services</span>, <span className="text-accent font-bold">processes</span>, and how we can help your business <span className="text-accent font-bold">grow</span>
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((item, i) => (
                        <div
                            key={i}
                            className={`bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 ${
                                activeIndex === i 
                                    ? 'shadow-xl border-accent/30' 
                                    : 'hover:shadow-lg hover:border-gray-300'
                            }`}
                        >
                            <div
                                className="flex items-center justify-between p-6 cursor-pointer group"
                                onClick={() => toggleFAQ(i)}
                            >
                                <h4 className={`text-lg font-semibold pr-4 transition-colors ${
                                    activeIndex === i 
                                        ? 'text-accent' 
                                        : 'text-black group-hover:text-accent'
                                }`}>
                                    {item.q}
                                </h4>
                                <ChevronDown
                                    className={`flex-shrink-0 text-accent transition-all duration-300 ${
                                        activeIndex === i 
                                            ? 'rotate-180' 
                                            : ''
                                    }`}
                                    size={24}
                                />
                            </div>
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                    activeIndex === i 
                                        ? 'max-h-96 opacity-100' 
                                        : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="px-6 pb-6 text-gray-600 leading-relaxed text-base">
                                    {item.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
