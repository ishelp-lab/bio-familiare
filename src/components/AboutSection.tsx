import { motion } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";

const AboutSection = () => {
  const { about } = siteConfig;

  return (
    <section className="px-6 py-16">
      <div className="max-w-md mx-auto">
        {/* Photo + Title */}
        <div className="flex flex-col items-center text-center mb-8">
          <motion.div
            className="w-36 h-36 rounded-full overflow-hidden shadow-elevated mb-5 ring-4 ring-warm-cream"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <img
              src={about.photo}
              alt={about.name}
              className="w-full h-full object-cover object-top"
            />
          </motion.div>
          <motion.p
            className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-2 font-body"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {about.title}
          </motion.p>
          <motion.h2
            className="font-script text-4xl text-warm-brown"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {about.name}
          </motion.h2>
        </div>

        {/* Bio */}
        <motion.p
          className="text-sm leading-relaxed text-muted-foreground font-body mb-8 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {about.bio}
        </motion.p>

        {/* Quote */}
        <motion.blockquote
          className="relative italic text-warm-brown/80 font-display text-lg leading-relaxed px-4 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-4xl text-warm-gold leading-none absolute -top-3 -left-1">"</span>
          {about.quote}
        </motion.blockquote>
      </div>
    </section>
  );
};

export default AboutSection;
