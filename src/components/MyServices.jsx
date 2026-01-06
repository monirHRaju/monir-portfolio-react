import { FaCode, FaServer, FaMobileAlt } from "react-icons/fa";
import ServiceCard from "./ServiceCard";


const MyServices = () => {
  return (
    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ServiceCard
          icon={FaCode}
          title="Frontend Development"
          description="Building responsive, fast, and accessible user interfaces with modern frameworks."
          tech={["React", "Tailwind CSS", "Framer Motion"]}
          link="/projects"
        />

        <ServiceCard
          icon={FaServer}
          title="Backend Development"
          description="Designing secure REST APIs, authentication systems, and scalable databases."
          tech={["Node.js", "Express", "MongoDB"]}
          link="/projects"
        />

        <ServiceCard
          icon={FaMobileAlt}
          title="Full-Stack Applications"
          description="End-to-end MERN stack solutions from idea to deployment."
          tech={["React", "Node", "MongoDB", "JWT"]}
          link="/projects"
        />
      </div>

  );
};

export default MyServices;
