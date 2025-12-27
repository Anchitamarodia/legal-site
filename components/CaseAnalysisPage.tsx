
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, Upload, FileCheck, CheckCircle2, 
  ArrowRight, Key, Info, AlertTriangle, Scale
} from 'lucide-react';
import { cn } from '../utils/cn';

const CaseAnalysisPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState('Setup & Upload');

  const steps = [
    { label: 'Setup & Upload', icon: <Upload size={18} /> },
    { label: 'Analysis', icon: <Scale size={18} /> },
    { label: 'Results', icon: <FileCheck size={18} /> }
  ];

  return (
    <div className="py-12 bg-[#FDFCF9] min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-[#002B5B] mb-4">AI Case Analysis</h2>
          <p className="text-gray-400 font-medium">Upload case documents and get comprehensive legal analysis</p>
        </div>

        {/* Step Navigation */}
        <div className="flex bg-gray-100/60 p-1.5 rounded-2xl w-full mb-12 border border-gray-100">
          {steps.map((step) => (
            <button
              key={step.label}
              onClick={() => setActiveStep(step.label)}
              className={cn(
                "flex-1 flex items-center justify-center gap-3 py-3.5 rounded-xl text-xs font-black transition-all",
                activeStep === step.label ? "bg-white text-[#002B5B] shadow-sm" : "text-gray-400 hover:text-gray-600"
              )}
            >
              {step.icon}
              {step.label}
            </button>
          ))}
        </div>

        <div className="space-y-8">
          {/* API Configuration Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[32px] border border-gray-100 p-10 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-2">
              <Shield className="text-[#002B5B]" size={24} />
              <h3 className="text-xl font-black text-[#002B5B]">API Configuration</h3>
            </div>
            <p className="text-xs font-bold text-gray-400 mb-8">Enter your OpenAI API key to enable case analysis (stored locally)</p>
            
            <div className="flex flex-col gap-4">
              <input 
                type="password"
                placeholder="sk-..."
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-sm outline-none focus:border-[#002B5B] transition-all"
              />
              <button className="w-fit bg-white border border-gray-200 text-[#002B5B] px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-gray-50 transition-all shadow-sm">
                Save API Key
              </button>
            </div>
          </motion.div>

          {/* Document Upload Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-[32px] border border-gray-100 p-10 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-2">
              <Upload className="text-[#002B5B]" size={24} />
              <h3 className="text-xl font-black text-[#002B5B]">Document Upload</h3>
            </div>
            <p className="text-xs font-bold text-gray-400 mb-8">Upload case documents, contracts, or evidence files</p>
            
            <div className="border-2 border-dashed border-gray-100 rounded-2xl p-6 flex items-center justify-center bg-gray-50/50">
               <div className="flex items-center gap-4">
                 <button className="bg-white border border-gray-200 px-5 py-2 rounded-lg text-[10px] font-black text-[#002B5B] shadow-sm">
                   Choose Files
                 </button>
                 <span className="text-xs text-gray-400 font-bold">No file chosen</span>
               </div>
            </div>
          </motion.div>

          <div className="flex justify-end pt-8">
            <button className="bg-[#002B5B] text-white px-10 py-5 rounded-2xl font-black text-sm flex items-center gap-3 hover:opacity-90 transition-all shadow-lg shadow-[#002B5B]/10 active:scale-95">
              Start AI Analysis
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseAnalysisPage;
