import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3, FaJs, FaGitAlt, FaEye, FaPaperPlane, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiRedux, SiMongodb, SiNestjs, SiExpress, SiFirebase, SiTailwindcss, SiVercel, SiNetlify, SiFramer, SiGithub } from "react-icons/si";
import { MdSchool, MdAutoAwesome } from "react-icons/md";
import { useRef, useState } from 'react';
import { AnimatePresence, motion as m } from "framer-motion";
import emailjs from '@emailjs/browser';
import MyServices from "../components/MyServices";

const Home = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Full Stack', 'React.js', 'Next.js', 'SaaS', 'AI/ML'];

  const projects = [
    
    {
      title: "Deshio e-Commerce Application",
      type: "Full Stack Application",
      category: ["Next.js", "Full Stack"],
      primaryTech: "Next.js",
      image: "https://i.ibb.co.com/nMGV3sgw/deshio-ecom-sc.png",
      href: "https://deshio-ecom-app.vercel.app/",
      githubFrontend: "https://github.com/monirHRaju/deshio-ecom-next-ts-express-client.git",
      githubBackend: "https://github.com/monirHRaju/deshio-ecommerce-server.git",
      desc: "Deshio is a full-featured e-commerce platform built with Next.js and TypeScript — offering product browsing, cart management, secure checkout, and an admin dashboard.",
      tech: ["Next.js", "Express.js", "TypeScript", "MongoDB", "Node.js"],
      features: [
        "Product catalog with search and category filtering",
        "Shopping cart and wishlist management",
        "Secure checkout with order tracking",
        "Admin dashboard for product and order management",
        "TypeScript for end-to-end type safety",
        "Server-side rendering for SEO performance",
      ],
    },
    {
      title: "School Management App",
      type: "Full Stack Application",
      category: ["Next.js", "Full Stack", "SaaS"],
      primaryTech: "Next.js",
      image: "https://i.ibb.co.com/Jw6F1vmC/school-erp.png",
      href: "https://amaar-school-app.vercel.app/",
      githubFrontend: "https://github.com/monirHRaju/eduCore-school-SaaS-client.git",
      githubBackend: "https://github.com/monirHRaju/school-erp-backend.git",
      desc: "The all-in-one platform for schools — manage students, collect fees, track attendance, monitor finances, and generate reports from a single powerful dashboard.",
      tech: ["Next.js", "TypeScript", "Express.js", "MongoDB", "Node.js"],
      features: [
        "Student enrollment and profile management",
        "Fee collection with payment tracking",
        "Attendance monitoring with daily reports",
        "Financial dashboard with analytics",
        "Role-based access (admin, teacher, student, parent)",
        "Report generation and export",
      ],
    },
    {
      title: "E-Learning Platform",
      type: "Full Stack Application",
      category: ["React.js", "Full Stack"],
      primaryTech: "React",
      image: "https://i.ibb.co.com/4wmkfQW0/elearningapp.png",
      href: "https://elearning-platform-a10.web.app/",
      githubFrontend: "https://github.com/monirHRaju/elearning-platform-client",
      githubBackend: "https://github.com/monirHRaju/elearning-platform-server",
      desc: "eLearning is a digital application that provides a virtual space for accessing, managing, and delivering educational content and training programs anytime, anywhere.",
      tech: ["React", "Node.js", "MongoDB", "Express.js"],
      features: [
        "Course catalog with category filtering",
        "User authentication and role-based access",
        "Instructor dashboard for content management",
        "Student progress tracking",
        "Responsive UI with Tailwind CSS",
        "REST API with Express.js and MongoDB",
      ],
    },
    {
      title: "Hero App",
      type: "React Application",
      category: "React.js",
      primaryTech: "React",
      image: "https://i.ibb.co.com/Y4d92TYC/image.png",
      href: "https://a08-hero-apps.netlify.app/",
      githubFrontend: "https://github.com/monirHRaju/hero-app-client",
      githubBackend: null,
      desc: "At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.",
      tech: ["React", "Tailwind CSS", "daisyUI"],
      features: [
        "Modern landing page with hero sections",
        "Responsive design across all devices",
        "Smooth animations and transitions",
        "Interactive UI components with daisyUI",
        "Clean and minimal design system",
      ],
    },
    {
      title: "eTutor App",
      type: "Full Stack Application",
      category: ["React.js", "Full Stack"],
      primaryTech: "React",
      image: "https://i.ibb.co.com/8D5g8GSF/image.png",
      href: "https://etutorbd-tutor-app.web.app/",
      githubFrontend: "https://github.com/monirHRaju/etutor-client",
      githubBackend: "https://github.com/monirHRaju/etutor-server",
      desc: "eTutorBD is a platform where parents, students and tutors can easily connect with each other.",
      tech: ["React", "Firebase", "MongoDB", "Express.js", "Node.js", "Stripe"],
      features: [
        "Tutor discovery with search and filter",
        "Firebase authentication with protected routes",
        "Stripe payment integration for booking sessions",
        "Real-time session management",
        "Multi-role dashboard (student, tutor, admin)",
        "Fully responsive with Tailwind CSS",
      ],
    }
  ];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project =>
        Array.isArray(project.category)
          ? project.category.includes(filter)
          : project.category === filter
      );

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setLoading(false);
          setStatus({ type: 'success', message: 'Message sent successfully!' });
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
          console.error('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="space-y-20">
      {/* Video Intro Section */}
      <section id="home" className="fade-in">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <span className="text-primary">V</span>ideo Intro
        </h2>
        <div className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-xl bg-black">
          {/* Decorative top bar */}
          <div className="flex items-center gap-1.5 px-4 py-2.5 bg-gray-100 dark:bg-zinc-800 border-b border-gray-200 dark:border-gray-700">
            <span className="w-3 h-3 rounded-full bg-red-400"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-400"></span>
            <span className="ml-3 text-xs text-gray-400 font-mono truncate">intro.mp4</span>
          </div>
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://drive.google.com/file/d/1RSsOoZUC2J_Xznkv21KdSfvM5esBNnQT/preview"
              title="Video Introduction"
              allow="autoplay"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="fade-in">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <span className="text-primary">A</span>bout Me
        </h2>
        
        <div className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed space-y-4 mb-8">
          <p>
            I am Md. Monir Hossain, a MERN Stack Developer. I build full-stack web applications using React, Express.js, Node.js, Next.js, and MongoDB.
          </p>
          <p>
            Experienced in REST APIs, Firebase authentication, and deploying on Vercel, I am committed to delivering exceptional code quality, driving innovation, and providing seamless user experiences. Throughout my career, I have developed and maintained responsive web applications and collaborated with cross-functional teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="sci-fi-card p-4 rounded-xl shadow-lg transition-colors">
            <span className="block px-2 py-1 bg-primary/20 text-primary text-xs font-semibold rounded w-fit mb-2">
              Location
            </span>
            <span className="text-gray-700 dark:text-gray-300 font-medium text-sm block">
              Gazipur, Dhaka, Bangladesh
            </span>
          </div>

          <div className="sci-fi-card p-4 rounded-xl shadow-lg transition-colors">
            <span className="block px-2 py-1 bg-primary/20 text-primary text-xs font-semibold rounded w-fit mb-2">
              Languages
            </span>
            <span className="text-gray-700 dark:text-gray-300 font-medium text-sm block">
              English, Bengali
            </span>
          </div>
        </div>

        {/* Tech Icons Ticker */}
        <div className="mt-10 relative overflow-hidden rounded-2xl py-4">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-card-light dark:from-card-dark to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-card-light dark:from-card-dark to-transparent z-10 pointer-events-none"></div>
          <style>{`
            @keyframes ticker-scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .ticker-track { animation: ticker-scroll 50s linear infinite; }
            .ticker-track:hover { animation-play-state: paused; }
          `}</style>
          <div className="ticker-track flex gap-6 w-max">
            {[
              { icon: FaHtml5, name: "HTML5", color: "text-orange-500" },
              { icon: FaCss3, name: "CSS3", color: "text-blue-500" },
              { icon: FaJs, name: "JavaScript", color: "text-yellow-400" },
              { icon: SiTypescript, name: "TypeScript", color: "text-blue-600" },
              { icon: FaReact, name: "React", color: "text-cyan-400" },
              { icon: SiNextdotjs, name: "Next.js", color: "text-gray-800 dark:text-white" },
              { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-500" },
              { icon: SiRedux, name: "Redux", color: "text-purple-500" },
              { icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
              { icon: SiExpress, name: "Express", color: "text-gray-600 dark:text-gray-300" },
              { icon: SiNestjs, name: "NestJS", color: "text-red-500" },
              { icon: SiMongodb, name: "MongoDB", color: "text-green-600" },
              { icon: FaDatabase, name: "Mongoose", color: "text-green-700" },
              { icon: SiFirebase, name: "Firebase", color: "text-amber-500" },
              { icon: SiFramer, name: "Framer Motion", color: "text-pink-500" },
              { icon: FaGitAlt, name: "Git", color: "text-orange-600" },
              { icon: SiVercel, name: "Vercel", color: "text-gray-800 dark:text-white" },
              { icon: SiNetlify, name: "Netlify", color: "text-teal-500" },
              // duplicate for seamless loop
              { icon: FaHtml5, name: "HTML5", color: "text-orange-500" },
              { icon: FaCss3, name: "CSS3", color: "text-blue-500" },
              { icon: FaJs, name: "JavaScript", color: "text-yellow-400" },
              { icon: SiTypescript, name: "TypeScript", color: "text-blue-600" },
              { icon: FaReact, name: "React", color: "text-cyan-400" },
              { icon: SiNextdotjs, name: "Next.js", color: "text-gray-800 dark:text-white" },
              { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-500" },
              { icon: SiRedux, name: "Redux", color: "text-purple-500" },
              { icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
              { icon: SiExpress, name: "Express", color: "text-gray-600 dark:text-gray-300" },
              { icon: SiNestjs, name: "NestJS", color: "text-red-500" },
              { icon: SiMongodb, name: "MongoDB", color: "text-green-600" },
              { icon: FaDatabase, name: "Mongoose", color: "text-green-700" },
              { icon: SiFirebase, name: "Firebase", color: "text-amber-500" },
              { icon: SiFramer, name: "Framer Motion", color: "text-pink-500" },
              { icon: FaGitAlt, name: "Git", color: "text-orange-600" },
              { icon: SiVercel, name: "Vercel", color: "text-gray-800 dark:text-white" },
              { icon: SiNetlify, name: "Netlify", color: "text-teal-500" },
            ].map(({ icon: Icon, name, color }, i) => (
              <div key={i} className="flex flex-col items-center gap-1.5 min-w-[64px]">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-sm">
                  <Icon className={`text-2xl ${color}`} />
                </div>
                {/* <span className="text-[10px] font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap">{name}</span> */}
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack by Category */}
        <div className="mt-10">
          <h3 className="text-xl font-bold mb-6 flex items-center">
            <span className="text-primary">T</span>ech Stack
          </h3>
          <div className="space-y-6">
            {[
              {
                label: "Frontend Development",
                color: "text-green-500",
                items: [
                  { icon: FaHtml5, name: "HTML5", color: "text-orange-500" },
                  { icon: FaCss3, name: "CSS3", color: "text-blue-500" },
                  { icon: FaJs, name: "JavaScript", color: "text-yellow-400" },
                  { icon: SiTypescript, name: "TypeScript", color: "text-blue-600" },
                  { icon: FaReact, name: "React", color: "text-cyan-400" },
                  { icon: SiNextdotjs, name: "Next.js", color: "text-gray-800 dark:text-white" },
                  { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-500" },
                  { icon: SiRedux, name: "Redux", color: "text-purple-500" },
                  { icon: SiFramer, name: "Framer Motion", color: "text-pink-500" },
                ],
              },
              {
                label: "Backend Development",
                color: "text-blue-500",
                items: [
                  { icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
                  { icon: SiExpress, name: "Express.js", color: "text-gray-600 dark:text-gray-300" },
                  { icon: SiNestjs, name: "NestJS", color: "text-red-500" },
                  { icon: SiMongodb, name: "MongoDB", color: "text-green-600" },
                  { icon: FaDatabase, name: "Mongoose", color: "text-green-700" },
                  { icon: SiFirebase, name: "Firebase", color: "text-amber-500" },
                ],
              },
              {
                label: "Version Control & Deployment",
                color: "text-orange-500",
                items: [
                  { icon: FaGitAlt, name: "Git", color: "text-orange-600" },
                  { icon: SiGithub, name: "GitHub", color: "text-gray-800 dark:text-white" },
                  { icon: SiVercel, name: "Vercel", color: "text-gray-800 dark:text-white" },
                  { icon: SiNetlify, name: "Netlify", color: "text-teal-500" },
                ],
              },
              {
                label: "AI & Developer Tools",
                color: "text-violet-500",
                items: [
                  { icon: MdAutoAwesome, name: "Claude", color: "text-orange-400" },
                  { icon: MdAutoAwesome, name: "Cursor", color: "text-blue-500" },
                  { icon: MdAutoAwesome, name: "Antigravity", color: "text-indigo-500" },
                  { icon: MdAutoAwesome, name: "OpenClaw", color: "text-green-500" },
                  { icon: MdAutoAwesome, name: "Loveable", color: "text-pink-500" },
                ],
              },
            ].map(({ label, color, items }) => (
              <div key={label} className="sci-fi-card rounded-2xl p-5 border border-gray-200 dark:border-gray-800">
                <h4 className={`text-xs font-bold uppercase tracking-widest mb-4 ${color}`}>{label}</h4>
                <div className="flex flex-wrap gap-3">
                  {items.map(({ icon: Icon, name, color: ic }) => (
                    <div key={name} className="flex flex-col items-center gap-3 w-18">
                      <div className="w-16 h-16 rounded-xl bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:scale-110 transition-transform">
                        <Icon className={`text-xl ${ic}`} />
                      </div>
                      <span className="text-[16px] text-center font-medium text-gray-500 dark:text-gray-400 leading-tight">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <span className="text-primary">M</span>y Services
          </h3>
          <MyServices />
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="fade-in">
        <h2 className="text-2xl font-bold mb-8 flex items-center">
          <span className="text-primary">R</span>esume
        </h2>
        {/* Experience section hidden (fresher) */}

        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-2 rounded-xl bg-card-light dark:bg-zinc-800 shadow-sm border border-gray-200 dark:border-gray-700">
              <MdSchool className="text-primary text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Education</h3>
          </div>
          <div className="relative pl-8 md:pl-12 border-l border-gray-200 dark:border-gray-700 space-y-10">
            <div className="relative timeline-item">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Master Degree</h4>
              <div className="text-sm text-primary mb-2 font-medium">2014</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">National University of Bangladesh</div>
              
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-bold mb-6 flex items-center">
            <span className="text-primary">S</span>kills Overview
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="sci-fi-card bg-gray-50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
              <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-5">Coding</h3>
              <div className="space-y-4">
                {[
                  { label: "JavaScript / React", width: "80%" },
                  { label: "TypeScript", width: "65%" },
                  { label: "Next.js / App Router", width: "70%" },
                  { label: "Node.js / Express", width: "75%" },
                  { label: "Redux", width: "60%" },
                  { label: "Mongoose / MongoDB", width: "70%" },
                  { label: "NestJS", width: "45%" },
                ].map(({ label, width }) => (
                  <div key={label}>
                    <div className="mb-1">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{label}</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                      <div className="bg-primary h-1.5 rounded-full" style={{width}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="sci-fi-card bg-gray-50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
              <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-5">Knowledge</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Next", "Node", "Laravel", "Tailwind", "Framer Motion", "Git", "Responsive Design", "SEO", "Firebase", "Stripe", "Vercel", "Netlify", "Context API", "Redux", "JWT", "WordPress"].map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-white dark:bg-zinc-800 text-xs font-medium text-gray-600 dark:text-gray-300 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="fade-in">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <h2 className="text-2xl font-bold flex items-center">
            <span className="text-primary">P</span>rojects
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="sci-fi-card group relative block rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1 cursor-pointer"
            >
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
            </div>
          ))}
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <m.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={e => e.stopPropagation()}
              className="bg-card-light dark:bg-card-dark rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between p-6 pb-0">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{selectedProject.title}</h2>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full border border-primary/30">{selectedProject.primaryTech}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{selectedProject.type}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="ml-4 flex-shrink-0 w-9 h-9 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-500 flex items-center justify-center transition-colors text-lg font-bold"
                >
                  ×
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 px-6 pt-4 pb-0">
                <a
                  href={selectedProject.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors"
                >
                  <FaEye /> Live Demo
                </a>
                {selectedProject.githubFrontend && (
                  <a
                    href={selectedProject.githubFrontend}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 text-gray-800 dark:text-gray-200 text-sm font-semibold px-4 py-2 rounded-xl transition-colors border border-gray-200 dark:border-gray-700"
                  >
                    <FaGithub /> Frontend
                  </a>
                )}
                {selectedProject.githubBackend && (
                  <a
                    href={selectedProject.githubBackend}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 text-gray-800 dark:text-gray-200 text-sm font-semibold px-4 py-2 rounded-xl transition-colors border border-gray-200 dark:border-gray-700"
                  >
                    <FaGithub /> Backend
                  </a>
                )}
              </div>

              {/* Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                {/* Screenshot */}
                <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg">
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                </div>

                {/* Details */}
                <div className="space-y-5">
                  <div>
                    <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 border-l-4 border-primary pl-3">About the Project</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{selectedProject.desc}</p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3 border-l-4 border-primary pl-3">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3 border-l-4 border-primary pl-3">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map(t => (
                        <span key={t} className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>

      {/* Contact Section */}
      <section id="contact" className="fade-in">
        <header className="mb-10">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="text-primary">C</span>ontact
          </h2>
        </header>

        <div className="mb-10">
          {status.message && (
            <div className={`mb-6 p-4 rounded-xl ${status.type === 'success' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
              {status.message}
            </div>
          )}

          <form ref={form} onSubmit={sendEmail} onChange={() => status.message && setStatus({ type: '', message: '' })} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                required
                className="w-full bg-gray-50 dark:bg-zinc-900/50 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 outline-none focus:border-primary dark:focus:border-primary transition-colors text-gray-700 dark:text-gray-300"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email Address"
                required
                className="w-full bg-gray-50 dark:bg-zinc-900/50 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 outline-none focus:border-primary dark:focus:border-primary transition-colors text-gray-700 dark:text-gray-300"
              />
            </div>
            <textarea 
              name="message"
              placeholder="Your Message" 
              rows="4" 
              required
              className="w-full bg-gray-50 dark:bg-zinc-900/50 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 outline-none focus:border-primary dark:focus:border-primary transition-colors text-gray-700 dark:text-gray-300 resize-none"
            ></textarea>
            
            <div className="flex justify-end">
              <button 
                type="submit"
                disabled={loading}
                className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transform active:scale-95 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <FaPaperPlane className={`text-xl ${loading ? 'animate-pulse' : ''}`} />
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>

      </section>
    </div>
  );
};

export default Home;
