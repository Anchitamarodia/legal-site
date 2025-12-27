
import React from 'react';
import { 
  FileText, Calendar, Bot, Users, Search, 
  BarChart3, CreditCard, Share2, Sparkles, 
  Heart, Star, ArrowRight, MessageSquare, 
  Clock, ShieldCheck, Zap 
} from 'lucide-react';
import { NavItem, FeatureCard } from './types';

export const COLORS = {
  primary: '#002B5B', // Navy
  secondary: '#F7941D', // Orange
  success: '#006837', // Green
  background: '#FDFCF9', // Off-white
  slate: '#64748b',
  yellow: '#eab308'
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'docs', label: 'Documents', icon: <FileText size={18} /> },
  { id: 'calendar', label: 'Calendar', icon: <Calendar size={18} /> },
  { id: 'ai', label: 'AI Assistant', icon: <Bot size={18} /> },
  { id: 'consults', label: 'Consultations', icon: <Users size={18} /> },
  { id: 'research', label: 'Research', icon: <Search size={18} /> },
  { id: 'analysis', label: 'Case Analysis', icon: <BarChart3 size={18} /> },
  { id: 'billing', label: 'Billing', icon: <CreditCard size={18} /> },
  { id: 'referrals', label: 'Referrals', icon: <Share2 size={18} /> },
];

export const FEATURE_CARDS: FeatureCard[] = [
  { 
    id: 'papers', 
    title: 'My Papers', 
    icon: <FileText size={32} className="text-white" />, 
    bgColor: 'bg-slate-500',
    description: 'Keep all your legal documents organized and secure.'
  },
  { 
    id: 'dates', 
    title: 'Important Dates', 
    icon: <Clock size={32} className="text-white" />, 
    bgColor: 'bg-[#F7941D]',
    description: 'Never miss a court date or filing deadline again.'
  },
  { 
    id: 'ask', 
    title: 'Ask Questions', 
    icon: <MessageSquare size={32} className="text-white" />, 
    bgColor: 'bg-yellow-500',
    description: 'Get instant answers to basic legal questions via AI.'
  },
  { 
    id: 'help', 
    title: 'Get Help', 
    icon: <ShieldCheck size={32} className="text-white" />, 
    bgColor: 'bg-[#006837]',
    description: 'Connect with certified legal professionals instantly.'
  },
];
