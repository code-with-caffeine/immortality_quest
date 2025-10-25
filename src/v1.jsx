import React, { useState, useEffect } from 'react';
import { ArrowRight, Dna, Brain, Heart, Microscope, TrendingUp, Calendar, User, ChevronRight, Sparkles } from 'lucide-react';

const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-black to-purple-900/20"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1)_0%,transparent_70%)]" />
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="inline-block mb-6">
            <Sparkles className="w-12 h-12 text-amber-400 animate-pulse" />
          </div>
          <h1 className="text-6xl md:text-8xl font-thin tracking-wider mb-6 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 bg-clip-text text-transparent">
            IMMORTALITY
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-400 mb-12 tracking-wide">
            The ultimate quest begins within
          </p>
          <button className="group px-10 py-4 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 transition-all duration-300 text-black font-medium tracking-wider flex items-center gap-3 mx-auto">
            BEGIN YOUR JOURNEY
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-amber-400/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-amber-400 rounded-full" />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mb-20" />
          <h2 className="text-5xl font-thin mb-12 text-center">The Vision</h2>
          <p className="text-xl text-gray-400 leading-relaxed text-center font-light">
            We stand at the precipice of humanity's greatest transformation. Through cutting-edge research in 
            longevity science, regenerative medicine, and bioengineering, we are rewriting the fundamental 
            limits of human existence. This is not science fiction—this is our future.
          </p>
        </div>
      </section>

      {/* Research Pillars */}
      <section className="py-32 px-6 bg-gradient-to-b from-black to-amber-950/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-thin mb-20 text-center">Research Frontiers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Dna, title: 'Genetic Engineering', desc: 'Rewriting the code of life itself' },
              { icon: Brain, title: 'Neural Preservation', desc: 'Consciousness beyond biology' },
              { icon: Heart, title: 'Cellular Rejuvenation', desc: 'Reversing the aging process' }
            ].map((pillar, i) => (
              <div key={i} className="group p-10 bg-gradient-to-b from-amber-950/20 to-transparent border border-amber-900/30 hover:border-amber-600/50 transition-all duration-500">
                <pillar.icon className="w-12 h-12 text-amber-400 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-light mb-4">{pillar.title}</h3>
                <p className="text-gray-500 font-light">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-thin mb-8">Stay at the Forefront</h2>
          <p className="text-gray-400 mb-12 font-light">
            Join the vanguard of human evolution. Track breakthroughs, follow research, and be part of history.
          </p>
          <button className="px-12 py-5 border-2 border-amber-600 hover:bg-amber-600 hover:text-black transition-all duration-300 tracking-widest font-light">
            EXPLORE RESEARCH
          </button>
        </div>
      </section>
    </div>
  );
};

// ===== RESEARCH BLOG COMPONENT =====
const ResearchBlog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const articles = [
    {
      category: 'genetics',
      title: 'CRISPR Breakthrough in Telomere Extension',
      excerpt: 'New gene editing technique shows promise in extending cellular lifespan by 40%',
      date: 'Oct 20, 2025',
      author: 'Dr. Elena Morrison',
      readTime: '8 min'
    },
    {
      category: 'neuroscience',
      title: 'Whole Brain Emulation: Progress Report 2025',
      excerpt: 'Mapping neural pathways at unprecedented resolution brings us closer to digital consciousness',
      date: 'Oct 15, 2025',
      author: 'Prof. James Chen',
      readTime: '12 min'
    },
    {
      category: 'medicine',
      title: 'Senolytic Drugs Enter Phase III Trials',
      excerpt: 'Promising results in eliminating senescent cells show reversal of age-related decline',
      date: 'Oct 10, 2025',
      author: 'Dr. Sarah Williams',
      readTime: '10 min'
    },
    {
      category: 'technology',
      title: 'Nanobots Successfully Repair Arterial Damage',
      excerpt: 'Microscopic robots demonstrate ability to reverse cardiovascular aging in vivo',
      date: 'Oct 5, 2025',
      author: 'Dr. Kenji Tanaka',
      readTime: '6 min'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Research' },
    { id: 'genetics', label: 'Genetics' },
    { id: 'neuroscience', label: 'Neuroscience' },
    { id: 'medicine', label: 'Medicine' },
    { id: 'technology', label: 'Technology' }
  ];

  const filtered = selectedCategory === 'all' 
    ? articles 
    : articles.filter(a => a.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <Microscope className="w-16 h-16 text-amber-400 mx-auto mb-6" />
          <h1 className="text-6xl font-thin mb-6 tracking-wider">Research Archives</h1>
          <p className="text-gray-400 text-lg font-light">
            Documenting humanity's path to indefinite lifespan
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2 border transition-all duration-300 tracking-wide ${
                selectedCategory === cat.id
                  ? 'border-amber-600 bg-amber-600 text-black'
                  : 'border-amber-900/30 hover:border-amber-600/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="space-y-6">
          {filtered.map((article, i) => (
            <article 
              key={i}
              className="group p-8 bg-gradient-to-r from-amber-950/10 to-transparent border-l-2 border-amber-900/30 hover:border-amber-600 transition-all duration-500 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs tracking-widest text-amber-600 uppercase">
                  {article.category}
                </span>
                <span className="text-sm text-gray-600">{article.readTime}</span>
              </div>
              
              <h2 className="text-3xl font-light mb-4 group-hover:text-amber-400 transition-colors">
                {article.title}
              </h2>
              
              <p className="text-gray-400 mb-6 leading-relaxed font-light">
                {article.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <User className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-500">{article.author}</span>
                  <span className="text-gray-700">•</span>
                  <span className="text-sm text-gray-600">{article.date}</span>
                </div>
                
                <ChevronRight className="w-5 h-5 text-amber-600 group-hover:translate-x-2 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

// ===== PROGRESS TRACKER COMPONENT =====
const ProgressTracker = () => {
  const milestones = [
    { year: 2020, title: 'First Successful Age Reversal in Mice', progress: 100 },
    { year: 2022, title: 'Human Longevity Gene Therapy Approved', progress: 100 },
    { year: 2024, title: 'Neural Interface for Memory Backup', progress: 100 },
    { year: 2025, title: 'Senolytic Drugs Phase III Trials', progress: 75 },
    { year: 2027, title: 'First Whole Organ Regeneration', progress: 40 },
    { year: 2030, title: 'Biological Age Reversal Protocol', progress: 15 }
  ];

  const metrics = [
    { label: 'Active Research Projects', value: '1,247', trend: '+23%' },
    { label: 'Clinical Trials Underway', value: '89', trend: '+41%' },
    { label: 'Scientists in Field', value: '12,400', trend: '+18%' },
    { label: 'Years Extended (Avg)', value: '+4.2', trend: '+0.8' }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <TrendingUp className="w-16 h-16 text-amber-400 mx-auto mb-6" />
          <h1 className="text-6xl font-thin mb-6 tracking-wider">Progress Tracker</h1>
          <p className="text-gray-400 text-lg font-light">
            Real-time metrics on humanity's journey to immortality
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {metrics.map((metric, i) => (
            <div key={i} className="p-8 bg-gradient-to-b from-amber-950/20 to-transparent border border-amber-900/30">
              <div className="text-4xl font-thin text-amber-400 mb-2">{metric.value}</div>
              <div className="text-sm text-gray-400 mb-3 font-light">{metric.label}</div>
              <div className="text-xs text-emerald-400 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                {metric.trend}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-4xl font-thin mb-12 text-center">Development Timeline</h2>
          <div className="space-y-8">
            {milestones.map((milestone, i) => (
              <div key={i} className="relative">
                <div className="flex items-center gap-6 mb-3">
                  <span className="text-2xl font-thin text-amber-400 w-20">
                    {milestone.year}
                  </span>
                  <h3 className="text-xl font-light">{milestone.title}</h3>
                  <span className="ml-auto text-sm text-gray-500">
                    {milestone.progress}%
                  </span>
                </div>
                
                <div className="ml-20 h-2 bg-amber-950/30 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-600 to-yellow-500 transition-all duration-1000"
                    style={{ width: `${milestone.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Areas */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-10 bg-gradient-to-br from-amber-950/20 to-purple-950/10 border border-amber-900/30">
            <h3 className="text-2xl font-light mb-6 flex items-center gap-3">
              <Dna className="w-6 h-6 text-amber-400" />
              Genetic Interventions
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-400 font-light">Gene Therapy</span>
                <span className="text-amber-400">Advanced</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 font-light">CRISPR Applications</span>
                <span className="text-amber-400">Experimental</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 font-light">Telomere Extension</span>
                <span className="text-emerald-400">Clinical Trials</span>
              </div>
            </div>
          </div>

          <div className="p-10 bg-gradient-to-br from-purple-950/20 to-amber-950/10 border border-amber-900/30">
            <h3 className="text-2xl font-light mb-6 flex items-center gap-3">
              <Brain className="w-6 h-6 text-amber-400" />
              Consciousness Research
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-400 font-light">Neural Mapping</span>
                <span className="text-amber-400">In Progress</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 font-light">Memory Transfer</span>
                <span className="text-gray-400">Early Stage</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 font-light">Brain-Computer Interface</span>
                <span className="text-emerald-400">Functional</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ===== MAIN APP WITH NAVIGATION =====
const ImmortalityHub = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-amber-900/30">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-amber-400" />
            <span className="text-xl font-thin tracking-widest">IMMORTALIS</span>
          </div>
          
          <div className="flex gap-8">
            {[
              { id: 'home', label: 'Home' },
              { id: 'research', label: 'Research' },
              { id: 'progress', label: 'Progress' }
            ].map(page => (
              <button
                key={page.id}
                onClick={() => setCurrentPage(page.id)}
                className={`text-sm tracking-widest transition-colors ${
                  currentPage === page.id
                    ? 'text-amber-400'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {page.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="pt-20">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'research' && <ResearchBlog />}
        {currentPage === 'progress' && <ProgressTracker />}
      </div>

      {/* Footer */}
      <footer className="border-t border-amber-900/30 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 font-light tracking-wide">
            The future is not inevitable. It is a choice we make today.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ImmortalityHub;