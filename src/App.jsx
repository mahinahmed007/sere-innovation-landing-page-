import Navbar from "./components/Navbar";

// Sections
import Hero from "./components/sections/Hero";
import Problem from "./components/sections/Problem";
import Solution from "./components/sections/Solution";
import Features from "./components/sections/Features";
import Benefits from "./components/sections/Benefits";
import Trust from "./components/sections/Trust";
import Audience from "./components/sections/Audience";
import CTA from "./components/sections/CTA";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="overflow-x-hidden">
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <Benefits />
        <Trust />
        <Audience />
        <CTA />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;