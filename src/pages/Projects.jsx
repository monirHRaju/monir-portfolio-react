import { useState } from 'react';
import { FaEye } from "react-icons/fa";

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Web Design', 'Applications'];

    const projects = [
        {
            title: "E-Learning Platform",
            category: "Applications",
            image: "https://i.ibb.co.com/4wmkfQW0/elearningapp.png",
            href: "https://elearning-platform-a10.web.app/",
            desc: "eLearning is a digital application that provides a virtual space for accessing, managing, and delivering educational content and training programs anytime, anywhere.",
            tech: ["React", "Node.js", "MongoDB", "Express.js"]
        },
        
        {
            title: "Hero App",
            category: "Web Design",
            image: "https://i.ibb.co.com/Y4d92TYC/image.png",
            href: "https://a08-hero-apps.netlify.app/",
            desc: "At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.",
            tech: ["React", "Tailwind CSS", "daisyUI"]
        },
        
        {
            title: "eTutor App",
            category: "Applications",
            image: "https://i.ibb.co.com/8D5g8GSF/image.png",
            href: "https://etutorbd-tutor-app.web.app/",
            desc: "eTutorBD is a platform where parents, students and tutors can easily connect with each other.",
            tech: ["React", "Firebase", "MongoDB", "Express.js", "Node.js", "Stripe"]
        },

        
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
                            <a href={project.href} target="_blank" className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                <FaEye className="text-white text-3xl p-2 bg-primary rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                            </a>
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
