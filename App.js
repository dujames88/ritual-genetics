import React from "react";

export default function RitualGenetics() {
  return (
    <div className="bg-purple-900 text-yellow-300 min-h-screen font-serif">
      {/* Hero Section */}
      <section
        className="text-center py-20 px-4 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/d94f5502-e36a-4827-a8ee-c412c392c046.png')" }}
      >
        <h1 className="text-5xl font-bold tracking-wider">RITUAL GENETICS</h1>
        <p className="text-xl mt-4">Bred for the Tropics</p>
        <div className="mt-8 space-x-4">
          <button className="bg-yellow-300 text-purple-900 px-6 py-2 rounded-2xl shadow">Explore Strains</button>
          <button className="border border-yellow-300 px-6 py-2 rounded-2xl">Contact Us</button>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl mb-4 font-semibold">About Us</h2>
        <p className="text-lg leading-relaxed">
          Ritual Genetics is a tropical cannabis seed brand rooted in the sacred, the mystical, and the biologically elite.
          We specialize in breeding strains tailored for hot and humid climates — from Southeast Asia to Latin America.
        </p>
      </section>

      {/* Product Categories */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl text-center mb-10 font-semibold">Seed Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-purple-800 p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Fast Classics</h3>
            <p>Early-finishing landrace x hybrid combos.</p>
          </div>
          <div className="bg-purple-800 p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Up & Comers</h3>
            <p>Unique, limited-edition crosses in testing.</p>
          </div>
          <div className="bg-purple-800 p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Heavenly Hash Strains</h3>
            <p>Resin-rich varieties ideal for extractors.</p>
          </div>
          <div className="bg-purple-800 p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">In-House Exclusives</h3>
            <p>Our personal stash — not sold elsewhere.</p>
          </div>
        </div>
      </section>

      {/* Genetics & R&D */}
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl mb-4 font-semibold">Genetics & R&D</h2>
        <p className="text-lg leading-relaxed">
          Our breeding philosophy focuses on tropical adaptation: high humidity tolerance, pest resistance,
          and complex flavor profiles — all rooted in ritual and resilience.
        </p>
      </section>

      {/* How to Order */}
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl mb-4 font-semibold">How to Order</h2>
        <p className="mb-6">
          Order directly via Telegram or WhatsApp. We offer international stealth shipping.
        </p>
        <div className="space-x-4">
          <button className="bg-yellow-300 text-purple-900 px-6 py-2 rounded-2xl shadow">Message Us on Telegram</button>
          <button className="border border-yellow-300 px-6 py-2 rounded-2xl">Chat via WhatsApp</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 text-center text-sm border-t border-yellow-300">
        <p>&copy; 2025 Ritual Genetics. All rights reserved.</p>
        <p className="mt-2 italic">Seeds are sold as souvenirs. Please follow local laws.</p>
      </footer>
    </div>
  );
}
