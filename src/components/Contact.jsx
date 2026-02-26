import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send } from 'lucide-react';

const Particles = ({ count }) => {
    return Array.from({ length: count }).map((_, i) => {
        const angle = Math.random() * Math.PI * 2;
        const velocity = 50 + Math.random() * 100;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity - 100; // Prefer upward trajectory
        const colors = ['#00d2ff', '#9d00ff', '#ffffff'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = 3 + Math.random() * 6;

        return (
            <motion.div
                key={i}
                className="absolute left-1/2 top-1/2 rounded-full pointer-events-none z-50"
                style={{ width: size, height: size, backgroundColor: color, boxShadow: `0 0 10px ${color}` }}
                initial={{ x: "-50%", y: "-50%", scale: 1, opacity: 1 }}
                animate={{
                    x: `calc(-50% + ${tx}px)`,
                    y: `calc(-50% + ${ty}px)`,
                    scale: 0,
                    opacity: 0
                }}
                transition={{ duration: 0.8 + Math.random() * 0.5, ease: "easeOut" }}
            />
        );
    });
};

const Contact = () => {
    const [status, setStatus] = useState('idle'); // idle, sending, sent

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        const mailtoLink = `mailto:pa1officialqueries@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

        // Open the mail client
        window.location.href = mailtoLink;

        // Simulate the animation timeline
        setTimeout(() => {
            setStatus('sent');

            // Reset after 3 seconds
            setTimeout(() => {
                setStatus('idle');
                e.target.reset();
            }, 3000);
        }, 800);
    };

    return (
        <section id="contact" className="w-full min-h-screen flex text-white py-20 px-6 font-satoshi relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#00d2ff]/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#9d00ff]/10 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="max-w-4xl w-full mx-auto relative z-10 flex flex-col items-center">
                <div className="mb-12 text-center">
                    <h2 className="text-4xl md:text-5xl font-syne font-bold mb-4">
                        Get in <span className="text-[#00d2ff] text-glow-cyan">Touch</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#00d2ff] to-[#9d00ff] mx-auto rounded-full box-glow"></div>
                    <p className="mt-6 text-gray-400 max-w-lg mx-auto">
                        Ready to build the future? Reach out directly at <a href="mailto:pa1officialqueries@gmail.com" className="text-[#00d2ff] hover:underline">pa1officialqueries@gmail.com</a> or send a message below to start a conversation.
                    </p>
                </div>

                <div className="w-full glass-card p-8 md:p-10 border border-[#00d2ff]/20 box-glow">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-sm font-bold uppercase tracking-wider text-gray-300">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    disabled={status !== 'idle'}
                                    className="bg-[#0a0f1b]/50 border border-white/10 rounded-lg p-4 focus:outline-none focus:border-[#00d2ff] transition-colors text-white placeholder-gray-500 disabled:opacity-50"
                                    placeholder="Pavan Kumar"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-gray-300">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    disabled={status !== 'idle'}
                                    className="bg-[#0a0f1b]/50 border border-white/10 rounded-lg p-4 focus:outline-none focus:border-[#9d00ff] transition-colors text-white placeholder-gray-500 disabled:opacity-50"
                                    placeholder="neo@matrix.com"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="subject" className="text-sm font-bold uppercase tracking-wider text-gray-300">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                required
                                disabled={status !== 'idle'}
                                className="bg-[#0a0f1b]/50 border border-white/10 rounded-lg p-4 focus:outline-none focus:border-[#00d2ff] transition-colors text-white placeholder-gray-500 disabled:opacity-50"
                                placeholder="Project Inquiry"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider text-gray-300">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                required
                                disabled={status !== 'idle'}
                                className="bg-[#0a0f1b]/50 border border-white/10 rounded-lg p-4 focus:outline-none focus:border-[#9d00ff] transition-colors resize-none text-white placeholder-gray-500 disabled:opacity-50"
                                placeholder="Initiating secure link..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status !== 'idle'}
                            className={`relative w-full py-4 mt-4 rounded-lg flex items-center justify-center overflow-hidden transition-all duration-300 ${status === 'sent'
                                ? 'bg-transparent border border-[#00d2ff] text-[#00d2ff]'
                                : 'bg-gradient-to-r from-[#00d2ff] to-[#9d00ff] hover:opacity-90'
                                }`}
                            style={status === 'idle' ? { boxShadow: '0 0 20px rgba(157, 0, 255, 0.4)' } : {}}
                        >
                            <AnimatePresence mode="wait">
                                {status === 'idle' && (
                                    <motion.div
                                        key="idle"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -50, scale: 0.5, rotate: -10 }} // Flies up physics
                                        transition={{ duration: 0.4 }}
                                        className="flex items-center gap-2 font-bold text-lg tracking-widest uppercase text-black"
                                    >
                                        Transmit <Send size={20} />
                                    </motion.div>
                                )}

                                {status === 'sending' && (
                                    <motion.div
                                        key="sending"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin"
                                    />
                                )}

                                {status === 'sent' && (
                                    <motion.div
                                        key="sent"
                                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        className="font-bold text-lg tracking-widest uppercase text-glow-cyan"
                                    >
                                        Message Sent!
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Particle Explosion on sent */}
                            {status === 'sent' && <Particles count={30} />}
                        </button>
                    </form>
                </div>

                <footer className="mt-20 text-center text-gray-500 text-sm">
                    <p>© 2026 Pavan Kumar Killana.</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
