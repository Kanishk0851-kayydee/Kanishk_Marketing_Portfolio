'use client';

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function Home() {
  const [activeModal, setActiveModal] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scrolling to trigger the navigation bar drop-down
  useEffect(() => {
    const handleScroll = () => {
      // 400px is roughly when the user scrolls past the hero section to the "About" section
      if (window.scrollY > 400) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const workDetails = {
    gdgoenka: {
      title: "GD Goenka University & Le Cordon Bleu",
      role: "Assistant Manager - Marketing",
      points: [
        "Developed brand positioning and cultural narratives for Le Cordon Bleu, resulting in 25% increase in brand awareness.",
        "Led cross-functional teams to align brand communication across channels.",
        "Implemented data-driven performance marketing strategies, improving ROI by 20%."
      ]
    },
    ish: {
      title: "École Ducasse India & Indian School of Hospitality, Gurugram",
      role: "Marketing Executive",
      points: [
        "Managed social media handles including Instagram, Facebook, Linkedin, and YouTube.",
        "Strategized social media content creation for the Indian School of Hospitality, Gurugram, enhancing engagement and audience growth by 30%.",
        "Coordinated internal marketing events and assisted in marketing strategies development for the Indian School of Hospitality, Gurugram, driving brand awareness."
      ]
    },
    camp: {
      title: "Camp Land's End",
      role: "Social Media Coordinator",
      points: [
        "Set up the Social Media presence for the business and worked on brand awareness to establish a place in the industry.",
        "Strategized content creation and execution for the brand."
      ]
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFBF9] text-gray-900 font-sans pb-24 selection:bg-gray-200">
      
      {/* CSS for the running ribbon animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
          display: flex;
          width: max-content;
        }
      `}} />

      {/* Dynamic Fixed Navigation Bar - Hidden until scrolled */}
      <div className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-in-out bg-[#FCFBF9]/95 backdrop-blur-md py-4 border-b border-gray-200 shadow-sm ${isScrolled ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <nav className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Fading Logo & Small Circle Avatar */}
          <div 
            className="flex items-center gap-4 cursor-pointer hover:opacity-70 transition-opacity" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img 
              src="/kanishk-headshot.jpg.jpeg" 
              alt="Kanishk Dawar" 
              className="w-10 h-10 rounded-full object-cover grayscale shadow-sm"
            />
            <div className="text-xl md:text-2xl font-bold font-serif tracking-tight">
              Kanishk Dawar
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm tracking-wide uppercase font-semibold text-gray-600">
            <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
            <a href="#work" className="hover:text-gray-900 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-gray-900 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-gray-900 transition-colors">Skills</a>
            <a href="/KanishkDawar_Brand and Growth Marketing_2026.pdf" download className="hover:text-gray-900 transition-colors">Resume</a>
            <a href="https://www.linkedin.com/in/kanishk-dawar-63b112169" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">LinkedIn</a>
            <a href="https://www.instagram.com/the_dancing_kooook/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">Instagram</a>
          </div>
        </nav>
      </div>

      {/* Hero Section (Split Layout) */}
      <section className="flex flex-col md:flex-row items-center justify-center pt-32 pb-20 px-6 max-w-5xl mx-auto min-h-[65vh] gap-12 md:gap-16">
        {/* Left: Image */}
        <div className="w-56 h-56 md:w-80 md:h-80 flex-shrink-0">
          <img 
            src="/kanishk-headshot.jpg.jpeg" 
            alt="Kanishk Dawar" 
            className="w-full h-full rounded-full object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
          />
        </div>
        
        {/* Right: Text */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight text-gray-900 mb-4">
            Kanishk Dawar
          </h1>
          <p className="text-xl md:text-2xl font-medium text-gray-500 mb-10 tracking-wider font-serif italic">
            Brand and Growth Marketer
          </p>
          <a 
            href="mailto:kanishkdawar0851@gmail.com" 
            className="bg-gray-900 text-white px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-gray-700 transition-colors"
          >
            Connect on Email
          </a>
        </div>
      </section>

      {/* Running Ribbon / Marquee */}
      <div className="w-full bg-gray-900 text-white py-4 overflow-hidden border-y border-gray-800">
        <div className="animate-marquee items-center gap-8 text-xs font-bold tracking-[0.2em] uppercase">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 whitespace-nowrap">
              <span>Available For Opportunities</span>
              <span className="text-gray-500">✦</span>
              <span>Post-MBA Entry-Level & Internships</span>
              <span className="text-gray-500">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto mt-32 px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Hi, I'm Kanishk!</h2>
          <p className="mb-8 text-gray-600 leading-relaxed text-justify">
            Equipped with a Master of Global Business in Marketing and a foundational background in experiential hospitality, I bring a unique, consumer-centric perspective to brand strategy across diverse industries. I deliver audience-first marketing solutions that not only look and sound great, but align strictly with your business growth objectives. 
          </p>
          
          <h3 className="font-bold text-lg mb-4 text-gray-900 font-serif">Core Services:</h3>
          <ul className="space-y-6 text-gray-600 text-sm leading-relaxed text-justify">
            <li>
              <strong className="text-gray-900">Brand Strategy & Positioning:</strong> Your strategic objectives matter to me. That's why I craft audience-centric brand storytelling frameworks to strengthen digital visibility and brand recall across modern markets.
            </li>
            <li>
              <strong className="text-gray-900">Growth Marketing:</strong> Bridging the gap between creative and analytics. I develop performance-led audience acquisition strategies using data-driven targeting, consistently improving engagement ROI.
            </li>
            <li>
              <strong className="text-gray-900">Content & Community Strategy:</strong> Every business encounters challenges in standing out. I create platform-native content strategies and cultural marketing narratives that build engaged, loyal communities for forward-thinking enterprises.
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
            <div className="overflow-hidden mb-4">
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80" 
                alt="GD Goenka" 
                className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />
            </div>
            <h4 className="font-bold text-sm text-center text-gray-900 group-hover:underline decoration-1 underline-offset-4">GD Goenka & Le Cordon Bleu</h4>
            <p className="text-xs text-center text-gray-500 mt-2">Click to view impact</p>
          </div>

          <div onClick={() => setActiveModal('ish')} className="group cursor-pointer">
            <div className="overflow-hidden mb-4">
              <img 
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=600&q=80" 
                alt="Indian School of Hospitality, Gurugram" 
                className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />
            </div>
            <h4 className="font-bold text-sm text-center text-gray-900 group-hover:underline decoration-1 underline-offset-4">École Ducasse & Indian School of Hospitality</h4>
            <p className="text-xs text-center text-gray-500 mt-2">Click to view impact</p>
          </div>

          <div onClick={() => setActiveModal('camp')} className="group cursor-pointer">
            <div className="overflow-hidden mb-4">
              <img 
                src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=600&q=80" 
                alt="Camp Lands End" 
                className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />
            </div>
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
            <p className="text-gray-600 leading-relaxed text-justify">
              Developed a growth framework to transition a traditional brokerage to an app-first model, optimizing the lead-to-funded client conversion funnel. Leveraged behavioral "nudge" tactics and media-mix strategies to reduce onboarding friction and scale DAU and 30-day retention.
            </p>
          </div>

          {/* TVF / Streaming */}
          <div className="border-t border-gray-200 pt-8">
            <span className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-2 block">Media / Entertainment</span>
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Fan Engagement & Monetization in Streaming (TVF)</h3>
            <p className="text-gray-600 leading-relaxed text-justify">
              Addressed the critical challenge of monetizing niche content by investigating how fan engagement strategies translate into viable revenue streams within the competitive streaming landscape. The outcomes provide a data-driven framework linking specific community-building tactics to monetization success, offering actionable recommendations for global expansion in markets like the UAE.
            </p>
          </div>

          {/* Nestlé India */}
          <div className="border-t border-gray-200 pt-8">
            <span className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-2 block">FMCG / B2B Innovation</span>
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">B2B Product Strategy & Innovation with Nestlé India</h3>
            <p className="text-gray-600 leading-relaxed text-justify">
              Collaborated with Nestlé India to lead a project on New Product Developments (NPD) for the B2B food services sector. Conducted in-depth demand analysis with hotels and restaurants to inform product ideation and align innovation with strategic market opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Skills & Certificates Section */}
      <section id="skills" className="max-w-5xl mx-auto mt-32 px-6 grid md:grid-cols-2 gap-16 border-t border-gray-200 pt-16">
        {/* Skills */}
        <div>
          <h2 className="text-2xl font-serif font-bold mb-8 text-gray-900">Skills & Tools</h2>
          <div className="flex flex-wrap gap-3">
            {[
              'Brand Strategy', 'Brand Positioning', 'Social Media Marketing', 
              'Consumer Insights', 'Digital Marketing', 'Content Strategy & Creation', 
              'Adobe Creative Suite', 'Tableau', 'Power BI', 'StreamLit Dashboards', 'Canva'
            ].map((skill, i) => (
              <span key={i} className="border border-gray-300 text-gray-700 px-4 py-2 text-xs uppercase tracking-widest hover:border-gray-900 hover:text-gray-900 transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div>
          <h2 className="text-2xl font-serif font-bold mb-8 text-gray-900">Certifications</h2>
          <ul className="space-y-6">
            {[
              { name: "Fundamentals of Digital Marketing", issuer: "Google" },
              { name: "Basics of SEM", issuer: "upGrad" },
              { name: "Getting Started with Microsoft Excel", issuer: "Microsoft" },
              { name: "Google Ads Search Certification", issuer: "Google Skillshop" },
              { name: "Blue Ocean Strategy Simulation", issuer: "Stratx" }
            ].map((cert, i) => (
              <li key={i} className="border-b border-gray-200 pb-4 last:border-0">
                <h4 className="font-bold text-gray-900 text-sm tracking-wide">{cert.name}</h4>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">{cert.issuer}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Footer / CTA */}
      <section className="max-w-3xl mx-auto mt-32 mb-12 px-6 text-center">
        <h2 className="text-3xl font-serif font-bold mb-4 text-gray-900">Let's Connect</h2>
        <p className="text-gray-600 mb-8 text-sm">
          Please connect with me via email, LinkedIn, or Instagram. You can also download my full resume below for a detailed history of my education and project milestones.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="mailto:kanishkdawar0851@gmail.com" 
            className="text-center bg-gray-100 text-gray-900 px-8 py-4 text-xs font-bold tracking-[0.1em] uppercase hover:bg-gray-200 transition-colors border border-gray-200"
          >
            Email Me
          </a>
          <a 
            href="https://www.instagram.com/the_dancing_kooook/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-center bg-gray-100 text-gray-900 px-8 py-4 text-xs font-bold tracking-[0.1em] uppercase hover:bg-gray-200 transition-colors border border-gray-200"
          >
            Instagram
          </a>
          <a 
            href="/KanishkDawar_Brand and Growth Marketing_2026.pdf" 
            download
            className="text-center bg-gray-900 text-white px-8 py-4 text-xs font-bold tracking-[0.1em] uppercase hover:bg-gray-800 transition-colors"
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
                <li key={index} className="flex gap-4 text-gray-600 text-sm leading-relaxed text-justify">
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
