import { useEffect, useState } from "react";
import { FaRegUser, FaRegFileAlt, FaNetworkWired, FaAddressBook } from "react-icons/fa";

const navItems = [
    { id: "about",    icon: FaRegUser,      label: "ABOUT" },
    { id: "resume",   icon: FaRegFileAlt,   label: "RESUME" },
    { id: "projects", icon: FaNetworkWired, label: "WORKS" },
    { id: "contact",  icon: FaAddressBook,  label: "CONTACT" },
];

const MobileNav = () => {
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
        const el = document.getElementById(id);
        if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top, behavior: "smooth" });
            setActiveSection(id);
        }
    };

    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-card-dark border-t border-gray-200 dark:border-gray-800 flex justify-around items-center p-3 z-50">
            {navItems.map((item) => (
                <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex flex-col items-center transition-colors ${
                        activeSection === item.id ? "text-primary" : "text-gray-400"
                    }`}
                >
                    <span className="text-xl"><item.icon /></span>
                    <span className="text-[9px] font-bold mt-1">{item.label}</span>
                </button>
            ))}
        </nav>
    );
};

export default MobileNav;
