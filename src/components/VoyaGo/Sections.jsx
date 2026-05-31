import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { WA_LINK, WHATSAPP_NUMBER } from "./constants.jsx";
import { FadeIn, GoldDivider, SectionLabel, SectionTitle } from "./atoms.jsx";
import ertiga from "../../../src/assets/ertiga-car-pic.jpeg";
import hyderabad from "../../../src/assets/Hyderabad.png";
import pune from "../../../src/assets/Pune.png";
import bangalore from "../../../src/assets/Banglore.png";
import mumbai from "../../../src/assets/Mumbai.png";
import sedan from "../../../src/assets/fleet/sedan.png";
import suv from "../../../src/assets/fleet/suv.png";
import tempo from "../../../src/assets/fleet/tempo.png";
import miniTraveller from "../../../src/assets/fleet/mini-traveller.png";
import bus from "../../../src/assets/fleet/bus.png";
import luxuryBus from "../../../src/assets/fleet/luxury-bus.png";
import { Phone, MessageCircle } from "lucide-react";

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
      icon: Car,
      title: "Wide Vehicle Selection",
      desc: "From sedans to full-size buses for every travel requirement.",
    },
    {
      icon: MapPinned,
      title: "Door-to-Door Service",
      desc: "Pickup and drop from your preferred location.",
    },
    {
      icon: Headset,
      title: "24×7 Travel Assistance",
      desc: "Dedicated support before and throughout your journey.",
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
                {
                  id: "sedan",
                  label: "Sedan",
                  sub: "4 Seater",
                  price: "₹12/km",
                },
                {
                  id: "suv",
                  label: "SUV / MUV",
                  sub: "7 Seater",
                  price: "₹14/km",
                },
                {
                  id: "traveller12",
                  label: "Tempo Traveller",
                  sub: "12 Seater",
                  price: "₹20/km",
                },
                {
                  id: "traveller17",
                  label: "Mini Traveller",
                  sub: "17 Seater",
                  price: "₹24/km",
                },
                {
                  id: "minibus",
                  label: "Mini Bus",
                  sub: "26 Seater",
                  price: "₹32/km",
                },
                { id: "bus", label: "Bus", sub: "35+ Seater", price: "₹40/km" },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setVehicle(opt.id)}
                  className={`rounded-xl border px-3 py-3 transition-all duration-300 relative ${
                    vehicle === opt.id
                      ? "border-[var(--electric)] bg-[var(--electric)]/15 shadow-[0_0_20px_rgba(11,182,255,0.12)]"
                      : "border-white/10 bg-[var(--black)] hover:border-[var(--electric)]/40"
                  }`}
                >
                  {/* Label */}
                  <div
                    className={`text-xs font-semibold uppercase tracking-[0.08em] ${
                      vehicle === opt.id
                        ? "text-[var(--electric)]"
                        : "text-white"
                    }`}
                  >
                    {opt.label}
                  </div>

                  {/* Sub */}
                  <div className="mt-1 text-[11px] font-medium text-white/60">
                    {opt.sub}
                  </div>

                  {/* Price badge (only when selected) */}
                  {vehicle === opt.id && (
                    <div className="absolute top-2 right-2">
                      <span className="flex items-center rounded-full bg-[var(--electric)]/15 px-3 py-1 text-[11px] font-semibold text-[var(--electric)] border border-[var(--electric)]/30 shadow-sm backdrop-blur-md">
                        {opt.price}
                      </span>
                    </div>
                  )}
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
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--electric)]">
            Why Zenyatra
          </p>

          <h2 className="mt-4 text-3xl sm:text-5xl font-semibold text-white">
            Travel Made Reliable
          </h2>

          <p className="mt-5 max-w-[620px] mx-auto text-sm sm:text-base text-[var(--muted)] leading-7">
            Comfortable interstate travel backed by professional chauffeurs,
            transparent pricing and dedicated support.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[var(--electric)]/30 hover:bg-white/[0.03] hover:shadow-[0_10px_40px_rgba(11,182,255,0.08)]"
              >
                {/* Icon */}
                <div className="mb-5 flex justify-center">
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--electric)]/10 group-hover:bg-[var(--electric)]/15 transition-all duration-300">
                    {/* glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-[var(--electric)]/10 blur-xl opacity-0 group-hover:opacity-60 transition-all duration-300" />

                    <Icon
                      size={28}
                      className="text-[var(--electric)] relative z-10"
                      strokeWidth={1.8}
                    />
                  </div>
                </div>

                {/* Value */}
                <div className="text-2xl sm:text-3xl font-semibold text-white tracking-wide">
                  {item.value}
                </div>

                {/* Label */}
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
  const fleet = [
    {
      name: "Sedan",
      capacity: "4 Seater",
      image: sedan,
      price: "₹12–₹15/km",
      badge: "Budget Friendly",
    },
    {
      name: "SUV / MUV",
      capacity: "7 Seater",
      image: suv,
      price: "₹16–₹20/km",
      badge: "Most Popular",
    },
    {
      name: "Tempo Traveller",
      capacity: "12 Seater",
      image: tempo,
      price: "₹22–₹28/km",
      badge: "Group Travel",
    },
    {
      name: "Mini Traveller",
      capacity: "17 Seater",
      image: miniTraveller,
      price: "₹28–₹35/km",
      badge: "Large Groups",
    },
    {
      name: "Mini Bus",
      capacity: "26 Seater",
      image: bus,
      price: "₹35–₹45/km",
      badge: "Tours & Events",
    },
    {
      name: "Bus / Coach",
      capacity: "35+ Seater",
      image: luxuryBus,
      price: "₹45–₹60/km",
      badge: "Corporate & Weddings",
    },
  ];

  const handleBookNow = (vehicleName) => {
    const el = document.getElementById("contact");

    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }

    // optional: store selected vehicle
    localStorage.setItem("selectedVehicle", vehicleName);
  };

  return (
    <section className="bg-[var(--black)] py-20 px-6 xl:px-12">
      <div className="mx-auto max-w-[1300px]">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--electric)]">
            Fleet Options
          </p>

          <h2 className="mt-3 text-4xl font-semibold text-white">
            Premium Travel Vehicles
          </h2>

          <p className="mt-3 text-sm text-white/50 max-w-[520px] mx-auto">
            Choose the perfect ride for your journey — comfort, space, and
            reliability in every category.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {fleet.map((car) => (
            <div
              key={car.name}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[var(--electric)]/30 transition"
            >
              {/* IMAGE */}
              <div className="relative h-[220px] overflow-hidden">
                <img
                  src={car.image}
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* BADGE */}
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center rounded-full bg-[var(--electric)]/15 px-4 py-2 text-[12px] font-semibold text-[var(--electric)] border border-[var(--electric)]/30 backdrop-blur-md shadow-sm">
                    {car.badge}
                  </span>
                </div>

                {/* TITLE */}
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-semibold text-white">
                    {car.name}
                  </h3>

                  <p className="text-xs text-white/60 mt-1">{car.capacity}</p>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5 space-y-4">
                {/* PRICE */}
                <div className="flex items-center justify-between">
                  <span className="text-white/50 text-sm">Pricing</span>

                  <span className="text-[var(--electric)] font-bold text-base px-3 py-1 rounded-full bg-[var(--electric)]/10 border border-[var(--electric)]/20">
                    {car.price}
                  </span>
                </div>

                {/* CTA */}
                <button
                  onClick={() => handleBookNow(car.name)}
                  className="w-full mt-2 rounded-xl bg-gradient-to-r from-[var(--electric)] to-[var(--electric-light)] py-3 font-semibold text-black transition hover:shadow-[0_12px_35px_rgba(11,182,255,0.25)]"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RoutesSection() {
  const places = [
    {
      city: "Hyderabad",
      image: hyderabad,
      price: "From ₹3,080",
    },
    {
      city: "Pune",
      image: pune,
      price: "From ₹3,500",
    },
    {
      city: "Bangalore",
      image: bangalore,
      price: "From ₹5,600",
    },
    {
      city: "Mumbai",
      image: mumbai,
      price: "From ₹6,300",
    },
  ];

  const handleBook = (city) => {
    const el = document.getElementById("contact");

    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }

    // store selected destination
    localStorage.setItem("selectedDrop", city);
  };

  return (
    <section className="bg-[var(--black-2)] py-20 px-6 xl:px-12">
      <div className="mx-auto max-w-[1300px]">
        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--electric)]">
            Popular Bookings
          </p>

          <h2 className="mt-3 text-4xl font-semibold text-white">
            Most Booked Destinations
          </h2>

          <p className="mt-3 text-sm text-white/50 max-w-[520px] mx-auto">
            Choose your destination and get instant ride suggestions.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {places.map((place) => (
            <div
              key={place.city}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[var(--electric)]/30 transition"
            >
              {/* IMAGE */}
              <div className="relative h-[200px] overflow-hidden">
                <img
                  src={place.image}
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* CITY */}
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-semibold text-white">
                    {place.city}
                  </h3>

                  <p className="text-xs text-white/60">
                    Popular Ride Destination
                  </p>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5 space-y-4">
                {/* PRICE */}
                <div className="flex items-center justify-between">
                  <span className="text-white/50 text-sm">Starting Fare</span>

                  <span className="text-[var(--electric)] font-bold text-sm">
                    {place.price}
                  </span>
                </div>

                {/* CTA */}
                <button
                  onClick={() => handleBook(place.city)}
                  className="w-full rounded-xl bg-[var(--electric)] py-3 text-sm font-semibold text-black transition hover:shadow-[0_10px_30px_rgba(11,182,255,0.25)]"
                >
                  Book Ride
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="mt-14 text-center">
          <p className="text-sm text-white/50">
            We operate across all major cities in India with sedan, SUV, and
            traveller options.
          </p>
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
        "Excellent service! The Ertiga was spotlessly clean and the driver was very professional. Reached Pune on time.",
      initials: "RP",
    },
    {
      name: "Anjali Sharma",
      city: "Solapur → Hyderabad",
      rating: 5,
      review:
        "Driver was punctual, polite and drove very safely. Highly recommended for family trips.",
      initials: "AS",
    },
    {
      name: "Kiran Desai",
      city: "Solapur → Bangalore",
      rating: 5,
      review:
        "Premium experience at reasonable rates. AC and comfort were perfect.",
      initials: "KD",
    },
    {
      name: "Priya & Vikram",
      city: "Wedding Transfer",
      rating: 5,
      review:
        "Flawless wedding travel management. Everything was perfectly handled.",
      initials: "PV",
    },
  ];

  const list = [...reviews, ...reviews]; // duplicate for seamless loop

  return (
    <section className="relative overflow-hidden bg-[var(--black)] py-20 px-6 xl:px-12">
      <div className="text-center mb-14">
        <SectionLabel>Testimonials</SectionLabel>
        <SectionTitle light>Voices of Our Travellers</SectionTitle>
        <GoldDivider />
      </div>

      {/* SCROLL WRAPPER */}
      <div className="overflow-hidden">
        <div className="flex gap-6 w-max animate-scroll">
          {list.map((review, index) => (
            <div key={index} className="min-w-[320px] sm:min-w-[340px]">
              {/* SAME CARD UI */}
              <motion.div className="relative h-full flex flex-col overflow-hidden rounded-sm border border-[var(--white)]/10 bg-[var(--black-2)] p-8">
                <div className="absolute right-6 top-6 text-[3rem] text-[var(--electric)]/12">
                  "
                </div>

                <div className="mb-4 flex gap-1 text-[var(--electric)]">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i}>★</span>
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
            </div>
          ))}
        </div>
      </div>

      {/* ANIMATION */}
      <style jsx>{`
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}

export function BookingSection() {
  const [form, setForm] = useState({
    pickup: "",
    drop: "",
    date: "",
    passengers: "1",
    name: "",
    phone: "",
  });

  const handleChange = (event) =>
    setForm({ ...form, [event.target.name]: event.target.value });

  // 🧠 SMART VEHICLE SUGGESTION (CORE LOGIC)
  const recommendedVehicle = useMemo(() => {
    const p = Number(form.passengers);

    if (p <= 4) return "Sedan (4 Seater) — ₹12–₹15/km";
    if (p <= 7) return "SUV / MUV (7 Seater) — ₹16–₹20/km";
    if (p <= 12) return "Tempo Traveller (12 Seater) — ₹22–₹28/km";
    if (p <= 17) return "Mini Traveller (17 Seater) — ₹28–₹35/km";
    if (p <= 26) return "Mini Bus (26 Seater) — ₹35–₹45/km";

    return "Bus / Coach (35+ Seater) — ₹45–₹60/km";
  }, [form.passengers]);

  const handleSubmit = () => {
    const msg = encodeURIComponent(
      `🚗 *New Booking Request — Zenyatra*\n\n👤 Name: ${form.name}\n📞 Phone: ${form.phone}\n📍 Pickup: ${form.pickup}\n🏁 Drop: ${form.drop}\n📅 Date: ${form.date}\n👥 Passengers: ${form.passengers}\n🚘 Recommended Vehicle: ${recommendedVehicle}\n\nPlease confirm availability.`,
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
    {
      label: "Travel Date",
      name: "date",
      placeholder: "",
      type: "date",
    },
  ];
  useEffect(() => {
    const selected = localStorage.getItem("selectedVehicle");
    if (selected) {
      setForm((prev) => ({
        ...prev,
        vehicle: selected,
      }));
    }
  }, []);
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[var(--black)] py-[5rem] px-6 xl:px-12"
    >
      <div className="relative mx-auto max-w-[800px]">
        {/* HEADER */}
        <div className="text-center mb-8">
          <SectionLabel>Book Your Journey</SectionLabel>
          <SectionTitle>Plan Your Ride</SectionTitle>
          <GoldDivider />

          <p className="mx-auto mt-4 max-w-[520px] text-sm leading-7 text-[var(--muted)]">
            Enter your trip details — we’ll automatically suggest the best
            vehicle for your group size.
          </p>
        </div>

        {/* STATS */}
        <div className="mb-8 grid grid-cols-3 gap-3">
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-center">
            <div className="text-lg font-bold text-[var(--electric)]">
              15 Min
            </div>
            <div className="text-xs text-[var(--muted)]">Response Time</div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-center">
            <div className="text-lg font-bold text-[var(--electric)]">24×7</div>
            <div className="text-xs text-[var(--muted)]">Support</div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-center">
            <div className="text-lg font-bold text-[var(--electric)]">500+</div>
            <div className="text-xs text-[var(--muted)]">Trips</div>
          </div>
        </div>

        {/* FORM */}
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
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-all focus:border-[var(--electric)]"
                />
              </div>
            ))}

            {/* PASSENGERS */}
            <div>
              <div>
                <label className="mb-2 block text-[0.65rem] uppercase tracking-[0.15em] text-[var(--electric)] font-semibold">
                  Passengers
                </label>

                <div className="relative">
                  <select
                    name="passengers"
                    value={form.passengers}
                    onChange={handleChange}
                    className="
        w-full cursor-pointer appearance-none
        rounded-xl border border-white/10
        bg-[#0b0c0f]
        px-4 py-3 pr-10
        text-sm text-white
        outline-none
        transition
        focus:border-[var(--electric)]
        focus:ring-1 focus:ring-[var(--electric)]
      "
                  >
                    {["4", "7", "12", "17", "26", "35"].map((p) => (
                      <option
                        key={p}
                        value={p}
                        className="bg-[#0b0c0f] text-white"
                      >
                        {p} Passenger{p !== "1" ? "s" : ""}
                      </option>
                    ))}
                  </select>

                  {/* Custom dropdown arrow */}
                  <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--electric)]">
                    ▼
                  </div>
                </div>
              </div>
            </div>

            {/* RECOMMENDATION BOX */}
            <div className="mt-6 rounded-xl border border-[var(--electric)]/20 bg-[var(--electric)]/5 p-4 text-sm text-white">
              <span className="text-[var(--electric)] font-semibold">
                Recommended Vehicle:
              </span>{" "}
              {recommendedVehicle}
            </div>

            {/* CTA */}
            <button
              type="button"
              onClick={handleSubmit}
              className="mt-8 w-full rounded-xl bg-gradient-to-r from-[var(--electric)] to-[var(--electric-light)] px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-black transition hover:scale-[1.01] hover:shadow-[0_20px_50px_rgba(11,182,255,0.35)]"
            >
              Check Availability on WhatsApp →
            </button>

            <p className="mt-4 text-center text-[0.72rem] text-[var(--muted)]">
              We’ll instantly suggest the best vehicle based on your group size.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[var(--black)] px-6 py-16 xl:px-12">
      {/* 🔥 BACKGROUND LOGO (OPACITY ONLY) */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <img
          src="/images/zenyatra-logo-icon.png"
          alt="Zenyatra Background"
          className="
            w-[75%]
            max-w-[550px]
            object-contain
            opacity-[0.5]
            scale-125
          "
        />
      </div>

      {/* DARK OVERLAY FOR READABILITY */}
      <div className="absolute inset-0 bg-black/85 z-10" />

      {/* CONTENT */}
      <div className="relative z-20 mx-auto max-w-[1400px]">
        <div className="flex flex-col items-center text-center">
          {/* LOGO HEADER */}
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

          {/* DESCRIPTION */}
          <p className="mt-6 max-w-[650px] text-sm leading-7 text-[var(--muted)]">
            Premium interstate travel service connecting Maharashtra, Telangana,
            Karnataka and Andhra Pradesh with safe, comfortable and reliable
            rides.
          </p>

          {/* CONTACT */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--muted)]">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-[var(--electric)]" />
              <span>Solapur, Maharashtra</span>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={16} className="text-[var(--electric)]" />
              <span>+91 95797 59888</span>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="mt-10 w-full border-t border-white/10 pt-6 text-sm text-[var(--muted)]">
            © 2025 Zenyatra Travels. All Rights Reserved | Website Created by{" "}
            <a
              href="https://www.linkedin.com/in/jilla-pavan"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--electric)] hover:underline font-semi-bold"
            >
              Jilla Pavan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function FloatingWA() {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-center justify-center">

      {/* 🔥 OUTER GLOW */}
      <div className="absolute h-14 w-14 rounded-full bg-[var(--electric)] opacity-30 blur-xl animate-pulse" />

      {/* 🔥 SOFT RING */}
      <div className="absolute h-16 w-16 rounded-full bg-[var(--electric)] opacity-20 blur-2xl animate-ping" />

      {/* 🔥 BUTTON */}
      <motion.a
        href={WA_LINK}
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        className="
          relative z-10
          flex h-14 w-14 items-center justify-center
          rounded-full bg-[var(--electric)]
          text-[var(--black)]
          shadow-[0_0_25px_rgba(11,182,255,0.5)]
          animate-pulse
        "
      >
        <MessageCircle size={26} />
      </motion.a>

    </div>
  );
}