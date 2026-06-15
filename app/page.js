'use client';

import React from 'react';
import { Instagram, Linkedin, FileText, Mail } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FCFBF9] text-gray-900 font-sans pb-24 selection:bg-gray-200">
      
      {/* Top Navigation Bar */}
      <div className="w-full border-t-[12px] border-gray-900">
        <nav className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold font-serif tracking-tight">Kanishk Dawar</div>
          <div className="flex flex-wrap justify-center gap-6 text-sm tracking-wide uppercase font-semibold text-gray-600">
            <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
            <a href="#work" className="hover:text-gray-900 transition-colors">Work</a>
            <a href="/KanishkDawar_Brand and Growth Marketing_2026.pdf" download className="hover:text-gray-900 transition-colors">Resume</a>
            <a href="https://www.linkedin.com/in/kanishk-dawar-63b112169" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">LinkedIn</a>
            <a href="https://www.instagram.com/the_dancing_kooook/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">Instagram</a>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-12 px-6 max-w-4xl mx-auto">
        {/* Replace with your actual headshot */}
        <img 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80" 
          alt="Kanishk Dawar" 
          className="w-32 h-32 rounded-full object-cover mb-8 shadow-md grayscale"
        />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-gray-900 mb-8">
          Strategic Brand and Growth Marketing For Hospitality & Education
        </h1>
        <a 
          href="mailto:kanishkdawar0851@gmail.com" 
          className="bg-gray-900 text-white px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-gray-700 transition-colors"
        >
          Connect on Email
        </a>
      </section>

      {/* About Section (2 Columns) */}
      <section id="about" className="max-w-5xl mx-auto mt-32 px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Hi, I'm Kanishk!</h2>
          <p className="mb-8 text-gray-600 leading-relaxed">
            I combine my background in Culinary Arts and Hospitality with advanced marketing expertise to deliver audience-first brand strategies that not only look and sound great, but align strictly with your business growth objectives. 
          </p>
          
          <h3 className="font-bold text-lg mb-4 text-gray-900 font-serif">Core Services:</h3>
          <ul className="space-y-6 text-gray-600 text-sm leading-relaxed">
            <li>
              <strong className="text-gray-900">Brand Strategy & Positioning:</strong> Your strategic objectives matter to me. That's why we craft audience-centric brand storytelling frameworks to strengthen digital visibility and Gen Z brand recall.
            </li>
            <li>
              <strong className="text-gray-900">Growth Marketing:</strong> Bridging the gap between creative and analytics. We develop performance-led audience acquisition strategies using data-driven targeting, consistently improving engagement ROI.
            </li>
            <li>
              <strong className="text-gray-900">Content & Community Strategy:</strong> Every business encounters challenges in standing out. I create platform-native content strategies and cultural marketing narratives that build engaged, loyal communities.
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

      {/* Testimonial / Quote 1 */}
      <section className="max-w-4xl mx-auto mt-32 px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold leading-relaxed text-gray-900">
          {"\"We all need marketing presence and we can't do it yourself. I am here with the right strategy and direction.\""}
        </h2>
        <p className="mt-6 text-gray-500 italic font-serif">— Kanishk Dawar</p>
      </section>

      {/* 4-Column Portfolio Grid */}
      <section id="work" className="max-w-6xl mx-auto mt-32 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Item 1 */}
          <div className="group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80" 
              alt="GD Goenka" 
              className="w-full aspect-square object-cover mb-4 grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <h4 className="font-bold text-sm text-center text-gray-900">GD Goenka & Le Cordon Bleu</h4>
            <p className="text-xs text-center text-gray-500 mt-2">+25% Growth in Brand Awareness</p>
          </div>

          {/* Item 2 */}
          <div className="group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=600&q=80" 
              alt="ISH" 
              className="w-full aspect-square object-cover mb-4 grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <h4 className="font-bold text-sm text-center text-gray-900">École Ducasse & ISH</h4>
            <p className="text-xs text-center text-gray-500 mt-2">Community Growth to 9.7K Followers</p>
          </div>

          {/* Item 3 */}
          <div className="group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?auto=format&fit=crop&w=600&q=80" 
              alt="Video Strategy" 
              className="w-full aspect-square object-cover mb-4 grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <h4 className="font-bold text-sm text-center text-gray-900">Video Content Strategy</h4>
            <p className="text-xs text-center text-gray-500 mt-2">1.75K YouTube Subscribers Scaled</p>
          </div>

          {/* Item 4 */}
          <div className="group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=600&q=80" 
              alt="Camp Lands End" 
              className="w-full aspect-square object-cover mb-4 grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <h4 className="font-bold text-sm text-center text-gray-900">{"Camp Land's End"}</h4>
            <p className="text-xs text-center text-gray-500 mt-2">Digital Identity & Experiential Marketing</p>
          </div>

        </div>
      </section>

      {/* Quote 2 / Data Impact */}
      <section className="max-w-3xl mx-auto mt-32 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-serif font-bold leading-relaxed text-gray-900">
          {"\"Our data-driven optimizations and social-first narratives consistently contributed to a 30% growth in organic reach and 20% higher engagement ROI.\""}
        </h2>
        <p className="mt-6 text-gray-500 italic font-serif">— Campaign Performance Overview</p>
      </section>

      {/* Minimalist Contact Section */}
      <section id="contact" className="max-w-2xl mx-auto mt-32 mb-12 px-6">
        <h2 className="text-3xl font-serif font-bold mb-4 text-gray-900">Let's Chat!</h2>
        <p className="text-gray-600 mb-8 text-sm">
          I'd love to explore working together. Please connect with me via email or LinkedIn, or download my full resume below for a detailed history of my education and project milestones.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="mailto:kanishkdawar0851@gmail.com" 
            className="flex-1 text-center bg-gray-100 text-gray-900 px-6 py-4 text-xs font-bold tracking-[0.1em] uppercase hover:bg-gray-200 transition-colors border border-gray-200"
          >
            Email Me
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

    </div>
  );
}
