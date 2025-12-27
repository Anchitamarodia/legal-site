
import { useCallback } from 'react';
import { useChatStore } from '../store/useChatStore';
import { geminiService } from '../services/geminiService';

export const useChat = () => {
  const { messages, isLoading, addMessage, setLoading } = useChatStore();

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;

    addMessage('user', content);
    setLoading(true);

    try {
      const response = await geminiService.askLegalQuestion(content);
      addMessage('bot', response);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred.";
      addMessage('bot', `⚠️ Error: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  }, [addMessage, setLoading]);

  return {
    messages,
    isLoading,
    sendMessage,
  };
};
