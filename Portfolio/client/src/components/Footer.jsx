import { motion } from 'framer-motion';
import { Code2, Github, Linkedin, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/agrawal-Vansh/', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/agrawal-vansh/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/vansh_agrawal.05', label: 'Instagram' },
  ];

  return (
<footer
  className="
    relative py-12
    border-t border-gray-300
     text-gray-700

    dark:bg-black/40
    backdrop-blur
    dark:border-teal-400/30
    dark:text-teal-300
  "
>
      {/* Subtle glow at the top */}
      <div className="absolute card top-0 left-1/2 -translate-x-1/2 w-1/2 h-px" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-6">
          
          {/* Logo */}
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-2 group"
          >
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/30 group-hover:glow-border transition-all duration-300">
              <Code2 className="w-5 h-5 text-primary" />
            </div>
          </motion.a>

          {/* Social links (CENTERED) */}
          <div className="flex items-center justify-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-lg bg-secondary/50 border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1 text-center">
            © {currentYear} Vansh Agrawal. Made with
            <Heart className="w-3.5 h-3.5 text-accent fill-accent" />
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
