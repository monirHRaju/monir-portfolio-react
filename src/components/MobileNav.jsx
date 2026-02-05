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
            const mainContent = document.getElementById("main-content-scroll");
            
            if (mainContent) {
                sections.forEach(section => {
                    const element = mainContent.querySelector(`#${section}`);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        const containerRect = mainContent.getBoundingClientRect();
                        const relativeTop = rect.top - containerRect.top;
                        
                        if (relativeTop < 200 && relativeTop + rect.height > 200) {
                            setActiveSection(section);
                        }
                    }
                });
            }
        };

        const mainContent = document.getElementById("main-content-scroll");
        if (mainContent) {
            mainContent.addEventListener("scroll", handleScroll);
            return () => mainContent.removeEventListener("scroll", handleScroll);
        }
    }, []);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const scrollToSection = (sectionId) => {
        const mainContent = document.getElementById("main-content-scroll");
        const element = mainContent?.querySelector(`#${sectionId}`);
        
        if (element && mainContent) {
            const offsetTop = element.offsetTop - 40;
            mainContent.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            });
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
