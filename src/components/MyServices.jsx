import { FaCode, FaServer, FaMobileAlt, FaRobot } from "react-icons/fa";
import ServiceCard from "./ServiceCard";

const MyServices = () => {
  const handleProjectsClick = () => {
    const element = document.getElementById("projects");
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <ServiceCard
        icon={FaCode}
        title="Frontend Development"
        description="Building responsive, fast, and accessible user interfaces with modern frameworks and animations."
        tech={["React", "Next.js", "Tailwind CSS", "Framer Motion"]}
        link="#"
        onLinkClick={handleProjectsClick}
        number="01"
        accentColor="from-green-500/20 to-green-500/5"
        iconColor="text-green-400"
        iconBg="bg-green-500/15"
      />

      <ServiceCard
        icon={FaServer}
        title="Backend Development"
        description="Designing secure REST APIs, authentication systems, and scalable server-side architectures."
        tech={["Node.js", "Express", "NestJS", "MongoDB"]}
        link="#"
        onLinkClick={handleProjectsClick}
        number="02"
        accentColor="from-blue-500/20 to-blue-500/5"
        iconColor="text-blue-400"
        iconBg="bg-blue-500/15"
      />

      <ServiceCard
        icon={FaMobileAlt}
        title="Full-Stack Applications"
        description="End-to-end MERN stack solutions from database design to deployment with seamless UX."
        tech={["React", "Node", "MongoDB", "JWT", "Firebase"]}
        link="#"
        onLinkClick={handleProjectsClick}
        number="03"
        accentColor="from-purple-500/20 to-purple-500/5"
        iconColor="text-purple-400"
        iconBg="bg-purple-500/15"
      />

      <ServiceCard
        icon={FaRobot}
        title="AI-Powered Development"
        description="Accelerating development and solving complex problems using cutting-edge AI developer tools."
        tech={["Claude", "Cursor", "Antigravity"]}
        link="#"
        onLinkClick={handleProjectsClick}
        number="04"
        accentColor="from-orange-500/20 to-orange-500/5"
        iconColor="text-orange-400"
        iconBg="bg-orange-500/15"
      />
    </div>
  );
};

export default MyServices;
