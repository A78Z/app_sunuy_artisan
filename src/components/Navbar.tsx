import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-12 left-0 right-0 w-full z-40 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md backdrop-blur-sm' : 'bg-white/95'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div 
            className="flex-shrink-0 flex items-center cursor-pointer relative group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            onClick={scrollToTop}
          >
            <motion.div
              className="absolute inset-0 bg-primary-200 rounded-full blur-xl"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.5 }}
              transition={{ duration: 0.3 }}
            />
            
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10
              }}
            >
              <img 
                src="/logo.jpg" 
                alt="Suñuy Artisan" 
                className="h-16 w-auto relative z-10"
              />
            </motion.div>
          </motion.div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <NavLink href="#home">ACCUEIL</NavLink>
              <NavLink href="#about">SUÑUY ARTISAN</NavLink>
              <NavLink href="#features">FONCTIONNALITÉS</NavLink>
              <NavLink href="#solution">AVANTAGES</NavLink>
              <NavLink href="#commande-publique">
                COMMANDE PUBLIQUE
              </NavLink>
              <Link 
                to="/demande-agrement" 
                className="relative text-primary-800 px-3 py-2 rounded-md text-sm font-medium group"
              >
                <motion.span
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  DEMANDE D'AGRÉMENT
                </motion.span>
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 origin-left transform scale-x-0 transition-transform"
                  initial={false}
                  animate="idle"
                  variants={{
                    idle: { scaleX: 0 },
                    hover: { scaleX: 1 }
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 bg-primary-100 rounded-md -z-10"
                  initial={false}
                  animate="idle"
                  variants={{
                    idle: { opacity: 0 },
                    hover: { opacity: 1 }
                  }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-800 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              <MobileNavLink href="#home" onClick={() => setIsOpen(false)}>Accueil</MobileNavLink>
              <MobileNavLink href="#about" onClick={() => setIsOpen(false)}>Qui sommes-nous</MobileNavLink>
              <MobileNavLink href="#features" onClick={() => setIsOpen(false)}>Fonctionnalités</MobileNavLink>
              <MobileNavLink href="#solution" onClick={() => setIsOpen(false)}>Notre Solution</MobileNavLink>
              <Link 
                to="/commande-publique" 
                className="block px-3 py-2 rounded-md text-base font-medium text-primary-800 hover:bg-primary-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Commande Publique
              </Link>
              <Link 
                to="/demande-agrement" 
                className="block px-3 py-2 rounded-md text-base font-medium text-primary-800 hover:bg-primary-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Demande d'Agrément
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.a
    href={href}
    className="relative text-primary-800 px-3 py-2 rounded-md text-sm font-medium group"
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
    <motion.span
      className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 origin-left transform scale-x-0 transition-transform"
      initial={false}
      animate="idle"
      variants={{
        idle: { scaleX: 0 },
        hover: { scaleX: 1 }
      }}
      transition={{ duration: 0.3 }}
    />
    <motion.div
      className="absolute inset-0 bg-primary-100 rounded-md -z-10"
      initial={false}
      animate="idle"
      variants={{
        idle: { opacity: 0 },
        hover: { opacity: 1 }
      }}
      transition={{ duration: 0.2 }}
    />
  </motion.a>
);

const MobileNavLink = ({ 
  href, 
  children, 
  onClick 
}: { 
  href: string; 
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <motion.a
    href={href}
    onClick={onClick}
    className="block px-3 py-2 rounded-md text-base font-medium text-primary-800 hover:bg-primary-50 transition-colors"
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
);

export default Navbar;