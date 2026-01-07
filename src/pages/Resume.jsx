import { MdWork, MdSchool } from "react-icons/md";

const Resume = () => {
    return (
        <div className="fade-in">
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-8 flex items-center">
                    <span className="text-primary mr-1">R</span>esume
                </h2>
                <div className="mb-10">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-2 rounded-xl bg-card-light dark:bg-zinc-800 shadow-sm border border-gray-200 dark:border-gray-700">
                            <MdWork className="text-primary text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Experience</h3>
                    </div>
                    {/* Experience Timeline */}
                    <div className="relative pl-8 md:pl-12 border-l border-gray-200 dark:border-gray-700 space-y-10">
                        {/* Timeline Item 1 */}
                        <div className="relative timeline-item">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Instructor</h4>
                            <div className="text-sm text-primary mb-2 font-medium">2017 — 2024</div>
                            <div className="text-gray-500 dark:text-gray-400 text-sm mb-3">Mtech IT Institute, Tongi, Gazipur</div>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                
                            </p>
                        </div>
                        {/* Timeline Item 2 */}
                        {/* <div className="relative timeline-item">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Data Scientist</h4>
                            <div className="text-sm text-primary mb-2 font-medium">2018 — 2021</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">Amazon Web Services</div>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                Developed machine learning models for predictive maintenance of server infrastructure. Analyzed petabytes of log data using Spark and Python to identify performance bottlenecks. Created dashboards for real-time monitoring of system health.
                            </p>
                        </div> */}
                        {/* Timeline Item 3 */}
                        {/* <div className="relative timeline-item">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Junior Web Developer</h4>
                            <div className="text-sm text-primary mb-2 font-medium">2016 — 2018</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">Creative Agency NY</div>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                Built responsive websites and web applications for various clients using React and Node.js. Optimized frontend performance and ensured cross-browser compatibility.
                            </p>
                        </div> */}
                    </div>
                </div>

                <div>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-2 rounded-xl bg-card-light dark:bg-zinc-800 shadow-sm border border-gray-200 dark:border-gray-700">
                            <MdSchool className="text-primary text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Education</h3>
                    </div>
                    {/* Education Timeline */}
                    <div className="relative pl-8 md:pl-12 border-l border-gray-200 dark:border-gray-700 space-y-10">
                         {/* Timeline Item 1 */}
                        <div className="relative timeline-item">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Master in Accounting</h4>
                            <div className="text-sm text-primary mb-2 font-medium">2013 — 2014</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">National University of Bangladesh</div>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                Specialization in Accounting. Thesis on "Accounting for Nonprofit Organizations". Graduated with Honors.
                            </p>
                        </div>
                         {/* Timeline Item 2 */}
                        {/* <div className="relative timeline-item">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Bachelor in Computer Science</h4>
                            <div className="text-sm text-primary mb-2 font-medium">2010 — 2014</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">University of California, Berkeley</div>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                Core curriculum in algorithms, data structures, and operating systems. Active member of the coding club and hackathon organizer.
                            </p>
                        </div> */}
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-xl font-bold mb-6 flex items-center">
                    <span className="text-primary mr-1">S</span>kills Overview
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Coding Skills */}
                    <div className="sci-fi-card bg-gray-50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
                        <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-5">Coding</h3>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">JavaScript / React</span>
                                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">60%</span>
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                                    <div className="bg-primary h-1.5 rounded-full" style={{width: "60%"}}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">JavaScript / Next</span>
                                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">30%</span>
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                                    <div className="bg-primary h-1.5 rounded-full" style={{width: "30%"}}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">PHP</span>
                                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">10%</span>
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                                    <div className="bg-primary h-1.5 rounded-full" style={{width: "10%"}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Knowledge Skills */}
                    <div className="sci-fi-card bg-gray-50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
                        <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-5">Knowledge</h3>
                        <div className="flex flex-wrap gap-2">
                             {["React", "Next", "Node", "Laravel", "Tailwind", "Framer Motion", "Git", "Responsive Design", "SEO", "Firebase", "Stripe", "Vercel", "Netlify", "Context API", "Redux", "JWT", "WordPress"].map(skill => (
                                <span key={skill} className="px-3 sci-fi-card py-1.5 bg-white dark:bg-zinc-800 text-xs font-medium text-gray-600 dark:text-gray-300 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">{skill}</span>
                             ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Resume;
