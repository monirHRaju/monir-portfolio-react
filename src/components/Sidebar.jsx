import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaNetworkWired, FaRegFileAlt, FaRegIdCard, FaAddressBook, FaRegUser } from "react-icons/fa";
import { MdMenu, MdDarkMode, MdLightMode } from "react-icons/md";

const Sidebar = () => {
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
        { to: "/projects", icon: FaNetworkWired, label: "PROJECTS" },
        { to: "/articles", icon: FaRegIdCard, label: "ARTICLES" },
        { to: "/contact", icon: FaAddressBook, label: "CONTACT" },
    ];

    return (
        <nav className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 md:sticky md:top-8 md:translate-y-0 hidden md:flex flex-col items-center py-6 px-3 bg-white dark:bg-sidebar-dark rounded-full shadow-lg border border-gray-200 dark:border-gray-800 h-auto min-h-[500px] justify-between transition-all duration-300">
            <Link to="/" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 mb-6">
                <img src="logo.svg" width={30} height={30} alt="" />
            </Link>

            <div className="flex flex-col gap-6 items-center flex-1 justify-center w-full">
                {navItems.map((item) => (
                    <NavLink
                        key={item.label}
                        to={item.to}
                        className={({ isActive }) =>
                            `group flex flex-col items-center gap-1 transition-colors ${
                                isActive
                                    ? "text-primary"
                                    : "text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                            }`
                        }
                    >
                        <span className="text-2xl"><item.icon /></span>
                        <span className="text-[10px] font-semibold tracking-wider">{item.label}</span>
                    </NavLink>
                ))}
            </div>

            <button
                className="mt-6 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 transition-colors"
                onClick={toggleTheme}
            >
                <MdDarkMode className="text-xl dark:hidden" />
                <MdLightMode className="text-xl hidden dark:inline" />
            </button>
        </nav>
    );
};

export default Sidebar;
