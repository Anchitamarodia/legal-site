
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { FEATURE_CARDS } from '../constants';
import { FeatureCard as FeatureCardType } from '../types';

const Card = React.memo(({ card }: { card: FeatureCardType }) => {
  return (
    <motion.div
      whileHover={{ 
        y: -12, 
        transition: { type: "spring", stiffness: 400, damping: 10 } 
      }}
      className="bg-white p-8 rounded-[32px] shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08)] border border-gray-50 group cursor-pointer"
    >
      <div className={`${card.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
        {card.icon}
      </div>
      <h3 className="text-2xl font-black text-[#002B5B] mb-3">{card.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-6">
        {card.description}
      </p>
      <div className="flex items-center gap-2 text-[#002B5B] font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity">
        Learn More
        <motion.div
          animate={{ x: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowUpRight size={14} />
        </motion.div>
      </div>
    </motion.div>
  );
});

const FeatureGrid: React.FC = () => {
  const col1 = [FEATURE_CARDS[0], FEATURE_CARDS[2]];
  const col2 = [FEATURE_CARDS[1], FEATURE_CARDS[3]];

  return (
    <div className="grid grid-cols-2 gap-6 relative">
      {/* Overlay Navigation */}
      <div className="absolute -top-12 -right-4 z-20">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-4 rounded-2xl shadow-xl border border-gray-100 min-w-[240px]"
        >
          <div className="flex items-center justify-between mb-3">
             <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Dashboard View</span>
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          </div>
          <div className="flex bg-gray-50 p-1 rounded-lg mb-3">
            {(['Lawyer', 'Client', 'Admin'] as const).map((role, idx) => (
              <button 
                key={role}
                className={`flex-1 py-1.5 text-[10px] font-bold rounded-md transition-all ${idx === 1 ? 'bg-white shadow-sm text-[#002B5B]' : 'text-gray-400'}`}
              >
                {role}
              </button>
            ))}
          </div>
          <button className="w-full bg-[#002B5B] text-white py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 hover:opacity-90">
            View Dashboard
            <ArrowUpRight size={14} />
          </button>
        </motion.div>
      </div>

      {/* Left Column (Pushed Down) */}
      <div className="pt-12 space-y-6">
        {col1.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>

      {/* Right Column (Starts at Top) */}
      <div className="space-y-6">
        {col2.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default FeatureGrid;
