import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3, FaJs, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { MdDeveloperMode, MdAnalytics } from "react-icons/md";
import ServiceCard from "../components/ServiceCard";
import MyServices from "../components/MyServices";

const About = () => {
  return (
    <div className="fade-in">
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <span className="text-primary mr-1">A</span>bout Me
        </h2>
        
        {/* Introduction Text - Full Width */}
        <div className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed space-y-4 mb-8">
          <p>
            I am Md. Monir Hossain, a Web Developer specializing in Frontend Development. I build full-stack web applications using React, Express.js, Node.js, Next.js, and MongoDB.
          </p>
          <p>
            Experienced in REST APIs, Firebase authentication, and deploying on Vercel, I am committed to delivering exceptional code quality, driving innovation, and providing seamless user experiences. Throughout my career, I have developed and maintained responsive web applications and collaborated with cross-functional teams.
          </p>
        </div>

        {/* Personal Info Grid - Full Width */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Location */}
          <div className="sci-fi-card p-4 rounded-xl shadow-lg transition-colors">
            <span className="block px-2 py-1 bg-primary/20 text-primary text-xs font-semibold rounded w-fit mb-2">
              Location
            </span>
            <span className="text-gray-700 dark:text-gray-300 font-medium text-sm block">
              Gazipur, Dhaka, Bangladesh
            </span>
          </div>

          {/* Languages */}
          <div className="sci-fi-card p-4 rounded-xl shadow-lg transition-colors">
            <span className="block px-2 py-1 bg-primary/20 text-primary text-xs font-semibold rounded w-fit mb-2">
              Languages
            </span>
            <span className="text-gray-700 dark:text-gray-300 font-medium text-sm block">
              English, Bengali
            </span>
          </div>

          {/* Skills (Tech Stack Icons) */}
          <div className="sci-fi-card p-4 rounded-xl shadow-lg transition-colors">
             <span className="block px-2 py-1 bg-primary/20 text-primary text-xs font-semibold rounded w-fit mb-3">
              Skills
            </span>
            <div className="flex flex-wrap gap-2">
              <div className="w-8 h-8 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-primary border border-gray-200 dark:border-gray-700 hover:border-primary transition-colors">
                <FaHtml5 className="text-sm" />
              </div>
              <div className="w-8 h-8 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-primary border border-gray-200 dark:border-gray-700 hover:border-primary transition-colors">
                <FaCss3 className="text-sm" />
              </div>
              <div className="w-8 h-8 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-primary border border-gray-200 dark:border-gray-700 hover:border-primary transition-colors">
                <FaJs className="text-sm" />
              </div>
              <div className="w-8 h-8 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-primary border border-gray-200 dark:border-gray-700 hover:border-primary transition-colors">
                <FaReact className="text-sm" />
              </div>
              <div className="w-8 h-8 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-primary border border-gray-200 dark:border-gray-700 hover:border-primary transition-colors">
                <SiNextdotjs className="text-sm" />
              </div>
              <div className="w-8 h-8 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-primary border border-gray-200 dark:border-gray-700 hover:border-primary transition-colors">
                <FaNodeJs className="text-sm" />
              </div>
               <div className="w-8 h-8 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-primary border border-gray-200 dark:border-gray-700 hover:border-primary transition-colors">
                <FaDatabase className="text-sm" />
              </div>
              <div className="w-8 h-8 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-primary border border-gray-200 dark:border-gray-700 hover:border-primary transition-colors">
                <FaGitAlt className="text-sm" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <span className="text-primary mr-1">M</span>y Services
        </h2>
        <div className="">
          {/* <div className="bg-gray-50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-primary dark:hover:border-primary transition-all duration-300 group">
            <div className="mb-4">
              <MdDeveloperMode className="text-4xl text-primary group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              App Development
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              End-to-end organization, ui/ux design, optimization, and
              maintenance of your mobile app project.
            </p>
          </div>
           */}
           <MyServices />
        </div>
      </section>
    </div>
  );
};
export default About;
