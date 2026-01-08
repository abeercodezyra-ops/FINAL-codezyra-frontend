import React from 'react';
import { FaReact, FaPython, FaFigma, FaAndroid, FaVuejs, FaSwift, FaGitAlt, FaAngular, FaNodeJs, FaCloud, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaAws, FaGithub, FaJava } from 'react-icons/fa';
import { SiFirebase, SiFlutter, SiMongodb, SiPostgresql, SiMysql, SiRedis, SiTailwindcss, SiDocker, SiKubernetes, SiGraphql, SiJest, SiWebpack, SiNginx, SiTerraform, SiGitlab, SiExpress, SiNestjs, SiPrisma, SiSupabase } from 'react-icons/si';
import Logo from '../assets/logo/Logo_Codezyra_PNG.png';

// Top Row - Scrolls Right (LTR)
const ICONS_ROW_1 = [
    { Icon: FaReact, color: "#61DAFB", name: "React" },
    { Icon: FaJs, color: "#F7DF1E", name: "JavaScript" },
    { Icon: FaHtml5, color: "#E34F26", name: "HTML5" },
    { Icon: FaCss3Alt, color: "#1572B6", name: "CSS3" },
    { Icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind" },
    { Icon: FaBootstrap, color: "#7952B3", name: "Bootstrap" },
    { Icon: FaNodeJs, color: "#339933", name: "Node.js" },
    { Icon: SiExpress, color: "#000000", name: "Express" },
    { Icon: SiNestjs, color: "#E0234E", name: "NestJS" },
    { Icon: FaPython, color: "#3776AB", name: "Python" },
    { Icon: FaJava, color: "#ED8B00", name: "Java" },
    { Icon: SiMongodb, color: "#47A248", name: "MongoDB" },
    { Icon: SiPostgresql, color: "#4169E1", name: "PostgreSQL" },
    { Icon: SiMysql, color: "#4479A1", name: "MySQL" },
    { Icon: SiPrisma, color: "#2D3748", name: "Prisma" },
    { Icon: SiSupabase, color: "#3ECF8E", name: "Supabase" },
    { Icon: FaAngular, color: "#DD0031", name: "Angular" },
    { Icon: FaVuejs, color: "#4FC08D", name: "Vue.js" },
    { Icon: SiGraphql, color: "#E10098", name: "GraphQL" },
    { Icon: SiWebpack, color: "#8DD6F9", name: "Webpack" },
];

// Bottom Row - Scrolls Left (RTL)
const ICONS_ROW_2 = [
    { Icon: SiFirebase, color: "#FFCA28", name: "Firebase" },
    { Icon: FaAws, color: "#FF9900", name: "AWS" },
    { Icon: SiDocker, color: "#2496ED", name: "Docker" },
    { Icon: SiKubernetes, color: "#326CE5", name: "Kubernetes" },
    { Icon: SiTerraform, color: "#7B42BC", name: "Terraform" },
    { Icon: SiNginx, color: "#009639", name: "Nginx" },
    { Icon: SiRedis, color: "#DC382D", name: "Redis" },
    { Icon: FaGitAlt, color: "#F05032", name: "Git" },
    { Icon: FaGithub, color: "#181717", name: "GitHub" },
    { Icon: SiGitlab, color: "#FC6D26", name: "GitLab" },
    { Icon: SiFlutter, color: "#02569B", name: "Flutter" },
    { Icon: FaAndroid, color: "#3DDC84", name: "Android" },
    { Icon: FaSwift, color: "#F05138", name: "Swift" },
    { Icon: SiJest, color: "#C21325", name: "Jest" },
    { Icon: FaFigma, color: "#F24E1E", name: "Figma" },
    { Icon: FaCloud, color: "#0078D4", name: "Cloud" },
];

const TechCard = ({ Icon, color }) => (
    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center flex-shrink-0 mx-2 sm:mx-3 md:mx-4 hover:shadow-md transition-shadow">
        <Icon size={28} color={color} className="sm:w-8 sm:h-8 md:w-10 md:h-10" />
    </div>
);

const TechStack = () => {
    return (
        <section className="py-8 sm:py-12 md:py-20 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-5 mb-10 sm:mb-14 md:mb-20 text-center">
                <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[5.5rem] font-extrabold leading-tight tracking-tight px-2">
                    <span className="inline-block bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">Smart Technology</span>
                    <span className="inline-block mx-2 sm:mx-3 text-accent">For</span>
                    <br className="sm:hidden" />
                    <span className="inline-block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent drop-shadow-lg">Better Solution</span>
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mt-4 sm:mt-6 max-w-3xl mx-auto font-medium">
                    Powered by <span className="text-accent font-bold">cutting-edge technologies</span> and <span className="text-accent font-bold">industry best practices</span>
                </p>
            </div>

            <div className="relative py-6 sm:py-8 md:py-10">
                {/* Central Logo Overlay */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40 bg-white rounded-full shadow-2xl flex items-center justify-center border border-gray-100 relative overflow-hidden">
                        {/* Glow Effect - Green */}
                        <div className="absolute inset-0 rounded-full shadow-[0_0_50px_rgba(16,185,129,0.2)]"></div>

                        {/* Codezyra Logo */}
                        <img src={Logo} alt="Codezyra Logo" className="w-4/5 h-4/5 object-contain relative z-10" />
                    </div>
                </div>

                {/* Row 1: Scrolls Right (LTR) */}
                <div className="flex w-full overflow-hidden mb-4 sm:mb-6 md:mb-8 mask-image-edges opacity-60 hover:opacity-100 transition-opacity duration-300">
                    <div className="flex w-max animate-[marquee-right_15s_linear_infinite] will-change-transform">
                        {[...ICONS_ROW_1, ...ICONS_ROW_1, ...ICONS_ROW_1].map((item, idx) => (
                            <TechCard key={`row1-${idx}`} Icon={item.Icon} color={item.color} />
                        ))}
                    </div>
                </div>

                {/* Row 2: Moves Right -> Left (RTL) - Scrolls Left */}
                <div className="flex w-full overflow-hidden mask-image-edges opacity-60 hover:opacity-100 transition-opacity duration-300">
                    <div className="flex w-max animate-[marquee-left_15s_linear_infinite] will-change-transform">
                        {[...ICONS_ROW_2, ...ICONS_ROW_2, ...ICONS_ROW_2].map((item, idx) => (
                            <TechCard key={`row2-${idx}`} Icon={item.Icon} color={item.color} />
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                .mask-image-edges {
                    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                    -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                }
                
                @keyframes marquee-right {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-33.333%);
                    }
                }
                
                @keyframes marquee-left {
                    0% {
                        transform: translateX(-33.333%);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }
            `}</style>
        </section>
    );
};

export default TechStack;
