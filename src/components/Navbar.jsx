import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = ['Home', 'About', 'Services', 'Skills', 'Projects', 'Contact'];

const Navbar = () => {
    const [active, setActive] = useState('Home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            const sections = navItems.map(item => document.getElementById(item.toLowerCase()));
            const scrollPosition = window.scrollY + 200;

            sections.forEach(sec => {
                if (sec && sec.offsetTop <= scrollPosition && sec.offsetTop + sec.offsetHeight > scrollPosition) {
                    setActive(sec.id.charAt(0).toUpperCase() + sec.id.slice(1));
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id.toLowerCase());
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0f1b]/80 backdrop-blur-md shadow-[0_4px_30px_rgba(0,210,255,0.1)]' : 'bg-transparent'}`}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="text-2xl font-bold font-syne text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 cursor-pointer" style={{ textShadow: '0 0 10px rgba(0,210,255,0.3)' }} onClick={() => scrollToSection('home')}>
                    PAVAN
                </div>

                <div className="hidden md:flex gap-8">
                    {navItems.map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item)}
                            className={`relative text-sm uppercase tracking-wider font-semibold transition-colors duration-300 ${active === item ? 'text-[#00d2ff] text-glow-cyan' : 'text-gray-400 hover:text-white'}`}
                        >
                            {item}
                            {active === item && (
                                <motion.div
                                    layoutId="navbar-indicator"
                                    className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#00d2ff]"
                                    style={{ boxShadow: '0 0 10px #00d2ff' }}
                                />
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
