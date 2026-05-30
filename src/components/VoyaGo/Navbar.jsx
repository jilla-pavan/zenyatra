import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { WA_LINK } from "./constants.jsx";

const links = ["Home", "Ride Options", "Routes", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 shadow-[0_16px_40px_rgba(0,0,0,0.22)] transition-all duration-300"
      style={{
        background: "rgba(7,8,9,0.93)",
        backdropFilter: "blur(24px)",
        borderBottom: scrolled
          ? "1px solid rgba(11,182,255,0.16)"
          : "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="mx-auto flex h-18 max-w-[1400px] items-center justify-between px-4 py-3 md:px-8">
        <a
          href="#home"
          className="flex items-center gap-3 text-current no-underline"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--black-2)] border border-[var(--electric)]/15 shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
            <img
              src="/images/zenyatra-logo-icon.png"
              alt="Zenyatra logo"
              className="h-8 w-8 object-contain"
            />
          </div>
          <div>
            <div className="font-display text-lg font-semibold tracking-[0.15em] text-[var(--white)]">
              ZEN<span className="text-[var(--electric)]">YATRA</span>
            </div>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[0.8rem] uppercase tracking-[0.12em] text-[var(--white)] transition duration-200 hover:text-[var(--electric)] hover:underline underline-offset-4 decoration-[var(--electric)]/40"
            >
              {link}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--electric)]/25 bg-[var(--electric)]/10 px-5 py-2 text-xs font-semibold uppercase text-[var(--white)] transition duration-200 hover:bg-[var(--electric)]/20"
          >
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          aria-expanded={menuOpen}
          className="md:hidden"
          onClick={() => setMenuOpen((state) => !state)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            {[0, 1, 2].map((idx) => (
              <motion.span
                key={idx}
                animate={{
                  rotate:
                    menuOpen && idx === 0
                      ? 45
                      : menuOpen && idx === 2
                        ? -45
                        : 0,
                  y:
                    menuOpen && idx === 0
                      ? 10
                      : menuOpen && idx === 2
                        ? -10
                        : 0,
                  opacity: menuOpen && idx === 1 ? 0 : 1,
                }}
                className="block h-0.5 w-5 bg-[var(--electric)] origin-center"
              />
            ))}
          </div>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-[var(--black)] border-t border-[var(--electric)]/20 md:hidden"
          >
            <div className="space-y-3 px-5 py-6">
              {links.map((link, index) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.06 }}
                  className="block border-b border-white/5 pb-3 text-base uppercase tracking-[0.05em] text-[var(--white)]"
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </motion.a>
              ))}
              <motion.a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="inline-flex items-center gap-2 rounded-sm bg-gradient-to-br from-[var(--electric-light)] to-[var(--electric)] px-5 py-2 text-sm font-semibold uppercase text-black"
              >
                WhatsApp Booking
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
