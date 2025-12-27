
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, FileText, Calendar, User, MessageSquare, 
  BookOpen, CreditCard, Users, Shield, Globe, 
  Smartphone, Key, ArrowRight, LayoutGrid 
} from 'lucide-react';

interface Feature {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  category: string;
  bgColor: string;
  iconColor: string;
  comingSoon?: boolean;
}

const CATEGORIES = [
  'All Features', 'AI & Research', 'Document Management', 'Scheduling', 
  'Client Management', 'Public Services', 'Finance', 'Networking', 
  'Security', 'Accessibility', 'Mobile', 'User Management'
];

const FEATURES: Feature[] = [
  {
    id: 1,
    icon: <Brain size={24} />,
    title: 'AI Legal Assistant',
    description: 'Smart document drafting and case strategy recommendations powered by advanced LLMs.',
    category: 'AI & Research',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600'
  },
  {
    id: 2,
    icon: <FileText size={24} />,
    title: 'Document Vault',
    description: 'Secure, organized repository for all your legal filings, contracts, and case evidence.',
    category: 'Document Management',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600'
  },
  {
    id: 3,
    icon: <Calendar size={24} />,
    title: 'Court Calendar Sync',
    description: 'Never miss a hearing with automated sync to your existing calendar applications.',
    category: 'Scheduling',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600'
  },
  {
    id: 4,
    icon: <User size={24} />,
    title: 'Client Portal',
    description: 'Transparent communication channel for clients to track case progress and share files.',
    category: 'Client Management',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600'
  },
  {
    id: 5,
    icon: <MessageSquare size={24} />,
    title: 'GPT Chatbot',
    description: 'Automated first-level legal queries and intake support for potential leads.',
    category: 'Public Services',
    bgColor: 'bg-pink-50',
    iconColor: 'text-pink-600'
  },
  {
    id: 6,
    icon: <BookOpen size={24} />,
    title: 'Legal Research',
    description: 'Fast, semantic search across thousands of case laws and statutes.',
    category: 'AI & Research',
    bgColor: 'bg-indigo-50',
    iconColor: 'text-indigo-600'
  },
  {
    id: 7,
    icon: <CreditCard size={24} />,
    title: 'Billing Management',
    description: 'Streamlined invoicing, expense tracking, and online payment processing.',
    category: 'Finance',
    bgColor: 'bg-amber-50',
    iconColor: 'text-amber-600',
    comingSoon: true
  },
  {
    id: 8,
    icon: <Users size={24} />,
    title: 'Referral Board',
    description: 'Connect with specialized practitioners for expert co-counseling opportunities.',
    category: 'Networking',
    bgColor: 'bg-teal-50',
    iconColor: 'text-teal-600',
    comingSoon: true
  },
  {
    id: 9,
    icon: <Shield size={24} />,
    title: 'End-to-End Encryption',
    description: 'Military-grade security ensuring your privileged communications stay private.',
    category: 'Security',
    bgColor: 'bg-rose-50',
    iconColor: 'text-rose-600'
  },
  {
    id: 10,
    icon: <Globe size={24} />,
    title: 'Multilingual Support',
    description: 'Access legal tools and insights in multiple regional and international languages.',
    category: 'Accessibility',
    bgColor: 'bg-yellow-50',
    iconColor: 'text-yellow-600'
  },
  {
    id: 11,
    icon: <Smartphone size={24} />,
    title: 'Mobile PWA',
    description: 'Take your practice on the go with our high-performance mobile experience.',
    category: 'Mobile',
    bgColor: 'bg-slate-50',
    iconColor: 'text-slate-600'
  },
  {
    id: 12,
    icon: <Key size={24} />,
    title: 'Role-Based Access',
    description: 'Granular permissions for your associates, clerks, and administrative staff.',
    category: 'User Management',
    bgColor: 'bg-zinc-100',
    iconColor: 'text-zinc-600'
  }
];

const FeaturesSolutions: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All Features');

  const filteredFeatures = activeTab === 'All Features' 
    ? FEATURES 
    : FEATURES.filter(f => f.category === activeTab);

  return (
    <section id="features-solutions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-gray-50 border border-gray-100 px-4 py-1.5 rounded-full mb-6"
          >
            <span className="text-[10px] font-black uppercase tracking-widest text-[#002B5B]">Complete Legal Solution</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-black text-[#002B5B] mb-6 tracking-tight">
            Everything You Need to Run Your Practice
          </h2>
          
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            From AI-powered research to secure client communication, Yugality provides all the tools modern legal professionals need.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-black transition-all border ${
                activeTab === cat 
                  ? 'bg-gray-100 text-[#002B5B] border-gray-200' 
                  : 'bg-transparent text-gray-400 border-transparent hover:text-gray-600 hover:bg-gray-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Feature Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          <AnimatePresence mode='popLayout'>
            {filteredFeatures.map((feature) => (
              <motion.div
                key={feature.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm flex flex-col h-full group transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className={`${feature.bgColor} ${feature.iconColor} p-3.5 rounded-2xl`}>
                    {feature.icon}
                  </div>
                  {feature.comingSoon && (
                    <span className="bg-gray-100 text-gray-500 text-[9px] font-black uppercase px-2 py-1 rounded-md">
                      Coming Soon
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-black text-[#002B5B] mb-3 group-hover:text-[#F7941D] transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-6 flex-grow">
                  {feature.description}
                </p>

                <div className="pt-6 border-t border-gray-50 mt-auto">
                  <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">
                    {feature.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer */}
        <div className="flex justify-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#001D3D] text-white px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:shadow-xl transition-all"
          >
            Explore All Features
            <LayoutGrid size={16} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSolutions;
