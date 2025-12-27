
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, SlidersHorizontal, Eye, 
  Download, Share2, Trash2, Plus, File, 
  CheckCircle2, Clock, Upload, Scan, Folder, Mail,
  ChevronRight, AlertCircle, FileSearch
} from 'lucide-react';
import { cn } from '../utils/cn';

interface Document {
  id: string;
  name: string;
  category: string;
  size: string;
  caseId: string;
  date: string;
  status: 'OCR Processed' | 'Analyzed' | 'Processing';
  tags: string[];
}

const DOCUMENTS: Document[] = [
  {
    id: '1',
    name: 'Property Deed - Kumar Case.pdf',
    category: 'Legal Document',
    size: '2.4 MB',
    caseId: 'CS-2024-001',
    date: '2024-01-10',
    status: 'OCR Processed',
    tags: ['Property', 'Deed']
  },
  {
    id: '2',
    name: 'Rental Agreement - Sharma.pdf',
    category: 'Contract',
    size: '1.2 MB',
    caseId: 'CS-2024-045',
    date: '2024-02-15',
    status: 'Analyzed',
    tags: ['Contract', 'Residential']
  },
  {
    id: '3',
    name: 'Evidence - Scene Photos.zip',
    category: 'Evidence',
    size: '15.8 MB',
    caseId: 'CS-2024-012',
    date: '2024-03-01',
    status: 'Processing',
    tags: ['Criminal', 'Evidence']
  },
  {
    id: '4',
    name: 'Affidavit of Support.docx',
    category: 'Affidavit',
    size: '850 KB',
    caseId: 'CS-2024-089',
    date: '2024-03-12',
    status: 'OCR Processed',
    tags: ['Family', 'Affidavit']
  }
];

const DocumentVault: React.FC = () => {
  const [activeTab, setActiveTab] = useState('OCR Analysis');
  const [searchQuery, setSearchQuery] = useState('');

  const renderAllDocuments = () => (
    <div className="space-y-4">
      <div className="flex flex-col lg:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="Search documents by name, case ID, or content..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-[20px] pl-14 pr-6 py-5 text-sm outline-none focus:ring-2 focus:ring-[#002B5B]/5 focus:border-[#002B5B] transition-all shadow-sm"
          />
        </div>
        <div className="flex gap-3">
          {['All Cases', 'This Week', 'High Priority'].map((filter) => (
            <button 
              key={filter}
              className="bg-white border border-gray-200 rounded-[20px] px-6 py-5 text-xs font-bold text-gray-500 hover:border-[#002B5B] hover:text-[#002B5B] transition-all shadow-sm flex items-center gap-2 whitespace-nowrap"
            >
              {filter === 'High Priority' && <span className="w-2 h-2 rounded-full bg-red-500"></span>}
              {filter}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode='popLayout'>
        {DOCUMENTS.map((doc, idx) => (
          <motion.div
            key={doc.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ boxShadow: "0 10px 30px rgba(0,0,0,0.04)" }}
            className="bg-white rounded-[20px] border border-gray-200 p-6 flex flex-col md:flex-row items-center gap-6 group transition-all"
          >
            <div className="bg-gray-100 p-4 rounded-2xl flex-shrink-0">
              <File size={32} className="text-gray-400" />
            </div>

            <div className="flex-1 min-w-0 text-center md:text-left">
              <h4 className="text-lg font-black text-[#002B5B] mb-2 truncate group-hover:text-[#F7941D] transition-colors">
                {doc.name}
              </h4>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2 mb-4">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{doc.category}</span>
                <span className="text-gray-200 hidden md:inline">•</span>
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{doc.size}</span>
                <span className="text-gray-200 hidden md:inline">•</span>
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Case: {doc.caseId}</span>
                <span className="text-gray-200 hidden md:inline">•</span>
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{doc.date}</span>
              </div>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <span className={cn(
                  "px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter flex items-center gap-1.5",
                  doc.status === 'Processing' 
                    ? "bg-gray-100 text-gray-500" 
                    : "bg-[#002B5B] text-white"
                )}>
                  {doc.status === 'OCR Processed' && <CheckCircle2 size={10} />}
                  {doc.status === 'Processing' && <Clock size={10} className="animate-spin" />}
                  {doc.status}
                </span>
                
                {doc.tags.map(tag => (
                  <span key={tag} className="bg-gray-50 border border-gray-100 text-gray-400 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              {[
                { icon: <Eye size={18} />, label: 'View', color: 'hover:text-blue-500' },
                { icon: <Download size={18} />, label: 'Download', color: 'hover:text-green-500' },
                { icon: <Share2 size={18} />, label: 'Share', color: 'hover:text-[#F7941D]' },
                { icon: <Trash2 size={18} />, label: 'Delete', color: 'hover:text-red-500' }
              ].map((action, i) => (
                <button 
                  key={i}
                  title={action.label}
                  className={cn(
                    "w-11 h-11 rounded-xl border border-gray-100 flex items-center justify-center text-gray-400 transition-all hover:border-current hover:bg-gray-50",
                    action.color
                  )}
                >
                  {action.icon}
                </button>
              ))}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
      
      <div className="mt-12 flex justify-center pb-12">
        <button 
          onClick={() => setActiveTab('Upload Documents')}
          className="bg-[#002B5B] text-white px-10 py-5 rounded-2xl font-black text-sm flex items-center gap-3 hover:shadow-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#002B5B]/20"
        >
          <Plus size={20} />
          Upload New Documents
        </button>
      </div>
    </div>
  );

  const renderUploadDocuments = () => (
    <div className="space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-[32px] border border-gray-100 py-20 flex flex-col items-center justify-center text-center shadow-sm"
      >
        <div className="bg-[#002B5B]/5 w-24 h-24 rounded-full flex items-center justify-center mb-8">
          <Upload size={40} className="text-[#002B5B]" />
        </div>
        <h3 className="text-2xl font-black text-[#002B5B] mb-3">Upload Documents</h3>
        <p className="text-gray-400 text-sm mb-10 max-w-md mx-auto leading-relaxed">
          Drag & drop files here or click to select. Supports PDF, DOC, DOCX, images
        </p>
        <button className="bg-[#001D3D] text-white px-10 py-4 rounded-xl font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-[#002B5B] transition-all shadow-lg shadow-[#001D3D]/10">
          <Upload size={16} />
          Choose Files
        </button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-[32px] border border-gray-100 p-10 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all group"
        >
          <div className="text-[#F7941D] mb-6 p-4 rounded-2xl bg-[#F7941D]/5 group-hover:scale-110 transition-transform">
            <Scan size={32} />
          </div>
          <h4 className="text-lg font-black text-[#002B5B] mb-3">Scan Document</h4>
          <p className="text-gray-400 text-[13px] mb-8 leading-relaxed">Use camera to scan paper documents</p>
          <button className="w-full bg-white border border-gray-200 text-[#002B5B] py-3.5 rounded-xl font-black text-[11px] uppercase tracking-widest hover:bg-gray-50 transition-all">
            Start Scan
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-[32px] border border-gray-100 p-10 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all group"
        >
          <div className="text-[#F7941D] mb-6 p-4 rounded-2xl bg-[#F7941D]/5 group-hover:scale-110 transition-transform">
            <Folder size={32} />
          </div>
          <h4 className="text-lg font-black text-[#002B5B] mb-3">Bulk Upload</h4>
          <p className="text-gray-400 text-[13px] mb-8 leading-relaxed">Upload multiple files at once</p>
          <button className="w-full bg-white border border-gray-200 text-[#002B5B] py-3.5 rounded-xl font-black text-[11px] uppercase tracking-widest hover:bg-gray-50 transition-all">
            Select Folder
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-[32px] border border-gray-100 p-10 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all group"
        >
          <div className="text-green-500 mb-6 p-4 rounded-2xl bg-green-50 group-hover:scale-110 transition-transform">
            <Share2 size={32} />
          </div>
          <h4 className="text-lg font-black text-[#002B5B] mb-3">Import from Email</h4>
          <p className="text-gray-400 text-[13px] mb-8 leading-relaxed">Import attachments from email</p>
          <button className="w-full bg-white border border-gray-200 text-[#002B5B] py-3.5 rounded-xl font-black text-[11px] uppercase tracking-widest hover:bg-gray-50 transition-all">
            Connect Email
          </button>
        </motion.div>
      </div>
    </div>
  );

  const renderOCRAnalysis = () => (
    <div className="space-y-8">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-[32px] border border-gray-100 overflow-hidden shadow-sm"
      >
        {/* OCR Processing Queue Section */}
        <div className="p-8 border-b border-gray-50">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-black text-gray-800 flex items-center gap-2">
              <FileSearch size={24} className="text-[#002B5B]" />
              OCR Processing Queue
            </h3>
            <div className="flex items-center gap-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">
              <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-yellow-400"></div> Processing</span>
              <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-green-500"></div> Completed</span>
            </div>
          </div>

          <div className="space-y-3">
            {/* Row 1: Processing */}
            <div className="flex items-center justify-between p-5 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 animate-pulse"></div>
                <span className="text-sm font-bold text-gray-700">Property Deed - Kumar Case.pdf</span>
              </div>
              <div className="bg-gray-100 text-gray-500 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                <Clock size={12} className="animate-spin" />
                Processing...
              </div>
            </div>

            {/* Row 2: Completed */}
            <div className="flex items-center justify-between p-5 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                <span className="text-sm font-bold text-gray-700">Corporate Agreement Draft.docx</span>
              </div>
              <div className="bg-[#002B5B] text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                <CheckCircle2 size={12} />
                Completed
              </div>
            </div>
          </div>
        </div>

        {/* Extracted Content Preview Section */}
        <div className="p-8 bg-[#FDFCF9]/50">
          <h3 className="text-xl font-black text-gray-800 mb-6">Extracted Content Preview</h3>
          
          <div className="bg-[#F9FAFB] border border-gray-200/50 rounded-2xl p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <FileSearch size={120} />
            </div>
            
            <p className="text-gray-600 text-base leading-relaxed italic mb-8 relative z-10 max-w-3xl">
              "This agreement is made between XYZ Corporation and ABC Limited for the provision of legal services. The parties hereby agree to the terms and conditions outlined in the subsequent sections of this contract, including but not limited to, the scope of work, fee structure, and confidentiality clauses as per the latest regulatory directives..."
            </p>
            
            <button className="inline-flex items-center gap-2 text-[#002B5B] font-black text-sm uppercase tracking-widest hover:gap-3 transition-all relative z-10">
              View Full Analysis
              <ChevronRight size={18} />
            </button>
          </div>
          
          <div className="mt-8 flex items-center gap-4 p-4 bg-blue-50/50 rounded-2xl border border-blue-100/50">
            <div className="bg-blue-500 text-white p-2 rounded-xl">
              <AlertCircle size={18} />
            </div>
            <p className="text-[11px] font-bold text-blue-800 leading-relaxed">
              AI Suggestion: We've identified 3 potential conflicting clauses in this document. Please review the 'Clause Analysis' section for detailed insights.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );

  return (
    <section id="docs" className="py-12 md:py-20 min-h-[calc(100vh-80px)] bg-[#FDFCF9]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header & Primary Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div>
            <h2 className="text-5xl font-black text-[#002B5B] mb-3 tracking-tight">Document Vault</h2>
            <p className="text-gray-400 font-medium text-lg">Secure document storage with OCR and AI analysis</p>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="bg-white border border-gray-100 text-[#002B5B] px-6 py-3 rounded-xl font-black text-xs flex items-center gap-3 hover:bg-gray-50 transition-all shadow-sm">
              <Search size={18} />
              Search
            </button>
            <button className="bg-white border border-gray-100 text-[#002B5B] px-6 py-3 rounded-xl font-black text-xs flex items-center gap-3 hover:bg-gray-50 transition-all shadow-sm">
              <SlidersHorizontal size={18} />
              Filter
            </button>
          </div>
        </div>

        {/* Sub-Tabs */}
        <div className="flex justify-start mb-16">
          <div className="bg-gray-100/60 p-1.5 rounded-2xl flex items-center gap-1 border border-gray-200/50">
            {['All Documents', 'Upload Documents', 'OCR Analysis'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-8 py-3 rounded-xl text-xs font-black transition-all",
                  activeTab === tab 
                    ? "bg-white text-[#002B5B] shadow-lg shadow-gray-200/50" 
                    : "text-gray-400 hover:text-gray-600"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic View Content */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'All Documents' && renderAllDocuments()}
            {activeTab === 'Upload Documents' && renderUploadDocuments()}
            {activeTab === 'OCR Analysis' && renderOCRAnalysis()}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default DocumentVault;
