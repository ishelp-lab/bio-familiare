import { motion } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";
import { MapPin } from "lucide-react";

const SpaceSection = () => {
  const { space } = siteConfig;

  return (
    <section className="px-6 py-16">
      <div className="max-w-lg mx-auto">
        <motion.h2
          className="text-3xl font-display font-light text-center mb-4 text-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {space.title}
        </motion.h2>
        <motion.p
          className="text-sm text-muted-foreground text-center mb-8 font-body leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {space.description}
        </motion.p>

        <div className="grid grid-cols-2 gap-3 mb-6">
          {space.images.map((img, i) => (
            <motion.div
              key={i}
              className="overflow-hidden rounded-2xl shadow-soft aspect-square"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <img
                src={img}
                alt={`Espaço ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex items-center justify-center gap-2 text-sm text-muted-foreground font-body"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <MapPin className="w-4 h-4 text-warm-gold" />
          <span>{space.address}</span>
        </motion.div>
      </div>
    </section>
  );
};

export default SpaceSection;
