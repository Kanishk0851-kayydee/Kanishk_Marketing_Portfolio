'use client';

import React, { useState } from 'react';
import { Instagram, Linkedin, X } from 'lucide-react';

export default function Home() {
  const [activeModal, setActiveModal] = useState(null);

  const workDetails = {
    gdgoenka: {
      title: "GD Goenka University & Le Cordon Bleu",
      role: "Assistant Manager - Marketing",
      points: [
        "We developed brand positioning and cultural narratives for Le Cordon Bleu, resulting in 25% increase in brand awareness[cite: 3].",
        "We led cross-functional teams to align brand communication across channels[cite: 3].",
        "We implemented data-driven performance marketing strategies, improving ROI by 20%[cite: 3]."
      ]
    },
    ish: {
      title: "École Ducasse India & ISH",
      role: "Marketing Executive",
      points: [
        "We managed social media handles including Instagram, Facebook, Linkedin, and YouTube[cite: 3].",
        "We strategized social media content creation for ISH, enhancing engagement and audience growth by 30%[cite: 3].",
        "We coordinated internal marketing events and assisted in marketing strategies development for ISH, driving brand awareness[cite: 3]."
      ]
    },
    camp: {
      title: "Camp Land's End",
      role: "Social Media Coordinator",
      points: [
        "We set up the Social Media presence for the business and worked on brand awareness to establish a place in the industry[cite: 3].",
        "We strategized content creation and execution for the brand[cite: 3]."
      ]
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFBF9] text-gray-900 font-sans pb-24 selection:bg-gray-200">
      
      {/* Top Navigation Bar */}
      <div className="w-full border-t-[12px] border-gray-900">
        <nav className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold font-serif tracking-tight">Kanishk Dawar</div>
          <div className="flex flex-wrap justify-center gap-6 text-sm tracking-wide uppercase font-semibold text-gray-600">
            <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
            <a href="#work" className="hover:text-gray-900 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-gray-900 transition-colors">Projects</a>
            <a href="/KanishkDawar_Brand and Growth Marketing_2026.pdf" download className="hover:text-gray-900 transition-colors">Resume</a>
            <a href="https://www.linkedin.com/in/kanishk-dawar-63b112169" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">LinkedIn</a>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-12 px-6 max-w-4xl mx-auto">
        <img 
          src="/kanishk-headshot.jpg.jpeg" 
          alt="Kanishk Dawar" 
          className="w-32 h-32 rounded-full object-cover mb-8 shadow-md grayscale hover:grayscale-0 transition-all duration-500"
        />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-gray-900 mb-8">
          Audience-First Brand Strategy and Data-Driven Growth Marketing
        </h1>
        <a 
          href="mailto:kanishkdawar0851@gmail.com" 
          className="bg-gray-900 text-white px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-gray-700 transition-colors"
        >
          Connect on Email
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto mt-32 px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Hi, I'm Kanishk!</h2>
          <p className="mb-8 text-gray-600 leading-relaxed">
            Equipped with a Master of Global Business in Marketing and a foundational background in experiential hospitality, we bring a unique, consumer-centric perspective to brand strategy across diverse industries. We deliver audience-first marketing solutions that not only look and sound great, but align strictly with your business growth objectives. 
          </p>
          
          <h3 className="font-bold text-lg mb-4 text-gray-900 font-serif">Core Services:</h3>
          <ul className="space-y-6 text-gray-600 text-sm leading-relaxed">
            <li>
              <strong className="text-gray-900">Brand Strategy & Positioning:</strong> Your strategic objectives matter to us. That's why we craft audience-centric brand storytelling frameworks to strengthen digital visibility and brand recall across modern markets.
            </li>
            <li>
              <strong className="text-gray-900">Growth Marketing:</strong> Bridging the gap between creative and analytics. We develop performance-led audience acquisition strategies using data-driven targeting, consistently improving engagement ROI.
            </li>
            <li>
              <strong className="text-gray-900">Content & Community Strategy:</strong> Every business encounters challenges in standing out. We create platform-native content strategies and cultural marketing narratives that build engaged, loyal communities for forward-thinking enterprises.
            </li>
          </ul>
        </div>
        <div>
          <img 
            src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80" 
            alt="Workspace" 
            className="w-full h-auto object-cover grayscale opacity-90"
          />
        </div>
      </section>

      {/* Work Grid (Interactive) */}
      <section id="work" className="max-w-5xl mx-auto mt-32 px-6">
        <h2 className="text-3xl font-serif font-bold mb-12 text-center text-gray-900">Professional Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div onClick={() => setActiveModal('gdgoenka')} className="group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80" 
              alt="GD Goenka" 
              className="w-full aspect-square object-cover mb-4 grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <h4 className="font-bold text-sm text-center text-gray-900 group-hover:underline decoration-1 underline-offset-4">GD Goenka & Le Cordon Bleu</h4>
            <p className="text-xs text-center text-gray-500 mt-2">Click to view impact</p>
          </div>

          <div onClick={() => setActiveModal('ish')} className="group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=600&q=80" 
              alt="ISH" 
              className="w-full aspect-square object-cover mb-4 grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <h4 className="font-bold text-sm text-center text-gray-900 group-hover:underline decoration-1 underline-offset-4">École Ducasse & ISH</h4>
            <p className="text-xs text-center text-gray-500 mt-2">Click to view impact</p>
          </div>

          <div onClick={() => setActiveModal('camp')} className="group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=600&q=80" 
              alt="Camp Lands End" 
              className="w-full aspect-square object-cover mb-4 grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <h4 className="font-bold text-sm text-center text-gray-900 group-hover:underline decoration-1 underline-offset-4">{"Camp Land's End"}</h4>
            <p className="text-xs text-center text-gray-500 mt-2">Click to view impact</p>
          </div>

        </div>
      </section>

      {/* Strategic Projects Section */}
      <section id="projects" className="max-w-4xl mx-auto mt-32 px-6">
        <h2 className="text-3xl font-serif font-bold mb-12 text-center text-gray-900">Strategic Projects & Consulting</h2>
        
        <div className="space-y-12">
          {/* ArihantPlus */}
          <div className="border-t border-gray-200 pt-8">
            <span className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-2 block">Fintech / App Growth</span>
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Growth Strategy & User Activation for ArihantPlus</h3>
            <p className="text-gray-600 leading-relaxed">
              We developed a growth framework to transition a traditional brokerage to an app-first model, optimizing the lead-to-funded client conversion funnel[cite: 3]. We leveraged behavioral "nudge" tactics and media-mix strategies to reduce onboarding friction and scale DAU and 30-day retention[cite: 3].
            </p>
          </div>

          {/* TVF / Streaming */}
          <div className="border-t border-gray-200 pt-8">
            <span className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-2 block">Media / Entertainment</span>
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Fan Engagement & Monetization in Streaming (TVF)</h3>
            <p className="text-gray-600 leading-relaxed">
              We addressed the critical challenge of monetizing niche content by investigating how fan engagement strategies translate into viable revenue streams within the competitive streaming landscape[cite: 3]. The outcomes provide a data-driven framework linking specific community-building tactics to monetization success, offering actionable recommendations for global expansion in markets like the UAE[cite: 3].
            </p>
          </div>

          {/* Nestlé India */}
          <div className="border-t border-gray-200 pt-8">
            <span className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-2 block">FMCG / B2B Innovation</span>
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">B2B Product Strategy & Innovation with Nestlé India</h3>
            <p className="text-gray-600 leading-relaxed">
              We collaborated with Nestlé India to lead a project on New Product Developments (NPD) for the B2B food services sector[cite: 3]. We conducted in-depth demand analysis with hotels and restaurants to inform product ideation and align innovation with strategic market opportunities[cite: 3].
            </p>
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <section className="max-w-2xl mx-auto mt-32 mb-12 px-6">
        <h2 className="text-3xl font-serif font-bold mb-4 text-gray-900">Let's Connect</h2>
        <p className="text-gray-600 mb-8 text-sm">
          Please connect with us via email or LinkedIn, or download our full resume below for a detailed history of our education and project milestones.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="mailto:kanishkdawar0851@gmail.com" 
            className="flex-1 text-center bg-gray-100 text-gray-900 px-6 py-4 text-xs font-bold tracking-[0.1em] uppercase hover:bg-gray-200 transition-colors border border-gray-200"
          >
            Email Us
          </a>
          <a 
            href="/KanishkDawar_Brand and Growth Marketing_2026.pdf" 
            download
            className="flex-1 text-center bg-gray-900 text-white px-6 py-4 text-xs font-bold tracking-[0.1em] uppercase hover:bg-gray-800 transition-colors"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* Modal Overlay */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-gray-900/40 backdrop-blur-sm">
          <div className="bg-white max-w-lg w-full p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setActiveModal(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <X size={24} />
            </button>
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2 pr-8">{workDetails[activeModal].title}</h3>
            <p className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-6">{workDetails[activeModal].role}</p>
            <ul className="space-y-4">
              {workDetails[activeModal].points.map((point, index) => (
                <li key={index} className="flex gap-4 text-gray-600 text-sm leading-relaxed">
                  <span className="text-gray-300 mt-1">✦</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

    </div>
  );
}
