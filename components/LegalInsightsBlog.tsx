
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Home, Users, Search, Lock, ShoppingCart, Building2, 
  Clock, Eye, Heart, MessageSquare, ArrowRight 
} from 'lucide-react';

const FEATURED_ARTICLES = [
  {
    id: 1,
    icon: <Home size={20} className="text-gray-500" />,
    category: 'Property Law',
    catColor: 'bg-blue-50 text-blue-600',
    title: 'Understanding Property Rights and Easements',
    summary: 'A comprehensive guide on what you need to know about property boundaries, shared spaces, and legal easements in 2024.',
    author: 'Adv. Rajesh Kumar',
    date: 'Oct 12, 2024',
    readTime: '8 min',
    views: '2.5k',
    likes: '45',
    comments: '12'
  },
  {
    id: 2,
    icon: <Users size={20} className="text-gray-500" />,
    category: 'Family Law',
    catColor: 'bg-green-50 text-green-600',
    title: 'Navigating Custody Laws: A Parent\'s Guide',
    summary: 'Understanding the legal framework behind child custody, visitation rights, and the best interest of the child principle.',
    author: 'Sarah Jenkins',
    date: 'Oct 10, 2024',
    readTime: '12 min',
    views: '1.8k',
    likes: '38',
    comments: '09'
  },
  {
    id: 3,
    icon: <Search size={20} className="text-gray-500" />,
    category: 'Legal Advice',
    catColor: 'bg-orange-50 text-orange-600',
    title: 'How to Prepare for Your First Consultation',
    summary: 'Make the most of your time with a lawyer by following these essential steps before your first meeting.',
    author: 'Michael Chen',
    date: 'Oct 08, 2024',
    readTime: '5 min',
    views: '3.2k',
    likes: '62',
    comments: '24'
  }
];

const ARTICLE_LIST = [
  {
    id: 4,
    icon: <Lock size={20} className="text-purple-500" />,
    category: 'Cyber Law',
    catColor: 'bg-purple-50 text-purple-600',
    title: 'The Impact of New Data Protection Acts',
    desc: 'How the recent changes in digital privacy affect small businesses.',
    author: 'Dr. Anita Desai',
    readTime: '6 min'
  },
  {
    id: 5,
    icon: <ShoppingCart size={20} className="text-pink-500" />,
    category: 'Consumer Rights',
    catColor: 'bg-pink-50 text-pink-600',
    title: 'Consumer Redressal in E-commerce',
    desc: 'Your rights when buying products from international online platforms.',
    author: 'Kevin Smith',
    readTime: '4 min'
  },
  {
    id: 6,
    icon: <Building2 size={20} className="text-indigo-500" />,
    category: 'Corporate Law',
    catColor: 'bg-indigo-50 text-indigo-600',
    title: 'Starting a Startup: Legal Essentials',
    desc: 'The top 5 legal documents every new entrepreneur must have.',
    author: 'Adv. Priya Shah',
    readTime: '10 min'
  },
  {
    id: 7,
    icon: <Home size={20} className="text-teal-500" />,
    category: 'Real Estate',
    catColor: 'bg-teal-50 text-teal-600',
    title: 'RERA Compliance Check for Buyers',
    desc: 'A checklist for first-time home buyers to ensure project compliance.',
    author: 'Amit Verma',
    readTime: '7 min'
  }
];

const LegalInsightsBlog: React.FC = () => {
  return (
    <section className="py-24 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-[#002B5B] mb-4">Legal Insights & Blog</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Expert insights, legal tips, and practical advice from experienced lawyers and legal professionals.
          </p>
        </div>

        {/* Featured Articles Section */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-8">
            <span className="text-xl">⭐</span>
            <h3 className="text-2xl font-black text-[#002B5B]">Featured Articles</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Fix: Changed FEATURE_ARTICLES to FEATURED_ARTICLES to fix the name reference error */}
            {FEATURED_ARTICLES.map((article) => (
              <motion.div
                key={article.id}
                whileHover={{ y: -8 }}
                className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden flex flex-col group transition-all hover:shadow-xl"
              >
                <div className="p-8 pb-0">
                  <div className="flex items-center justify-between mb-6">
                    <div className="bg-gray-100 p-2.5 rounded-xl">
                      {article.icon}
                    </div>
                    <div className="bg-blue-100/50 text-blue-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
                      Featured
                    </div>
                  </div>
                  <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 ${article.catColor}`}>
                    {article.category}
                  </div>
                  <h4 className="text-xl font-black text-[#002B5B] mb-4 leading-tight group-hover:text-[#F7941D] transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-6">
                    {article.summary}
                  </p>
                </div>

                <div className="px-8 mb-6 mt-auto">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white shadow-sm flex items-center justify-center overflow-hidden">
                      <span className="text-[10px] font-bold text-gray-500">{article.author.charAt(0)}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-black text-[#002B5B]">{article.author}</span>
                      <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold">
                        <span>{article.date}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <div className="flex items-center gap-1">
                          <Clock size={10} />
                          {article.readTime}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 border-t border-gray-50 pt-6 text-gray-400 font-bold text-[11px]">
                    <div className="flex items-center gap-1.5">
                      <Eye size={14} />
                      {article.views}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Heart size={14} />
                      {article.likes}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MessageSquare size={14} />
                      {article.comments}
                    </div>
                  </div>
                </div>

                <button className="w-full py-5 bg-white border-t border-gray-50 text-[#002B5B] font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                  Read Article <ArrowRight size={14} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Article List Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {ARTICLE_LIST.map((article) => (
            <motion.div
              key={article.id}
              whileHover={{ x: 8 }}
              className="bg-white rounded-3xl border border-gray-100 p-6 flex items-center gap-6 group transition-all hover:shadow-md"
            >
              <div className="bg-gray-50 w-20 h-20 rounded-2xl flex-shrink-0 flex items-center justify-center">
                {article.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className={`inline-block px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest mb-2 ${article.catColor}`}>
                  {article.category}
                </div>
                <h5 className="text-base font-black text-[#002B5B] truncate mb-1">
                  {article.title}
                </h5>
                <p className="text-gray-400 text-xs truncate mb-3">
                  {article.desc}
                </p>
                <div className="flex items-center gap-3 text-[10px] font-bold text-gray-400">
                  <span className="text-[#002B5B]">{article.author}</span>
                  <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                  <div className="flex items-center gap-1">
                    <Clock size={10} />
                    {article.readTime}
                  </div>
                </div>
              </div>
              <button className="text-[#002B5B] font-black text-xs uppercase tracking-widest flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                Read <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* View All Footer */}
        <div className="flex justify-center">
          <button className="bg-white text-[#002B5B] border border-gray-200 px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-gray-50 transition-all shadow-sm">
            View All Articles <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LegalInsightsBlog;
