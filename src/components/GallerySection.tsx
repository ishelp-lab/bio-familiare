import { motion } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";

const GallerySection = () => {
  return (
    <section id="portfolio" className="px-6 py-16 bg-card">
      <div className="max-w-lg mx-auto">
        <motion.h2
          className="text-3xl font-display font-light text-center mb-8 text-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {siteConfig.gallery.title}
        </motion.h2>
        <div className="grid grid-cols-2 gap-3">
          {siteConfig.gallery.images.map((img, i) => (
            <motion.div
              key={i}
              className={`overflow-hidden rounded-2xl shadow-soft ${i === 0 ? "row-span-2" : ""}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <img
                src={img}
                alt={`Portfólio ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
