import { useState } from 'react';
import { motion } from 'framer-motion';
import { WA_LINK, WHATSAPP_NUMBER } from './constants.jsx';
import { FadeIn, GoldDivider, SectionLabel, SectionTitle } from './atoms.jsx';

export function QuickRideSection() {
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [vehicle, setVehicle] = useState('4-seater');
  const [distance, setDistance] = useState(null);

  const locations = ['Solapur', 'Pune', 'Hyderabad', 'Bangalore', 'Mumbai'];

  const mockDistances = {
    'solapur-pune': 250,
    'solapur-hyderabad': 220,
    'solapur-bangalore': 400,
    'solapur-mumbai': 450,
    'pune-hyderabad': 300,
    'pune-bangalore': 350,
    'pune-mumbai': 200,
  };

  const calculateDistance = () => {
    const key = `${pickup.toLowerCase()}-${drop.toLowerCase()}`;
    const dist = mockDistances[key] || Math.floor(Math.random() * 300 + 50);
    setDistance(dist);
  };

  const pricePerKm = vehicle === '4-seater' ? 14 : 18;
  const totalPrice = distance ? distance * pricePerKm : null;

  const benefits = [
    { icon: '📍', title: 'Door-to-door service', desc: 'Pickup and drop from your location.' },
    { icon: '👨‍✈️', title: 'Verified drivers', desc: 'Experienced professionals.' },
    { icon: '⚡', title: 'Fast booking', desc: 'Get price in seconds.' },
  ];

  return (
    <section className="bg-[var(--black)] py-[4rem] px-6 xl:px-12">
      <div className="mx-auto max-w-[1400px] grid gap-6 lg:grid-cols-[1.05fr_0.95fr] items-start">
        <div className="rounded-[1.6rem] border border-[var(--electric)]/10 bg-[var(--black-2)] p-6 sm:p-8 shadow-[0_30px_70px_rgba(0,0,0,0.22)]">
          <SectionLabel>Quick Ride</SectionLabel>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-[var(--white)]">Get your price</h2>
          <p className="mt-3 max-w-[560px] text-xs leading-6 text-[var(--muted)]">Enter locations, select vehicle and see instant pricing with live distance.</p>

          <div className="mt-8 grid gap-3">
            <label className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--electric)]">Pickup</label>
            <div className="flex items-center gap-3 rounded-sm border border-[var(--white)]/10 bg-[var(--black)] px-4 py-2.5 text-sm text-[var(--white)]">
              <span className="text-[var(--electric)]">📍</span>
              <select
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="w-full bg-transparent outline-none text-sm cursor-pointer"
              >
                <option value="">Select pickup location</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc} className="bg-[var(--black-2)]">{loc}</option>
                ))}
              </select>
            </div>

            <label className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--electric)]">Drop</label>
            <div className="flex items-center gap-3 rounded-sm border border-[var(--white)]/10 bg-[var(--black)] px-4 py-2.5 text-sm text-[var(--white)]">
              <span className="text-[var(--electric)]">🎯</span>
              <select
                value={drop}
                onChange={(e) => setDrop(e.target.value)}
                className="w-full bg-transparent outline-none text-sm cursor-pointer"
              >
                <option value="">Select drop location</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc} className="bg-[var(--black-2)]">{loc}</option>
                ))}
              </select>
            </div>

            <label className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--electric)]">Vehicle</label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: '4-seater', label: '4-Seater', price: '₹14/km' },
                { id: '7-seater', label: '7-Seater', price: '₹18/km' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setVehicle(opt.id)}
                  className={`rounded-sm border px-3 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] transition ${
                    vehicle === opt.id
                      ? 'border-[var(--electric)] bg-[var(--electric)]/15 text-[var(--electric)]'
                      : 'border-[var(--white)]/10 bg-[var(--black)] text-[var(--white)]/70 hover:border-[var(--electric)]/40'
                  }`}
                >
                  <div>{opt.label}</div>
                  <div className="mt-0.5 text-[0.6rem] text-[var(--electric)]">{opt.price}</div>
                </button>
              ))}
            </div>

            <button
              onClick={calculateDistance}
              disabled={!pickup || !drop}
              className="w-full rounded-sm bg-gradient-to-br from-[var(--electric-light)] to-[var(--electric)] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--black)] transition duration-200 hover:opacity-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Get Price
            </button>

            {distance && (
              <div className="space-y-2 rounded-sm border border-[var(--electric)]/20 bg-[var(--electric)]/5 p-3">
                <div className="flex items-center justify-between">
                  <span className="text-[0.65rem] uppercase tracking-[0.12em] text-[var(--muted)]">Distance</span>
                  <span className="text-base font-semibold text-[var(--electric)]">{distance} km</span>
                </div>
                <div className="border-t border-[var(--electric)]/10 pt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[0.65rem] uppercase tracking-[0.12em] text-[var(--muted)]">Estimated Fare</span>
                    <span className="text-xl font-bold text-[var(--white)]">₹{totalPrice}</span>
                  </div>
                  <p className="mt-1.5 text-[0.6rem] text-[var(--muted)]">{vehicle === '4-seater' ? '4-Seater' : '7-Seater'} • {pricePerKm}/km</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[1.75rem] border border-[var(--electric)]/10 bg-[var(--electric)]/10 p-6 sm:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(11,182,255,0.18),transparent_45%)] pointer-events-none" />
          <div className="relative space-y-4">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--electric)]">Why choose Zenyatra</p>
              <h3 className="mt-2 text-2xl font-semibold text-[var(--white)]">Trusted rides</h3>
            </div>

            <div className="space-y-3">
              {benefits.map((item) => (
                <div key={item.title} className="rounded-sm border border-[var(--white)]/10 bg-[var(--black)]/70 p-3 shadow-[0_16px_40px_rgba(0,0,0,0.14)]">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--electric)]/10 text-xl text-[var(--electric)] flex-shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="text-sm font-semibold text-[var(--white)]">{item.title}</h4>
                      <p className="mt-0.5 text-xs leading-5 text-[var(--muted)]">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustSection() {
  const badges = [
    { icon: '🛡️', title: 'Interstate Permit', sub: 'Fully licensed across states' },
    { icon: '👨‍✈️', title: 'Expert Drivers', sub: 'Trained & verified chauffeurs' },
    { icon: '🕐', title: '24 / 7 Service', sub: 'Round-the-clock availability' },
    { icon: '🚗', title: 'Safe Travel', sub: 'GPS tracked, insured fleet' },
    { icon: '⭐', title: '500+ Families', sub: 'Trusted across Maharashtra' },
    { icon: '💼', title: 'Corporate Ready', sub: 'Invoice & receipt provided' },
  ];

  return (
    <section className="bg-[var(--black-2)] border-y border-[var(--electric)]/10 py-[5rem] px-6 xl:px-12">
      <div className="mx-auto max-w-[1400px] grid gap-3 bg-[var(--electric-soft)] border border-[var(--electric-soft)] sm:grid-cols-2 lg:grid-cols-3">
        {badges.map((badge, index) => (
          <FadeIn key={badge.title} delay={index * 0.07}>
            <motion.div
              whileHover={{ background: 'rgba(11,182,255,0.08)' }}
              className="glass p-8 text-center transition-colors"
            >
              <div className="mb-3 text-2xl">{badge.icon}</div>
              <div className="font-display text-lg font-medium text-[var(--white)] mb-1">{badge.title}</div>
              <p className="text-sm text-[var(--muted)] leading-relaxed">{badge.sub}</p>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

export function FleetSection() {
  const cars = [
    {
      name: 'Maruti Suzuki Baleno',
      type: 'Premium Hatchback',
      image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&q=80',
      seats: 4,
      luggage: '2 Medium Bags',
      price: '₹14/km',
      features: ['Full AC', 'Music System', 'USB Charging', 'Comfortable Seating', 'Smooth Highway Ride'],
      ideal: 'Couple / Small Family',
      badge: 'Best for City & Outstation',
    },
    {
      name: 'Maruti Suzuki Ertiga',
      type: 'Premium MPV',
      image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80',
      seats: 6,
      luggage: '4 Large Bags',
      price: '₹18/km',
      features: ['Full AC', 'Captain Seats', 'USB Charging', 'Spacious Cabin', 'Long-Distance Comfort'],
      ideal: 'Families & Groups',
      badge: 'Most Popular',
    },
  ];

  return (
    <section id="fleet" className="bg-[var(--black)] py-[7rem] px-6 xl:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="text-center mb-16">
          <SectionLabel>Our Fleet</SectionLabel>
          <SectionTitle>Curated For Comfort</SectionTitle>
          <GoldDivider />
          <p className="mx-auto mt-4 max-w-[500px] text-center text-[var(--muted)] leading-7 text-sm">Meticulously maintained vehicles to ensure every journey feels first-class.</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {cars.map((car, index) => (
            <FadeIn key={car.name} delay={index * 0.15}>
              <motion.div whileHover={{ y: -8 }} className="gold-border-hover overflow-hidden rounded-sm border border-[var(--electric)]/15 bg-[var(--black-2)]">
                {car.badge && (
                  <div className="absolute right-4 top-4 z-10 rounded-sm bg-gradient-to-br from-[var(--electric-light)] to-[var(--electric)] px-3 py-1 text-[11px] font-semibold uppercase text-[var(--black)]">
                    {car.badge}
                  </div>
                )}
                <div className="relative h-[220px] overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src={car.image}
                    alt={car.name}
                    className="h-full w-full object-cover brightness-[0.8] saturate-[0.9]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/90 to-transparent" />
                  <div className="absolute left-5 bottom-5">
                    <div className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--electric)]">{car.type}</div>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl font-medium text-[var(--white)]">{car.name}</h3>
                  <div className="mt-4 flex items-center justify-between rounded-sm border border-[var(--electric)]/10 bg-[var(--black)]/80 px-4 py-3 text-sm text-[var(--white)]/85">
                    <span className="uppercase tracking-[0.12em] text-[var(--muted)]">Fair price</span>
                    <span className="font-semibold text-[var(--electric)]">{car.price}</span>
                  </div>
                  <div className="mb-6 mt-4 flex flex-wrap gap-6 border-b border-white/10 pb-4 text-sm text-[var(--white)]/80">
                    <div className="text-center">
                      <div>👥</div>
                      <div className="mt-1">{car.seats} Seats</div>
                    </div>
                    <div className="text-center">
                      <div>🧳</div>
                      <div className="mt-1">{car.luggage}</div>
                    </div>
                    <div className="text-center">
                      <div>❄️</div>
                      <div className="mt-1">Full AC</div>
                    </div>
                  </div>
                  <div className="space-y-2 mb-5">
                    {car.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-[0.85rem] text-[var(--white)]/70">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--electric)]" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between border-t border-white/10 pt-4 text-sm">
                    <div>
                      <div className="text-[var(--muted)] uppercase tracking-[0.1em]">Ideal for</div>
                      <div className="text-[var(--electric)] font-semibold">{car.ideal}</div>
                    </div>
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-sm border border-[var(--electric)]/40 px-4 py-2 text-[0.7rem] font-semibold uppercase text-[var(--electric)] transition hover:bg-[var(--electric)]/10 hover:text-[var(--white)]"
                    >
                      Book Now
                    </a>
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

export function ServicesSection() {
  const services = [
    { icon: '🗺️', title: 'Intercity Travel', desc: 'Seamless point-to-point travel between cities with Expert Drivers.', tag: 'Most Booked' },
    { icon: '✈️', title: 'Airport Transfers', desc: 'Punctual pickup and drop for all major airports — Pune, Hyderabad, Mumbai.', tag: null },
    { icon: '👨‍👩‍👧', title: 'Family Tours', desc: 'Comfortable, spacious rides designed for family comfort across long distances.', tag: null },
    { icon: '💍', title: 'Wedding Travel', desc: 'Elegant car service for baraat, venue transfers & post-wedding travel.', tag: 'Premium' },
    { icon: '💼', title: 'Corporate Travel', desc: 'Executive travel with invoicing for teams, clients & conference trips.', tag: null },
    { icon: '🛤️', title: 'Long-Distance Rides', desc: 'Multi-day travel packages across Maharashtra, Karnataka & Telangana.', tag: null },
  ];

  return (
    <section id="services" className="relative overflow-hidden bg-[var(--black)] py-[7rem] px-6 xl:px-12">
      <div className="absolute top-0 right-0 h-full w-1/2 bg-[radial-gradient(ellipse_at_right_center,rgba(11,182,255,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="mx-auto relative max-w-[1400px]">
        <div className="mb-16">
          <SectionLabel>What We Offer</SectionLabel>
          <SectionTitle light>Crafted Travel Experiences</SectionTitle>
          <GoldDivider />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.08}>
              <motion.div whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }} className="rounded-sm border border-[var(--white)]/5 bg-[var(--black-2)] p-8 transition-shadow">
                <div className="relative">
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[var(--electric-light)] to-[var(--electric)] transition-all" />
                  {service.tag && <span className="absolute right-0 top-0 rounded-sm bg-[var(--electric)]/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--electric-dark)]">{service.tag}</span>}
                </div>
                <div className="text-3xl mb-5 text-[var(--white)]">{service.icon}</div>
                <h3 className="font-display text-xl font-semibold text-[var(--white)] mb-3">{service.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-7">{service.desc}</p>
                <div className="mt-5 flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.05em] text-[var(--electric)]">
                  <span>Enquire</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
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
    { from: 'Solapur', to: 'Hyderabad', distance: '~220 km', duration: '~4 hrs', image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80', state: 'Telangana' },
    { from: 'Solapur', to: 'Pune', distance: '~250 km', duration: '~4.5 hrs', image: 'https://images.unsplash.com/photo-1598847768571-7a9e8fc7c555?w=800&q=80', state: 'Maharashtra' },
    { from: 'Solapur', to: 'Bangalore', distance: '~400 km', duration: '~6.5 hrs', image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&q=80', state: 'Karnataka' },
    { from: 'Solapur', to: 'Mumbai', distance: '~450 km', duration: '~7 hrs', image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=800&q=80', state: 'Maharashtra' },
  ];

  return (
    <section id="routes" className="bg-[var(--black-2)] py-[7rem] px-6 xl:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="text-center mb-16">
          <SectionLabel>Popular Routes</SectionLabel>
          <SectionTitle>Where We Take You</SectionTitle>
          <GoldDivider />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {routes.map((route, index) => (
            <FadeIn key={route.to} delay={index * 0.1}>
              <motion.div whileHover={{ y: -6 }} className="route-card relative overflow-hidden rounded-sm border border-[var(--electric)]/12 h-[260px] cursor-pointer">
                <img src={route.image} alt={route.to} className="h-full w-full object-cover brightness-[0.4] saturate-[0.8]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--black)]/95 to-[var(--black)]/30" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--electric)] mb-2">{route.state}</span>
                  <div className="mb-3 flex items-center gap-3">
                    <span className="font-display text-xl font-medium text-[var(--white)]">{route.from}</span>
                    <div className="flex items-center gap-2 text-[var(--electric)]">
                      <span className="h-px w-5 bg-[var(--electric)]" />
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21" /></svg>
                    </div>
                    <span className="font-display text-xl font-medium text-[var(--electric)]">{route.to}</span>
                  </div>
                  <div className="flex gap-4 text-sm text-[var(--white)]/70">
                    <span>📍 {route.distance}</span>
                    <span>⏱ {route.duration}</span>
                  </div>
                  <div className="route-line mt-4" />
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-[var(--muted)] text-sm mb-4">Don't see your destination? We travel across India.</p>
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-sm border border-[var(--electric)]/40 px-8 py-3 text-sm uppercase tracking-[0.12em] text-[var(--electric)] transition hover:bg-[var(--electric)]/10">
            Enquire Custom Route
          </a>
        </div>
      </div>
    </section>
  );
}

export function GallerySection() {
  const images = [
    { src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80', span: 'col-span-2', h: '260px' },
    { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', span: '', h: '260px' },
    { src: 'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?w=600&q=80', span: '', h: '220px' },
    { src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80', span: 'col-span-2', h: '220px' },
    { src: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=600&q=80', span: '', h: '280px' },
    { src: 'https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=600&q=80', span: '', h: '280px' },
  ];

  return (
    <section id="gallery" className="bg-[var(--black)] py-[7rem] px-6 xl:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="text-center mb-16">
          <SectionLabel>Gallery</SectionLabel>
          <SectionTitle>Journeys We've Crafted</SectionTitle>
          <GoldDivider />
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ scale: 1.02, zIndex: 10 }}
              className={`overflow-hidden rounded-sm relative ${image.span ? 'sm:col-span-2' : ''}`}
              style={{ height: image.h }}
            >
              <img src={image.src} alt="Gallery image" className="h-full w-full object-cover brightness-[0.75] saturate-[0.9] transition duration-300 hover:brightness-[0.95] hover:saturate-[1.1]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--electric)]/15 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  const reviews = [
    { name: 'Ramesh Patil', city: 'Solapur → Pune', rating: 5, review: 'Excellent service! The Ertiga was spotlessly clean and the driver was very professional. Reached Pune on time. Highly recommended for family trips.', initials: 'RP' },
    { name: 'Anjali Sharma', city: 'Solapur → Hyderabad', rating: 5, review: "Booked for my parents' trip to Hyderabad. Driver was punctual, polite and drove very safely. Will definitely use Zenyatra again!", initials: 'AS' },
    { name: 'Kiran Desai', city: 'Solapur → Bangalore', rating: 5, review: 'Used the Baleno for a business trip to Bangalore. AC was perfect, music system worked great. A truly premium experience at reasonable rates.', initials: 'KD' },
    { name: 'Priya & Vikram', city: 'Wedding Transfer', rating: 5, review: 'They handled our entire wedding day travel flawlessly — baraat, venue drops, everything. The car was beautifully presented too. Thank you Zenyatra!', initials: 'PV' },
  ];

  return (
    <section className="relative overflow-hidden bg-[var(--black)] py-[7rem] px-6 xl:px-12">
      <div className="pointer-events-none absolute left-[-100px] top-[10%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,_rgba(11,182,255,0.08)_0%,_transparent_70%)]" />
      <div className="mx-auto max-w-[1400px]">
        <div className="text-center mb-16">
          <SectionLabel>Testimonials</SectionLabel>
          <SectionTitle light>Voices of Our Travellers</SectionTitle>
          <GoldDivider />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review, index) => (
            <FadeIn key={review.name} delay={index * 0.1}>
              <motion.div whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(0,0,0,0.1)' }} className="rounded-sm border border-[var(--white)]/10 bg-[var(--black-2)] p-8">
                <div className="absolute right-6 top-6 text-[3rem] text-[var(--electric)]/12">"</div>
                <div className="mb-4 flex gap-1 text-[var(--electric)]">
                  {Array.from({ length: review.rating }).map((_, starIndex) => (
                    <span key={starIndex}>★</span>
                  ))}
                </div>
                <p className="mb-6 text-sm italic text-[var(--white)]/75 leading-7">"{review.review}"</p>
                <div className="flex items-center gap-3 border-t border-[var(--white)]/10 pt-5 text-sm">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[var(--electric-light)] to-[var(--electric)] text-[0.75rem] font-bold text-[var(--black)]">
                    {review.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--white)]">{review.name}</div>
                    <div className="text-[var(--muted)] text-xs">{review.city}</div>
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
  const [form, setForm] = useState({ pickup: '', drop: '', date: '', vehicle: '', passengers: '1', name: '', phone: '' });

  const handleChange = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  const handleSubmit = () => {
    const msg = encodeURIComponent(
      `🚗 *New Booking Request — Zenyatra*\n\n👤 Name: ${form.name}\n📞 Phone: ${form.phone}\n📍 Pickup: ${form.pickup}\n🏁 Drop: ${form.drop}\n📅 Date: ${form.date}\n🚘 Vehicle: ${form.vehicle || 'Any'}\n👥 Passengers: ${form.passengers}\n\nPlease confirm availability.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  const fields = [
    { label: 'Your Name', name: 'name', placeholder: 'Full Name', type: 'text' },
    { label: 'Phone Number', name: 'phone', placeholder: '+91 98765 43210', type: 'tel' },
    { label: 'Pickup Location', name: 'pickup', placeholder: 'e.g. Solapur, Vidyanagar', type: 'text' },
    { label: 'Drop Location', name: 'drop', placeholder: 'e.g. Hyderabad, Banjara Hills', type: 'text' },
    { label: 'Travel Date', name: 'date', placeholder: '', type: 'date' },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-[var(--black-2)] py-[7rem] px-6 xl:px-12">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=40')] bg-cover bg-center brightness-10 saturate-50 pointer-events-none" />
      <div className="relative mx-auto max-w-[800px]">
        <div className="text-center mb-8">
          <SectionLabel>Book Your Journey</SectionLabel>
          <SectionTitle>Plan Your Ride</SectionTitle>
          <GoldDivider />
          <p className="mx-auto mt-4 max-w-[520px] text-sm leading-7 text-[var(--muted)]">Share your travel details and we’ll connect you directly with our booking team on WhatsApp for a fast confirmation.</p>
        </div>
        <FadeIn>
          <div className="glass rounded-sm border border-[var(--electric)]/10 p-10 sm:p-12">
            <div className="grid gap-5 sm:grid-cols-2">
              {fields.map((field) => (
                <div key={field.name}>
                  <label className="mb-2 block text-[0.65rem] uppercase tracking-[0.15em] text-[var(--electric)] font-semibold">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={form[field.name]}
                    onChange={handleChange}
                    className="w-full rounded-sm border border-[var(--electric)]/20 bg-[var(--black)]/60 px-4 py-3 text-sm text-[var(--white)] outline-none transition duration-200 focus:border-[var(--electric)]"
                  />
                </div>
              ))}
              <div>
                <label className="mb-2 block text-[0.65rem] uppercase tracking-[0.15em] text-[var(--electric)] font-semibold">Vehicle</label>
                <select name="vehicle" value={form.vehicle} onChange={handleChange} className="w-full cursor-pointer rounded-sm border border-[var(--electric)]/20 bg-[var(--black)]/60 px-4 py-3 text-sm text-[var(--white)] outline-none transition duration-200 focus:border-[var(--electric)]">
                  <option value="" className="bg-[var(--black-2)]">Any Available</option>
                  <option value="Baleno" className="bg-[var(--black-2)]">Maruti Baleno (4 Seater)</option>
                  <option value="Ertiga" className="bg-[var(--black-2)]">Maruti Ertiga (6 Seater)</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-[0.65rem] uppercase tracking-[0.15em] text-[var(--electric)] font-semibold">Passengers</label>
                <select name="passengers" value={form.passengers} onChange={handleChange} className="w-full cursor-pointer rounded-sm border border-[var(--electric)]/20 bg-[var(--black)]/60 px-4 py-3 text-sm text-[var(--white)] outline-none transition duration-200 focus:border-[var(--electric)]">
                  {['1', '2', '3', '4', '5', '6'].map((passenger) => (
                    <option key={passenger} value={passenger} className="bg-[var(--black-2)]">{passenger} Passenger{passenger !== '1' ? 's' : ''}</option>
                  ))}
                </select>
              </div>
            </div>
            <button type="button" onClick={handleSubmit} className="mt-8 w-full rounded-sm bg-gradient-to-br from-[var(--electric-light)] to-[var(--electric)] px-6 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-[var(--black)] transition duration-200 hover:shadow-[0_14px_50px_rgba(11,182,255,0.25)]">
              Send Booking Request on WhatsApp
            </button>
            <p className="mt-4 text-center text-[0.72rem] text-[var(--muted)]">Your details will open WhatsApp for direct confirmation with our team.</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export function Footer() {
  const quickLinks = ['Home', 'Services', 'Fleet', 'Routes', 'Gallery', 'Book Now'];
  const services = ['Intercity Travel', 'Airport Transfers', 'Family Tours', 'Wedding Travel', 'Corporate Travel', 'Long Distance'];

  return (
    <footer className="bg-[var(--black-2)] border-t border-[var(--electric)]/12 px-6 py-16 xl:px-12">
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-4">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-[var(--black-2)]">
              <img
                src="/images/zenyatra-logo-icon.png"
                alt="Zenyatra logo"
                className="h-8 w-8 object-contain"
              />
            </div>
            <div>
              <div className="font-display text-xl text-[var(--white)]">
                ZEN<span className="text-[var(--electric)]">YATRA</span>
              </div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--electric)]">Travel Beyond Boundaries</div>
            </div>
          </div>
          <p className="text-sm leading-7 text-[var(--muted)]">Premium interstate car travel service based in Solapur, Maharashtra. Safe, comfortable, and professional journeys across India.</p>
        </div>
        <div>
          <h4 className="mb-5 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--electric)]">Quick Links</h4>
          <div className="space-y-3 text-sm text-[var(--muted)]">
            {quickLinks.map((link) => {
              const href = link === 'Book Now' ? '#contact' : `#${link.toLowerCase()}`;
              return (
                <a key={link} href={href} className="block transition-colors duration-200 hover:text-[var(--electric)]">
                  {link}
                </a>
              );
            })}
          </div>
        </div>
        <div>
          <h4 className="mb-5 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--electric)]">Services</h4>
          <div className="space-y-3 text-sm text-[var(--muted)]">
            {services.map((service) => (
              <div key={service}>{service}</div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="mb-5 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--electric)]">Contact</h4>
          <div className="space-y-5 text-sm text-[var(--muted)]">
            <div>
              <div className="mb-2 uppercase tracking-[0.1em] text-[var(--electric)] text-[0.7rem]">Location</div>
              <div>Solapur, Maharashtra<br />India — 413 001</div>
            </div>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-sm bg-[var(--electric)] px-4 py-3 text-sm font-semibold text-[var(--black)] transition duration-200 hover:opacity-90">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-[var(--muted)]">
        <div>© 2025 Zenyatra Travels. All rights reserved. | Solapur, Maharashtra</div>
        <div>🛡️ Interstate Permit | 🚗 Fully Insured | ⭐ 5-Star Rated</div>
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
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--electric)] shadow-[0_4px_20px_rgba(11,182,255,0.4)] text-[var(--black)]"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    </motion.a>
  );
}
