// Image imported via URL in img tag
import { FaLinkedin, FaDribbble, FaTwitter, FaGithub, FaDownload, FaPaperPlane } from "react-icons/fa";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const ProfileCard = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [7, -7]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-7, 7]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXVal = e.clientX - rect.left;
        const mouseYVal = e.clientY - rect.top;
        const xPct = mouseXVal / width - 0.5;
        const yPct = mouseYVal / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div className="w-full md:w-[400px] flex-shrink-0 relative z-10 perspective-1000">
            <motion.div 
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="bg-card-light dark:bg-card-dark rounded-3xl shadow-2xl overflow-hidden h-full min-h-[600px] flex flex-col relative border border-gray-200 dark:border-gray-800 transition-colors duration-300"
            >
                <div className="relative h-[450px] w-full overflow-hidden clip-path-slant">
                     {/* Note: In a real app, import the image or put it in public folder. Using the original URL for now */}
                    <img 
                        alt="Benjamin Ryan Portrait" 
                        className="absolute inset-0 w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500" 
                        src="/monir profile photo-binary.jpg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card-dark via-transparent to-transparent opacity-90"></div>
                </div>

                <div className="absolute top-[340px] left-0 right-0 text-center px-6 z-20 transform translate-z-10">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">Monir Hossain</h1>
                    <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
                        <span className="text-sm text-gray-600 dark:text-gray-300">Frontend Developer</span>
                    </div>

                    <div className="flex justify-center gap-4 mt-4">
                        <a className="text-gray-500 hover:text-white dark:text-gray-400 dark:hover:text-white transition-colors transform hover:scale-110" href="https://www.linkedin.com/in/monirhraju/" target="_blank" rel="noreferrer"><FaLinkedin className="text-lg" /></a>
                        <a className="text-gray-500 hover:text-white dark:text-gray-400 dark:hover:text-white transition-colors transform hover:scale-110" href="https://dribbble.com/monirhraju" target="_blank" rel="noreferrer"><FaDribbble className="text-lg" /></a>
                        <a className="text-gray-500 hover:text-white dark:text-gray-400 dark:hover:text-white transition-colors transform hover:scale-110" href="https://x.com/monirhraju" target="_blank" rel="noreferrer"><FaTwitter className="text-lg" /></a>
                        <a className="text-gray-500 hover:text-white dark:text-gray-400 dark:hover:text-white transition-colors transform hover:scale-110" href="https://github.com/monirHRaju" target="_blank" rel="noreferrer"><FaGithub className="text-lg" /></a>
                    </div>
                </div>

                <div className="mt-auto flex border-t border-gray-200 dark:border-gray-800 divide-x divide-gray-200 dark:divide-gray-800 h-16 relative top-0 bg-card-light dark:bg-card-dark">
                    <a className="flex-1 flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wide hover:text-primary transition-colors group" href="https://drive.google.com/file/d/1Hi3vrR_qA5jxPi_Invp6VMjOchkQmbJk/view?usp=sharing" target="_blank" rel="noreferrer">
                        Download CV
                        <FaDownload className="text-lg group-hover:animate-bounce" />
                    </a>
                    <a className="flex-1 flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wide hover:text-primary transition-colors" href="#">
                        Contact Me
                        <FaPaperPlane className="text-lg -rotate-0" />
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default ProfileCard;
