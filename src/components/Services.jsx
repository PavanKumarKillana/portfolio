import { motion, useMotionValue, useTransform } from 'framer-motion';
import { MonitorPlay, Database, Brain } from 'lucide-react';

const TiltCard = ({ title, description, Icon, glowColor }) => {
    const x = useMotionValue(200);
    const y = useMotionValue(200);

    const rotateX = useTransform(y, [0, 400], [15, -15]);
    const rotateY = useTransform(x, [0, 400], [-15, 15]);

    function handleMouse(event) {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(event.clientX - rect.left);
        y.set(event.clientY - rect.top);
    }

    function handleMouseLeave() {
        x.set(200);
        y.set(200);
    }

    const shadowClass = glowColor === 'cyan' ? 'hover:shadow-[0_0_30px_rgba(0,210,255,0.3)]' :
        glowColor === 'magenta' ? 'hover:shadow-[0_0_30px_rgba(157,0,255,0.3)]' :
            'hover:shadow-[0_0_30px_rgba(255,0,255,0.3)]';

    const borderHover = glowColor === 'cyan' ? 'group-hover:border-[#00d2ff]' : 'group-hover:border-[#9d00ff]';

    return (
        <motion.div
            style={{
                perspective: 1000,
            }}
            className="h-full"
        >
            <motion.div
                onMouseMove={handleMouse}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className={`glass-card p-8 h-full flex flex-col group cursor-pointer transition-all duration-500 ease-out ${shadowClass} border border-white/10 ${borderHover}`}
            >
                <div
                    style={{ transform: "translateZ(50px)" }}
                    className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                >
                    <Icon className={`w-8 h-8 ${glowColor === 'cyan' ? 'text-[#00d2ff]' : 'text-[#9d00ff]'}`} />
                </div>

                <h3 style={{ transform: "translateZ(40px)" }} className="text-2xl font-syne font-bold mb-4 text-white">
                    {title}
                </h3>

                <p style={{ transform: "translateZ(30px)" }} className="text-gray-400 font-satoshi mb-8 flex-grow">
                    {description}
                </p>

                <div style={{ transform: "translateZ(20px)" }} className="mt-auto">
                    <button className={`flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-colors duration-300 relative ${glowColor === 'cyan' ? 'text-[#00d2ff]' : 'text-[#9d00ff]'}`}>
                        Learn More
                        <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                        <div className={`absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${glowColor === 'cyan' ? 'bg-[#00d2ff] box-glow' : 'bg-[#9d00ff] box-glow'}`}></div>
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
};

const Services = () => {
    const servicesData = [
        {
            title: "Artificial Intelligence",
            description: "Designing and implementing machine learning models, from Perceptrons to Transformers. Specializing in computer vision and predictive analysis to solve complex problems.",
            Icon: Brain,
            glowColor: "magenta"
        },
        {
            title: "Data Science",
            description: "Processing and extracting insights from large datasets. Leveraging SQL databases (MySQL, PostgreSQL) and Python to drive data-informed decision making.",
            Icon: Database,
            glowColor: "cyan"
        },
        {
            title: "Software Development",
            description: "Developing robust full-stack applications and IoT integrated platforms. Combining scalable backend architecture (Flask) with dynamic frontends.",
            Icon: MonitorPlay,
            glowColor: "magenta"
        }
    ];

    return (
        <section id="services" className="w-full min-h-screen flex items-center justify-center py-20 px-6">
            <div className="max-w-6xl w-full">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-syne font-bold mb-4">
                        Focus <span className="text-[#9d00ff] drop-shadow-[0_0_10px_rgba(157,0,255,0.6)]">Areas</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#9d00ff] to-[#00d2ff] mx-auto rounded-full box-glow"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <TiltCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
