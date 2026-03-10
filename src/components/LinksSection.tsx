import { motion } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";
import {
  Baby, Heart, Flower2, Briefcase, Camera,
  MessageCircle, Images, Instagram, MapPin
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Baby, Heart, Flower2, Briefcase, Camera,
  MessageCircle, Images, Instagram, MapPin,
};

const LinkButton = ({ link, index }: { link: typeof siteConfig.links[0]; index: number }) => {
  const Icon = iconMap[link.icon] || MessageCircle;
  const isPrimary = link.variant === "primary";

  return (
    <motion.a
      href={link.url}
      target={link.url.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className={`
        group flex items-center gap-4 w-full px-6 py-4 rounded-2xl transition-all duration-300
        ${isPrimary
          ? "gradient-gold text-primary-foreground shadow-elevated hover:shadow-glow"
          : "bg-card border border-border text-foreground hover:bg-secondary shadow-soft hover:shadow-elevated"
        }
      `}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className={`
        flex items-center justify-center w-10 h-10 rounded-xl transition-colors
        ${isPrimary ? "bg-primary-foreground/15" : "bg-secondary group-hover:bg-accent/20"}
      `}>
        <Icon className="w-5 h-5" />
      </span>
      <span className="font-display text-lg font-medium tracking-wide">{link.label}</span>
      <svg
        className="w-4 h-4 ml-auto opacity-40 group-hover:opacity-70 transition-opacity"
        fill="none" stroke="currentColor" viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </motion.a>
  );
};

const LinksSection = () => {
  return (
    <section className="px-6 py-12">
      <div className="max-w-md mx-auto space-y-3">
        {siteConfig.links.map((link, i) => (
          <LinkButton key={link.label} link={link} index={i} />
        ))}
      </div>
    </section>
  );
};

export default LinksSection;
