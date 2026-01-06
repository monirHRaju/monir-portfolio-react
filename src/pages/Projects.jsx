import { useState } from 'react';
import { FaEye } from "react-icons/fa";

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Web Design', 'Applications', 'Data Science'];

    const projects = [
        {
            title: "Finance Dashboard",
            category: "Web Design",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZng8EeGoBK-ja6kPRfkOslikIH1svUMn5TvZO2UiIL0KwW_EDe_czPXsMRWQ5yW9sxsZdEMmtaUlAFPCEqCxUa94_itaW8G8udMmSlQLc33FlScKL4F4hl5pP_6iE90Rt2L7yIqDNiSImZExyccK4Ysv3BNnMq5AFwSeSpU9VMGsucZaTsNZCgXm4hqsTxlRzuaGjNTmV_UqNCmjvTGv_pKSlX_5wL5kzyXu_R-fPvxt5TLy8mYfI4ZMXSNWodbPDzOiThD2QWsQ",
            desc: "A comprehensive real-time dashboard for visualizing stock market trends and personal finance portfolios using WebSocket.",
            tech: ["React", "D3.js"]
        },
        {
            title: "E-commerce API",
            category: "Applications",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5OY7ZKvjQLNczh0NphiOcNeHOcrGxlI3clin_2TlEtSgYkQSz1M3N9JxpLVYpTi_aYEFMV2NPOWz5uI0jaW0IjY2IWp61t9N-8vFcP0TloFXzqSVU5E8ATw6Lv5fZJWUrxoliz2QRb5T9S71qC9q9NeZC9LxWr30ZrFE9cKvtIiPXVMRGkISQB8LRUx7awCeP-LaHHOLXEOQ2Mi0ChQXO7QuVavHWgqKBaylh16QrqWkQ51r02Kxtnvcfy5isOe0b9FsWYQWeWsk",
            desc: "Robust RESTful API for a multi-vendor marketplace handling payments, inventory, and user authentication.",
            tech: ["Node.js", "MongoDB"]
        },
        {
            title: "Health Tracker App",
            category: "Applications",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3H3sAlSilHd98CuEQV67rSKVpbCciZEAiZWYaVbDSwZyCY8n6LCtDVWFRnliEsbmgiwOPSmVDfh1t2o1jSGgFtnNhm7rf7gN9CmacfZAV4EkpCTUsJQbVE9i-XDw8VP32MejiN2dcszqLAGVu97Pn-wKOu5BEDY-xUcK2gs3uCQjO9G0YSw0ZG8HqKGEGmA0arD7NMPo5vPqJgIzXQKgEl2lBfdM9UwZfzEhSSkMoFZruy2im1Z8fiXCMOpnWC0tM3KPG7XZmX4I",
            desc: "Cross-platform mobile application for tracking daily fitness activities, caloric intake, and sleep cycles.",
            tech: ["Flutter", "Firebase"]
        },
        {
            title: "Sales Prediction Model",
            category: "Data Science",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5lIR34SlmCgg5g3WsY66DRAHFWH_EkVgTqOqz2PqVIJCSMZQy42wopEZ-ARxxtt6wp8Sv8OV1q_QZlwuCQPIAei2cMSOwZLv_wlzvWn9sfbX1eyXojuJcSX91NfVKAMcxHxN7MpBmgfC35kSwujm4WfoIhZDrj_mGt5N-3vXeCt5VN2Sr6EFpbEh6NQW6wktnZnQUXZnZmMvVY0OZ8ikLqWS2mxQSj2Q_9JVi8NWT6dfl1Z_GmMbg6hROScXGOVpjYvwlKr9KpGY",
            desc: "Machine learning model designed to forecast quarterly sales trends based on historical data and market indicators.",
            tech: ["Python", "Scikit-learn"]
        }
    ];

    const filteredProjects = filter === 'All' 
        ? projects 
        : projects.filter(project => project.category === filter);

    return (
        <div className="fade-in">
             <header className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <h2 className="text-2xl font-bold flex items-center">
                    <span className="text-primary mr-1">P</span>rojects
                </h2>
                <ul className="flex flex-wrap gap-4 text-sm font-medium">
                    {categories.map(cat => (
                        <li key={cat}>
                            <button 
                                onClick={() => setFilter(cat)}
                                className={`cursor-pointer transition-colors ${
                                    filter === cat 
                                    ? "text-primary relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary after:bottom-[-4px] after:left-0" 
                                    : "text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                                }`}
                            >
                                {cat}
                            </button>
                        </li>
                    ))}
                </ul>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
                {filteredProjects.map((project, index) => (
                    <a key={index} href="#" className="group relative block bg-gray-50 dark:bg-zinc-900/50 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-primary dark:hover:border-primary transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1">
                        <div className="h-48 overflow-hidden relative">
                            <img alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={project.image}/>
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                <FaEye className="text-white text-3xl p-2 bg-primary rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed">{project.desc}</p>
                            <div className="flex flex-wrap gap-2 text-xs font-medium">
                                {project.tech.map(t => (
                                    <span key={t} className="px-2.5 py-1 bg-gray-200 dark:bg-zinc-800 rounded-md text-gray-700 dark:text-gray-300">{t}</span>
                                ))}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};
export default Projects;
