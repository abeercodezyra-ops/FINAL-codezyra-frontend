import React from 'react';
import problemVideo from '../assets/home-comparision-problem-min-2.mp4';
import solutionVideo from '../assets/Hailuo_Video_Create a clean, modern corpora_457674362409807881.mp4';

const ProblemsSolutions = () => {
    return (
        <section className="py-10 sm:py-16 md:py-20 bg-white overflow-hidden">
            <div className="max-w-[1000px] mx-auto px-4 sm:px-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">

                    {/* Left Column: Problems */}
                    <div className="flex flex-col items-center text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6 min-h-[4rem] sm:min-h-[5rem] flex items-end justify-center">
                            <span className="whitespace-nowrap">Problems You <span className="text-accent">Face</span></span>
                        </h2>
                        <p className="text-gray-500 text-base sm:text-lg max-w-sm mx-auto mb-6 sm:mb-10 leading-relaxed min-h-[3.5rem] sm:min-h-[4.5rem]">
                            Poor communication and outdated methods cause delays, glitches, and project failures.
                        </p>

                        {/* Problems Video */}
                        <div className="w-full max-w-[350px] aspect-square flex items-center justify-center relative">
                            <video
                                src={problemVideo}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-contain pointer-events-none"
                            />
                        </div>
                    </div>

                    {/* Right Column: Solutions */}
                    <div className="flex flex-col items-center text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6 min-h-[4rem] sm:min-h-[5rem] flex items-end justify-center">
                            <span className="whitespace-nowrap">Solutions We <span className="text-accent">Provide</span></span>
                        </h2>
                        <p className="text-gray-500 text-base sm:text-lg max-w-sm mx-auto mb-6 sm:mb-10 leading-relaxed min-h-[3.5rem] sm:min-h-[4.5rem]">
                            Stay informed at every step with Agile methods, ensuring a smooth and on-track project.
                        </p>

                        {/* Solutions Video */}
                        <div className="relative p-1 rounded-3xl overflow-hidden group transition-all duration-300 hover:scale-105">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary animate-gradient" style={{ backgroundSize: '200% 200%' }}></div>
                            <div className="relative w-full max-w-[350px] aspect-square flex items-center justify-center bg-white rounded-[20px] overflow-hidden">
                                <video
                                    src={solutionVideo}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover scale-125 pointer-events-none transition-transform duration-300 group-hover:scale-130"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProblemsSolutions;
