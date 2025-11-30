'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence} from 'framer-motion';
import { Github, Linkedin, Mail, Phone, ChevronDown, Menu, X, Code, Database, Wrench, ExternalLink, Briefcase, Award } from 'lucide-react';
import { EXPERIENCES, PROJECTS, SKILLS } from './data/portfolio';
import { cardHover, fadeInUp, staggerContainer } from './components/animations';


type NavItem = {
  name: string;
  id: string;
};

export default function ModernPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);

  const navItems: NavItem[] = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white min-h-screen relative overflow-hidden font-sans">
      
      {/* Dynamic Animated Background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <motion.div 
          style={{ y: y1, x: -50 }}
          animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div 
          style={{ y: y2, x: 50 }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, -45, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 -right-4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl"
        />
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-black cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              HA
            </span>
          </motion.div>
          
          <div className="hidden md:flex gap-2">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-full transition-colors font-medium text-sm ${
                  activeSection === item.id ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-white/10 rounded-full backdrop-blur-md"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </button>
            ))}
          </div>

          <button 
            className="md:hidden text-white relative z-50 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/95 backdrop-blur-xl border-t border-gray-800 overflow-hidden"
            >
              <div className="flex flex-col p-6 space-y-4">
                {navItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left py-2 font-medium transition-colors ${
                      activeSection === item.id ? 'text-cyan-400' : 'text-gray-400'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
        <div className="max-w-5xl text-center relative z-10">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer} 
            className="space-y-6"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-block px-6 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm md:text-base tracking-widest font-semibold backdrop-blur-sm">
                HELLO, I'M
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-black leading-tight">
              <span className="block mb-2">Hilmy Ammar</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent pb-4">
                Darmawan
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-3xl text-gray-300 font-light">
              Software Engineer
            </motion.p>
            
            <motion.p variants={fadeInUp} className="text-lg text-cyan-400/80">
              Full-Stack & Mobile Developer
            </motion.p>
            
            <motion.p variants={fadeInUp} className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-lg">
              Final-year Computer Science student at Universitas Indonesia with hands-on experience 
              in building reliable, user-centered applications from API to frontend.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex gap-4 justify-center pt-8">
              {[
                { icon: Linkedin, link: "https://www.linkedin.com/in/hilmyammardarmawan/", color: "text-cyan-400", grad: "from-cyan-400 to-blue-500" },
                { icon: Github, link: "https://github.com/hilmyammar", color: "text-purple-400", grad: "from-purple-400 to-pink-500" },
                { icon: Phone, link: "https://wa.me/6282170879405?text=Hello%20Hilmy%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20you.", color: "text-pink-400", grad: "from-pink-400 to-red-500" }
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden"
                >
                  <social.icon size={28} className={social.color} />
                  <div className={`absolute inset-0 bg-gradient-to-r ${social.grad} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ delay: 2, duration: 1.5, repeat: Infinity }}
            onClick={() => scrollToSection('about')}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 md:bottom-20"
          >
            <ChevronDown size={40} className="text-cyan-400/60" />
          </motion.button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center px-6 py-32 relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto relative z-10 w-full"
        >
          <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-black mb-20 text-center md:text-left">
            About <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Me</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={staggerContainer} className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <motion.p variants={fadeInUp} className="hover:text-white transition-colors">
                I'm a final-year Computer Science student at <span className="text-cyan-400 font-semibold">Universitas Indonesia</span>, 
                passionate about building software that makes a difference.
              </motion.p>
              <motion.p variants={fadeInUp} className="hover:text-white transition-colors">
                With experience spanning <span className="text-purple-400 font-semibold">frontend</span>, <span className="text-pink-400 font-semibold">mobile</span>, and <span className="text-cyan-400 font-semibold">backend</span> development, 
                I thrive in creating end-to-end solutions that are both functional and delightful to use.
              </motion.p>
              <motion.p variants={fadeInUp} className="hover:text-white transition-colors">
                Currently seeking opportunities to apply my technical skills and 
                contribute to real-world engineering challenges.
              </motion.p>
            </motion.div>
            
            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", val: "hilmyammardarmawan17@gmail.com", href: "mailto:hilmyammardarmawan17@gmail.com", color: "cyan" },
                { icon: Phone, label: "Phone", val: "082170879405", href: null, color: "purple" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  className={`group relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-${item.color}-400/50 transition-colors`}
                >
                   <div className={`absolute inset-0 bg-gradient-to-r from-${item.color}-400/0 to-pink-600/0 group-hover:from-${item.color}-400/5 group-hover:to-pink-600/5 rounded-2xl transition-all duration-300`}></div>
                  <div className="relative flex items-center gap-4">
                    <div className={`p-3 bg-${item.color}-500/10 rounded-xl`}>
                      <item.icon className={`text-${item.color}-400`} size={24} />
                    </div>
                    <div>
                      <span className="block text-sm text-gray-400 uppercase tracking-wider mb-1">{item.label}</span>
                      {item.href ? (
                        <a href={item.href} className="text-gray-300 hover:text-white transition-colors break-all text-lg font-medium">{item.val}</a>
                      ) : (
                        <span className="text-gray-300 text-lg font-medium">{item.val}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center px-6 py-32 relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto w-full relative z-10"
        >
          <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-black mb-20">
            Work <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </motion.h2>
          
          <div className="space-y-8">
            {EXPERIENCES.map((exp, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                initial="rest"
                whileHover="hover"
                animate="rest"
                custom={index}
                className="group relative p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-colors"
              >
                <motion.div variants={cardHover}>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 to-purple-600/0 group-hover:from-cyan-400/5 group-hover:to-purple-600/5 rounded-2xl transition-all duration-500"></div>
                  
                  <div className="relative">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400">
                          {exp.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-gray-400 font-medium">{exp.company}</p>
                        </div>
                      </div>
                      <span className="text-sm text-cyan-400/80 font-medium px-4 py-2 bg-cyan-500/10 rounded-full w-fit">
                        {exp.period}
                      </span>
                    </div>
                    
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-300 flex gap-3 hover:text-white transition-colors">
                          <span className="text-cyan-400 mt-1 font-bold">→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center px-6 py-32 relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto w-full relative z-10"
        >
          <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-black mb-20">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group relative p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-transparent transition-all h-full flex flex-col overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${project.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                <div className="relative flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-cyan-400 group-hover:to-purple-400 transition-all">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-6 font-medium">{project.period}</p>
                  <p className="text-gray-300 mb-6 flex-grow leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-4 py-2 bg-gray-900/80 text-cyan-400 text-xs font-semibold rounded-full border border-gray-700 group-hover:border-cyan-400/50 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center px-6 py-32 relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto w-full relative z-10"
        >
          <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-black mb-20">
            Technical <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(SKILLS).map(([category, { items, icon }], index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="group relative p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-colors"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 to-purple-600/0 group-hover:from-cyan-400/5 group-hover:to-purple-600/5 rounded-2xl transition-all duration-500"></div>
                
                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 group-hover:scale-110 transition-transform">
                      {icon}
                    </div>
                    <h3 className="text-2xl font-bold">{category}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {items.map((skill, i) => (
                      <motion.span 
                        key={i}
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(34, 211, 238, 0.1)" }}
                        className="px-4 py-2 bg-gray-900/60 text-gray-300 text-sm font-medium rounded-xl border border-gray-700 hover:border-cyan-400/50 hover:text-cyan-400 transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center px-6 py-32 relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto w-full text-center relative z-10"
        >
          <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-black mb-8">
            Let's <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Connect</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-300 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a 
              href="https://wa.me/6282170879405?text=Hello%20Hilmy%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20you."
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-xl overflow-hidden shadow-lg shadow-cyan-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center justify-center gap-2">
                Get In Touch
                <ExternalLink size={20} />
              </span>
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/hilmyammardarmawan/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 border-2 border-gray-700 rounded-xl hover:border-cyan-400 hover:text-cyan-400 font-bold transition-colors"
            >
              LinkedIn Profile
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6 text-center relative z-10">
        <p className="text-gray-500">© 2025 Hilmy Ammar Darmawan. Built with passion & React.</p>
      </footer>
    </div>
  );
}