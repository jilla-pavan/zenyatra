  import { FontLoader } from "./components/VoyaGo/atoms.jsx";
  import Navbar from "./components/VoyaGo/Navbar.jsx";
  import Hero from "./components/VoyaGo/Hero.jsx";
  import {
    QuickRideSection,
    TrustSection,
    FleetSection,
    RoutesSection,
    TestimonialsSection,
    BookingSection,
    Footer,
    FloatingWA,
    DiscountPanel,
  } from "./components/VoyaGo/Sections.jsx";

  export default function App() {
    return (
      <div className="grain min-h-screen bg-[var(--black)] text-[var(--white)] font-sans">

        <FontLoader />
        <Navbar />
        <Hero />
        <QuickRideSection />
        <TrustSection />
        <FleetSection />
        <RoutesSection />
        <TestimonialsSection />
        <BookingSection />
        <Footer />
        <FloatingWA />
        <DiscountPanel />
      </div>
    );
  }
