import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const TechSkill = ({ name, percent, color }) => {
    const barRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(barRef.current,
            { width: "0%" },
            {
                width: `${percent}%`,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: barRef.current,
                    start: "top 85%",
                }
            }
        );
    }, [percent]);

    return (
        <div className="mb-6">
            <div className="flex justify-between mb-2">
                <span className="font-syne font-semibold text-white tracking-widest uppercase">{name}</span>
                <span className="font-satoshi text-gray-400">{percent}%</span>
            </div>
            <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
                <div
                    ref={barRef}
                    className="h-full rounded-full"
                    style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}` }}
                ></div>
            </div>
        </div>
    );
};

const CircularSkill = ({ name, percent, color }) => {
    const circleRef = useRef(null);
    const circumference = 2 * Math.PI * 45; // radius = 45

    useEffect(() => {
        gsap.fromTo(circleRef.current,
            { strokeDashoffset: circumference },
            {
                strokeDashoffset: circumference - (percent / 100) * circumference,
                duration: 2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: circleRef.current,
                    start: "top 80%"
                }
            }
        );
    }, [percent, circumference]);

    return (
        <div className="flex flex-col items-center">
            <div className="relative w-32 h-32 mb-4 group perspective-1000">
                <svg className="w-full h-full transform -rotate-90 origin-center" viewBox="0 0 100 100">
                    <circle
                        cx="50" cy="50" r="45"
                        fill="transparent"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="8"
                    />
                    <circle
                        ref={circleRef}
                        cx="50" cy="50" r="45"
                        fill="transparent"
                        stroke={color}
                        strokeWidth="8"
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference}
                        strokeLinecap="round"
                        style={{ filter: `drop-shadow(0 0 4px ${color})` }}
                    />
                </svg>

                {/* Floating Number Anti-Gravity Effect */}
                <motion.div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    animate={{
                        y: [Math.random() * -5, Math.random() * 5],
                        x: [Math.random() * -3, Math.random() * 3]
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatType: 'mirror',
                        duration: 2 + Math.random() * 2,
                        ease: "easeInOut"
                    }}
                >
                    <span className="font-syne text-2xl font-bold text-white shadow-black">{percent}%</span>
                </motion.div>
            </div>
            <span className="font-satoshi text-gray-300 font-medium">{name}</span>
        </div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="w-full min-h-screen flex items-center justify-center py-20 px-6">
            <div className="max-w-6xl w-full">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-syne font-bold mb-4">
                        Core <span className="text-[#00d2ff] text-glow-cyan">Skills</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#00d2ff] to-[#9d00ff] mx-auto rounded-full box-glow"></div>
                </div>

                <div className="flex flex-col md:flex-row gap-16 w-full">
                    {/* Left: Technical Skills (Horizontal) */}
                    <div className="w-full md:w-1/2 glass-card p-8">
                        <h3 className="text-2xl font-bold font-syne mb-8 text-white border-b border-white/10 pb-4">Technical Expertise</h3>
                        <TechSkill name="C++ / Python" percent={95} color="#00d2ff" />
                        <TechSkill name="Machine Learning (ML/DL)" percent={85} color="#9d00ff" />
                        <TechSkill name="SQL (MySQL/PostgreSQL)" percent={88} color="#00d2ff" />
                        <TechSkill name="JavaScript / Web Dev" percent={90} color="#9d00ff" />
                        <TechSkill name="Linux & Git" percent={80} color="#00d2ff" />
                    </div>

                    {/* Right: Professional Skills (Circular) */}
                    <div className="w-full md:w-1/2 glass-card p-8 flex flex-col items-center">
                        <h3 className="text-2xl font-bold font-syne mb-8 text-white border-b border-white/10 pb-4 w-full text-center">Core Competencies</h3>
                        <div className="grid grid-cols-2 gap-10 w-full justify-items-center mt-4">
                            <CircularSkill name="DSA / Logic" percent={90} color="#00d2ff" />
                            <CircularSkill name="Problem Solving" percent={95} color="#9d00ff" />
                            <CircularSkill name="Communication" percent={85} color="#9d00ff" />
                            <CircularSkill name="Team Player" percent={88} color="#00d2ff" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
