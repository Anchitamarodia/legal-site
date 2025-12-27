
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, SlidersHorizontal, ChevronDown, 
  Bookmark, Share2, Filter, Clock,
  ArrowUpRight, FileText, Gavel
} from 'lucide-react';
import { cn } from '../utils/cn';

const RECENT_SEARCHES = [
  'Property law precedents',
  'Criminal defense strategies',
  'Contract breach remedies',
  'Employment discrimination cases'
];

const SEARCH_RESULTS = [
  {
    id: 1,
    title: 'Smith v. Johnson Property Dispute',
    court: 'Supreme Court of India',
    year: '2023',
    citations: '45 citations',
    snippet: 'Landmark case establishing new precedents for property boundary disputes in urban areas.',
    relevance: 'High Relevance',
    type: 'Case Law',
    tag: 'Property Law'
  },
  {
    id: 2,
    title: 'Contract Law: Force Majeure Clauses',
    court: 'Delhi High Court',
    year: '2022',
    citations: '32 citations',
    snippet: 'Detailed analysis of force majeure applications during pandemic situations.',
    relevance: 'Medium Relevance',
    type: 'Judgment',
    tag: 'Contract Law'
  },
  {
    id: 3,
    title: 'Employment Rights Amendment Act 2023',
    court: 'Parliament of India',
    year: '2023',
    citations: '78 citations',
    snippet: 'New amendments to employment protection laws affecting gig economy workers.',
    relevance: 'High Relevance',
    type: 'Statute',
    tag: 'Employment Law'
  }
];

const ResearchPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Search Results');

  return (
    <div className="py-12 bg-[#FDFCF9] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-4xl font-black text-[#002B5B] mb-2">Legal Research</h2>
          <p className="text-gray-400 font-medium">Search through extensive legal databases and case law</p>
        </div>

        {/* Advanced Search Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[32px] border border-gray-100 p-8 shadow-sm mb-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <Search className="text-[#002B5B]" size={24} />
            <h3 className="text-xl font-black text-[#002B5B]">Advanced Legal Search</h3>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <input 
                  type="text" 
                  placeholder="Search cases, statutes, regulations, or legal concepts..."
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-sm outline-none focus:border-[#002B5B] transition-all"
                />
              </div>
              <div className="w-48">
                <div className="relative">
                  <select className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-sm appearance-none outline-none focus:border-[#002B5B] text-gray-500 font-bold">
                    <option>All Categories</option>
                    <option>Case Law</option>
                    <option>Statutes</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <button className="bg-[#002B5B] text-white px-10 py-4 rounded-2xl font-black text-sm flex items-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-[#002B5B]/10">
                <Search size={18} />
                Search
              </button>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-white border border-gray-100 rounded-xl px-5 py-2.5 text-xs font-black text-gray-500 flex items-center gap-3 hover:border-gray-200">
                Jurisdiction
                <ChevronDown size={14} />
              </button>
              <button className="bg-white border border-gray-100 rounded-xl px-5 py-2.5 text-xs font-black text-gray-500 flex items-center gap-3 hover:border-gray-200">
                Year Range
                <ChevronDown size={14} />
              </button>
              <button className="bg-white border border-gray-100 rounded-xl px-5 py-2.5 text-xs font-black text-gray-500 flex items-center gap-3 hover:border-gray-200">
                <Filter size={14} />
                More Filters
              </button>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Recent Searches:</span>
              <div className="flex flex-wrap gap-2">
                {RECENT_SEARCHES.map(s => (
                  <button key={s} className="bg-gray-100 px-4 py-1.5 rounded-full text-[10px] font-black text-gray-500 hover:bg-gray-200 transition-colors uppercase">
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Results Section Tabs */}
        <div className="flex bg-gray-100/50 p-1.5 rounded-2xl w-fit mb-8 border border-gray-100">
          {['Search Results', 'Databases', 'Saved Research', 'AI Research Assistant'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-6 py-2.5 rounded-xl text-xs font-black transition-all",
                activeTab === tab ? "bg-white text-[#002B5B] shadow-sm" : "text-gray-400 hover:text-gray-600"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between mb-8">
          <p className="text-xs font-bold text-gray-400">Found 1,247 results in 0.3 seconds</p>
          <div className="relative">
            <select className="bg-transparent border border-gray-100 rounded-xl px-4 py-2 text-xs font-black text-gray-500 appearance-none pr-10">
              <option>Sort by Relevance</option>
              <option>Sort by Date</option>
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Results List */}
        <div className="space-y-6">
          {SEARCH_RESULTS.map((res, i) => (
            <motion.div
              key={res.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-black text-[#002B5B] group-hover:text-[#F7941D] transition-colors mb-2 cursor-pointer">
                    {res.title}
                  </h4>
                  <div className="flex items-center gap-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    <span>{res.court}</span>
                    <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                    <span>{res.year}</span>
                    <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                    <span>{res.citations}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className={cn(
                    "px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-tighter",
                    res.relevance === 'High Relevance' ? 'bg-[#002B5B] text-white' : 'bg-gray-100 text-gray-500'
                  )}>
                    {res.relevance}
                  </span>
                  <span className="bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-tighter border border-gray-200">
                    {res.type}
                  </span>
                </div>
              </div>

              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                {res.snippet}
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                <span className="bg-gray-50 text-gray-400 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-gray-100">
                  {res.tag}
                </span>
                <div className="flex gap-3">
                  <button className="bg-white border border-gray-100 text-[#002B5B] px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-gray-50">
                    <Bookmark size={14} />
                    Save
                  </button>
                  <button className="bg-white border border-gray-100 text-[#002B5B] px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-gray-50">
                    <ArrowUpRight size={14} />
                    View Full Text
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchPage;
