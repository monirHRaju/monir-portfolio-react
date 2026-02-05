import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3, FaJs, FaGitAlt, FaEye } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { MdDeveloperMode, MdAnalytics, MdWork, MdSchool } from "react-icons/md";
import { useRef, useState } from 'react';
import { FaPaperPlane } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import ServiceCard from "../components/ServiceCard";
import MyServices from "../components/MyServices";

const Home = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
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
    {
      title: "ZapShift Courier",
      category: "Applications",
      image: "https://i.ibb.co.com/PGBkqDbV/zap-shift-parcel.png",
      href: "https://zap-shift-courier-209ed.web.app/",
      desc: "ZapShift Courier is a courier service platform where users can easily book and track their parcel delivery.",
      tech: ["React", "Express.js", "Firebase", "MongoDB", "Node.js", "Stripe"]
    },
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

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
      {/* About Section */}
      <section id="about" className="fade-in">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <span className="text-primary mr-1">A</span>bout Me
        </h2>
        
        <div className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed space-y-4 mb-8">
          <p>
            I am Md. Monir Hossain, a Web Developer specializing in Frontend Development. I build full-stack web applications using React, Express.js, Node.js, Next.js, and MongoDB.
          </p>
          <p>
            Experienced in REST APIs, Firebase authentication, and deploying on Vercel, I am committed to delivering exceptional code quality, driving innovation, and providing seamless user experiences. Throughout my career, I have developed and maintained responsive web applications and collaborated with cross-functional teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <span className="text-primary mr-1">M</span>y Services
          </h3>
          <MyServices />
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="fade-in">
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
          <div className="relative pl-8 md:pl-12 border-l border-gray-200 dark:border-gray-700 space-y-10">
            <div className="relative timeline-item">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Instructor</h4>
              <div className="text-sm text-primary mb-2 font-medium">2017 — 2024</div>
              <div className="text-gray-500 dark:text-gray-400 text-sm mb-3">Mtech IT Institute, Tongi, Gazipur</div>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-2 rounded-xl bg-card-light dark:bg-zinc-800 shadow-sm border border-gray-200 dark:border-gray-700">
              <MdSchool className="text-primary text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Education</h3>
          </div>
          <div className="relative pl-8 md:pl-12 border-l border-gray-200 dark:border-gray-700 space-y-10">
            <div className="relative timeline-item">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Master in Accounting</h4>
              <div className="text-sm text-primary mb-2 font-medium">2013 — 2014</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">National University of Bangladesh</div>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Specialization in Accounting. Thesis on "Accounting for Nonprofit Organizations". Graduated with Honors.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-bold mb-6 flex items-center">
            <span className="text-primary mr-1">S</span>kills Overview
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <div className="sci-fi-card bg-gray-50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
              <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-5">Knowledge</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Next", "Node", "Laravel", "Tailwind", "Framer Motion", "Git", "Responsive Design", "SEO", "Firebase", "Stripe", "Vercel", "Netlify", "Context API", "Redux", "JWT", "WordPress"].map(skill => (
                  <span key={skill} className="px-3 sci-fi-card py-1.5 bg-white dark:bg-zinc-800 text-xs font-medium text-gray-600 dark:text-gray-300 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">{skill}</span>
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
          {filteredProjects.map((project, index) => (
            <a key={index} href="#" className="sci-fi-card group relative block rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1">
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
      </section>

      {/* Contact Section */}
      <section id="contact" className="fade-in">
        <header className="mb-10">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="text-primary mr-1">C</span>ontact
          </h2>
        </header>

        <div className="mb-10">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Contact Form</h3>
          
          {status.message && (
            <div className={`mb-4 p-4 rounded-xl ${status.type === 'success' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
              {status.message}
            </div>
          )}

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
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

        <div className="map-container rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 h-[300px] w-full bg-gray-100 dark:bg-zinc-900 flex items-center justify-center">
          <iframe 
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116752.79377461973!2d90.35415392765324!3d23.99120197705146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755da486f3e5e65%3A0x228c2a4df62981a8!2sGazipur!5e0!3m2!1sen!2sbd!4v1714480000000!5m2!1sen!2sbd" 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            style={{border:0, filter: "grayscale(100%) invert(92%) contrast(83%)"}} 
            allowFullScreen="" 
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Home;
