import React, { useState, useEffect } from 'react';
import { ArrowRight, Dna, Brain, Heart, Microscope, TrendingUp, Calendar, User, ChevronRight, Sparkles } from 'lucide-react';

// ===== HOME PAGE COMPONENT =====
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

// ===== INDIVIDUAL ARTICLE VIEW =====
const ArticleView = ({ onBack }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress((scrolled / height) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-amber-950/30 z-50">
        <div 
          className="h-full bg-gradient-to-r from-amber-600 to-yellow-500 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-32">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-amber-400 hover:text-amber-300 mb-12 transition-colors"
        >
          <ChevronRight className="w-4 h-4 rotate-180" />
          Back to Research
        </button>

        {/* Article Header */}
        <div className="mb-16">
          <span className="text-xs tracking-widest text-amber-600 uppercase">Genetics</span>
          <h1 className="text-5xl md:text-6xl font-thin leading-tight mt-4 mb-8">
            CRISPR Breakthrough in Telomere Extension
          </h1>
          
          <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Dr. Elena Morrison
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              October 20, 2025
            </div>
            <span>•</span>
            <span>8 min read</span>
          </div>

          <div className="h-px bg-gradient-to-r from-amber-600 via-amber-600/50 to-transparent" />
        </div>

        {/* Article Content */}
        <article className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-gray-300 leading-relaxed font-light mb-8">
            In a groundbreaking development that could reshape humanity's relationship with aging, 
            researchers at the Institute for Advanced Longevity have successfully demonstrated a 
            novel CRISPR-based technique that extends telomere length in human cells by an average of 40%.
          </p>

          <h2 className="text-3xl font-thin mt-16 mb-6">The Science Behind the Breakthrough</h2>
          <p className="text-gray-400 leading-relaxed font-light mb-6">
            Telomeres, the protective caps at the ends of our chromosomes, naturally shorten with each 
            cell division—a process intrinsically linked to cellular aging. This new technique utilizes 
            a modified Cas9 enzyme paired with a synthetic telomerase RNA component to precisely extend 
            these molecular timepieces without triggering the cellular stress responses that have plagued 
            previous attempts.
          </p>

          <div className="my-12 p-8 bg-gradient-to-r from-amber-950/30 to-transparent border-l-4 border-amber-600">
            <p className="text-lg italic text-amber-200 font-light">
              "What we've achieved is not just telomere extension, but a fundamental reprogramming 
              of the cellular aging clock. The implications are staggering."
            </p>
            <p className="text-sm text-gray-500 mt-4">— Dr. Elena Morrison, Lead Researcher</p>
          </div>

          <h2 className="text-3xl font-thin mt-16 mb-6">Clinical Implications</h2>
          <p className="text-gray-400 leading-relaxed font-light mb-6">
            Early trials in cell cultures have shown remarkable stability, with treated cells maintaining 
            extended telomeres through multiple generations. The next phase will involve testing in 
            organoid models, with human trials potentially beginning within 18-24 months pending 
            regulatory approval.
          </p>

          <h2 className="text-3xl font-thin mt-16 mb-6">Looking Forward</h2>
          <p className="text-gray-400 leading-relaxed font-light mb-6">
            While challenges remain—particularly around delivery mechanisms and long-term safety 
            profiles—this breakthrough represents a pivotal moment in longevity science. We may be 
            witnessing the dawn of practical age reversal technology.
          </p>
        </article>

        {/* Related Articles */}
        <div className="mt-24 pt-12 border-t border-amber-900/30">
          <h3 className="text-2xl font-thin mb-8">Related Research</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {['Senolytic Combination Therapy Results', 'NAD+ Precursors and Cellular Health'].map((title, i) => (
              <div key={i} className="p-6 bg-amber-950/10 border border-amber-900/30 hover:border-amber-600/50 transition-all cursor-pointer">
                <h4 className="text-lg font-light mb-2">{title}</h4>
                <p className="text-sm text-gray-500">Read article →</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ===== COMMUNITY PAGE =====
const CommunityPage = () => {
  const [activeTab, setActiveTab] = useState('discussions');

  const discussions = [
    {
      title: 'Latest developments in senolytics - your thoughts?',
      author: 'BiohackerMike',
      replies: 34,
      likes: 127,
      timeAgo: '2h ago'
    },
    {
      title: 'My 6-month NAD+ supplementation results',
      author: 'LongevitySeeker',
      replies: 89,
      likes: 412,
      timeAgo: '5h ago'
    },
    {
      title: 'Cryonics: A viable backup plan?',
      author: 'FuturePlanner',
      replies: 156,
      likes: 203,
      timeAgo: '1d ago'
    }
  ];

  const members = [
    { name: 'Dr. Sarah Chen', role: 'Geneticist', contributions: 247 },
    { name: 'Marcus Webb', role: 'Biohacker', contributions: 189 },
    { name: 'Dr. James Park', role: 'Neuroscientist', contributions: 156 },
    { name: 'Elena Rodriguez', role: 'Research Analyst', contributions: 134 }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-thin mb-6 tracking-wider">Community</h1>
          <p className="text-gray-400 text-lg font-light">
            Join 12,400 pioneers on the quest for indefinite life
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-4 gap-6 mb-16">
          {[
            { label: 'Active Members', value: '12.4K' },
            { label: 'Discussions', value: '3,847' },
            { label: 'Research Shared', value: '1,293' },
            { label: 'Experiments', value: '567' }
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 bg-amber-950/10 border border-amber-900/30">
              <div className="text-3xl font-thin text-amber-400 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-6 mb-12 border-b border-amber-900/30">
          {['discussions', 'members', 'experiments'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-2 text-sm tracking-widest uppercase transition-colors ${
                activeTab === tab
                  ? 'text-amber-400 border-b-2 border-amber-400'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === 'discussions' && (
          <div className="space-y-4">
            {discussions.map((discussion, i) => (
              <div key={i} className="p-6 bg-gradient-to-r from-amber-950/10 to-transparent border border-amber-900/30 hover:border-amber-600/50 transition-all cursor-pointer">
                <h3 className="text-xl font-light mb-3">{discussion.title}</h3>
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <span className="text-amber-400">{discussion.author}</span>
                  <span>•</span>
                  <span>{discussion.replies} replies</span>
                  <span>•</span>
                  <span>{discussion.likes} likes</span>
                  <span>•</span>
                  <span>{discussion.timeAgo}</span>
                </div>
              </div>
            ))}
            
            <button className="w-full py-6 border-2 border-amber-600 hover:bg-amber-600 hover:text-black transition-all tracking-widest font-light mt-8">
              START NEW DISCUSSION
            </button>
          </div>
        )}

        {activeTab === 'members' && (
          <div className="grid md:grid-cols-2 gap-6">
            {members.map((member, i) => (
              <div key={i} className="p-8 bg-gradient-to-br from-amber-950/20 to-transparent border border-amber-900/30">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-light mb-1">{member.name}</h3>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-thin text-amber-400">{member.contributions}</div>
                    <div className="text-xs text-gray-600">contributions</div>
                  </div>
                </div>
                <button className="w-full py-2 border border-amber-900/30 hover:border-amber-600 transition-all text-sm">
                  View Profile
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'experiments' && (
          <div className="text-center py-20">
            <Microscope className="w-16 h-16 text-amber-400 mx-auto mb-6" />
            <h3 className="text-2xl font-thin mb-4">Community Experiments</h3>
            <p className="text-gray-500 mb-8 font-light">
              Members share their personal longevity protocols and results
            </p>
            <button className="px-10 py-4 bg-amber-600 hover:bg-amber-500 transition-colors text-black tracking-widest">
              SHARE YOUR EXPERIMENT
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// ===== MEMBERSHIP/DONATION PAGE =====
const MembershipPage = () => {
  const tiers = [
    {
      name: 'Supporter',
      price: '$10',
      period: 'month',
      features: [
        'Access to all research archives',
        'Monthly newsletter',
        'Community forum access',
        'Early article access'
      ]
    },
    {
      name: 'Pioneer',
      price: '$50',
      period: 'month',
      features: [
        'Everything in Supporter',
        'Quarterly research reports',
        'Direct researcher Q&A sessions',
        'Beta access to tracking tools',
        'Exclusive webinars'
      ],
      featured: true
    },
    {
      name: 'Vanguard',
      price: '$200',
      period: 'month',
      features: [
        'Everything in Pioneer',
        'Private advisory board access',
        'Annual longevity summit ticket',
        'Personalized protocol consultations',
        'Research grant voting rights',
        'Legacy donor recognition'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <Sparkles className="w-16 h-16 text-amber-400 mx-auto mb-6" />
          <h1 className="text-6xl font-thin mb-6 tracking-wider">Join the Quest</h1>
          <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">
            Your support directly funds breakthrough research and accelerates humanity's path to indefinite lifespan
          </p>
        </div>

        {/* Impact Stats */}
        <div className="mb-20 p-12 bg-gradient-to-r from-amber-950/20 to-purple-950/10 border border-amber-900/30">
          <h2 className="text-3xl font-thin mb-8 text-center">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-thin text-amber-400 mb-2">$4.2M</div>
              <div className="text-gray-500 font-light">Research Funded</div>
            </div>
            <div>
              <div className="text-4xl font-thin text-amber-400 mb-2">17</div>
              <div className="text-gray-500 font-light">Active Studies</div>
            </div>
            <div>
              <div className="text-4xl font-thin text-amber-400 mb-2">3</div>
              <div className="text-gray-500 font-light">Clinical Trials</div>
            </div>
          </div>
        </div>

        {/* Membership Tiers */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {tiers.map((tier, i) => (
            <div 
              key={i}
              className={`p-8 border transition-all duration-300 ${
                tier.featured
                  ? 'bg-gradient-to-b from-amber-600/10 to-transparent border-amber-600 scale-105'
                  : 'bg-gradient-to-b from-amber-950/10 to-transparent border-amber-900/30 hover:border-amber-600/50'
              }`}
            >
              {tier.featured && (
                <div className="text-xs tracking-widest text-amber-400 mb-4 uppercase">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-light mb-2">{tier.name}</h3>
              
              <div className="mb-8">
                <span className="text-5xl font-thin">{tier.price}</span>
                <span className="text-gray-500">/{tier.period}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-gray-400 font-light">
                    <ChevronRight className="w-4 h-4 text-amber-600 flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 transition-all tracking-widest ${
                tier.featured
                  ? 'bg-amber-600 hover:bg-amber-500 text-black'
                  : 'border-2 border-amber-600 hover:bg-amber-600 hover:text-black'
              }`}>
                SELECT {tier.name.toUpperCase()}
              </button>
            </div>
          ))}
        </div>

        {/* One-Time Donation */}
        <div className="max-w-3xl mx-auto text-center p-12 bg-gradient-to-b from-purple-950/20 to-transparent border border-amber-900/30">
          <h2 className="text-3xl font-thin mb-6">One-Time Contribution</h2>
          <p className="text-gray-400 font-light mb-8">
            Every contribution brings us closer to the breakthrough that changes everything
          </p>
          
          <div className="grid grid-cols-4 gap-4 mb-8">
            {['$25', '$100', '$500', '$1000'].map((amount, i) => (
              <button key={i} className="py-4 border border-amber-900/30 hover:border-amber-600 hover:bg-amber-600/10 transition-all">
                {amount}
              </button>
            ))}
          </div>

          <button className="w-full py-4 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 transition-all text-black tracking-widest font-medium">
            MAKE A DONATION
          </button>
        </div>

        {/* Guarantee */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 font-light">
            100% of membership fees fund research · Cancel anytime · Tax-deductible
          </p>
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
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <Sparkles className="w-6 h-6 text-amber-400" />
            <span className="text-xl font-thin tracking-widest">IMMORTALIS</span>
          </div>
          
          <div className="flex gap-8">
            {[
              { id: 'home', label: 'Home' },
              { id: 'research', label: 'Research' },
              { id: 'progress', label: 'Progress' },
              { id: 'community', label: 'Community' },
              { id: 'membership', label: 'Join' }
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
        {currentPage === 'article' && <ArticleView onBack={() => setCurrentPage('research')} />}
        {currentPage === 'community' && <CommunityPage />}
        {currentPage === 'membership' && <MembershipPage />}
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