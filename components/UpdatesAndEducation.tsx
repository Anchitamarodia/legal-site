
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, 
  Gavel, 
  Building2, 
  ScrollText, 
  BookOpen, 
  Star, 
  FileText, 
  GraduationCap, 
  Video, 
  Scale, 
  Users, 
  PenTool 
} from 'lucide-react';

const LEGAL_UPDATES = [
  {
    type: 'Supreme',
    color: 'text-red-600 bg-red-50 border-red-100',
    icon: <Gavel size={16} />,
    fire: true,
    title: 'Supreme Court Rules on Digital Privacy Rights',
    time: 2,
  },
  {
    type: 'High',
    color: 'text-blue-600 bg-blue-50 border-blue-100',
    icon: <Building2 size={16} />,
    fire: false,
    title: 'High Court Directives on Property Disputes 2024',
    time: 4,
  },
  {
    type: 'Session',
    color: 'text-green-600 bg-green-50 border-green-100',
    icon: <Scale size={16} />,
    fire: false,
    title: 'Session Court Procedures for Criminal Cases Updated',
    time: 6,
  },
  {
    type: 'Laws',
    color: 'text-purple-600 bg-purple-50 border-purple-100',
    icon: <ScrollText size={16} />,
    fire: true,
    title: 'New Labor Laws for Gig Economy Workers Passed',
    time: 8,
  },
];

const EDUCATION_HUB = [
  { icon: <Scale size={24} className="text-blue-500" />, title: 'Constitutional Law of India', rating: '4.8', tag: '₹299' },
  { icon: <Users size={24} className="text-orange-500" />, title: 'Family Law Fundamentals', rating: '4.9', tag: '₹199' },
  { icon: <Gavel size={24} className="text-red-500" />, title: 'Criminal Procedure Code', rating: '4.7', tag: <FileText size={12} /> },
  { icon: <Building2 size={24} className="text-purple-500" />, title: 'Corporate Governance 101', rating: '4.6', tag: '₹349' },
  { icon: <PenTool size={24} className="text-green-500" />, title: 'Contract Drafting Guide', rating: '4.9', tag: '₹249' },
  { icon: <BookOpen size={24} className="text-indigo-500" />, title: 'Legal Research Methods', rating: '4.5', tag: <FileText size={12} /> },
];

const UpdatesAndEducation: React.FC = () => {
  return (
    <div className="bg-[#FDFCF9] space-y-24 pb-32">
      {/* Section 1: Legal Updates */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-[#002B5B] mb-2">📰 Legal Updates</h2>
          <p className="text-gray-400 font-bold text-xs uppercase tracking-[0.2em]">SC • HC • Session Courts</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {LEGAL_UPDATES.map((update, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between h-full group transition-all hover:shadow-md"
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-gray-400">{update.icon}</span>
                  <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border ${update.color} flex items-center gap-1`}>
                    {update.type}
                    {update.fire && <span>🔥</span>}
                  </div>
                </div>
                <h3 className="text-lg font-black text-[#002B5B] leading-tight mb-6 line-clamp-2 group-hover:text-[#F7941D] transition-colors">
                  {update.title}
                </h3>
              </div>
              <div className="flex items-center justify-between border-t border-gray-50 pt-4 mt-auto">
                <div className="flex items-center gap-1.5 text-gray-400 text-[11px] font-bold">
                  <Clock size={14} />
                  {update.time} hrs ago
                </div>
                <span className="text-[11px] font-black text-gray-300 uppercase tracking-widest cursor-pointer hover:text-[#002B5B] transition-colors">Read</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="bg-white text-[#002B5B] border border-gray-200 px-8 py-3.5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-gray-50 transition-all shadow-sm">
            All Updates
          </button>
        </div>
      </section>

      {/* Section 2: Education Hub */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-[#002B5B] mb-2">📚 Education Hub</h2>
          <p className="text-gray-400 font-bold text-xs uppercase tracking-[0.2em]">Resources • Courses • Books</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {EDUCATION_HUB.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="bg-white border border-gray-50 rounded-[32px] p-6 text-center flex flex-col items-center justify-between shadow-sm transition-all hover:shadow-lg"
            >
              <div className="bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h4 className="text-[13px] font-black text-[#002B5B] leading-tight mb-2 min-h-[32px]">
                {item.title}
              </h4>
              <div className="flex items-center gap-1 text-yellow-500 mb-4">
                <Star size={10} fill="currentColor" />
                <span className="text-[10px] font-black text-gray-400">{item.rating}</span>
              </div>
              <div className="bg-[#002B5B]/5 text-[#002B5B] px-4 py-1.5 rounded-xl text-[10px] font-black w-full flex items-center justify-center">
                {item.tag}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Icons Section */}
        <div className="flex flex-wrap justify-center items-center gap-12 mb-12">
          <div className="flex items-center gap-2 text-gray-400 font-black text-[11px] uppercase tracking-wider">
            <span className="text-lg">📖</span> 500+ Resources
          </div>
          <div className="flex items-center gap-2 text-gray-400 font-black text-[11px] uppercase tracking-wider">
            <span className="text-lg">🎓</span> Expert Mentors
          </div>
          <div className="flex items-center gap-2 text-gray-400 font-black text-[11px] uppercase tracking-wider">
            <span className="text-lg">🆓</span> Free Materials
          </div>
        </div>

        <div className="flex justify-center">
          <button className="bg-white text-[#002B5B] border border-gray-200 px-8 py-3.5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-gray-50 transition-all shadow-sm">
            View All Resources
          </button>
        </div>
      </section>
    </div>
  );
};

export default UpdatesAndEducation;
