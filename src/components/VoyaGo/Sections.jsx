import { useState } from "react";
import { motion } from "framer-motion";
import { WA_LINK, WHATSAPP_NUMBER } from "./constants.jsx";
import { FadeIn, GoldDivider, SectionLabel, SectionTitle } from "./atoms.jsx";
import ertiga from "../../../src/assets/ertiga-car-pic.jpeg";
import hyderabad from "../../../src/assets/Hyderabad.png";
import pune from "../../../src/assets/Pune.png";
import bangalore from "../../../src/assets/Bangalore.png";
import mumbai from "../../../src/assets/Mumbai.png";

import {
  Users,
  Briefcase,
  Snowflake,
  ShieldCheck,
  BadgeCheck,
  Headset,
  Star,
  Clock,
  MapPin,
  Car,
  MapPinned,
  Zap,
  Icon,
  Flag,
  Clock3,
  Route as RouteIcon,
  ArrowRight,
} from "lucide-react";

export function QuickRideSection() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [vehicle, setVehicle] = useState("4-seater");
  const [submitted, setSubmitted] = useState(false);

  const locations = [
    "Solapur",
    "Hyderabad",
    "Pune",
    "Mumbai",
    "Bangalore",
    "Shirdi",
    "Tirupati",
    "Vijayawada",
    "Nagpur",
    "Goa",
    "Kolhapur",
    "Aurangabad",
  ];

  const pricePerKm = vehicle === "4-seater" ? 14 : 18;

  const benefits = [
    {
      icon: MapPinned,
      title: "Door-to-Door Pickup",
      desc: "Convenient pickup and drop at your preferred location.",
    },
    {
      icon: Headset,
      title: "24×7 Assistance",
      desc: "Dedicated support before, during, and after your journey.",
    },
    {
      icon: Zap,
      title: "Instant Confirmation",
      desc: "Quick booking assistance via WhatsApp.",
    },
  ];

  return (
    <section className="bg-[var(--black)] py-[4rem] px-6 xl:px-10">
      <div className="mx-auto max-w-[1400px] grid gap-6 lg:grid-cols-[1.05fr_0.95fr] items-start">
        <div className="rounded-[1.6rem] border border-[var(--electric)]/10 bg-[var(--black-2)] p-6 sm:p-8 shadow-[0_30px_70px_rgba(0,0,0,0.22)] h-full">
          {" "}
          <SectionLabel>Quick Ride</SectionLabel>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-[var(--white)]">
            Check Ride Availability
          </h2>
          <p className="mt-3 max-w-[560px] text-xs leading-6 text-[var(--muted)]">
            Select your pickup and destination. Our team will check availability
            and contact you shortly.
          </p>
          <div className="mt-8 grid gap-3">
            <label className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--electric)]">
              Pickup
            </label>
            <div className="flex items-center gap-3 rounded-sm border border-[var(--white)]/10 bg-[var(--black)] px-4 py-2.5 text-sm text-[var(--white)]">
              <span className="text-[var(--electric)]">
                <MapPin
                  size={22}
                  className="text-[var(--electric)]"
                  strokeWidth={1.8}
                />
              </span>
              <select
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="w-full bg-transparent text-[var(--white)] outline-none text-sm cursor-pointer"
              >
                <option value="" className="text-gray-800">
                  Select pickup location
                </option>

                {locations
                  .filter((loc) => loc !== drop)
                  .map((loc) => (
                    <option
                      key={loc}
                      value={loc}
                      className="bg-[var(--black-2)] text-white"
                    >
                      {loc}
                    </option>
                  ))}
              </select>
            </div>

            <label className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--electric)]">
              Drop
            </label>
            <div className="flex items-center gap-3 rounded-sm border border-[var(--white)]/10 bg-[var(--black)] px-4 py-2.5 text-sm text-[var(--white)]">
              <span className="text-[var(--electric)]">
                <Flag
                  size={22}
                  className="text-[var(--electric)]"
                  strokeWidth={1.8}
                />
              </span>
              <select
                value={drop}
                onChange={(e) => setDrop(e.target.value)}
                className="w-full bg-transparent text-[var(--white)] outline-none text-sm cursor-pointer"
              >
                <option value="" className="text-gray-800">
                  Select drop location
                </option>

                {locations
                  .filter((loc) => loc !== pickup)
                  .map((loc) => (
                    <option
                      key={loc}
                      value={loc}
                      className="bg-[var(--black-2)] text-white"
                    >
                      {loc}
                    </option>
                  ))}
              </select>
            </div>

            <label className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--electric)]">
              Vehicle
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: "4-seater", label: "4-Seater", price: "₹14/km" },
                { id: "7-seater", label: "7-Seater", price: "₹18/km" },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setVehicle(opt.id)}
                  className={`rounded-sm border px-3 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] transition ${
                    vehicle === opt.id
                      ? "border-[var(--electric)] bg-[var(--electric)]/15 text-[var(--electric)]"
                      : "border-[var(--white)]/10 bg-[var(--black)] text-[var(--white)]/70 hover:border-[var(--electric)]/40"
                  }`}
                >
                  <div>{opt.label}</div>
                  <div className="mt-0.5 text-[0.6rem] text-[var(--electric)]">
                    {opt.price}
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                const msg = encodeURIComponent(
                  `🚖 New Ride Enquiry

📍 Pickup: ${pickup}
🎯 Drop: ${drop}
🚗 Vehicle: ${vehicle}`,
                );

                window.open(
                  `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`,
                  "_blank",
                );

                setSubmitted(true);
              }}
              className="w-full rounded-sm bg-gradient-to-br from-[var(--electric-light)] to-[var(--electric)] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--black)]"
            >
              Check Availability
            </button>
            {submitted && (
              <div className="mt-5 rounded-sm border border-[var(--electric)]/20 bg-[var(--electric)]/5 p-5 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--electric)]/10 text-xl text-[var(--electric)]">
                  ✓
                </div>

                <h4 className="text-lg font-semibold text-[var(--white)]">
                  Request Submitted
                </h4>

                <p className="mt-2 text-sm text-[var(--muted)]">
                  Your travel enquiry has been successfully received. Our team
                  will contact you shortly with the available travel options.
                </p>
              </div>
            )}

            <p className="text-center text-xs text-[var(--muted)] mt-3">
              ⚡ Response within 15 minutes on WhatsApp
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[1.75rem] border border-[var(--electric)]/10 bg-[var(--electric)]/10 p-6 sm:p-8 h-full flex flex-col">
          {" "}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(11,182,255,0.18),transparent_45%)] pointer-events-none" />
          <div className="relative flex flex-col h-full">
            {" "}
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--electric)]">
                Why choose Zenyatra
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-[var(--white)]">
                Trusted rides
              </h3>
            </div>
            <div className="space-y-4 flex-1 flex flex-col justify-center">
              {benefits.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-2xl border border-white/10 bg-black/50 p-4 backdrop-blur-sm transition-all duration-300 hover:border-[var(--electric)]/25 hover:bg-black/70"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--electric)]/10 transition-all duration-300 group-hover:bg-[var(--electric)]/15">
                        <Icon
                          size={22}
                          className="text-[var(--electric)]"
                          strokeWidth={1.8}
                        />
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-white">
                          {item.title}
                        </h4>

                        <p className="mt-1 text-xs leading-6 text-[var(--muted)]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="mt-2 rounded-2xl border border-[var(--electric)]/15 bg-[var(--electric)]/5 p-5 text-center">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--electric)]">
                  Available 24×7
                </p>

                <p className="mt-2 text-sm text-white font-medium">
                  Interstate & Outstation Travel
                </p>

                <p className="mt-1 text-xs text-[var(--muted)]">
                  Maharashtra • Telangana • Karnataka • Andhra Pradesh
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustSection() {
  const stats = [
    {
      id: 1,
      icon: ShieldCheck,
      value: "Licensed",
      label: "Interstate Permit",
    },
    {
      id: 2,
      icon: BadgeCheck,
      value: "Verified",
      label: "Professional Drivers",
    },
    {
      id: 3,
      icon: Star,
      value: "500+",
      label: "Happy Travellers",
    },
    {
      id: 4,
      icon: Clock,
      value: "24×7",
      label: "Customer Support",
    },
  ];

  return (
    <section className="bg-[var(--black-2)] py-16 px-6 xl:px-12 border-y border-white/5">
      <div className="mx-auto max-w-[1400px]">
        <div className="text-center mb-12">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--electric)]">
            Why Zenyatra
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-white">
            Travel Made Reliable
          </h2>

          <p className="mt-4 max-w-[600px] mx-auto text-sm text-[var(--muted)] leading-7">
            Comfortable interstate travel backed by professional chauffeurs,
            transparent pricing and dedicated support.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-white/10 border border-white/10 rounded-[24px] overflow-hidden bg-black/30">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="group p-8 text-center transition-all duration-300 hover:bg-white/[0.02]"
              >
                <div className="mb-2 flex justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--electric)]/10 group-hover:bg-[var(--electric)]/15 transition-all duration-300">
                    <Icon
                      size={28}
                      className="text-[var(--electric)]"
                      strokeWidth={1.8}
                    />
                  </div>
                </div>

                <div className="text-2xl font-semibold text-white">
                  {item.value}
                </div>

                <div className="mt-2 text-sm text-[var(--muted)]">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function FleetSection() {
  const cars = [
    {
      name: "Maruti Suzuki Baleno",
      type: "Premium Hatchback",
      image:
        "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&q=80",
      seats: 4,
      luggage: "2 Medium Bags",
      price: "₹14/km",
      features: [
        "Full AC",
        "Music System",
        "USB Charging",
        "Comfortable Seating",
        "Smooth Highway Ride",
      ],
      ideal: "Couple / Small Family",
      badge: "Best for City & Outstation",
    },
    {
      name: "Maruti Suzuki Ertiga",
      type: "Premium MPV",
      image: ertiga,
      seats: 6,
      luggage: "4 Large Bags",
      price: "₹18/km",
      features: [
        "Full AC",
        "Captain Seats",
        "USB Charging",
        "Spacious Cabin",
        "Long-Distance Comfort",
      ],
      ideal: "Families & Groups",
      badge: "Most Popular",
    },
  ];

  return (
    <section id="ride options" className="bg-[var(--black)] py-[4rem] px-6 xl:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="text-center mb-12">
          <SectionLabel>Our Fleet</SectionLabel>
          <SectionTitle>Curated For Comfort</SectionTitle>
          <GoldDivider />
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {cars.map((car, index) => (
            <FadeIn key={car.name} delay={index * 0.15}>
              <motion.div
                whileHover={{
                  y: -10,
                  boxShadow: "0 25px 70px rgba(11,182,255,0.15)",
                }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#111214]"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 pointer-events-none">
                  <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-[var(--electric)]/10 blur-3xl" />
                </div>

                {/* Vehicle Image */}
                <div className="relative h-[320px] overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.8 }}
                    src={car.image}
                    alt={car.name}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
                  {car.badge && (
                    <div className="absolute right-5 top-5 rounded-full bg-[var(--electric)] px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-black">
                      {car.badge}
                    </div>
                  )}

                  <div className="absolute left-6 bottom-6">
                    <div className="mb-3 inline-flex rounded-full border border-[var(--electric)]/20 bg-[var(--electric)]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--electric)]">
                      {car.type}
                    </div>

                    <h3 className="text-3xl font-semibold text-white">
                      {car.name}
                    </h3>
                  </div>
                </div>

                {/* Pricing */}
                <div className="absolute bottom-6 right-6">
                  <div className="rounded-2xl bg-black/80 backdrop-blur-md px-5 py-3 border border-white/10">
                    <div className="text-[10px] uppercase tracking-widest text-white/50">
                      Starting
                    </div>

                    <div className="text-2xl font-bold text-[var(--electric)]">
                      {car.price}
                    </div>
                  </div>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-3 px-6 py-5">
                  <div
                    className="rounded-2xl
    bg-white/[0.03]
    border
    border-white/5
    p-4
    text-center"
                  >
                    <div className="text-xl">
                      <Users size={18} />
                    </div>
                    <div className="mt-2 text-lg font-semibold text-white">
                      {car.seats} Seats
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white/[0.03] border border-white/5 p-4 text-center">
                    <div className="text-xl">
                      <Briefcase size={18} />
                    </div>
                    <div className="mt-2 text-lg font-semibold  text-white">
                      {car.luggage}
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white/[0.03] border border-white/5 p-4  text-center">
                    <div className="text-xl">
                      <Snowflake size={18} />
                    </div>
                    <div className="mt-2 text-lg font-semibold text-white">
                      Full AC
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 px-6 py-2">
                  {car.features.map((feature) => (
                    <span
                      key={feature}
                      className="
        rounded-full
        border
        border-white/10
        bg-white/5
        px-3
        py-2
        text-xs
        text-white/80
      "
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Ideal For */}
                <div className="mx-6 rounded-xl border border-white/5 bg-white/[0.03] p-4">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
                    Recommended For
                  </div>

                  <div className="mt-2 font-medium text-white">{car.ideal}</div>
                </div>

                {/* CTA */}
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="
    group
    mt-6
    flex
    items-center
    justify-center
    gap-2
    rounded-2xl
    bg-gradient-to-r
    from-[var(--electric)]
    to-[var(--electric-light)]
    py-4
    font-semibold
    text-black
    transition-all
    duration-300
    hover:shadow-[0_15px_50px_rgba(11,182,255,0.35)]
  "
                >
                  Reserve Vehicle
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RoutesSection() {
  const routes = [
    {
      from: "Solapur",
      to: "Hyderabad",
      distance: "220 km",
      duration: "4 hrs",
      price: "From ₹3,080",
      image: hyderabad,
    },
    {
      from: "Solapur",
      to: "Pune",
      distance: "250 km",
      duration: "4.5 hrs",
      price: "From ₹3,500",
      image: pune,
    },
    {
      from: "Solapur",
      to: "Bangalore",
      distance: "400 km",
      duration: "6.5 hrs",
      price: "From ₹5,600",
      image: bangalore,
    },
    {
      from: "Solapur",
      to: "Mumbai",
      distance: "450 km",
      duration: "7 hrs",
      price: "From ₹6,300",
      image: mumbai,
    },
  ];

  return (
    <section
      id="routes"
      className="bg-[var(--black-2)] py-[4rem] px-6 xl:px-12"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="text-center mb-16">
          <SectionLabel>Popular Routes</SectionLabel>
          <SectionTitle>Where We Take You</SectionTitle>
          <GoldDivider />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {routes.map((route, index) => (
            <FadeIn key={route.to} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.25 }}
                className="group overflow-hidden rounded-[24px] border border-white/10 bg-[var(--black)]"
              >
                {/* Image */}
                <div className="relative h-[180px] overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                    src={route.image}
                    alt={route.to}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                  <div className="absolute bottom-4 left-4">
                    <div className="rounded-full bg-[var(--electric)]/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--electric)] backdrop-blur">
                      Popular Route
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Route */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-[var(--muted)]">
                        From
                      </div>

                      <div className="mt-1 font-semibold text-white">
                        {route.from}
                      </div>
                    </div>

                    <ArrowRight size={18} className="text-[var(--electric)]" />

                    <div className="text-right">
                      <div className="text-xs uppercase tracking-wider text-[var(--muted)]">
                        To
                      </div>

                      <div className="mt-1 font-semibold text-white">
                        {route.to}
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-white/[0.03] p-3">
                      <div className="flex items-center gap-2 text-[var(--electric)]">
                        <RouteIcon size={14} />
                        <span className="text-[11px] uppercase">Distance</span>
                      </div>

                      <div className="mt-2 text-sm text-white">
                        {route.distance}
                      </div>
                    </div>

                    <div className="rounded-xl bg-white/[0.03] p-3">
                      <div className="flex items-center gap-2 text-[var(--electric)]">
                        <Clock3 size={14} />
                        <span className="text-[11px] uppercase">Duration</span>
                      </div>

                      <div className="mt-2 text-sm text-white">
                        {route.duration}
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                    <div>
                      <div className="text-xs text-[var(--muted)]">
                        Estimated Fare
                      </div>

                      <div className="mt-1 text-lg font-bold text-[var(--electric)]">
                        {route.price}
                      </div>
                    </div>

                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl bg-[var(--electric)] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black transition hover:scale-105"
                    >
                      Book Ride
                    </a>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-[var(--muted)] text-sm mb-4">
            Don't see your destination? We travel across India.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-[var(--electric)]/40 px-8 py-3 text-sm uppercase tracking-[0.12em] text-[var(--electric)] transition hover:bg-[var(--electric)]/10"
          >
            Enquire Custom Route
          </a>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  const reviews = [
    {
      name: "Ramesh Patil",
      city: "Solapur → Pune",
      rating: 5,
      review:
        "Excellent service! The Ertiga was spotlessly clean and the driver was very professional. Reached Pune on time. Highly recommended for family trips.",
      initials: "RP",
    },
    {
      name: "Anjali Sharma",
      city: "Solapur → Hyderabad",
      rating: 5,
      review:
        "Booked for my parents' trip to Hyderabad. Driver was punctual, polite and drove very safely. Will definitely use Zenyatra again!",
      initials: "AS",
    },
    {
      name: "Kiran Desai",
      city: "Solapur → Bangalore",
      rating: 5,
      review:
        "Used the Baleno for a business trip to Bangalore. AC was perfect, music system worked great. A truly premium experience at reasonable rates.",
      initials: "KD",
    },
    {
      name: "Priya & Vikram",
      city: "Wedding Transfer",
      rating: 5,
      review:
        "They handled our entire wedding day travel flawlessly — baraat, venue drops, everything. The car was beautifully presented too. Thank you Zenyatra!",
      initials: "PV",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[var(--black)] py-[4rem] px-6 xl:px-12">
      <div className="pointer-events-none absolute left-[-100px] top-[10%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,_rgba(11,182,255,0.08)_0%,_transparent_70%)]" />
      <div className="mx-auto max-w-[1400px]">
        <div className="text-center mb-16">
          <SectionLabel>Testimonials</SectionLabel>
          <SectionTitle light>Voices of Our Travellers</SectionTitle>
          <GoldDivider />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {reviews.map((review, index) => (
            <FadeIn key={review.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.1)" }}
                className="relative h-full flex flex-col overflow-hidden rounded-sm border border-[var(--white)]/10 bg-[var(--black-2)] p-8"
              >
                <div className="absolute right-6 top-6 text-[3rem] text-[var(--electric)]/12">
                  "
                </div>
                <div className="mb-4 flex gap-1 text-[var(--electric)]">
                  {Array.from({ length: review.rating }).map((_, starIndex) => (
                    <span key={starIndex}>★</span>
                  ))}
                </div>
                <p className="flex-1 mb-6 text-sm italic text-[var(--white)]/75 leading-7">
                  "{review.review}"
                </p>
                <div className="flex items-center gap-3 border-t border-[var(--white)]/10 pt-5 text-sm">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[var(--electric-light)] to-[var(--electric)] text-[0.75rem] font-bold text-[var(--black)]">
                    {review.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--white)]">
                      {review.name}
                    </div>
                    <div className="text-[var(--muted)] text-xs">
                      {review.city}
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BookingSection() {
  const [form, setForm] = useState({
    pickup: "",
    drop: "",
    date: "",
    vehicle: "",
    passengers: "1",
    name: "",
    phone: "",
  });

  const handleChange = (event) =>
    setForm({ ...form, [event.target.name]: event.target.value });

  const handleSubmit = () => {
    const msg = encodeURIComponent(
      `🚗 *New Booking Request — Zenyatra*\n\n👤 Name: ${form.name}\n📞 Phone: ${form.phone}\n📍 Pickup: ${form.pickup}\n🏁 Drop: ${form.drop}\n📅 Date: ${form.date}\n🚘 Vehicle: ${form.vehicle || "Any"}\n👥 Passengers: ${form.passengers}\n\nPlease confirm availability.`,
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  const fields = [
    {
      label: "Your Name",
      name: "name",
      placeholder: "Full Name",
      type: "text",
    },
    {
      label: "Phone Number",
      name: "phone",
      placeholder: "+91 98765 43210",
      type: "tel",
    },
    {
      label: "Pickup Location",
      name: "pickup",
      placeholder: "e.g. Solapur, Vidyanagar",
      type: "text",
    },
    {
      label: "Drop Location",
      name: "drop",
      placeholder: "e.g. Hyderabad, Banjara Hills",
      type: "text",
    },
    { label: "Travel Date", name: "date", placeholder: "", type: "date" },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[var(--black)] py-[5rem] px-6 xl:px-12"
    >
      <div className="relative mx-auto max-w-[800px]">
        <div className="text-center mb-8">
          <SectionLabel>Book Your Journey</SectionLabel>
          <SectionTitle>Plan Your Ride</SectionTitle>
          <GoldDivider />
          <p className="mx-auto mt-4 max-w-[520px] text-sm leading-7 text-[var(--muted)]">
            Share your travel details and we’ll connect you directly with our
            booking team on WhatsApp for a fast confirmation.
          </p>
        </div>
        <FadeIn>
          <div className="mb-8 grid grid-cols-3 gap-3">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-center">
              <div className="text-lg font-bold text-[var(--electric)]">
                15 Min
              </div>
              <div className="text-xs text-[var(--muted)]">Response Time</div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-center">
              <div className="text-lg font-bold text-[var(--electric)]">
                24×7
              </div>
              <div className="text-xs text-[var(--muted)]">Booking Support</div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-center">
              <div className="text-lg font-bold text-[var(--electric)]">
                500+
              </div>
              <div className="text-xs text-[var(--muted)]">Trips Completed</div>
            </div>
          </div>
          <div className="rounded-[28px] border border-[var(--electric)]/10 bg-gradient-to-b from-[#131417] to-[#0c0d10] p-8 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <div className="grid gap-5 sm:grid-cols-2">
              {fields.map((field) => (
                <div key={field.name}>
                  <label className="mb-2 block text-[0.65rem] uppercase tracking-[0.15em] text-[var(--electric)] font-semibold">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={form[field.name]}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-all duration-300 focus:border-[var(--electric)] focus:ring-1 focus:ring-[var(--electric)]"
                  />
                </div>
              ))}
              <div>
                <label className="mb-2 block text-[0.65rem] uppercase tracking-[0.15em] text-[var(--electric)] font-semibold">
                  Vehicle
                </label>
                <select
                  name="vehicle"
                  value={form.vehicle}
                  onChange={handleChange}
                  className="w-full cursor-pointer rounded-sm border border-[var(--electric)]/20 bg-[var(--black)]/60 px-4 py-3 text-sm text-[var(--white)] outline-none transition duration-200 focus:border-[var(--electric)]"
                >
                  <option value="" className="bg-[var(--black-2)]">
                    Any Available
                  </option>
                  <option value="Baleno" className="bg-[var(--black-2)]">
                    Maruti Baleno (4 Seater)
                  </option>
                  <option value="Ertiga" className="bg-[var(--black-2)]">
                    Maruti Ertiga (6 Seater)
                  </option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-[0.65rem] uppercase tracking-[0.15em] text-[var(--electric)] font-semibold">
                  Passengers
                </label>
                <select
                  name="passengers"
                  value={form.passengers}
                  onChange={handleChange}
                  className="w-full cursor-pointer rounded-sm border border-[var(--electric)]/20 bg-[var(--black)]/60 px-4 py-3 text-sm text-[var(--white)] outline-none transition duration-200 focus:border-[var(--electric)]"
                >
                  {["1", "2", "3", "4", "5", "6"].map((passenger) => (
                    <option
                      key={passenger}
                      value={passenger}
                      className="bg-[var(--black-2)]"
                    >
                      {passenger} Passenger{passenger !== "1" ? "s" : ""}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button
              type="button"
              onClick={handleSubmit}
              className="mt-8 w-full rounded-xl bg-gradient-to-r from-[var(--electric)] to-[var(--electric-light)] px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-black transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_20px_50px_rgba(11,182,255,0.35)]"
            >
              Check Availability on WhatsApp →
            </button>
            <p className="mt-4 text-center text-[0.72rem] text-[var(--muted)]">
              Your details will open WhatsApp for direct confirmation with our
              team.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--black)] px-6 py-10 xl:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/images/zenyatra-logo-icon.png"
              alt="Zenyatra"
              className="h-10 w-10 object-contain"
            />

            <div>
              <div className="font-display text-2xl text-white">
                ZEN<span className="text-[var(--electric)]">YATRA</span>
              </div>

              <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--electric)]">
                Travel Beyond Boundaries
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="mt-5 max-w-[600px] text-sm leading-7 text-[var(--muted)]">
            Premium interstate travel service connecting Maharashtra, Telangana,
            Karnataka and Andhra Pradesh with safe, comfortable and reliable
            rides.
          </p>

          {/* Contact */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--muted)]">
            <span>📍 Solapur, Maharashtra</span>
            <span>📞 +91 XXXXX XXXXX</span>
          </div>
          {/* Copyright */}
          <div className="mt-8 border-t border-white/10 pt-6 text-xs text-[var(--muted)] w-full">
            © 2025 Zenyatra Travels. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export function FloatingWA() {
  return (
    <motion.a
      href={WA_LINK}
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--electric)] shadow-[0_4px_20px_rgba(11,182,255,0.4)] text-[var(--black)]"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </motion.a>
  );
}
