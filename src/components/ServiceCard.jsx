import { motion } from "framer-motion";

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  tech = [],
  linkText = "View Projects",
  link = "#",
}) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="group rounded-2xl border border-white/10 bg-gradient-to-b from-[#141414] to-[#0f0f0f] p-6 shadow-lg hover:border-green-500/40"
    >
      {/* Icon */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 text-green-400">
        <Icon size={22} />
      </div>

      {/* Title */}
      <h3 className="mb-2 text-xl font-semibold text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="mb-4 text-sm leading-relaxed text-gray-400">
        {description}
      </p>

      {/* Tech stack */}
      {tech.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <span
              key={index}
              className="rounded-md bg-white/5 px-2 py-1 text-xs text-gray-300"
            >
              {item}
            </span>
          ))}
        </div>
      )}

      {/* CTA */}
      <a
        href={link}
        className="inline-flex items-center gap-1 text-sm font-medium text-green-400 transition group-hover:gap-2"
      >
        {linkText}
        <span>→</span>
      </a>
    </motion.div>
  );
};

export default ServiceCard;
