import React from 'react';
import { Zap, Handshake, Globe, TrendingUp, Rocket } from 'lucide-react';

const TRUST_ITEMS = [
    { icon: Zap, label: "Quick Turnaround" },
    { icon: Handshake, label: "Partner First" },
    { icon: Globe, label: "Global Talents" },
    { icon: TrendingUp, label: "Cost Effective" },
    { icon: Rocket, label: "Startup Friendly" }
];

const TrustBar = () => {
    return (
        <div className="w-full bg-white border-y border-gray-400 py-3 sm:py-4 overflow-hidden relative">
            <div className="flex animate-[marquee-ltr_10s_linear_infinite] will-change-transform">
                {/* First Set */}
                <div className="flex items-center justify-center min-w-max">
                    {TRUST_ITEMS.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <React.Fragment key={`set1-${index}`}>
                                <div className="flex items-center gap-2 sm:gap-3 group cursor-default flex-shrink-0 px-4 sm:px-6 md:px-8">
                                    <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500 group-hover:text-accent transition-colors duration-300 flex-shrink-0" strokeWidth={2} />
                                    <span className="text-xs sm:text-sm font-bold text-gray-500 tracking-wider uppercase group-hover:text-accent transition-colors duration-300 whitespace-nowrap">
                                        {item.label}
                                    </span>
                                </div>
                                {/* Separator */}
                                {index < TRUST_ITEMS.length - 1 && (
                                    <div className="h-4 sm:h-5 w-[1px] bg-gray-400 mx-2 sm:mx-4 flex-shrink-0"></div>
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>

                {/* Second Set (Duplicate for Seamless Loop) */}
                <div className="flex items-center justify-center min-w-max">
                    {TRUST_ITEMS.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <React.Fragment key={`set2-${index}`}>
                                <div className="flex items-center gap-2 sm:gap-3 group cursor-default flex-shrink-0 px-4 sm:px-6 md:px-8">
                                    <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500 group-hover:text-accent transition-colors duration-300 flex-shrink-0" strokeWidth={2} />
                                    <span className="text-xs sm:text-sm font-bold text-gray-500 tracking-wider uppercase group-hover:text-accent transition-colors duration-300 whitespace-nowrap">
                                        {item.label}
                                    </span>
                                </div>
                                {/* Separator */}
                                {index < TRUST_ITEMS.length - 1 && (
                                    <div className="h-4 sm:h-5 w-[1px] bg-gray-400 mx-2 sm:mx-4 flex-shrink-0"></div>
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>

                {/* Third Set (For Extra Seamless Loop) */}
                <div className="flex items-center justify-center min-w-max">
                    {TRUST_ITEMS.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <React.Fragment key={`set3-${index}`}>
                                <div className="flex items-center gap-2 sm:gap-3 group cursor-default flex-shrink-0 px-4 sm:px-6 md:px-8">
                                    <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500 group-hover:text-accent transition-colors duration-300 flex-shrink-0" strokeWidth={2} />
                                    <span className="text-xs sm:text-sm font-bold text-gray-500 tracking-wider uppercase group-hover:text-accent transition-colors duration-300 whitespace-nowrap">
                                        {item.label}
                                    </span>
                                </div>
                                {/* Separator */}
                                {index < TRUST_ITEMS.length - 1 && (
                                    <div className="h-4 sm:h-5 w-[1px] bg-gray-400 mx-2 sm:mx-4 flex-shrink-0"></div>
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default TrustBar;
