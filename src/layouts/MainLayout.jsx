import { useLocation, useOutlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import MobileNav from "../components/MobileNav";
import ProfileCard from "../components/ProfileCard";

const MainLayout = () => {
    const location = useLocation();
    const element = useOutlet();

    return (
        <div className="bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200 font-body transition-colors duration-300 min-h-screen flex items-center justify-center p-4 md:p-8 overflow-x-hidden">
            <div className="relative w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-6 items-start justify-center">
                {/* Desktop Sidebar */}
                <Sidebar />

                {/* Profile Card (Sticky/Fixed or same flow as legacy) */}
                <ProfileCard />

                {/* Main Content Area */}
                <div className="flex-1 w-full bg-card-light dark:bg-card-dark rounded-3xl shadow-xl border border-gray-200 dark:border-gray-800 p-8 md:p-10 relative overflow-hidden min-h-[600px]">
                     {/* Decorative blur blob from legacy */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary opacity-5 rounded-full blur-3xl"></div>
                    
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={location.pathname}
                            initial={{ opacity: 0, y: 10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.98 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="h-full"
                        >
                            {element}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Mobile Navigation */}
            <MobileNav />
        </div>
    );
};

export default MainLayout;
