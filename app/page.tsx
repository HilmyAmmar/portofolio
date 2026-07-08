'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight, Menu, X } from 'lucide-react';
import {
  NAV_ITEMS,
  PROFILE,
  EDUCATION,
  EXPERIENCES,
  PROJECTS,
  SKILLS,
  SOCIAL_LINKS,
} from './data/portfolio';
import { fadeUp, stagger } from './components/animations';

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('hero');

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      const pos = window.scrollY + window.innerHeight / 3;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_ITEMS[i].id);
        if (el && el.offsetTop <= pos) {
          setActive(NAV_ITEMS[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ---------- Navigation ---------- */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
          <button
            onClick={() => scrollTo('hero')}
            className="text-sm font-semibold tracking-tight"
          >
            Hilmy Ammar
          </button>

          <div className="hidden items-center gap-6 md:flex">
            {NAV_ITEMS.slice(1).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`font-mono text-xs tracking-wide transition-colors ${
                  active === item.id
                    ? 'text-accent'
                    : 'text-faint hover:text-foreground'
                }`}
              >
                {item.name.toLowerCase()}
              </button>
            ))}
          </div>

          <button
            className="p-1 text-foreground md:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-border md:hidden"
            >
              <div className="flex flex-col px-6 py-2">
                {NAV_ITEMS.slice(1).map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`py-2.5 text-left font-mono text-xs ${
                      active === item.id ? 'text-accent' : 'text-muted'
                    }`}
                  >
                    {item.name.toLowerCase()}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="mx-auto max-w-6xl px-6 sm:px-10">
        {/* ---------- Hero ---------- */}
        <section id="hero" className="flex min-h-screen flex-col justify-center pt-20">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-8">
            <motion.p
              variants={fadeUp}
              className="font-mono text-xs tracking-wider text-faint"
            >
              {PROFILE.role} · {PROFILE.location}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl"
            >
              {PROFILE.name}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-2xl text-lg leading-relaxed text-muted"
            >
              {PROFILE.intro}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-xs text-muted"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for opportunities
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                Get in touch
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <div className="flex items-center gap-1">
                {[
                  { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
                  { icon: Github, href: SOCIAL_LINKS.github, label: 'GitHub' },
                  { icon: Mail, href: `mailto:${SOCIAL_LINKS.email}`, label: 'Email' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="rounded-full p-2.5 text-muted transition-colors hover:bg-surface hover:text-accent"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ---------- About ---------- */}
        <Section id="about" label="01" title="About">
          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
            <motion.div variants={fadeUp} className="space-y-5 text-lg leading-relaxed text-muted">
              {PROFILE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="card p-6">
              <p className="font-mono text-xs tracking-wider text-faint">EDUCATION</p>
              <p className="mt-3 font-medium">{EDUCATION.school}</p>
              <p className="text-sm text-muted">{EDUCATION.faculty}</p>
              <p className="text-sm text-muted">{EDUCATION.degree}</p>
              <p className="mt-1 font-mono text-xs text-accent">{EDUCATION.period}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {EDUCATION.courses.map((c) => (
                  <span
                    key={c}
                    className="rounded-md border border-border px-2 py-1 text-xs text-muted"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </Section>

        {/* ---------- Experience ---------- */}
        <Section id="experience" label="02" title="Experience">
          <div className="space-y-14">
            {EXPERIENCES.map((exp) => (
              <motion.div
                key={exp.company}
                variants={fadeUp}
                className="grid gap-x-6 gap-y-3 md:grid-cols-[10rem_1fr]"
              >
                <p className="font-mono text-xs leading-6 text-faint">{exp.period}</p>
                <div>
                  <h3 className="text-lg font-medium">
                    {exp.title}{' '}
                    <span className="text-accent">· {exp.company}</span>
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {exp.description.map((d, i) => (
                      <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* ---------- Projects ---------- */}
        <Section id="projects" label="03" title="Projects">
          <div className="grid gap-6 sm:grid-cols-2">
            {PROJECTS.map((project) => (
              <motion.div
                key={project.title}
                variants={fadeUp}
                className="card flex flex-col p-7 transition-transform hover:-translate-y-1"
              >
                <p className="font-mono text-xs tracking-wide text-accent">
                  {project.role}
                </p>
                <h3 className="mt-2 font-medium leading-snug">{project.title}</h3>
                <p className="mt-3 flex-grow text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-accent-soft px-2 py-1 font-mono text-[11px] text-accent"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* ---------- Skills ---------- */}
        <Section id="skills" label="04" title="Skills">
          <div className="grid gap-10 sm:grid-cols-3">
            {Object.entries(SKILLS).map(([category, items]) => (
              <motion.div key={category} variants={fadeUp}>
                <p className="font-mono text-xs tracking-wider text-faint">
                  {category.toUpperCase()}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {items.map((s) => (
                    <span
                      key={s}
                      className="rounded-lg border border-border bg-surface px-3 py-1.5 text-sm transition-colors hover:border-accent hover:text-accent"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* ---------- Contact ---------- */}
        <Section id="contact" label="05" title="Contact">
          <motion.div variants={fadeUp} className="max-w-xl space-y-6">
            <p className="leading-relaxed text-muted">
              Open to Software Engineer roles, internships, and freelance work.
              The quickest way to reach me is WhatsApp or email.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                WhatsApp <ArrowUpRight size={16} />
              </a>
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
              >
                {SOCIAL_LINKS.email}
              </a>
            </div>
          </motion.div>
        </Section>
      </main>

      {/* ---------- Footer ---------- */}
      <footer className="mx-auto max-w-6xl px-6 py-10 sm:px-10">
        <div className="flex flex-col items-start justify-between gap-3 border-t border-border pt-6 font-mono text-xs text-faint sm:flex-row sm:items-center">
          <p>© 2026 Hilmy Ammar Darmawan</p>
          <div className="flex gap-5">
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
              linkedin
            </a>
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
              github
            </a>
            <a href={`mailto:${SOCIAL_LINKS.email}`} className="hover:text-accent">
              email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ---------- Reusable Section wrapper ---------- */
function Section({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={stagger}
      className="scroll-mt-24 border-t border-border py-28"
    >
      <motion.div variants={fadeUp} className="mb-14 flex items-baseline gap-3">
        <span className="font-mono text-sm text-accent">{label}</span>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      </motion.div>
      {children}
    </motion.section>
  );
}
