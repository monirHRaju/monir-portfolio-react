import { FaLinkedin, FaDribbble, FaTwitter, FaGithub, FaDownload, FaPaperPlane } from "react-icons/fa";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const ProfileCard = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });
    const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleMouseLeave = () => { x.set(0); y.set(0); };

    const scrollToContact = () => {
        const el = document.getElementById("contact");
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
    };

    return (
        <div className="w-full shrink-0 relative z-10 perspective-1000">
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="rounded-3xl shadow-2xl overflow-hidden bg-card-light dark:bg-card-dark border border-gray-200 dark:border-gray-800 transition-colors duration-300"
            >
                <div className="flex flex-col md:flex-row">
                    {/* Photo */}
                    <div className="relative md:w-80 h-72 md:h-auto shrink-0 overflow-hidden">
                        <img
                            alt="Monir Hossain Frontend focused MERN Stack Developer Portrait Profile Photo"
                            className="w-full h-full object-cover object-top transition-all duration-500 hover:scale-105"
                            src="/monir-profile-photo-binary.jpg"
                        />
                        <div className="absolute inset-0 bg-linear-to-b md:bg-linear-to-r from-transparent via-transparent to-card-light dark:to-card-dark opacity-60" />
                    </div>

                    {/* Info */}
                    <div className="flex flex-col justify-center px-8 py-10 flex-1">
                        <span className="text-primary text-xs font-bold tracking-widest uppercase mb-3">
                            MERN Stack Developer
                        </span>
                        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
                            Monir<br />Hossain
                        </h1>

                        <div className="flex gap-4 mb-8">
                            <a href="https://www.linkedin.com/in/monirhraju/" target="_blank" rel="noreferrer"
                                className="text-gray-400 hover:text-primary transition-colors text-xl">
                                <FaLinkedin />
                            </a>
                            <a href="https://dribbble.com/monirhraju" target="_blank" rel="noreferrer"
                                className="text-gray-400 hover:text-primary transition-colors text-xl">
                                <FaDribbble />
                            </a>
                            <a href="https://x.com/monirhraju" target="_blank" rel="noreferrer"
                                className="text-gray-400 hover:text-primary transition-colors text-xl">
                                <FaTwitter />
                            </a>
                            <a href="https://github.com/monirHRaju" target="_blank" rel="noreferrer"
                                className="text-gray-400 hover:text-primary transition-colors text-xl">
                                <FaGithub />
                            </a>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <a
                                href="https://drive.google.com/file/d/1v4HNRHGRvb8lOkL6VxQU2EyIyDbSloV3/view?usp=sharing"
                                target="_blank" rel="noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full text-sm font-bold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/30"
                            >
                                Download CV <FaDownload className="text-xs" />
                            </a>
                            <button
                                onClick={scrollToContact}
                                className="flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-full text-sm font-bold hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-all"
                            >
                                Contact Me <FaPaperPlane className="text-xs" />
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProfileCard;
