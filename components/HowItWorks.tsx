
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { n: '1', title: 'Upload Case', color: 'bg-[#002B5B]', desc: 'Securely upload your legal documents to our platform.' },
  { n: '2', title: 'AI Analysis', color: 'bg-[#F7941D]', desc: 'Our AI identifies key points and potential legal avenues.' },
  { n: '3', title: 'Consultation', color: 'bg-[#006837]', desc: 'Book a meeting with top lawyers based on your results.' }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-white py-24 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-[#002B5B] mb-4">How It Works</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Three simple steps to resolve your legal concerns efficiently.</p>
        </div>

        <div className="relative flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-10 left-0 w-full h-[2px] bg-dashed-line z-0">
             <div className="w-full h-full border-t-2 border-dashed border-gray-200"></div>
          </div>

          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative z-10 flex flex-col items-center text-center max-w-[280px] mx-auto"
            >
              <div className={`${step.color} w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-black shadow-xl mb-8 border-8 border-white`}>
                {step.n}
              </div>
              <h3 className="text-xl font-black text-[#002B5B] mb-4">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
