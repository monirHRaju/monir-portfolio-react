import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaRegUser, FaRegFileAlt, FaAddressBook, FaBars } from "react-icons/fa";

const navItems = [
    { id: "home",    icon: FaHome,        label: "Home" },
    { id: "about",   icon: FaRegUser,     label: "About" },
    { id: "resume",  icon: FaRegFileAlt,  label: "Resume" },
    { id: "contact", icon: FaAddressBook, label: "Contact" },
];

const FloatingNav = () => {
    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("about");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["about", "resume", "projects", "contact"];
            for (const section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top < 200 && rect.bottom > 200) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
        if (id === "home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setActiveSection("home");
        } else {
            const el = document.getElementById(id);
            if (el) {
                const top = el.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top, behavior: "smooth" });
                setActiveSection(id);
            }
        }
        setOpen(false);
    };

    return (
        <div
            className="fixed bottom-24 right-5 md:bottom-8 md:right-8 z-50 flex flex-col items-center gap-3"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            {/* Nav items — slide up on hover */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="flex flex-col-reverse gap-2 items-center"
                    >
                        {navItems.map((item, i) => (
                            <motion.button
                                key={item.id}
                                variants={{
                                    hidden: { opacity: 0, y: 12, scale: 0.8 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        scale: 1,
                                        transition: { delay: i * 0.05, duration: 0.2 },
                                    },
                                }}
                                onClick={() => scrollToSection(item.id)}
                                title={item.label}
                                className={`group flex items-center gap-2 pr-3 pl-2 py-2 rounded-full shadow-lg border transition-all duration-200
                                    ${activeSection === item.id
                                        ? "bg-primary text-white border-primary"
                                        : "bg-white dark:bg-zinc-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-primary hover:text-primary dark:hover:text-primary"
                                    }`}
                            >
                                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20">
                                    <item.icon className="text-base" />
                                </span>
                                <span className="text-xs font-semibold tracking-wide">{item.label}</span>
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Trigger button */}
            <motion.button
                animate={{ rotate: open ? 90 : 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setOpen((v) => !v)}
                className="w-12 h-12 rounded-full bg-primary text-white shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors border-2 border-white dark:border-zinc-900"
                title="Quick Navigation"
            >
                <FaBars className="text-lg" />
            </motion.button>
        </div>
    );
};

export default FloatingNav;
