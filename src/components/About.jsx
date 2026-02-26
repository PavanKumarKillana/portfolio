import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="w-full min-h-screen flex items-center justify-center py-20 px-6">
            <div className="max-w-6xl w-full">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-syne font-bold mb-4">
                        About <span className="text-[#00d2ff] text-glow-cyan">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#00d2ff] to-[#9d00ff] mx-auto rounded-full box-glow"></div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Left Column: Image */}
                    <motion.div
                        className="w-full lg:w-1/2 flex justify-center perspective-1000"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <div className="glass-card p-4 relative w-full max-w-md group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#00d2ff]/20 to-[#9d00ff]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"></div>
                            <img
                                src="/about_me_pic.jpg"
                                alt="Pavan Kumar Killana"
                                className="w-full rounded-xl object-cover h-[450px] relative z-10"
                            />
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-2 border-r-2 border-[#00d2ff] rounded-br-2xl box-shadow-cyan"></div>
                            <div className="absolute -top-4 -left-4 w-32 h-32 border-t-2 border-l-2 border-[#9d00ff] rounded-tl-2xl"></div>
                        </div>
                    </motion.div>

                    {/* Right Column: Text */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="glass-card p-8 md:p-10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00d2ff]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                            <h3 className="text-3xl font-syne font-bold mb-6 text-white">
                                Designing the <span className="text-[#9d00ff] drop-shadow-[0_0_10px_rgba(157,0,255,0.6)]">Future</span> with AI
                            </h3>

                            <div className="space-y-6 font-satoshi text-gray-300 text-lg leading-relaxed">
                                <p>
                                    I am a third-year B.Tech student specializing in <strong className="text-white">Artificial Intelligence & Data Science</strong> at Amrita Vishwa Vidyapeetham. I am passionate about leveraging strong foundations in software development and advanced algorithms to create impactful, real-world solutions.
                                </p>
                                <p>
                                    With expertise ranging from Deep Learning (Perceptrons to Transformers) to responsive web development, I bridge the gap between complex data models and interactive, user-friendly applications.
                                </p>

                                <div className="grid grid-cols-3 gap-4 border-y border-white/10 py-4 my-6">
                                    <div className="text-center">
                                        <div className="text-2xl font-syne font-bold text-[#00d2ff]">8.11</div>
                                        <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mt-1">B.Tech CGPA</div>
                                    </div>
                                    <div className="text-center border-x border-white/10">
                                        <div className="text-2xl font-syne font-bold text-[#9d00ff] drop-shadow-[0_0_8px_rgba(157,0,255,0.4)]">96.1%</div>
                                        <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mt-1">12th Grade</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-syne font-bold text-[#00d2ff]">100%</div>
                                        <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mt-1">10th Grade</div>
                                    </div>
                                </div>

                                <p className="border-l-4 border-[#00d2ff] pl-4 text-white font-medium italic">
                                    "The choices you make define who you are."
                                </p>
                            </div>

                            <div className="mt-8 flex gap-4">
                                <a href="https://linkedin.com/in/pavankumarkillana" target="_blank" rel="noreferrer" className="px-8 py-3 rounded-full bg-gradient-to-r from-[#00d2ff] to-[#9d00ff] font-bold tracking-wide hover:shadow-[0_0_20px_rgba(0,210,255,0.6)] transition-all duration-300 text-black inline-block text-center hover:opacity-90">
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
