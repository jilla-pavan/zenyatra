import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { WA_LINK } from "./constants.jsx";
import carImage from "../../../src/assets/car-image.png";

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
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="fixed inset-x-0 top-0 z-50 overflow-hidden will-change-transform"
      style={{
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        background:
          "linear-gradient(180deg, rgba(16,16,16,0.97) 0%, rgba(8,8,8,0.98) 100%)",
        backdropFilter: "blur(20px)",
        borderBottom: scrolled
          ? "1px solid rgba(11,182,255,0.18)"
          : "1px solid rgba(255,255,255,0.06)",
        boxShadow: "0 16px 40px rgba(0,0,0,0.35)",
      }}
    >
      {/* Asphalt Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "12px 12px",
        }}
      />

      {/* Top Lane Border */}
      <div className="pointer-events-none absolute left-0 right-0 top-2">
        <div className="h-px bg-white/10" />
      </div>

      {/* Bottom Lane Border */}
      <div className="pointer-events-none absolute left-0 right-0 bottom-2">
        <div className="h-px bg-white/10" />
      </div>

      {/* Road Center Line */}
      <div className="pointer-events-none absolute left-0 right-0 top-1/2 -translate-y-1/2">
        <motion.div
          className="h-[2px] will-change-transform"
sss          animate={{
            backgroundPosition: ["0px 0px", "-64px 0px"],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            background:
              "repeating-linear-gradient(to right, rgba(255,255,255,0.3) 0px, rgba(255,255,255,0.3) 30px, transparent 30px, transparent 60px)",
            backgroundSize: "60px 2px",
          }}
        />
      </div>
      <motion.img
        src={carImage}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[8px] z-20 h-10 w-auto"
        initial={{ x: -150 }}
        animate={{ x: ["0vw", "120vw"] }}
        transition={{
          duration: 12,
          delay: 0.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className="relative mx-auto flex h-[70px] max-w-[1400px] items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 text-current no-underline"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--electric)]/20 bg-gradient-to-br from-[var(--black-2)] to-[#111827] shadow-[0_0_20px_rgba(11,182,255,0.12)]">
            <img
              src="/images/zenyatra-logo-icon.png"
              alt="Zenyatra logo"
              className="h-8 w-8 object-contain"
            />
          </div>

          <div>
            <div className="font-display text-lg font-semibold tracking-[0.15em] text-white">
              ZEN<span className="text-[var(--electric)]">YATRA</span>
            </div>

            <div className="text-[9px] uppercase tracking-[0.25em] text-white/50">
              Connecting Roads Beyond Boundaries
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className="group relative text-[0.78rem] font-medium uppercase tracking-[0.14em] text-white transition duration-300 hover:text-[var(--electric)]"
            >
              {link}

              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--electric)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--electric)]/30 bg-gradient-to-r from-[var(--electric)]/15 to-[var(--electric)]/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:scale-105 hover:border-[var(--electric)]/50 hover:shadow-[0_0_20px_rgba(11,182,255,0.25)]"
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden"
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
                  y: menuOpen && idx === 0 ? 8 : menuOpen && idx === 2 ? -8 : 0,
                  opacity: menuOpen && idx === 1 ? 0 : 1,
                }}
                transition={{ duration: 0.25 }}
                className="block h-0.5 w-6 origin-center bg-[var(--electric)]"
              />
            ))}
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-[var(--electric)]/20 bg-[#080808] md:hidden"
          >
            <div className="space-y-3 px-5 py-6">
              {links.map((link, index) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.06 }}
                  onClick={() => setMenuOpen(false)}
                  className="block border-b border-white/5 pb-3 text-base uppercase tracking-[0.08em] text-white"
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
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 rounded-md bg-gradient-to-br from-[var(--electric-light)] to-[var(--electric)] px-5 py-2 text-sm font-semibold uppercase text-black"
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
