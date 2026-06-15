'use client';

import React from 'react';
import { Download, Instagram, Linkedin, TrendingUp, Users, Target, Rocket, PenTool, MonitorPlay, Award, GraduationCap, Sparkles, Mail } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans selection:bg-pink-500 selection:text-white pb-20">
      {/* Hero Section */}
      <header className="relative pt-24 pb-16 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-purple-900/40 via-pink-900/20 to-transparent blur-3xl -z-10 rounded-full"></div>
        
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-light text-gray-300 mb-6 italic">
            {"\"Hello! We all need marketing presence and we can't do it yourself. I am here with the right strategy and direction.\""}
          </h2>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Kanishk Dawar
          </h1>
          <p className="text-xl md:text-2xl font-medium text-gray-400 mb-8">
            Brand Strategist & Growth Marketing Professional
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href="mailto:kanishkdawar0851@gmail.com" 
              className="flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-lg shadow-rose-500/30"
            >
              <Mail size={20} />
              Email Me
            </a>
            <a 
              href="https://www.linkedin.com/in/kanishk-dawar-63b112169" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-lg shadow-blue-500/30"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a 
              href="https://www.instagram.com/the_dancing_kooook/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:opacity-90 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-lg shadow-pink-500/30"
            >
              <Instagram size={20} />
              Instagram
            </a>
            <a 
              href="/KanishkDawar_Brand and Growth Marketing_2026.pdf" 
              download
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 px-6 py-3 rounded-full font-semibold transition-all"
            >
              <Download size={20} />
              Resume
            </a>
          </div>
        </div>
      </header>

      {/* Impact Stats */}
      <section className="px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900 border border-gray-800 p-8 rounded-3xl relative overflow-hidden group hover:border-pink-500/50 transition-colors">
            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
              <Users size={64} className="text-pink-500" />
            </div>
            <p className="text-5xl font-black text-white mb-2">+30%</p>
            <p className="text-gray-400 font-medium text-lg">Organic Reach</p>
            <p className="text-sm text-gray-500 mt-4">Via trend-led & creator-focused initiatives.</p>
          </div>
          
          <div className="bg-gray-900 border border-gray-800 p-8 rounded-3xl relative overflow-hidden group hover:border-violet-500/50 transition-colors">
            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
              <Target size={64} className="text-violet-500" />
            </div>
            <p className="text-5xl font-black text-white mb-2">+25%</p>
            <p className="text-gray-400 font-medium text-lg">Brand Awareness</p>
            <p className="text-sm text-gray-500 mt-4">Through cultural marketing narratives.</p>
          </div>

          <div className="bg-gray-900 border border-gray-800 p-8 rounded-3xl relative overflow-hidden group hover:border-blue-500/50 transition-colors">
            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
              <TrendingUp size={64} className="text-blue-500" />
            </div>
            <p className="text-5xl font-black text-white mb-2">+20%</p>
            <p className="text-gray-400 font-medium text-lg">Engagement ROI</p>
            <p className="text-sm text-gray-500 mt-4">Using data-driven campaign optimization.</p>
          </div>
        </div>
      </section>

      {/* Strategic Framework */}
      <section className="px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto mb-24">
        <h3 className="text-3xl font-bold mb-10 text-white flex items-center gap-3">
          <Rocket className="text-pink-500" /> The Strategic Engine
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { step: '01', title: 'Determine Objective', desc: 'Plan an entire campaign around the core goal.' },
            { step: '02', title: 'Create Campaign', desc: 'Build concept notes to fulfill objectives & tap platforms.' },
            { step: '03', title: 'Design Channels', desc: 'Execute on tailored channels with relevant content forms.' },
            { step: '04', title: 'Launch & Measure', desc: 'Deploy campaigns and calculate ROI to measure results.' }
          ].map((item, i) => (
            <div key={i} className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50 relative">
              <span className="text-4xl font-black text-gray-700 absolute top-4 right-4">{item.step}</span>
              <h4 className="text-xl font-bold text-white mb-3 mt-8">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies Bento Box */}
      <section className="px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto mb-24">
        <h3 className="text-3xl font-bold mb-10 text-white flex items-center gap-3">
          <PenTool className="text-violet-500" /> Featured Work
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* Box 1: GD Goenka */}
          <div className="md:col-span-2 bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden group relative flex flex-col justify-end">
            <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80" alt="GD Goenka" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-30 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent"></div>
            <div className="relative p-8">
              <span className="bg-pink-500/20 text-pink-400 border border-pink-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Brand Positioning</span>
              <h4 className="text-2xl font-bold text-white mb-2">GD Goenka University & Le Cordon Bleu</h4>
              <p className="text-gray-300 max-w-xl">We established cultural marketing narratives contributing to 25% growth in brand awareness, and led cross-functional collaboration to ensure cohesive online and offline brand communication.</p>
            </div>
          </div>

          {/* Box 2: ISH Grid (Updated reliable image) */}
          <div className="md:col-span-1 bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden group relative flex flex-col justify-end">
            <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80" alt="ISH Campus" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-30 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent"></div>
            <div className="relative p-8">
              <span className="bg-violet-500/20 text-violet-400 border border-violet-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Community Growth</span>
              <h4 className="text-xl font-bold text-white mb-2">École Ducasse & ISH</h4>
              <p className="text-gray-300 text-sm">We managed platform-native storytelling, reaching 9,700+ followers via 1,300+ posts.</p>
            </div>
          </div>

          {/* Box 3: YouTube Strategy */}
          <div className="md:col-span-1 bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden group relative flex flex-col justify-end">
            <img src="https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?auto=format&fit=crop&w=800&q=80" alt="Video Content" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-30 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent"></div>
            <div className="relative p-8">
              <MonitorPlay className="text-red-500 mb-4" size={32} />
              <h4 className="text-xl font-bold text-white mb-2">Video Content Strategy</h4>
              <p className="text-gray-300 text-sm">We scaled YouTube to 1.75K subscribers through experiential series like "T.A.L.K." and "Industry Insights".</p>
            </div>
          </div>

          {/* Box 4: Camp Land's End (Updated reliable image) */}
          <div className="md:col-span-2 bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden group relative flex flex-col justify-end">
            <img src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=80" alt="Camp Lands End" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-30 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent"></div>
            <div className="relative p-8">
              <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Digital Identity</span>
              <h4 className="text-2xl font-bold text-white mb-2">{"Camp Land's End"}</h4>
              <p className="text-gray-300 max-w-xl">We defined the digital identity within the experiential hospitality space, executing content aligned with travel, lifestyle, and community engagement trends.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies & Skills */}
      <section className="px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto mb-24">
        <h3 className="text-3xl font-bold mb-10 text-white flex items-center gap-3">
          <Sparkles className="text-yellow-400" /> Core Competencies
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Marketing & Strategy */}
          <div className="bg-gray-900 border border-gray-800 p-8 rounded-3xl">
            <h4 className="text-xl font-bold text-white mb-6 border-b border-gray-800 pb-4">Marketing & Strategy</h4>
            <div className="flex flex-wrap gap-2">
              {['Brand Strategy', 'Growth Marketing', 'Content Strategy', 'Social Media Marketing', 'Campaign Management', 'Performance Marketing', 'Consumer Insights', 'Consumer Psychology', 'Audience Insights', 'Community Engagement', 'Brand Positioning', 'Cultural Marketing', 'Integrated Marketing Strategy', 'Digital Storytelling', 'Brand Communication'].map((skill, i) => (
                <span key={i} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-md text-sm border border-gray-700">{skill}</span>
              ))}
            </div>
          </div>

          {/* Tools & Platforms */}
          <div className="bg-gray-900 border border-gray-800 p-8 rounded-3xl flex flex-col gap-8">
            <div>
              <h4 className="text-xl font-bold text-white mb-4 border-b border-gray-800 pb-4">Analytics & Tools</h4>
              <div className="flex flex-wrap gap-2">
                {['Tableau', 'Power BI', 'Microsoft Excel', 'Google Ads', 'Google Analytics', 'Performance Analytics', 'Campaign Reporting'].map((tool, i) => (
                  <span key={i} className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-md text-sm border border-blue-800/50">{tool}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-4 border-b border-gray-800 pb-4">Creative & Digital Platforms</h4>
              <div className="flex flex-wrap gap-2">
                {['Adobe Creative Suite', 'Instagram Marketing', 'LinkedIn Marketing', 'Facebook Marketing', 'Creator-Led Marketing', 'Platform-Native Communication'].map((plat, i) => (
                  <span key={i} className="bg-pink-900/30 text-pink-300 px-3 py-1 rounded-md text-sm border border-pink-800/50">{plat}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Education */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
              <GraduationCap className="text-blue-500" /> Education
            </h3>
            <div className="space-y-6">
              <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                <h4 className="text-lg font-bold text-white">Master of Global Business (Marketing)</h4>
                <p className="text-gray-400">SP Jain School of Global Management (2025-2026)</p>
                <p className="text-sm text-gray-500 mt-1">Mumbai, India & Dubai, UAE</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                <h4 className="text-lg font-bold text-white">Bachelor's in Culinary Arts Management</h4>
                <p className="text-gray-400">Indian School of Hospitality (2018-2022)</p>
                <p className="text-sm text-gray-500 mt-1">Gurugram, India</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                <h4 className="text-lg font-bold text-white">Bachelor's in Travel & Tourism Management</h4>
                <p className="text-gray-400">Maharishi Dayanand University (2018-2022)</p>
                <p className="text-sm text-gray-500 mt-1">Gurugram, India</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
              <Award className="text-emerald-500" /> Certifications
            </h3>
            <div className="space-y-4">
              {[
                { name: 'Google Ads Search Certification', issuer: 'Google Skillshop' },
                { name: 'Fundamentals of Digital Marketing', issuer: 'Google Digital Garage' },
                { name: 'Basics of Search Engine Marketing (SEM)', issuer: 'upGrad' },
                { name: 'Getting Started with Microsoft Excel', issuer: 'Microsoft' }
              ].map((cert, i) => (
                <div key={i} className="flex items-center gap-4 bg-gray-900 border border-gray-800 p-5 rounded-2xl group hover:border-emerald-500/50 transition-colors">
                  <div className="bg-gray-800 p-3 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                    <Award size={24} className="text-gray-400 group-hover:text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-md font-bold text-white">{cert.name}</h4>
                    <p className="text-sm text-gray-400">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
