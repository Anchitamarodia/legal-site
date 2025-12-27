
import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Sparkles, MessageSquare, Phone, Mail, User, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useChat } from '../hooks/useChat';
import { cn } from '../utils/cn';

const POPULAR_QUESTIONS = [
  'What is a legal notice?',
  'How to file a complaint?',
  'Property law basics',
  'Tenant rights',
  'Contract review'
];

const LegalAiHub: React.FC = () => {
  const { messages, isLoading, sendMessage } = useChat();
  const [query, setQuery] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = (text?: string) => {
    const messageToSend = text || query;
    if (!messageToSend.trim() || isLoading) return;
    sendMessage(messageToSend);
    if (!text) setQuery('');
  };

  return (
    <section id="ai-hub" className="py-24 bg-[#FDFCF9]">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
        {/* Top Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-gray-100 px-4 py-1.5 rounded-full mb-6 border border-gray-200"
        >
          <Bot size={14} className="text-gray-500" />
          <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">AI Hub</span>
        </motion.div>

        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-black text-[#002B5B] mb-3">🤖 Ask Legal Questions</h2>
          <p className="text-gray-400 font-medium">Get instant answers or connect with lawyers</p>
        </motion.div>

        {/* Main Chat Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="w-full bg-white rounded-[40px] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden"
        >
          {/* Card Header */}
          <div className="px-8 py-6 border-b border-gray-50 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-[#002B5B] p-3 rounded-2xl text-white shadow-lg">
                <Bot size={24} />
              </div>
              <div>
                <h3 className="font-black text-[#002B5B]">Yugality AI Assistant</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Online & Ready to Help</span>
                </div>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2 bg-purple-50 px-3 py-1.5 rounded-xl border border-purple-100">
              <Sparkles size={14} className="text-purple-500" />
              <span className="text-[10px] font-black text-purple-600 uppercase">GPT-Powered</span>
            </div>
          </div>

          {/* Popular Questions */}
          <div className="px-8 py-4 bg-gray-50/50 border-b border-gray-50">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Popular questions:</p>
            <div className="flex flex-wrap gap-2">
              {POPULAR_QUESTIONS.map((q) => (
                <button 
                  key={q}
                  onClick={() => handleSend(q)}
                  disabled={isLoading}
                  className="bg-white border border-gray-100 px-4 py-1.5 rounded-full text-xs font-bold text-gray-500 hover:border-[#002B5B] hover:text-[#002B5B] transition-all disabled:opacity-50"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Interface */}
          <div 
            ref={scrollRef}
            className="h-[400px] overflow-y-auto p-8 space-y-6 bg-gray-50/30 no-scrollbar"
          >
            {messages.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center opacity-30">
                <MessageSquare size={48} className="mb-4 text-[#002B5B]" />
                <p className="font-black uppercase tracking-widest text-[10px]">No messages yet</p>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={cn("flex items-start gap-3", m.role === 'user' ? 'flex-row-reverse' : 'flex-row')}>
                <div className={cn("flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center", 
                  m.role === 'user' ? 'bg-[#F7941D]' : 'bg-gray-200'
                )}>
                  {m.role === 'user' ? <User size={16} className="text-white" /> : <Bot size={16} className="text-gray-500" />}
                </div>
                <div className={cn("max-w-[80%] p-5 rounded-3xl text-sm leading-relaxed shadow-sm", 
                  m.role === 'user' 
                    ? 'bg-[#002B5B] text-white rounded-tr-none' 
                    : 'bg-white text-gray-700 border border-gray-100 rounded-tl-none'
                )}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <Bot size={16} className="text-gray-500" />
                </div>
                <div className="bg-white p-4 rounded-2xl border border-gray-100 flex gap-1 shadow-sm">
                  <span className="w-1.5 h-1.5 bg-[#002B5B] rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-[#002B5B] rounded-full animate-bounce delay-75"></span>
                  <span className="w-1.5 h-1.5 bg-[#002B5B] rounded-full animate-bounce delay-150"></span>
                </div>
              </div>
            )}
          </div>

          {/* Input Field */}
          <div className="px-8 py-6 border-t border-gray-50">
            <div className="flex items-center gap-3">
              <div className="flex-1 relative">
                <input 
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask any legal question..."
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-sm outline-none focus:border-[#002B5B] transition-colors"
                />
              </div>
              <button 
                onClick={() => handleSend()}
                disabled={isLoading}
                className="bg-[#002B5B] text-white px-8 py-4 rounded-2xl font-black text-sm flex items-center gap-2 hover:opacity-90 transition-all disabled:opacity-50 shadow-lg shadow-[#002B5B]/10"
              >
                Ask
                <Send size={16} />
              </button>
            </div>
          </div>

          {/* Footer Section */}
          <div className="px-8 py-8 bg-[#FDFCF9] border-t border-gray-100 flex flex-col items-center gap-6">
            <p className="text-sm font-bold text-gray-400">Need personalized legal assistance?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="flex items-center gap-2 bg-white border border-gray-200 px-6 py-3 rounded-2xl text-xs font-black text-[#002B5B] hover:border-[#002B5B] transition-all">
                <MessageSquare size={16} />
                Chat with Lawyer
              </button>
              <button className="flex items-center gap-2 bg-white border border-gray-200 px-6 py-3 rounded-2xl text-xs font-black text-[#002B5B] hover:border-[#002B5B] transition-all">
                <Phone size={16} />
                Schedule Call
              </button>
              <button className="flex items-center gap-2 bg-white border border-gray-200 px-6 py-3 rounded-2xl text-xs font-black text-[#002B5B] hover:border-[#002B5B] transition-all">
                <Mail size={16} />
                Send Email
              </button>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold">
              <AlertCircle size={12} />
              AI responses should be verified by a professional.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LegalAiHub;
