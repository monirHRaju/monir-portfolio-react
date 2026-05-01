import { useEffect, useState } from "react";
import { FaRegUser, FaRegFileAlt, FaNetworkWired, FaAddressBook } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const navItems = [
    { id: "about",    icon: FaRegUser,      label: "About" },
    { id: "resume",   icon: FaRegFileAlt,   label: "Resume" },
    { id: "projects", icon: FaNetworkWired, label: "Projects" },
    { id: "contact",  icon: FaAddressBook,  label: "Contact" },
];

const TopNav = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
    const [activeSection, setActiveSection] = useState("about");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
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

    const toggleTheme = () => setTheme(t => t === "dark" ? "light" : "dark");

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top, behavior: "smooth" });
            setActiveSection(id);
        }
    };

    return (
        <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${
            scrolled
                ? "bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-800"
                : "bg-background-light dark:bg-background-dark"
        }`}>
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Name */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="text-xl font-bold text-gray-900 dark:text-white tracking-tight"
                >
                    Monir<span className="text-primary">.</span>
                </button>

                {/* Nav links — desktop only */}
                <div className="hidden md:flex items-center gap-1">
                    {navItems.map(item => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                                activeSection === item.id
                                    ? "bg-primary text-white"
                                    : "text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary hover:bg-primary/10"
                            }`}
                        >
                            <item.icon className="text-sm" />
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* Theme toggle */}
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 transition-colors"
                    title="Toggle theme"
                >
                    <MdDarkMode className="text-xl dark:hidden" />
                    <MdLightMode className="text-xl hidden dark:block" />
                </button>
            </div>
        </nav>
    );
};

export default TopNav;
