import { useEffect, useState } from "react";
import { FaRegUser, FaRegFileAlt, FaNetworkWired, FaAddressBook } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const MobileNav = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
    const [activeSection, setActiveSection] = useState("about");

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
            const sections = ["about", "resume", "projects", "contact"];
            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top < 200 && rect.bottom > 200) {
                        setActiveSection(section);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const top = element.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top, behavior: "smooth" });
            setActiveSection(sectionId);
        }
    };

    const navItems = [
        { id: "about", icon: FaRegUser, label: "ABOUT" },
        { id: "resume", icon: FaRegFileAlt, label: "RESUME" },
        { id: "projects", icon: FaNetworkWired, label: "WORKS" }, 
        { id: "contact", icon: FaAddressBook, label: "CONTACT" },
    ];

    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-card-dark border-t border-gray-200 dark:border-gray-800 flex justify-around items-center p-3 z-50">
            {navItems.map((item) => (
                <button
                    key={item.label}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex flex-col items-center transition-colors ${
                        activeSection === item.id ? "text-primary" : "text-gray-400"
                    }`}
                >
                    <span className="text-xl"><item.icon /></span>
                    <span className="text-[9px] font-bold mt-1">{item.label}</span>
                </button>
            ))}

            <button
                className="flex flex-col items-center text-gray-400 transition-colors"
                onClick={toggleTheme}
            >
                <span className="text-xl dark:hidden"><MdDarkMode /></span>
                <span className="text-xl hidden dark:block"><MdLightMode /></span>
                <span className="text-[9px] mt-1">THEME</span>
            </button>
        </nav>
    );
};

export default MobileNav;
