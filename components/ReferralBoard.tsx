
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Send, 
  Bookmark, 
  Wallet, 
  Search, 
  ChevronDown, 
  Star, 
  MapPin, 
  MessageSquare, 
  Plus 
} from 'lucide-react';

const STATS = [
  { label: 'Network Lawyers', count: '4', sub: 'Available for referrals', icon: <Users size={20} className="text-[#002B5B]" /> },
  { label: 'Active Requests', count: '2', sub: 'Awaiting assignment', icon: <Send size={20} className="text-[#002B5B]" /> },
  { label: 'My Referrals', count: '2', sub: 'Total sent', icon: <Bookmark size={20} className="text-[#002B5B]" /> },
  { label: 'Earnings', count: '₹23,000', sub: 'From referral commissions', icon: <Wallet size={20} className="text-[#002B5B]" /> },
];

const LAWYERS = [
  { 
    initials: 'ARK', 
    name: 'Adv. Rajesh Kumar', 
    specialty: 'Criminal Law', 
    exp: '15 years experience', 
    rating: 4.8, 
    cases: 250, 
    location: 'Delhi', 
    status: 'Available' 
  },
  { 
    initials: 'APS', 
    name: 'Adv. Priya Sharma', 
    specialty: 'Family Law', 
    exp: '12 years experience', 
    rating: 4.9, 
    cases: 180, 
    location: 'Mumbai', 
    status: 'Busy' 
  },
  { 
    initials: 'AVS', 
    name: 'Adv. Vikram Singh', 
    specialty: 'Corporate Law', 
    exp: '18 years experience', 
    rating: 4.7, 
    cases: 320, 
    location: 'Bangalore', 
    status: 'Available' 
  },
  { 
    initials: 'AMP', 
    name: 'Adv. Meera Patel', 
    specialty: 'Property Law', 
    exp: '10 years experience', 
    rating: 4.6, 
    cases: 145, 
    location: 'Ahmedabad', 
    status: 'Available' 
  },
];

const ReferralBoard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Lawyer Directory');

  return (
    <section id="referral-board" className="py-12 md:py-20 min-h-[calc(100vh-80px)] bg-[#FDFCF9]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div>
            <h2 className="text-5xl font-black text-[#002B5B] mb-3 tracking-tight">Referral Board</h2>
            <p className="text-gray-400 font-medium text-lg">Connect with lawyers and manage referrals</p>
          </div>
          <button className="bg-[#002B5B] text-white px-8 py-4 rounded-2xl font-black text-sm flex items-center gap-2 hover:shadow-xl transition-all shadow-lg shadow-[#002B5B]/10 active:scale-95">
            <Plus size={18} />
            Post Referral
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {STATS.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-gray-100 p-8 rounded-[32px] shadow-sm flex flex-col items-start hover:shadow-md transition-shadow"
            >
              <div className="w-full flex justify-between items-start mb-4">
                <div className="bg-gray-50 p-3 rounded-2xl">
                  {stat.icon}
                </div>
              </div>
              <span className="text-3xl font-black text-[#002B5B] mb-1">{stat.count}</span>
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">{stat.label}</span>
              <p className="text-[10px] text-gray-400 font-bold">{stat.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Tabs and Filter Bar */}
        <div className="mb-12 space-y-8">
          <div className="flex bg-gray-100/60 p-1.5 rounded-2xl w-fit border border-gray-200/50">
            {['Lawyer Directory', 'Referral Requests', 'My Referrals'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-xl text-xs font-black transition-all whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-white text-[#002B5B] shadow-lg shadow-gray-200/50'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Search lawyers by name or specialty..."
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl pl-12 pr-6 py-4 text-sm outline-none focus:border-[#002B5B] transition-colors"
                />
              </div>
              <div className="flex gap-4">
                <button className="bg-white border border-gray-100 rounded-2xl px-6 py-4 text-xs font-black text-gray-600 flex items-center gap-4 hover:border-[#002B5B] transition-all">
                  All Specialties
                  <ChevronDown size={14} className="text-gray-400" />
                </button>
                <button className="bg-white border border-gray-100 rounded-2xl px-6 py-4 text-xs font-black text-gray-600 flex items-center gap-4 hover:border-[#002B5B] transition-all">
                  All Locations
                  <ChevronDown size={14} className="text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Lawyer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LAWYERS.map((lawyer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-[40px] border border-gray-100 p-10 shadow-sm group transition-all hover:shadow-xl"
            >
              <div className="flex items-start gap-6 mb-8">
                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center text-[#002B5B] font-black text-xs border-4 border-white shadow-sm shrink-0">
                  {lawyer.initials}
                </div>
                <div className="min-w-0">
                  <h4 className="text-xl font-black text-[#002B5B] mb-1 truncate">{lawyer.name}</h4>
                  <p className="text-sm font-bold text-gray-400 mb-1">{lawyer.specialty}</p>
                  <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest">{lawyer.exp}</p>
                </div>
              </div>

              <div className="flex items-center justify-between mb-8 border-y border-gray-50 py-6">
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-1.5 text-yellow-400">
                    <Star size={14} fill="currentColor" />
                    <span className="text-sm font-black text-[#002B5B]">{lawyer.rating}</span>
                    <span className="text-[10px] font-bold text-gray-300">({lawyer.cases} cases)</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-1.5 text-gray-400">
                    <MapPin size={12} />
                    <span className="text-[10px] font-bold">{lawyer.location}</span>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest ${
                    lawyer.status === 'Available' ? 'bg-[#002B5B] text-white' : 'bg-gray-100 text-gray-400'
                  }`}>
                    {lawyer.status}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button className="flex-1 bg-[#002B5B] text-white py-4 rounded-2xl font-black text-xs flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-[#002B5B]/10 active:scale-95">
                  <Send size={14} />
                  Refer Case
                </button>
                <button className="w-14 h-14 rounded-2xl border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#002B5B] hover:border-[#002B5B] transition-all">
                  <MessageSquare size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Action */}
        <div className="mt-16 flex justify-center">
          <button className="bg-white border border-gray-200 px-10 py-4 rounded-full font-black text-[#002B5B] text-xs uppercase tracking-widest hover:bg-gray-50 transition-all shadow-sm">
            View All Lawyers
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReferralBoard;
