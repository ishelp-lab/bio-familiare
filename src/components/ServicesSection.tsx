import { motion } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";
import { Baby, Heart, Flower2, Briefcase, Camera } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Baby, Heart, Flower2, Briefcase, Camera,
};

const ServicesSection = () => {
  return (
    <section className="relative px-6 py-20 overflow-hidden">
      {/* Dark background image */}
      <div className="absolute inset-0">
        <img
          src={siteConfig.backgrounds.studioSofa}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-warm-dark/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-lg mx-auto">
        <motion.h2
          className="text-3xl font-display font-light text-center mb-10 text-warm-cream"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Nossos Serviços
        </motion.h2>
        <div className="grid grid-cols-2 gap-4">
          {siteConfig.services.map((service, i) => {
            const Icon = iconMap[service.icon] || Camera;
            return (
              <motion.div
                key={service.label}
                className={`
                  flex flex-col items-center text-center p-6 rounded-2xl 
                  bg-warm-dark/40 backdrop-blur-sm border border-warm-cream/10
                  ${i === siteConfig.services.length - 1 && siteConfig.services.length % 2 !== 0 ? "col-span-2 max-w-[50%] mx-auto" : ""}
                `}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-warm-cream/10 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-warm-gold" />
                </div>
                <h3 className="font-display text-lg font-semibold text-warm-cream">{service.label}</h3>
                <p className="text-xs text-warm-tan mt-1 font-body">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
