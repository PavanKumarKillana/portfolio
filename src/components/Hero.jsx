import { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import Matter from 'matter-js';

const Hero = () => {
    const sceneRef = useRef(null);

    useEffect(() => {
        if (!sceneRef.current) return;

        const Engine = Matter.Engine,
            Render = Matter.Render,
            Runner = Matter.Runner,
            MouseConstraint = Matter.MouseConstraint,
            Mouse = Matter.Mouse,
            Composite = Matter.Composite,
            Bodies = Matter.Bodies,
            Body = Matter.Body,
            Vector = Matter.Vector;

        const engine = Engine.create();
        engine.gravity.y = 0;
        engine.gravity.x = 0;

        const width = sceneRef.current.clientWidth;
        const height = sceneRef.current.clientHeight;

        const render = Render.create({
            element: sceneRef.current,
            engine: engine,
            options: {
                width,
                height,
                background: 'transparent',
                wireframes: false,
            }
        });

        const cx = width / 2;
        const cy = height / 2;

        const invisibleWallOptions = { isStatic: true, render: { visible: false } };
        const ground = Bodies.rectangle(cx, height + 50, width, 100, invisibleWallOptions);
        const ceiling = Bodies.rectangle(cx, -50, width, 100, invisibleWallOptions);
        const leftWall = Bodies.rectangle(-50, cy, 100, height, invisibleWallOptions);
        const rightWall = Bodies.rectangle(width + 50, cy, 100, height, invisibleWallOptions);

        // We adjust the physics circle size dynamically if we want, but 120 works for mobile
        const profileRadius = 140;
        const profileBody = Bodies.circle(cx, cy, profileRadius, {
            isStatic: true,
            render: { visible: false }
        });

        const iconBodies = [];
        // Colorful icon logos
        const iconTextures = [
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
        ];

        for (let i = 0; i < iconTextures.length; i++) {
            const x = Math.random() > 0.5 ? Math.random() * (cx - profileRadius - 100) : cx + profileRadius + 100 + Math.random() * (cx - profileRadius - 100);
            const y = Math.random() * height;

            const body = Bodies.circle(x, y, 40, {
                restitution: 0.9,
                friction: 0.005,
                render: {
                    sprite: {
                        texture: iconTextures[i],
                        xScale: 0.8,
                        yScale: 0.8
                    }
                }
            });

            Body.setVelocity(body, { x: (Math.random() - 0.5) * 8, y: (Math.random() - 0.5) * 8 });
            iconBodies.push(body);
        }

        Composite.add(engine.world, [ground, ceiling, leftWall, rightWall, profileBody, ...iconBodies]);

        Matter.Events.on(engine, 'beforeUpdate', () => {
            iconBodies.forEach(body => {
                Body.applyForce(body, body.position, {
                    x: (Math.random() - 0.5) * 0.003,
                    y: (Math.random() - 0.5) * 0.003
                });

                if (Vector.magnitude(body.velocity) > 6) {
                    Body.setVelocity(body, Vector.mult(Vector.normalise(body.velocity), 6));
                }
            });
        });

        const mouse = Mouse.create(render.canvas);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: { visible: false }
            }
        });

        Composite.add(engine.world, mouseConstraint);
        render.mouse = mouse;

        Render.run(render);
        const runner = Runner.create();
        Runner.run(runner, engine);

        const handleResize = () => {
            render.canvas.width = sceneRef.current.clientWidth;
            render.canvas.height = sceneRef.current.clientHeight;
            Body.setPosition(profileBody, { x: sceneRef.current.clientWidth / 2, y: sceneRef.current.clientHeight / 2 });
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            Render.stop(render);
            Runner.stop(runner);
            Engine.clear(engine);
            if (render.canvas) {
                render.canvas.remove();
            }
        };
    }, []);

    return (
        <section id="home" className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
            <div ref={sceneRef} className="absolute inset-0 z-0 pointer-events-auto cursor-pointer" />

            <div className="relative z-10 flex flex-col items-center pointer-events-none mt-[-5vh]">
                <div className="relative mb-6 rounded-full group">
                    <div className="absolute inset-[-5px] rounded-full box-glow animate-pulse"></div>
                    <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#0a0f1b] relative z-10 bg-black">
                        <img
                            src="/main_pic.jpg"
                            alt="Pavan Kumar Killana"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            onError={(e) => {
                                e.target.src = "https://ui-avatars.com/api/?name=Pavan+Kumar&background=0a0f1b&color=00d2ff&size=256";
                            }}
                        />
                    </div>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold font-syne mb-2 text-white text-center">
                    Hi, I am <span className="text-[#00d2ff] text-glow-cyan">Pavan Kumar</span>
                </h1>

                <div className="text-2xl md:text-4xl font-satoshi text-gray-300 h-16 flex items-center justify-center">
                    <Typewriter
                        options={{
                            strings: ["AI & Data Science Student", "Machine Learning Enthusiast", "Software Developer"],
                            autoStart: true,
                            loop: true,
                            wrapperClassName: "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-bold",
                            cursorClassName: "text-[#00d2ff] animate-pulse"
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
