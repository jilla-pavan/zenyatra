import { motion } from 'framer-motion';

export const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
    :root {
      --electric: #0BB6FF;
      --electric-light: #70D9FF;
      --electric-dark: #0485C4;
      --electric-soft: rgba(11, 182, 255, 0.14);
      --black: #050608;
      --black-2: #0B0D14;
      --black-3: #141A27;
      --white: #F8FBFF;
      --white-2: rgba(248, 251, 255, 0.9);
      --charcoal: #2B2E36;
      --muted: #94A7CC;
    }
    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body { background: var(--black); color: var(--white); font-family: 'Poppins', sans-serif; margin: 0; }
    .font-display { font-family: 'Poppins', sans-serif; }
    .font-mono { font-family: 'Poppins', sans-serif; }
    .accent-text { color: var(--electric); }
    .accent-gradient { background: linear-gradient(135deg, var(--electric-light) 0%, var(--electric) 55%, var(--electric-dark) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
    .glass { background: rgba(255,255,255,0.06); backdrop-filter: blur(22px); -webkit-backdrop-filter: blur(22px); border: 1px solid rgba(11, 182, 255, 0.15); }
    .glass-dark { background: rgba(10,10,11,0.82); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); border: 1px solid rgba(11, 182, 255, 0.14); }
    .accent-border { border: 1px solid rgba(11, 182, 255, 0.25); }
    .shimmer { background: linear-gradient(90deg, transparent 0%, rgba(11,182,255,0.15) 50%, transparent 100%); background-size: 200% 100%; animation: shimmer 3s infinite; }
    @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
    .grain::after { content: ''; position: fixed; inset: 0; pointer-events: none; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E"); z-index: 9999; }
    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: var(--black-2); }
    ::-webkit-scrollbar-thumb { background: var(--electric-dark); border-radius: 2px; }
    .route-card:hover .route-line { width: 100%; }
    .route-line { width: 40%; height: 1px; background: var(--electric); transition: width 0.5s ease; }
    @media (max-width: 768px) { .hero-title { font-size: clamp(2.5rem, 10vw, 4rem) !important; } }
  `}</style>
);

export const GoldDivider = () => (
  <div className="flex items-center gap-4 justify-center my-6">
    <div className="h-px w-16 bg-gradient-to-r from-transparent to-[var(--electric)]" />
    <div className="w-1.5 h-1.5 bg-[var(--electric)] rotate-45" />
    <div className="h-px w-16 bg-gradient-to-l from-transparent to-[var(--electric)]" />
  </div>
);

export const SectionLabel = ({ children }) => (
  <motion.span
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="font-mono text-xs tracking-[0.25em] uppercase text-[var(--electric)]"
  >
    {children}
  </motion.span>
);

export const SectionTitle = ({ children, light }) => (
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    className="font-display mt-3"
    style={{
      fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
      fontWeight: 300,
      lineHeight: 1.1,
      color: light ? 'var(--electric-light)' : 'var(--white)',
      letterSpacing: '-0.01em',
    }}
  >
    {children}
  </motion.h2>
);

export const FadeIn = ({ children, delay = 0, y = 30 }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);
