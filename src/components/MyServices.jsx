import { FaCode, FaServer, FaMobileAlt } from "react-icons/fa";
import ServiceCard from "./ServiceCard";


const MyServices = () => {
  const handleProjectsClick = () => {
    const mainContent = document.getElementById("main-content-scroll");
    const element = mainContent?.querySelector("#projects");
    if (element && mainContent) {
      const offsetTop = element.offsetTop - 40;
      mainContent.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ServiceCard
          icon={FaCode}
          title="Frontend Development"
          description="Building responsive, fast, and accessible user interfaces with modern frameworks."
          tech={["React", "Tailwind CSS", "Framer Motion"]}
          link="#"
          onLinkClick={handleProjectsClick}
        />

        <ServiceCard
          icon={FaServer}
          title="Backend Development"
          description="Designing secure REST APIs, authentication systems, and scalable databases."
          tech={["Node.js", "Express", "MongoDB"]}
          link="#"
          onLinkClick={handleProjectsClick}
        />

        <ServiceCard
          icon={FaMobileAlt}
          title="Full-Stack Applications"
          description="End-to-end MERN stack solutions from idea to deployment."
          tech={["React", "Node", "MongoDB", "JWT"]}
          link="#"
          onLinkClick={handleProjectsClick}
        />
      </div>

  );
};

export default MyServices;
