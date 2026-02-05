import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import MobileNav from "../components/MobileNav";
import ProfileCard from "../components/ProfileCard";
import Home from "../pages/Home";

const MainLayout = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200 font-body transition-colors duration-300 min-h-screen flex items-center justify-center p-4 md:p-8 overflow-x-hidden">
            <div className="relative w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-6 items-start justify-center">
                {/* Desktop Sidebar */}
                <Sidebar />

                {/* Profile Card (Sticky/Fixed or same flow as legacy) */}
                <ProfileCard />

                {/* Main Content Area */}
                <div id="main-content-scroll" className="flex-1 w-full bg-card-light dark:bg-card-dark rounded-3xl shadow-xl border border-gray-200 dark:border-gray-800 p-8 md:p-12 lg:p-16 relative overflow-y-scroll max-h-[calc(100vh-4rem)] md:max-h-[calc(100vh-2rem)] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800">
                     {/* Decorative blur blob from legacy */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary opacity-5 rounded-full blur-3xl pointer-events-none"></div>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="relative z-10"
                    >
                        <Home />
                    </motion.div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <MobileNav />
        </div>
    );
};

export default MainLayout;
