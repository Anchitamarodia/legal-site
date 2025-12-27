
import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useChat } from '../hooks/useChat';
import { useChatStore } from '../store/useChatStore';
import { cn } from '../utils/cn';

const AiAssistant: React.FC = () => {
  const { isAssistantOpen: isOpen, setAssistantOpen: setIsOpen } = useChatStore();
  const { messages, isLoading, sendMessage } = useChat();
  const [query, setQuery] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = () => {
    if (!query.trim() || isLoading) return;
    sendMessage(query);
    setQuery('');
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="bg-white w-[380px] h-[550px] rounded-[32px] shadow-2xl border border-gray-100 flex flex-col overflow-hidden mb-4"
          >
            {/* Header */}
            <div className="bg-[#002B5B] p-6 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="bg-white/10 p-2 rounded-xl">
                  <Bot size={22} />
                </div>
                <div>
                  <h4 className="font-black text-sm">Yugality AI</h4>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    <p className="text-[8px] text-white/60 uppercase font-black tracking-widest">Active Now</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-purple-500/20 px-2 py-1 rounded-lg border border-purple-500/30 flex items-center gap-1">
                   <Sparkles size={10} className="text-purple-300" />
                   <span className="text-[8px] font-black uppercase text-purple-100">GPT</span>
                </div>
                <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-lg transition-colors">
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Chat Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar bg-gray-50/30">
              {messages.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-50 px-6">
                  <Bot size={40} className="text-[#002B5B]" />
                  <div>
                    <p className="font-black text-[#002B5B] text-sm">Legal Assistant</p>
                    <p className="text-[10px] leading-relaxed">Ask anything about property law, notices, or filing complaints.</p>
                  </div>
                </div>
              )}
              {messages.map((m, i) => (
                <div key={i} className={cn("flex", m.role === 'user' ? 'justify-end' : 'justify-start')}>
                  <div className={cn(
                    "max-w-[85%] p-4 rounded-2xl text-[13px] leading-relaxed shadow-sm",
                    m.role === 'user' 
                      ? 'bg-[#002B5B] text-white rounded-tr-none' 
                      : 'bg-white text-gray-700 border border-gray-100 rounded-tl-none'
                  )}>
                    {m.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl border border-gray-100 rounded-tl-none flex gap-1 shadow-sm">
                    <span className="w-1 h-1 bg-[#002B5B] rounded-full animate-bounce"></span>
                    <span className="w-1 h-1 bg-[#002B5B] rounded-full animate-bounce delay-75"></span>
                    <span className="w-1 h-1 bg-[#002B5B] rounded-full animate-bounce delay-150"></span>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-5 border-t border-gray-100 bg-white">
              <div className="bg-gray-50 rounded-2xl p-2 flex items-center gap-2 border border-gray-100">
                <input 
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your question..."
                  className="flex-1 bg-transparent border-none outline-none text-[13px] px-3 py-2"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading}
                  className="bg-[#002B5B] text-white p-2.5 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  <Send size={16} />
                </button>
              </div>
              <div className="mt-3 text-center">
                <a href="#ai-hub" onClick={() => setIsOpen(false)} className="text-[10px] font-black text-[#002B5B]/60 hover:text-[#002B5B] transition-colors uppercase tracking-wider">
                  Go to AI Hub
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#002B5B] text-white p-5 rounded-full shadow-[0_10px_40px_rgba(0,43,91,0.3)] flex items-center justify-center relative group"
      >
        <Bot size={28} />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-4 border-white rounded-full"></span>
        {!isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute right-full mr-4 bg-white text-[#002B5B] px-4 py-2 rounded-xl text-[10px] font-black shadow-xl border border-gray-100 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase tracking-widest"
          >
            🤖 AI Assistant
          </motion.div>
        )}
      </motion.button>
    </div>
  );
};

export default AiAssistant;
