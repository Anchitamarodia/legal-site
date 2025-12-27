
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, Send, Sparkles, MessageSquare, History, 
  Copy, Share2, Upload, Search, ChevronRight,
  ShieldCheck, FileText, Bookmark, Info, Scale,
  BookOpen, Gavel, Download, AlertTriangle, FileCheck,
  FileSpreadsheet, PenTool
} from 'lucide-react';
import { useChat } from '../hooks/useChat';
import { cn } from '../utils/cn';

const QUICK_PROMPTS = [
  "Analyze contract terms for risks",
  "Research similar case precedents",
  "Draft a legal notice",
  "Summarize case documents",
  "Check compliance requirements",
  "Review evidence strength"
];

const RECENT_CHATS = [
  { id: 1, title: "Contract Risk Analysis - Kumar Case", category: "Analysis", snippet: "The agreement contains several clauses that may...", time: "2 hours ago" },
  { id: 2, title: "Property Law Research", category: "Research", snippet: "Based on the Indian Property Law, Section 54...", time: "Yesterday" },
  { id: 3, title: "Evidence Summary Generation", category: "Summary", snippet: "The following evidence supports the plaintiff's cla...", time: "2 days ago" }
];

const RESEARCH_RESULTS = [
  {
    id: 1,
    title: "Relevant Case Law: XYZ vs ABC (2023)",
    description: "Supreme Court ruling on similar contract disputes...",
    action: "View Full Case"
  },
  {
    id: 2,
    title: "Statutory Reference: Contract Act 1872",
    description: "Section 73 deals with compensation for loss...",
    action: "View Section"
  }
];

const TEMPLATES = [
  { id: 1, name: 'Legal Notice' },
  { id: 2, name: 'Contract Draft' },
  { id: 3, name: 'Power of Attorney' },
  { id: 4, name: 'Affidavit' },
  { id: 5, name: 'Petition Template' },
  { id: 6, name: 'Settlement Agreement' },
  { id: 7, name: 'Non-Disclosure Agreement' },
  { id: 8, name: 'Employment Contract' },
  { id: 9, name: 'Lease Agreement' },
];

const AiAssistantPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('AI Chat');
  const [query, setQuery] = useState('');
  const [analysisType, setAnalysisType] = useState('Contract Review');
  const { messages, isLoading, sendMessage } = useChat();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading, activeTab]);

  const handleSend = (text?: string) => {
    const finalQuery = text || query;
    if (!finalQuery.trim() || isLoading) return;
    sendMessage(finalQuery);
    if (!text) setQuery('');
  };

  const handleGenerateTemplate = (templateName: string) => {
    setActiveTab('AI Chat');
    setTimeout(() => {
      handleSend(`I need to generate a ${templateName}. Please provide a standard draft and highlight key clauses I should customize.`);
    }, 100);
  };

  const renderChatView = () => (
    <>
      {/* Console Header */}
      <div className="p-6 border-b border-gray-50 flex items-center gap-4 bg-white sticky top-0 z-10">
        <div className="w-12 h-12 rounded-2xl bg-[#002B5B]/5 flex items-center justify-center text-[#002B5B]">
          <Bot size={28} />
        </div>
        <div>
          <h3 className="font-black text-[#002B5B] text-base">Legal AI Assistant</h3>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Online • GPT-4 Enhanced</span>
          </div>
        </div>
      </div>

      {/* Message Area */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-8 space-y-8 bg-[#FDFCF9]/30 no-scrollbar"
      >
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center max-w-md mx-auto text-center space-y-6">
            <div className="bg-[#002B5B] text-white p-6 rounded-3xl shadow-2xl">
              <Bot size={48} />
            </div>
            <div>
              <h4 className="text-xl font-black text-[#002B5B] mb-2">How can I assist you today?</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                I can help you with legal research, document analysis, case law summaries, and drafting legal documents.
              </p>
            </div>
          </div>
        )}

        {/* Default Welcome Message */}
        {messages.length === 0 && (
          <div className="flex justify-start">
            <div className="max-w-[85%] bg-white border border-gray-100 p-6 rounded-3xl rounded-tl-none shadow-sm space-y-4">
              <p className="text-sm text-gray-700 leading-relaxed">
                Hello! I'm your AI Legal Assistant. I can help you with legal research, document analysis, case law summaries, and drafting legal documents. How can I assist you today?
              </p>
              <div className="flex items-center justify-between pt-2">
                <span className="text-[10px] font-bold text-gray-300">10:30 AM</span>
                <div className="flex items-center gap-3 text-gray-400">
                  <button className="hover:text-[#002B5B] transition-colors"><Copy size={14} /></button>
                  <button className="hover:text-[#002B5B] transition-colors"><Share2 size={14} /></button>
                </div>
              </div>
            </div>
          </div>
        )}

        {messages.map((m, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            key={i} 
            className={cn("flex", m.role === 'user' ? 'justify-end' : 'justify-start')}
          >
            <div className={cn(
              "max-w-[85%] p-6 rounded-3xl text-sm leading-relaxed shadow-sm",
              m.role === 'user' 
                ? 'bg-[#002B5B] text-white rounded-tr-none' 
                : 'bg-white text-gray-700 border border-gray-100 rounded-tl-none'
            )}>
              {m.content}
              <div className={cn(
                "flex items-center justify-between mt-4 pt-2 border-t",
                m.role === 'user' ? 'border-white/10' : 'border-gray-50'
              )}>
                <span className={cn("text-[10px] font-bold", m.role === 'user' ? 'text-white/40' : 'text-gray-300')}>
                  {new Date(m.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
                {m.role === 'bot' && (
                  <div className="flex items-center gap-3 text-gray-400">
                    <button className="hover:text-[#002B5B] transition-colors"><Copy size={14} /></button>
                    <button className="hover:text-[#002B5B] transition-colors"><Share2 size={14} /></button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white p-4 rounded-2xl border border-gray-100 flex gap-2 items-center shadow-sm">
              <span className="w-2 h-2 bg-[#002B5B] rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-[#002B5B] rounded-full animate-bounce delay-75"></span>
              <span className="w-2 h-2 bg-[#002B5B] rounded-full animate-bounce delay-150"></span>
            </div>
          </div>
        )}
      </div>

      {/* Input Console */}
      <div className="p-8 border-t border-gray-50 bg-white">
        <div className="flex items-center gap-4">
          <div className="flex-1 relative flex items-center bg-gray-50/50 border border-gray-100 rounded-[24px] px-6 py-2 transition-all focus-within:border-[#002B5B] focus-within:bg-white focus-within:shadow-lg focus-within:shadow-[#002B5B]/5">
            <input 
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything about legal matters..."
              className="flex-1 bg-transparent border-none outline-none py-4 text-sm text-[#002B5B] placeholder:text-gray-400"
            />
            <button className="text-gray-400 hover:text-[#002B5B] transition-colors p-2">
              <Upload size={20} />
            </button>
          </div>
          <button 
            onClick={() => handleSend()}
            disabled={isLoading || !query.trim()}
            className="w-14 h-14 bg-[#002B5B] text-white rounded-[20px] flex items-center justify-center hover:opacity-90 transition-all disabled:opacity-50 shadow-lg shadow-[#002B5B]/10 active:scale-95"
          >
            <Send size={24} />
          </button>
        </div>
        <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
          <ShieldCheck size={12} className="text-green-500" />
          Encrypted & Secure Session
        </div>
      </div>
    </>
  );

  const renderResearchView = () => (
    <div className="p-10 h-full overflow-y-auto no-scrollbar">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column: Form */}
        <div className="space-y-8">
          <h3 className="text-2xl font-black text-[#002B5B]">Legal Research Assistant</h3>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Research Query</label>
              <textarea 
                placeholder="Enter your legal research question or topic..."
                className="w-full h-32 bg-white border border-gray-200 rounded-2xl p-4 text-sm outline-none focus:border-[#002B5B] transition-all resize-none placeholder:text-gray-300"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Jurisdiction</label>
              <input 
                type="text"
                placeholder="e.g., Delhi High Court, Supreme Court of India"
                className="w-full bg-white border border-gray-200 rounded-2xl p-4 text-sm outline-none focus:border-[#002B5B] transition-all placeholder:text-gray-300"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Practice Area</label>
              <input 
                type="text"
                placeholder="e.g., Corporate Law, Criminal Law, Family Law"
                className="w-full bg-white border border-gray-200 rounded-2xl p-4 text-sm outline-none focus:border-[#002B5B] transition-all placeholder:text-gray-300"
              />
            </div>

            <button className="w-full bg-[#002B5B] text-white py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-3 hover:opacity-90 transition-all shadow-lg shadow-[#002B5B]/10 active:scale-95">
              <Search size={18} />
              Start Research
            </button>
          </div>
        </div>

        {/* Right Column: Results */}
        <div className="space-y-8">
          <h4 className="text-lg font-black text-gray-300">Research Results</h4>
          
          <div className="space-y-4">
            {RESEARCH_RESULTS.map((res, i) => (
              <motion.div 
                key={res.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm group hover:border-[#002B5B]/20 transition-all"
              >
                <h5 className="font-black text-[#002B5B] mb-2">{res.title}</h5>
                <p className="text-xs text-gray-400 mb-5 leading-relaxed">{res.description}</p>
                <button className="text-[11px] font-black text-[#002B5B] uppercase tracking-widest flex items-center gap-1.5 hover:gap-2.5 transition-all group-hover:text-[#F7941D]">
                  {res.action}
                  <ChevronRight size={14} />
                </button>
              </motion.div>
            ))}
            
            <div className="pt-8 flex flex-col items-center justify-center text-center opacity-40">
              <BookOpen size={48} className="text-gray-300 mb-4" />
              <p className="text-xs font-bold text-gray-400 max-w-[200px]">New results will appear here as you search.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAnalysisView = () => (
    <div className="p-10 h-full overflow-y-auto no-scrollbar">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
        
        {/* Left Column: Upload & Options */}
        <div className="space-y-10">
          <h3 className="text-2xl font-black text-[#002B5B]">Document Analysis</h3>
          
          {/* Large Upload Zone */}
          <div className="border-2 border-dashed border-gray-200 rounded-[32px] p-20 flex flex-col items-center justify-center text-center bg-[#F9FAFB] group hover:border-[#002B5B]/30 hover:bg-white transition-all cursor-pointer relative overflow-hidden">
             <div className="bg-white p-6 rounded-2xl shadow-sm mb-6 group-hover:scale-110 transition-transform relative z-10 border border-gray-100">
               <Upload className="text-gray-400" size={32} />
             </div>
             <p className="text-sm font-bold text-gray-400 mb-8 relative z-10">Upload documents for AI analysis</p>
             <button className="bg-white border border-gray-200 px-10 py-3.5 rounded-xl text-[11px] font-black uppercase tracking-widest text-[#002B5B] hover:bg-gray-50 transition-all shadow-sm relative z-10">
               Choose Files
             </button>
             {/* Decorative background element */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/20 blur-[60px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
          </div>

          {/* Analysis Type Toggle Grid */}
          <div className="space-y-6">
            <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Analysis Type</label>
            <div className="grid grid-cols-2 gap-4">
              {['Contract Review', 'Risk Analysis', 'Compliance Check', 'Summary Generation'].map((type) => (
                <button 
                  key={type}
                  onClick={() => setAnalysisType(type)}
                  className={cn(
                    "py-4 px-6 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all text-center border",
                    analysisType === type 
                      ? "bg-[#002B5B] text-white border-[#002B5B] shadow-lg shadow-[#002B5B]/10" 
                      : "bg-white border-gray-100 text-gray-400 hover:border-gray-200 hover:text-gray-600"
                  )}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Analysis Results Panel */}
        <div className="space-y-8">
          <h4 className="text-lg font-black text-gray-300">Analysis Results</h4>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-[#F9FAFB] rounded-[32px] p-8 border border-gray-100 space-y-8"
          >
             {/* Metrics List */}
             <div className="space-y-6">
               <div className="flex items-center justify-between">
                 <div className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#002B5B]"></div>
                   <span className="text-[11px] font-black text-gray-500 uppercase tracking-widest">Risk Score</span>
                 </div>
                 <span className="bg-white text-gray-600 px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-tighter border border-gray-100">
                    Medium Risk
                 </span>
               </div>
               
               <div className="flex items-center justify-between">
                 <div className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#002B5B]"></div>
                   <span className="text-[11px] font-black text-gray-500 uppercase tracking-widest">Key Issues Found</span>
                 </div>
                 <span className="text-sm font-black text-[#002B5B]">3</span>
               </div>

               <div className="flex items-center justify-between">
                 <div className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#002B5B]"></div>
                   <span className="text-[11px] font-black text-gray-500 uppercase tracking-widest">Recommendations</span>
                 </div>
                 <span className="text-sm font-black text-[#002B5B]">5</span>
               </div>
             </div>

             {/* Footer Action */}
             <button className="w-full bg-[#002B5B] text-white py-4.5 rounded-2xl font-black text-[11px] uppercase tracking-widest flex items-center gap-3 justify-center hover:opacity-95 transition-all shadow-lg shadow-[#002B5B]/10 active:scale-[0.98]">
               <Download size={16} />
               Download Report
             </button>

             {/* Security Note */}
             <div className="flex items-center gap-2 pt-4 border-t border-gray-100/50 text-[9px] text-gray-400 font-bold uppercase tracking-widest justify-center">
               <ShieldCheck size={12} className="text-green-500" />
               Confidential & AES-256 Encrypted
             </div>
          </motion.div>

          {/* Quick Context Tip */}
          <div className="p-6 bg-white border border-gray-100 rounded-[32px] flex gap-4">
             <div className="bg-blue-50 text-blue-500 p-2.5 rounded-xl h-fit">
               <Info size={16} />
             </div>
             <p className="text-[10px] font-bold text-gray-400 leading-relaxed uppercase tracking-wider">
               Results are generated based on currently uploaded documents and selected jurisdiction parameters.
             </p>
          </div>
        </div>

      </div>
    </div>
  );

  const renderTemplatesView = () => (
    <div className="p-10 h-full overflow-y-auto no-scrollbar">
      <div className="mb-10">
        <h3 className="text-2xl font-black text-[#002B5B]">Legal Document Templates</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TEMPLATES.map((template, i) => (
          <motion.div
            key={template.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -5 }}
            className="bg-white border border-gray-100 rounded-[32px] p-10 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-lg transition-all"
          >
            <div className="bg-gray-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 text-[#002B5B]">
              <FileText size={40} />
            </div>
            
            <h4 className="text-lg font-black text-[#002B5B] mb-2">{template.name}</h4>
            <p className="text-[11px] font-bold text-gray-300 uppercase tracking-[0.2em] mb-8">
              AI-generated template
            </p>
            
            <button 
              onClick={() => handleGenerateTemplate(template.name)}
              className="bg-white border border-gray-200 px-8 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest text-[#002B5B] hover:bg-gray-50 transition-all shadow-sm active:scale-95"
            >
              Generate
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="ai-assistant-page" className="py-12 md:py-20 min-h-[calc(100vh-80px)] bg-[#FDFCF9]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div>
            <h2 className="text-5xl font-black text-[#002B5B] mb-3 tracking-tight">AI Legal Assistant</h2>
            <p className="text-gray-400 font-medium text-lg">Advanced GPT-4 powered legal research and analysis</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="bg-[#002B5B] text-white px-5 py-2.5 rounded-xl flex items-center gap-2 text-xs font-black shadow-lg shadow-[#002B5B]/10">
              <Sparkles size={16} />
              GPT-4 Enhanced
            </div>
            <button className="bg-white border border-gray-100 text-gray-500 px-6 py-2.5 rounded-xl font-black text-xs flex items-center gap-2 hover:bg-gray-50 transition-all shadow-sm">
              <History size={18} />
              Chat History
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-start mb-12">
          <div className="bg-gray-100/60 p-1.5 rounded-2xl flex items-center gap-1 border border-gray-200/50">
            {['AI Chat', 'Legal Research', 'Document Analysis', 'Legal Templates'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-8 py-3 rounded-xl text-xs font-black transition-all whitespace-nowrap",
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

        {/* Main Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8">
          
          {/* Main Console Box */}
          <div className="flex flex-col h-[700px] bg-white rounded-[40px] border border-gray-100 overflow-hidden shadow-sm relative">
            <AnimatePresence mode="wait">
              {activeTab === 'AI Chat' ? (
                <motion.div 
                  key="chat"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col h-full"
                >
                  {renderChatView()}
                </motion.div>
              ) : activeTab === 'Legal Research' ? (
                <motion.div 
                  key="research"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col h-full"
                >
                  {renderResearchView()}
                </motion.div>
              ) : activeTab === 'Document Analysis' ? (
                <motion.div 
                  key="analysis"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col h-full"
                >
                  {renderAnalysisView()}
                </motion.div>
              ) : activeTab === 'Legal Templates' ? (
                <motion.div 
                  key="templates"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col h-full"
                >
                  {renderTemplatesView()}
                </motion.div>
              ) : (
                <motion.div 
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col h-full items-center justify-center text-center p-20"
                >
                  <Scale size={64} className="text-gray-100 mb-6" />
                  <h3 className="text-2xl font-black text-[#002B5B] mb-2">{activeTab}</h3>
                  <p className="text-gray-400">This specialized tool is currently being optimized for the latest legal frameworks.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            
            {/* Quick Prompts */}
            <div className="bg-white rounded-[32px] border border-gray-100 p-8 shadow-sm">
              <h4 className="text-lg font-black text-[#002B5B] mb-6">Quick Prompts</h4>
              <div className="space-y-3">
                {QUICK_PROMPTS.map((prompt) => (
                  <button 
                    key={prompt}
                    onClick={() => {
                      setActiveTab('AI Chat');
                      setTimeout(() => handleSend(prompt), 100);
                    }}
                    className="w-full text-left p-4 rounded-2xl bg-gray-50/50 border border-transparent hover:border-[#002B5B]/20 hover:bg-[#002B5B]/5 hover:text-[#002B5B] transition-all text-sm font-medium text-gray-500 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="line-clamp-1">{prompt}</span>
                      <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Chats */}
            <div className="bg-white rounded-[32px] border border-gray-100 p-8 shadow-sm">
              <h4 className="text-lg font-black text-[#002B5B] mb-6">Recent Chats</h4>
              <div className="space-y-6">
                {RECENT_CHATS.map((chat) => (
                  <div key={chat.id} className="group cursor-pointer">
                    <div className="flex items-start justify-between mb-2">
                      <h5 className="text-[13px] font-black text-[#002B5B] group-hover:text-[#F7941D] transition-colors truncate pr-4">
                        {chat.title}
                      </h5>
                      <span className={cn(
                        "px-2 py-0.5 rounded-md text-[8px] font-black uppercase tracking-tighter",
                        chat.category === 'Analysis' ? 'bg-blue-50 text-blue-600' : 
                        chat.category === 'Research' ? 'bg-purple-50 text-purple-600' : 
                        'bg-green-50 text-green-600'
                      )}>
                        {chat.category}
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-400 line-clamp-1 mb-2">
                      {chat.snippet}
                    </p>
                    <span className="text-[10px] font-bold text-gray-300">
                      {chat.time}
                    </span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-8 py-3 border border-gray-100 rounded-xl text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-[#002B5B] hover:border-[#002B5B] transition-all">
                View All History
              </button>
            </div>

            {/* Pro Tip */}
            <div className="p-6 bg-[#002B5B] rounded-[32px] text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                <Info size={100} />
              </div>
              <h5 className="text-sm font-black mb-2 relative z-10">Pro Tip</h5>
              <p className="text-white/60 text-[11px] leading-relaxed relative z-10">
                You can upload PDF files directly to the chat to get instant summaries and risk assessments for complex legal documents.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AiAssistantPage;
