
import React from 'react';
import { Sparkles, Heart, Star } from 'lucide-react';
import FeatureGrid from './FeatureGrid';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-20 pb-32">
      <div className="flex flex-col lg:flex-row items-start gap-20">
        {/* Left Side: Content */}
        <div className="flex-1 lg:max-w-[550px]">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 bg-[#F7941D]/10 text-[#F7941D] px-4 py-1.5 rounded-full mb-8"
          >
            <Sparkles size={16} />
            <span className="text-xs font-black uppercase tracking-wider">Easy to Use!</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[72px] font-black text-[#002B5B] leading-[1.05] tracking-tight mb-8"
          >
            Need Legal Help? We Make It Easy!
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg leading-relaxed mb-10 pr-10"
          >
            Yugality brings legal services to your fingertips. Manage documents, schedule consultations, and analyze cases with our industry-leading platform.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <button className="bg-[#002B5B] text-white px-8 py-4 rounded-full font-black text-sm flex items-center gap-2 hover:shadow-xl transition-all hover:scale-105 active:scale-95">
              <Heart size={18} fill="currentColor" />
              Start Here
            </button>
            <button className="bg-white text-[#002B5B] border border-gray-200 px-8 py-4 rounded-full font-black text-sm flex items-center gap-2 hover:bg-gray-50 transition-all shadow-sm">
              <Star size={18} />
              Watch Demo
            </button>
          </motion.div>

          {/* Social Proof */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-4"
          >
            <div className="flex -space-x-3">
              {[
                { n: '1', c: 'bg-[#002B5B]' },
                { n: '2', c: 'bg-[#F7941D]' },
                { n: '3', c: 'bg-[#006837]' },
                { n: '4', c: 'bg-slate-400' }
              ].map((circle) => (
                <div 
                  key={circle.n} 
                  className={`${circle.c} w-10 h-10 rounded-full border-4 border-white flex items-center justify-center text-white text-[10px] font-black`}
                >
                  {circle.n}
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black text-[#002B5B]">1000+ Happy Users</span>
              <div className="flex text-yellow-400">
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Feature Grid */}
        <div className="flex-1 w-full">
          <FeatureGrid />
        </div>
      </div>
    </section>
  );
};

export default Hero;
