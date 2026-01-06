import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaRegUser, FaRegFileAlt, FaNetworkWired, FaAddressBook } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const MobileNav = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const navItems = [
        { to: "/", icon: FaRegUser, label: "ABOUT" },
        { to: "/resume", icon: FaRegFileAlt, label: "RESUME" },
        { to: "/projects", icon: FaNetworkWired, label: "WORKS" }, 
        { to: "/contact", icon: FaAddressBook, label: "CONTACT" },
    ];

    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-card-dark border-t border-gray-200 dark:border-gray-800 flex justify-around items-center p-3 z-50">
            {navItems.map((item) => (
                <NavLink
                    key={item.label}
                    to={item.to}
                    className={({ isActive }) =>
                        `flex flex-col items-center ${
                            isActive ? "text-primary" : "text-gray-400"
                        }`
                    }
                >
                    <span className="text-xl"><item.icon /></span>
                    <span className="text-[9px] font-bold mt-1">{item.label}</span>
                </NavLink>
            ))}

            <button
                className="flex flex-col items-center text-gray-400"
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
