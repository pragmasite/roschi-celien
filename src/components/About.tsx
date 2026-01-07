import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { value: "10+", label: t.about.stat1 },
    { value: "500+", label: t.about.stat2 },
    { value: "98%", label: t.about.stat3 },
  ];

  return (
    <section id="a-propos" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Image placeholder with gradient */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
              <div className="h-full w-full flex items-center justify-center">
                <svg
                  className="h-32 w-32 text-primary/40"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-sm uppercase tracking-widest text-primary">
              {t.about.label}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl mt-2 mb-6">
              {t.about.title1}
              <br />
              <span className="text-accent">{t.about.title2}</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t.about.p1}
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t.about.p2}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8 py-8 border-y border-border">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="font-serif text-3xl text-primary font-semibold">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.about.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  className="p-4 rounded-lg bg-background border border-border"
                >
                  <h3 className="font-serif text-lg mb-2 text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
