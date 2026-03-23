import { motion } from "framer-motion";

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  tech = [],
  linkText = "View Projects",
  link = "#",
  onLinkClick = null,
  number = "01",
  accentColor = "from-green-500/20 to-green-500/5",
  iconColor = "text-green-400",
  iconBg = "bg-green-500/15",
}) => {
  const handleClick = (e) => {
    if (onLinkClick) {
      e.preventDefault();
      onLinkClick();
    }
  };

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className={`sci-fi-card group relative rounded-2xl p-6 shadow-lg overflow-hidden bg-gradient-to-br ${accentColor} border border-white/10 dark:border-gray-700/50`}
    >
      {/* Decorative number */}
      <span className="absolute top-4 right-5 text-5xl font-black text-white/5 dark:text-white/5 select-none pointer-events-none">
        {number}
      </span>

      {/* Icon */}
      <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${iconBg} ${iconColor} ring-1 ring-current/20`}>
        <Icon size={26} />
      </div>

      {/* Title */}
      <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        {description}
      </p>

      {/* Tech stack */}
      {tech.length > 0 && (
        <div className="mb-5 flex flex-wrap gap-1.5">
          {tech.map((item, index) => (
            <span
              key={index}
              className="rounded-full bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-gray-700 px-2.5 py-0.5 text-xs font-medium text-gray-700 dark:text-gray-300"
            >
              {item}
            </span>
          ))}
        </div>
      )}

      {/* CTA */}
      <a
        href={link}
        onClick={handleClick}
        className={`inline-flex items-center gap-1.5 text-sm font-semibold ${iconColor} transition-all group-hover:gap-3 cursor-pointer`}
      >
        {linkText}
        <span className="text-base">→</span>
      </a>
    </motion.div>
  );
};

export default ServiceCard;
