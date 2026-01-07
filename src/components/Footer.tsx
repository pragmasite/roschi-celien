import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t, otherLangPath } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const currentYear = new Date().getFullYear();

  return (
    <footer
      ref={ref}
      className="bg-foreground text-white py-16 border-t border-border"
    >
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-xl font-semibold mb-2">
              Célien Roschi
            </h3>
            <p className="text-sm text-white/70 mb-4">{t.footer.tagline}</p>
            <p className="text-xs text-white/60 leading-relaxed">
              {t.footer.description}
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-serif text-sm font-semibold mb-4 uppercase tracking-wider">
              {t.footer.navigation}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#a-propos"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a
                  href="#galerie"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a
                  href="#horaires"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {t.nav.hours}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-serif text-sm font-semibold mb-4 uppercase tracking-wider">
              {t.contact.label}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:+41788866122"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  +41 78 886 61 22
                </a>
              </li>
              <li>
                <a
                  href="mailto:c.rosch@hotmail.com"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  c.rosch@hotmail.com
                </a>
              </li>
              <li className="text-sm text-white/70">
                Rue Centrale 1<br />
                2740 Moutier, CH
              </li>
            </ul>
          </motion.div>

          {/* Language */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-serif text-sm font-semibold mb-4 uppercase tracking-wider">
              Langue
            </h4>
            <Link
              to={otherLangPath}
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              Changer de langue
            </Link>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-xs text-white/60">
            © {currentYear} Célien Roschi. {t.footer.copyright}
          </p>
          <p className="text-xs text-white/60">
            Website by <a href="#" className="hover:text-white transition-colors">Generated with Claude Code</a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
