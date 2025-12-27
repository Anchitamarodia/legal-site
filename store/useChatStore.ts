
import { create } from 'zustand';
import { ChatMessage } from '../types';

interface ChatState {
  messages: ChatMessage[];
  isLoading: boolean;
  isAssistantOpen: boolean;
  addMessage: (role: 'user' | 'bot', content: string) => void;
  setLoading: (loading: boolean) => void;
  setAssistantOpen: (open: boolean) => void;
  clearHistory: () => void;
}

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  isLoading: false,
  isAssistantOpen: false,
  addMessage: (role, content) => set((state) => ({
    messages: [...state.messages, { role, content, timestamp: Date.now() }]
  })),
  setLoading: (loading) => set({ isLoading: loading }),
  setAssistantOpen: (open) => set({ isAssistantOpen: open }),
  clearHistory: () => set({ messages: [] }),
}));
