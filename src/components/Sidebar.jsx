import { useEffect, useState } from "react";
import { FaNetworkWired, FaRegFileAlt, FaRegIdCard, FaAddressBook, FaRegUser } from "react-icons/fa";
import { MdMenu, MdDarkMode, MdLightMode } from "react-icons/md";
import "./Sidebar.css";

const Sidebar = () => {
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
        { id: "projects", icon: FaNetworkWired, label: "PROJECTS" },
        { id: "contact", icon: FaAddressBook, label: "CONTACT" },
    ];

    return (
        <nav className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 md:sticky md:top-8 md:translate-y-0 hidden md:flex flex-col items-center py-6 px-3 rounded-full h-auto min-h-[500px] justify-between transition-all duration-300 sci-fi-sidebar">
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 mb-6 z-10">
                <img src="logo.svg" width={30} height={30} alt="" />
            </button>

            <div className="flex flex-col gap-6 items-center flex-1 justify-center w-full z-10">
                {navItems.map((item) => (
                    <button
                        key={item.label}
                        onClick={() => scrollToSection(item.id)}
                        className={`group flex flex-col items-center gap-1 transition-colors sci-fi-link ${
                            activeSection === item.id
                                ? "text-primary active-link"
                                : "text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                        }`}
                    >
                        <span className="text-2xl sci-fi-icon"><item.icon /></span>
                        <span className="text-[10px] font-semibold tracking-wider">{item.label}</span>
                    </button>
                ))}
            </div>

            <button
                className="mt-6 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 transition-colors z-10"
                onClick={toggleTheme}
            >
                <MdDarkMode className="text-xl dark:hidden" />
                <MdLightMode className="text-xl hidden dark:inline" />
            </button>
        </nav>
    );
};

export default Sidebar;
