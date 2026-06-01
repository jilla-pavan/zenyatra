import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { WA_LINK } from "./constants.jsx";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const highlights = [
    {
      label: "Door-to-door service",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M4 12h16v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4z" />
          <path d="M4 12l2-5h12l2 5" />
          <circle cx="7" cy="18" r="1.5" />
          <circle cx="17" cy="18" r="1.5" />
        </svg>
      ),
    },
    {
      label: "Expert Drivers",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <circle cx="12" cy="7" r="3" />
          <path d="M8.5 18c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5" />
          <path d="M12 10v2" />
          <path d="M10 14h4" />
        </svg>
      ),
    },
    {
      label: "Priority access",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M12 2l2.9 6.3L22 9l-5 4.9L18 20l-6-3.2L6 20l1-6.1L2 9l7.1-0.7L12 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-[calc(100svh-7.5rem)] overflow-hidden flex items-start justify-center pt-[7rem] sm:pt-[8rem] pb-20"
    >
      <motion.div style={{ position: "absolute", inset: 0, y }}>
        <img
          src="/images/genz-travel-image.png"
          alt="Car background"
          className="h-full w-full object-cover brightness-[0.50] contrast-[0.95]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(7,8,9,0.55)] via-[rgba(7,8,9,0.32)] to-[rgba(7,8,9,0.92)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(11,182,255,0.14)_0%,transparent_35%)]" />
      </motion.div>

      <div className="absolute right-0 top-0 h-full w-[40%] bg-[linear-gradient(to_bottom_left,rgba(11,182,255,0.08)_0%,transparent_50%)] pointer-events-none" />
      <motion.div
        className="relative z-10 w-full px-6 xl:px-12 text-center"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-[var(--electric)]" />
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-[var(--electric)]">
              Est. Solapur, Maharashtra
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="font-display hero-title mx-auto mb-4 max-w-[min(100%,820px)] text-[clamp(3.4rem,7.8vw,7.8rem)] font-black uppercase tracking-[-0.04em] leading-[0.9] text-[var(--white)]"
        >
          <span className="block">Connecting Roads</span>
          <span className="hero-highlight mt-3 inline-flex rounded-full bg-[rgba(11,182,255,0.1)] border border-[var(--electric)]/20 px-5 py-2 text-[var(--electric)] shadow-[0_20px_80px_rgba(0,0,0,0.16)]">
            Beyond Boundaries
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.52 }}
          className="mx-auto mb-5 max-w-[520px] text-sm uppercase tracking-[0.28em] text-[var(--electric)]/75"
        >
          Easy, comfortable rides for work and travel.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mx-auto mb-10 max-w-[620px] text-[clamp(1rem,1.2vw,1.05rem)] leading-[1.85] text-[rgba(244,238,229,0.88)]"
        >
          Reliable travel from Solapur to every destination, with comfort and
          care.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mx-auto flex flex-wrap justify-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[var(--electric-light)] to-[var(--electric)] px-10 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-[var(--black)] shadow-[0_18px_60px_rgba(11,182,255,0.25)] transition duration-200 hover:-translate-y-0.5 hover:opacity-95"
          >
            Book Your Ride
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--electric)]/25 bg-[rgba(255,255,255,0.08)] px-8 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--white)] transition duration-200 hover:-translate-y-0.5 hover:bg-[rgba(11,182,255,0.16)] hover:border-[var(--electric)]"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 grid gap-4 sm:grid-cols-3"
        >
          {highlights.map((item) => (
            <div
              key={item.label}
              className="group flex items-center gap-4 rounded-xl border border-white/10 bg-gradient-to-r from-[var(--black-2)] to-[var(--black)] px-5 py-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[var(--electric)]/50"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[var(--electric)] text-2xl text-black">
                {item.icon}
              </div>

              <div>
                <h4 className="font-bold uppercase tracking-[0.12em] text-white">
                  {item.label}
                </h4>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 opacity-50"
        >
          <div className="text-[0.6rem] uppercase tracking-[0.2em] text-[var(--electric)]">
            Scroll
          </div>
          <div className="h-10 w-px bg-gradient-to-b from-[var(--electric)] to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
