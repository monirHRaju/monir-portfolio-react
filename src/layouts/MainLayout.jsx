import { motion } from "framer-motion";
import TopNav from "../components/TopNav";
import MobileNav from "../components/MobileNav";
import ProfileCard from "../components/ProfileCard";
import Home from "../pages/Home";

const MainLayout = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200 font-body transition-colors duration-300 min-h-screen">
            <TopNav />

            <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 flex flex-col gap-6 overflow-x-hidden">
                {/* Hero Profile */}
                <ProfileCard />

                {/* Main Content */}
                <div id="main-content-scroll" className="w-full bg-card-light dark:bg-card-dark rounded-3xl shadow-xl border border-gray-200 dark:border-gray-800 p-8 md:p-12 lg:p-16 relative overflow-x-hidden">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary opacity-5 rounded-full blur-3xl pointer-events-none" />

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

            <MobileNav />
        </div>
    );
};

export default MainLayout;
