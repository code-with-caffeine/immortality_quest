import React, { useState } from 'react';
import { MessageSquare, ThumbsUp, Clock, User, Plus, Search, Filter, TrendingUp, Send, ChevronRight } from 'lucide-react';

// ===== DISCUSSIONS DATABASE =====
const discussionsDatabase = [
  {
    id: 1,
    title: 'Latest developments in senolytics - your thoughts?',
    author: {
      name: 'BiohackerMike',
      avatar: 'BM',
      role: 'Biohacker',
      reputation: 847
    },
    content: 'I\'ve been following the recent Phase III trials of senolytic drugs closely. The preliminary results showing 23% improvement in physical function are remarkable. What concerns me is the long-term safety profile - we\'re still in early days. Has anyone here tried any senolytics protocols? What\'s your experience been?',
    category: 'medicine',
    tags: ['senolytics', 'clinical-trials', 'aging'],
    replies: 34,
    likes: 127,
    views: 892,
    timeAgo: '2h ago',
    createdAt: '2025-10-26T08:00:00Z',
    isPinned: false,
    comments: [
      {
        id: 101,
        author: { name: 'Dr. Sarah Chen', avatar: 'SC', role: 'Geneticist' },
        content: 'The safety profile is actually quite encouraging from what I\'ve seen in the data. The key is the selectivity - these compounds specifically target senescent cells without affecting healthy dividing cells. That said, we need the 5-year follow-up data before making any definitive claims.',
        likes: 45,
        timeAgo: '1h ago',
        replies: []
      },
      {
        id: 102,
        author: { name: 'LongevitySeeker', avatar: 'LS', role: 'Enthusiast' },
        content: 'I\'ve been on a dasatinib + quercetin protocol for 4 months now. Definitely notice improved energy and recovery from exercise. Blood work shows reduced inflammatory markers. Happy to share my full protocol if anyone\'s interested.',
        likes: 89,
        timeAgo: '45m ago',
        replies: []
      }
    ]
  },
  {
    id: 2,
    title: 'My 6-month NAD+ supplementation results (with bloodwork)',
    author: {
      name: 'LongevitySeeker',
      avatar: 'LS',
      role: 'Enthusiast',
      reputation: 1243
    },
    content: 'I\'ve completed 6 months of NAD+ precursor supplementation (NMN 500mg daily) and wanted to share my results. Bloodwork shows NAD+ levels increased by 38%, significant improvements in energy metabolism markers, and subjectively I feel like I\'ve turned back the clock 5-10 years. Full data and protocol in comments.',
    category: 'biohacking',
    tags: ['NAD+', 'NMN', 'supplementation', 'results'],
    replies: 89,
    likes: 412,
    views: 3241,
    timeAgo: '5h ago',
    createdAt: '2025-10-26T03:00:00Z',
    isPinned: true,
    comments: [
      {
        id: 201,
        author: { name: 'Dr. James Park', avatar: 'JP', role: 'Neuroscientist' },
        content: 'This is excellent data collection! The increase in NAD+ levels is consistent with what we\'re seeing in clinical studies. Would love to know if you tracked any cognitive metrics - memory tests, reaction time, etc?',
        likes: 67,
        timeAgo: '4h ago',
        replies: []
      },
      {
        id: 202,
        author: { name: 'BiohackerMike', avatar: 'BM', role: 'Biohacker' },
        content: 'What brand/source did you use? Purity is crucial with NMN - there\'s a lot of low-quality product out there.',
        likes: 34,
        timeAgo: '3h ago',
        replies: []
      }
    ]
  },
  {
    id: 3,
    title: 'Cryonics: A viable backup plan or false hope?',
    author: {
      name: 'FuturePlanner',
      avatar: 'FP',
      role: 'Strategist',
      reputation: 654
    },
    content: 'With recent advances in vitrification and the success of the brain preservation prize, I\'m seriously considering cryonics as a backup plan. The argument is simple: even if there\'s only a 1% chance of revival, that\'s infinitely better than 0%. But the counterargument is equally compelling - are we preserving enough information to reconstruct consciousness? Thoughts?',
    category: 'preservation',
    tags: ['cryonics', 'preservation', 'consciousness'],
    replies: 156,
    likes: 203,
    views: 4567,
    timeAgo: '1d ago',
    createdAt: '2025-10-25T08:00:00Z',
    isPinned: false,
    comments: [
      {
        id: 301,
        author: { name: 'Prof. Elena Rodriguez', avatar: 'ER', role: 'Neuroscientist' },
        content: 'The connectome preservation is the key question. Recent studies suggest that synaptic connections remain intact through vitrification, which is encouraging. But we\'re still unclear if that\'s sufficient to preserve the substrate of consciousness and memory.',
        likes: 123,
        timeAgo: '20h ago',
        replies: []
      },
      {
        id: 302,
        author: { name: 'SkepticalSam', avatar: 'SS', role: 'Critic' },
        content: 'The problem I see is we\'re making huge assumptions about future technology. Who says the civilization that might revive us will even want to? Or have the resources? Better to focus on extending life now.',
        likes: 45,
        timeAgo: '18h ago',
        replies: []
      }
    ]
  },
  {
    id: 4,
    title: 'Gene therapy vs traditional medicine: Timeline predictions',
    author: {
      name: 'Dr. Sarah Chen',
      avatar: 'SC',
      role: 'Geneticist',
      reputation: 2156
    },
    content: 'Looking at the trajectory of gene therapy development, I believe we\'re 5-10 years away from it becoming mainstream for age-related conditions. CRISPR technology is maturing rapidly, delivery mechanisms are improving, and regulatory pathways are clearing. What\'s your timeline prediction?',
    category: 'genetics',
    tags: ['gene-therapy', 'CRISPR', 'predictions', 'timeline'],
    replies: 78,
    likes: 234,
    views: 2134,
    timeAgo: '2d ago',
    createdAt: '2025-10-24T10:00:00Z',
    isPinned: false,
    comments: []
  },
  {
    id: 5,
    title: 'Fasting protocols: What actually works for longevity?',
    author: {
      name: 'HealthOptimizer',
      avatar: 'HO',
      role: 'Practitioner',
      reputation: 567
    },
    content: 'There\'s so much conflicting information about fasting protocols. Intermittent fasting, extended fasts, FMD (fasting-mimicking diet) - what does the actual evidence show? I\'ve been doing 16:8 IF for a year but wondering if I should try something more aggressive.',
    category: 'biohacking',
    tags: ['fasting', 'autophagy', 'longevity', 'protocols'],
    replies: 92,
    likes: 178,
    views: 3456,
    timeAgo: '3d ago',
    createdAt: '2025-10-23T14:00:00Z',
    isPinned: false,
    comments: []
  },
  {
    id: 6,
    title: 'Telomere extension breakthrough - game changer or overhyped?',
    author: {
      name: 'ResearchReader',
      avatar: 'RR',
      role: 'Analyst',
      reputation: 892
    },
    content: 'The recent CRISPR telomere extension paper is making waves. 40% increase in cellular lifespan sounds incredible, but I\'m cautious about cancer risks. Anyone with a molecular biology background want to weigh in on the actual significance?',
    category: 'genetics',
    tags: ['telomeres', 'CRISPR', 'research', 'analysis'],
    replies: 67,
    likes: 289,
    views: 2987,
    timeAgo: '4d ago',
    createdAt: '2025-10-22T09:00:00Z',
    isPinned: true,
    comments: []
  },
  {
    id: 7,
    title: 'Building a personal longevity protocol - where to start?',
    author: {
      name: 'NewbieLongevity',
      avatar: 'NL',
      role: 'Beginner',
      reputation: 45
    },
    content: 'I\'m 35 and just discovering this field. Overwhelmed by all the information - supplements, exercise protocols, diet strategies, sleep optimization, etc. What are the highest-impact interventions to start with? Looking for evidence-based recommendations.',
    category: 'protocols',
    tags: ['beginner', 'protocols', 'advice', 'getting-started'],
    replies: 145,
    likes: 98,
    views: 5678,
    timeAgo: '5d ago',
    createdAt: '2025-10-21T11:00:00Z',
    isPinned: false,
    comments: []
  },
  {
    id: 8,
    title: 'Whole brain emulation: Are we closer than we think?',
    author: {
      name: 'DigitalDreamer',
      avatar: 'DD',
      role: 'Futurist',
      reputation: 734
    },
    content: 'The recent connectome mapping breakthrough is huge. We now have complete neural maps at synaptic resolution. Combined with advances in quantum computing, could we see working brain emulations within 20 years? Or am I being too optimistic?',
    category: 'neuroscience',
    tags: ['brain-emulation', 'consciousness', 'AI', 'future'],
    replies: 112,
    likes: 267,
    views: 4123,
    timeAgo: '1w ago',
    createdAt: '2025-10-19T08:00:00Z',
    isPinned: false,
    comments: []
  }
];

// ===== DISCUSSION CARD COMPONENT =====
const DiscussionCard = ({ discussion, onClick, isPinned }) => {
  return (
    <div 
      onClick={onClick}
      className={`group p-6 bg-gradient-to-r from-amber-950/10 to-transparent border-l-2 transition-all duration-300 cursor-pointer ${
        isPinned 
          ? 'border-amber-600 bg-amber-950/20' 
          : 'border-amber-900/30 hover:border-amber-600'
      }`}
    >
      {isPinned && (
        <div className="flex items-center gap-2 text-xs tracking-widest text-amber-400 uppercase mb-3">
          <TrendingUp className="w-3 h-3" />
          Pinned Discussion
        </div>
      )}

      <div className="flex items-start gap-6">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-full flex items-center justify-center text-black font-medium">
            {discussion.author.avatar}
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-light mb-2 group-hover:text-amber-400 transition-colors">
            {discussion.title}
          </h3>
          
          <p className="text-gray-500 text-sm mb-3 line-clamp-2 font-light">
            {discussion.content}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <span className="text-amber-400">{discussion.author.name}</span>
            <span>•</span>
            <span className="text-xs uppercase tracking-wide">{discussion.category}</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {discussion.timeAgo}
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <MessageSquare className="w-3 h-3" />
              {discussion.replies}
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <ThumbsUp className="w-3 h-3" />
              {discussion.likes}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-3">
            {discussion.tags.slice(0, 3).map((tag, i) => (
              <span key={i} className="px-2 py-1 bg-amber-950/30 text-amber-600 text-xs">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <ChevronRight className="w-5 h-5 text-amber-600 flex-shrink-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
      </div>
    </div>
  );
};

// ===== INDIVIDUAL DISCUSSION VIEW =====
const DiscussionView = ({ discussionId, onBack }) => {
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([]);
  
  const discussion = discussionsDatabase.find(d => d.id === discussionId);

  React.useEffect(() => {
    if (discussion) {
      setComments(discussion.comments || []);
    }
  }, [discussion]);

  if (!discussion) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-thin mb-4">Discussion not found</h2>
          <button onClick={onBack} className="text-amber-400 hover:text-amber-300">
            Return to Discussions
          </button>
        </div>
      </div>
    );
  }

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: Date.now(),
        author: { name: 'You', avatar: 'YO', role: 'Member' },
        content: newComment,
        likes: 0,
        timeAgo: 'Just now',
        replies: []
      };
      setComments([...comments, comment]);
      setNewComment('');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-amber-400 hover:text-amber-300 mb-8 transition-colors"
        >
          <ChevronRight className="w-4 h-4 rotate-180" />
          Back to Discussions
        </button>

        <div className="mb-8">
          {discussion.isPinned && (
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-600/20 border border-amber-600/50 text-amber-400 text-xs tracking-widest uppercase mb-4">
              <TrendingUp className="w-3 h-3" />
              Pinned
            </div>
          )}
          
          <h1 className="text-4xl md:text-5xl font-thin mb-6 leading-tight">
            {discussion.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-6">
            {discussion.tags.map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-amber-950/30 border border-amber-900/30 text-amber-600 text-xs tracking-wide">
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-500 pb-6 border-b border-amber-900/30">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-full flex items-center justify-center text-black font-medium">
                {discussion.author.avatar}
              </div>
              <div>
                <div className="text-amber-400 font-medium">{discussion.author.name}</div>
                <div className="text-xs text-gray-600">{discussion.author.role}</div>
              </div>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {discussion.timeAgo}
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <MessageSquare className="w-4 h-4" />
              {discussion.replies} replies
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <ThumbsUp className="w-4 h-4" />
              {discussion.likes} likes
            </div>
          </div>
        </div>

        <div className="mb-12 p-8 bg-gradient-to-r from-amber-950/10 to-transparent border-l-2 border-amber-600">
          <p className="text-lg text-gray-300 leading-relaxed font-light">
            {discussion.content}
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-thin mb-6">
            {comments.length} {comments.length === 1 ? 'Comment' : 'Comments'}
          </h2>

          <div className="space-y-6">
            {comments.map((comment) => (
              <div key={comment.id} className="p-6 bg-amber-950/5 border border-amber-900/20">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-amber-600 rounded-full flex items-center justify-center text-white font-medium flex-shrink-0">
                    {comment.author.avatar}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-medium text-gray-300">{comment.author.name}</span>
                      <span className="text-xs text-gray-600">{comment.author.role}</span>
                      <span className="text-xs text-gray-700">•</span>
                      <span className="text-xs text-gray-600">{comment.timeAgo}</span>
                    </div>
                    
                    <p className="text-gray-400 leading-relaxed font-light mb-4">
                      {comment.content}
                    </p>

                    <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-amber-400 transition-colors">
                      <ThumbsUp className="w-4 h-4" />
                      {comment.likes > 0 && <span>{comment.likes}</span>}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 bg-gradient-to-r from-amber-950/10 to-transparent border border-amber-900/30">
          <h3 className="text-lg font-light mb-4">Add your thoughts</h3>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Share your perspective on this topic..."
            className="w-full bg-black border border-amber-900/30 text-gray-300 p-4 mb-4 min-h-32 focus:border-amber-600 focus:outline-none resize-none font-light"
          />
          <div className="flex justify-end">
            <button 
              onClick={handleAddComment}
              className="px-8 py-3 bg-amber-600 hover:bg-amber-500 transition-colors text-black tracking-widest font-medium flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              POST COMMENT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ===== DISCUSSIONS LIST VIEW =====
const DiscussionsList = ({ onDiscussionClick, onNewDiscussion }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('recent');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Topics' },
    { id: 'medicine', label: 'Medicine' },
    { id: 'genetics', label: 'Genetics' },
    { id: 'biohacking', label: 'Biohacking' },
    { id: 'neuroscience', label: 'Neuroscience' },
    { id: 'preservation', label: 'Preservation' },
    { id: 'protocols', label: 'Protocols' }
  ];

  const sortOptions = [
    { id: 'recent', label: 'Most Recent' },
    { id: 'popular', label: 'Most Popular' },
    { id: 'replies', label: 'Most Replies' }
  ];

  let filteredDiscussions = discussionsDatabase;

  if (selectedCategory !== 'all') {
    filteredDiscussions = filteredDiscussions.filter(d => d.category === selectedCategory);
  }

  if (searchQuery) {
    filteredDiscussions = filteredDiscussions.filter(d => 
      d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }

  if (sortBy === 'popular') {
    filteredDiscussions = [...filteredDiscussions].sort((a, b) => b.likes - a.likes);
  } else if (sortBy === 'replies') {
    filteredDiscussions = [...filteredDiscussions].sort((a, b) => b.replies - a.replies);
  }

  const pinnedDiscussions = filteredDiscussions.filter(d => d.isPinned);
  const regularDiscussions = filteredDiscussions.filter(d => !d.isPinned);

  return (
    <div className="min-h-screen bg-black text-white pt-1 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          {/* <h1 className="text-5xl md:text-6xl font-thin mb-6 tracking-wider">Community Discussions</h1>
          <p className="text-gray-400 text-lg font-light mb-8">
            Join the conversation with 12,400 longevity pioneers
          </p> */}

          <div className="flex gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search discussions, tags, or topics..."
                className="w-full bg-amber-950/10 border border-amber-900/30 text-gray-300 pl-12 pr-4 py-4 focus:border-amber-600 focus:outline-none font-light"
              />
            </div>
            <button 
              onClick={onNewDiscussion}
              className="px-8 py-4 bg-amber-600 hover:bg-amber-500 transition-colors text-black tracking-widest font-medium flex items-center gap-2 whitespace-nowrap"
            >
              <Plus className="w-5 h-5" />
              NEW DISCUSSION
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-500 tracking-wide">FILTER:</span>
            </div>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 border transition-all text-sm tracking-wide ${
                  selectedCategory === cat.id
                    ? 'border-amber-600 bg-amber-600 text-black'
                    : 'border-amber-900/30 hover:border-amber-600/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
            
            <div className="ml-auto flex items-center gap-3">
              <span className="text-sm text-gray-500 tracking-wide">SORT BY:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-amber-950/10 border border-amber-900/30 text-gray-300 px-4 py-2 focus:border-amber-600 focus:outline-none text-sm"
              >
                {sortOptions.map(opt => (
                  <option key={opt.id} value={opt.id}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="mb-6 text-sm text-gray-600">
          Showing {filteredDiscussions.length} {filteredDiscussions.length === 1 ? 'discussion' : 'discussions'}
        </div>

        {pinnedDiscussions.length > 0 && (
          <div className="mb-8">
            {pinnedDiscussions.map((discussion) => (
              <DiscussionCard 
                key={discussion.id} 
                discussion={discussion} 
                onClick={() => onDiscussionClick(discussion.id)}
                isPinned={true}
              />
            ))}
          </div>
        )}

        <div className="space-y-4">
          {regularDiscussions.map((discussion) => (
            <DiscussionCard 
              key={discussion.id} 
              discussion={discussion} 
              onClick={() => onDiscussionClick(discussion.id)}
            />
          ))}
        </div>

        {filteredDiscussions.length === 0 && (
          <div className="text-center py-20">
            <MessageSquare className="w-16 h-16 text-gray-700 mx-auto mb-4" />
            <p className="text-gray-500 font-light">No discussions found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

// ===== NEW DISCUSSION FORM =====
const NewDiscussionForm = ({ onBack, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: 'medicine',
    tags: ''
  });

  const categories = [
    { id: 'medicine', label: 'Medicine' },
    { id: 'genetics', label: 'Genetics' },
    { id: 'biohacking', label: 'Biohacking' },
    { id: 'neuroscience', label: 'Neuroscience' },
    { id: 'preservation', label: 'Preservation' },
    { id: 'protocols', label: 'Protocols' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.content) {
      const newDiscussion = {
        id: Date.now(),
        ...formData,
        tags: formData.tags.split(',').map(t => t.trim()).filter(t => t),
        author: {
          name: 'You',
          avatar: 'YO',
          role: 'Member',
          reputation: 0
        },
        replies: 0,
        likes: 0,
        views: 0,
        timeAgo: 'Just now',
        createdAt: new Date().toISOString(),
        isPinned: false,
        comments: []
      };
      onSubmit(newDiscussion);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-amber-400 hover:text-amber-300 mb-8 transition-colors"
        >
          <ChevronRight className="w-4 h-4 rotate-180" />
          Cancel
        </button>

        <h1 className="text-4xl font-thin mb-8">Start a New Discussion</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm text-gray-400 mb-2 tracking-wide">DISCUSSION TITLE</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              placeholder="What would you like to discuss?"
              className="w-full bg-amber-950/10 border border-amber-900/30 text-gray-300 p-4 focus:border-amber-600 focus:outline-none font-light"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2 tracking-wide">CATEGORY</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
              className="w-full bg-amber-950/10 border border-amber-900/30 text-gray-300 p-4 focus:border-amber-600 focus:outline-none"
            >
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2 tracking-wide">DISCUSSION CONTENT</label>
            <textarea
              value={formData.content}
              onChange={(e) => setFormData({...formData, content: e.target.value})}
              placeholder="Share your thoughts, questions, or research findings..."
              className="w-full bg-amber-950/10 border border-amber-900/30 text-gray-300 p-4 min-h-64 focus:border-amber-600 focus:outline-none resize-none font-light"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2 tracking-wide">TAGS (comma-separated)</label>
            <input
              type="text"
              value={formData.tags}
              onChange={(e) => setFormData({...formData, tags: e.target.value})}
              placeholder="e.g., NAD+, supplementation, results"
              className="w-full bg-amber-950/10 border border-amber-900/30 text-gray-300 p-4 focus:border-amber-600 focus:outline-none font-light"
            />
            <p className="text-xs text-gray-600 mt-2">Add relevant tags to help others find your discussion</p>
          </div>

          <div className="p-6 bg-amber-950/10 border border-amber-900/30">
            <h3 className="text-sm font-medium text-amber-400 mb-3 tracking-wide">COMMUNITY GUIDELINES</h3>
            <ul className="space-y-2 text-sm text-gray-500 font-light">
              <li>• Be respectful and constructive in your discussions</li>
              <li>• Cite sources when making scientific claims</li>
              <li>• Focus on evidence-based approaches to longevity</li>
              <li>• Share your personal experiences, but distinguish them from medical advice</li>
            </ul>
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 py-4 bg-amber-600 hover:bg-amber-500 transition-colors text-black tracking-widest font-medium"
            >
              POST DISCUSSION
            </button>
            <button
              type="button"
              onClick={onBack}
              className="px-8 py-4 border-2 border-amber-900/30 hover:border-amber-600 transition-all tracking-widest"
            >
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// ===== MAIN COMMUNITY DISCUSSIONS COMPONENT =====
const CommunityDiscussions = () => {
  const [currentView, setCurrentView] = useState('list');
  const [selectedDiscussionId, setSelectedDiscussionId] = useState(null);
  const [discussions, setDiscussions] = useState(discussionsDatabase);

  const handleDiscussionClick = (id) => {
    setSelectedDiscussionId(id);
    setCurrentView('view');
    window.scrollTo(0, 0);
  };

  const handleNewDiscussion = () => {
    setCurrentView('new');
    window.scrollTo(0, 0);
  };

  const handleSubmitDiscussion = (newDiscussion) => {
    setDiscussions([newDiscussion, ...discussions]);
    setCurrentView('list');
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setCurrentView('list');
    window.scrollTo(0, 0);
  };

  return (
    <div>
      {currentView === 'list' && (
        <DiscussionsList 
          onDiscussionClick={handleDiscussionClick}
          onNewDiscussion={handleNewDiscussion}
        />
      )}
      
      {currentView === 'view' && (
        <DiscussionView 
          discussionId={selectedDiscussionId}
          onBack={handleBack}
        />
      )}
      
      {currentView === 'new' && (
        <NewDiscussionForm 
          onBack={handleBack}
          onSubmit={handleSubmitDiscussion}
        />
      )}
    </div>
  );
};

// ===== EXPORTS =====
export default CommunityDiscussions;
export { DiscussionsList, DiscussionView, NewDiscussionForm, discussionsDatabase };