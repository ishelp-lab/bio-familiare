import { motion } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={siteConfig.hero.image}
          alt={siteConfig.hero.headline}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 pb-16 pt-32">
        <div className="max-w-lg mx-auto text-center">
          <motion.img
            src={siteConfig.logo}
            alt={siteConfig.name}
            className="w-48 mx-auto mb-6 drop-shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <motion.p
            className="text-sm tracking-[0.3em] uppercase mb-4 text-warm-cream/90 font-body"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {siteConfig.subtitle}
          </motion.p>
          <motion.h1
            className="text-2xl md:text-2xl font-display font-light leading-relaxed text-warm-cream"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            {siteConfig.hero.headline}
          </motion.h1>
          <motion.p
            className="mt-3 text-sm text-warm-tan font-body"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {siteConfig.hero.subheadline}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
