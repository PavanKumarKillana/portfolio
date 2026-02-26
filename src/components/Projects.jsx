const ProjectCard = ({ title, category, imgUrl, link }) => {
    return (
        <div className="group relative overflow-hidden rounded-2xl glass-card border border-white/5 cursor-pointer">
            {/* Image container with grayscale by default, color + scale on hover */}
            <div className="w-full h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-[#0a0f1b]/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img
                    src={imgUrl}
                    alt={title}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
                />
            </div>

            {/* Content overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 z-20 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-[#0a0f1b] via-[#0a0f1b]/80 to-transparent">
                <span className="text-sm font-bold text-[#00d2ff] tracking-widest uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {category}
                </span>
                <h3 className="text-2xl font-syne font-bold text-white mb-2">{title}</h3>
                <div className="w-12 h-1 bg-[#9d00ff] rounded-full group-hover:w-full transition-all duration-500"></div>
            </div>
        </div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: "AI Proctoring System",
            category: "Computer Vision",
            imgUrl: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&fit=crop&q=80&w=800",
            link: "#"
        },
        {
            title: "Emotion Detection",
            category: "Deep Learning",
            imgUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800",
            link: "#"
        },
        {
            title: "University Gate Pass",
            category: "Flask & SQL",
            imgUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
            link: "#"
        },
        {
            title: "Crop Prediction Setup",
            category: "ML / IoT",
            imgUrl: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800",
            link: "#"
        },
        {
            title: "Automated Diagnostics",
            category: "Networking AI",
            imgUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
            link: "#"
        },
        {
            title: "Prosthetic Robotic Arm",
            category: "Inverse Kinematics",
            imgUrl: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800",
            link: "#"
        }
    ];

    return (
        <section id="projects" className="w-full min-h-screen flex items-center justify-center py-20 px-6">
            <div className="max-w-6xl w-full">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-syne font-bold mb-4">
                        Featured <span className="text-[#9d00ff] drop-shadow-[0_0_10px_rgba(157,0,255,0.6)]">Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#9d00ff] to-[#00d2ff] mx-auto rounded-full box-glow"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((proj, i) => (
                        <ProjectCard key={i} {...proj} />
                    ))}
                </div>

                <div className="mt-12 flex justify-center">
                    <a href="https://github.com/" target="_blank" rel="noreferrer" className="px-8 py-3 rounded-full border border-white/20 text-white font-bold tracking-wide hover:bg-white/5 hover:border-[#00d2ff] transition-all duration-300">
                        View GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
